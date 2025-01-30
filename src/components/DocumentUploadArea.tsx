import React, { useState, useRef } from 'react';
import { FileText, Upload, X, AlertCircle, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useLanguageStore } from '../lib/useTranslations';
import { ai } from '../lib/ai';
import { useAuthStore } from '../store/authStore';

interface DocumentUploadAreaProps {
  chatbotId: string;
  onUploadComplete: () => void;
}

export default function DocumentUploadArea({ chatbotId, onUploadComplete }: DocumentUploadAreaProps) {
  const { t } = useLanguageStore();
  const { user } = useAuthStore();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [processingFiles, setProcessingFiles] = useState<{
    [key: string]: {
      name: string;
      status: 'uploading' | 'processing' | 'completed' | 'error';
      error?: string;
    };
  }>({});

  const allowedTypes = [
    'application/pdf',
    'text/plain',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/msword',
    'application/vnd.ms-powerpoint'
  ];

  const handleFileUpload = async (files: FileList) => {
    if (!user) return;

    // Get AI config for document processing
    const config = await ai.getChatbotConfig(user.id);
    if (!config) {
      setError('AI configuration not found');
      return;
    }

    setError('');
    setUploading(true);

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileId = `${Date.now()}-${i}`;

        // Add file to processing state
        setProcessingFiles(prev => ({
          ...prev,
          [fileId]: {
            name: file.name,
            status: 'uploading'
          }
        }));

        // Validate file type
        if (!allowedTypes.includes(file.type)) {
          setProcessingFiles(prev => ({
            ...prev,
            [fileId]: {
              name: file.name,
              status: 'error',
              error: t.dashboard.invalidFileType
            }
          }));
          continue;
        }

        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
          setProcessingFiles(prev => ({
            ...prev,
            [fileId]: {
              name: file.name,
              status: 'error',
              error: t.dashboard.fileTooLarge
            }
          }));
          continue;
        }

        try {
          // Upload file to storage
          const fileExt = file.name.split('.').pop();
          const fileName = `${chatbotId}/${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${fileExt}`;

          const { error: uploadError } = await supabase.storage
            .from('documents')
            .upload(fileName, file);

          if (uploadError) throw uploadError;

          const { data: { publicUrl } } = supabase.storage
            .from('documents')
            .getPublicUrl(fileName);

          // Update status to processing
          setProcessingFiles(prev => ({
            ...prev,
            [fileId]: {
              name: file.name,
              status: 'processing'
            }
          }));

          // Create document record
          const { data: docData, error: docError } = await supabase
            .from('chatbot_documents')
            .insert([{
              chatbot_id: chatbotId,
              filename: file.name,
              file_type: file.type,
              file_url: publicUrl,
            }])
            .select()
            .single();

          if (docError) throw docError;

          // Process document for embeddings
          await ai.processDocument(chatbotId, docData.id, config);

          // Update status to completed
          setProcessingFiles(prev => ({
            ...prev,
            [fileId]: {
              name: file.name,
              status: 'completed'
            }
          }));
        } catch (err) {
          console.error('Error processing file:', file.name, err);
          setProcessingFiles(prev => ({
            ...prev,
            [fileId]: {
              name: file.name,
              status: 'error',
              error: t.common.error
            }
          }));
        }
      }

      onUploadComplete();
    } catch (err) {
      console.error('Error uploading documents:', err);
      setError(t.common.error);
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    await handleFileUpload(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  // Clear completed files after 3 seconds
  React.useEffect(() => {
    const completedFiles = Object.entries(processingFiles).filter(([_, file]) => 
      file.status === 'completed' || file.status === 'error'
    );

    if (completedFiles.length > 0) {
      const timer = setTimeout(() => {
        setProcessingFiles(prev => {
          const newState = { ...prev };
          completedFiles.forEach(([id]) => {
            delete newState[id];
          });
          return newState;
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [processingFiles]);

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-8 ${
          dragOver
            ? 'border-indigo-500 bg-indigo-50'
            : 'border-gray-300 hover:border-gray-400'
        } transition-colors cursor-pointer`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf,.txt,.docx,.pptx,.doc,.ppt"
          multiple
          onChange={(e) => {
            if (e.target.files) {
              handleFileUpload(e.target.files);
            }
          }}
        />

        <div className="flex flex-col items-center">
          <Upload className="h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-600 mb-2">
            {uploading ? (
              <span className="flex items-center gap-2">
                <Upload className="h-5 w-5 animate-bounce" />
                {t.common.uploading}
              </span>
            ) : (
              t.dashboard.dropFilesHere
            )}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            {t.dashboard.allowedFileTypes}
          </p>
          <button
            type="button"
            className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {t.dashboard.selectFile}
          </button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md">
          <AlertCircle className="h-5 w-5" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      {/* Processing Status */}
      {Object.entries(processingFiles).map(([id, file]) => (
        <div
          key={id}
          className={`flex items-center justify-between p-3 rounded-md ${
            file.status === 'error'
              ? 'bg-red-50 text-red-700'
              : file.status === 'completed'
              ? 'bg-green-50 text-green-700'
              : 'bg-yellow-50 text-yellow-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5" />
            <div>
              <p className="font-medium">{file.name}</p>
              {file.error && (
                <p className="text-sm text-red-600">{file.error}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {file.status === 'uploading' && (
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
            )}
            {file.status === 'processing' && (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                <span className="text-sm">Processing...</span>
              </>
            )}
            {file.status === 'completed' && (
              <Check className="h-5 w-5 text-green-600" />
            )}
            {file.status === 'error' && (
              <X className="h-5 w-5 text-red-600" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}