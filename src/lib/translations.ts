import { Language } from './types';

const translations = {
  de: {
    common: {
      loading: 'Wird geladen...',
      error: 'Ein Fehler ist aufgetreten',
      save: 'Speichern',
      cancel: 'Abbrechen',
      create: 'Erstellen',
      edit: 'Bearbeiten',
      delete: 'Löschen',
      share: 'Teilen',
      upload: 'Hochladen',
      send: 'Senden',
      select: 'Auswählen',
      search: 'Suchen',
      noResults: 'Keine Ergebnisse gefunden',
      backToGallery: 'Zurück zur Galerie',
      finish: 'Fertig',
      test: 'Testen',
      features: 'Funktionen',
      filter: 'Filter',
      all: 'Alle'
    },
    nav: {
      home: 'Startseite',
      teachers: 'Für Lehrende',
      gallery: 'Galerie',
      admin: 'Administration'
    },
    auth: {
      signIn: 'Anmelden',
      signOut: 'Abmelden',
      createAccount: 'Konto erstellen',
      email: 'E-Mail',
      password: 'Passwort',
      fullName: 'Vollständiger Name',
      alreadyHaveAccount: 'Bereits ein Konto?',
      dontHaveAccount: 'Noch kein Konto?'
    },
    profile: {
      editProfile: 'Profil bearbeiten',
      fullName: 'Vollständiger Name',
      institution: 'Institution',
      subjects: 'Fächer',
      educationLevels: 'Bildungsstufen'
    },
    tools: {
      enableTools: 'Tools aktivieren',
      documentQA: 'Dokumente-Wissen',
      documentQADesc: 'Integriert hochgeladene Dokumente in das Wissen des Chatbots',
      wloResources: 'WirLernenOnline-Materialien',
      wloResourcesDesc: 'Integriert ausgewählte WirLernenOnline-Materialien in den Chatbot',
      learningProgress: 'Lernfortschritt',
      learningProgressDesc: 'Verfolgt und analysiert den Lernfortschritt während der Konversation',
      outputControl: 'Ausgabekontrolle',
      outputControlDesc: 'Prüft die KI-Antworten auf Eignung für Bildungszwecke und Themenbezug'
    },
    chat: {
      greeting: 'Hallo! Ich bin',
      typeMessage: 'Nachricht eingeben...',
      suggestedTopics: 'Hier sind einige Vorschläge für den Einstieg:',
      useTools: 'Verwende /{tool} für Tools',
      toolUsed: 'Verwendetes Tool'
    },
    dashboard: {
      deleteConfirmation: 'Möchten Sie diesen Chatbot wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.',
      title: 'Lehrkräfte-Dashboard',
      newChatbot: 'Neuer Chatbot',
      myChatbots: 'Meine Chatbots',
      createChatbot: 'Chatbot erstellen',
      editChatbot: 'Chatbot bearbeiten',
      chatbotName: 'Name',
      chatbotDescription: 'Beschreibung',
      systemPrompt: 'System-Prompt',
      imageUrl: 'Bild-URL',
      selectImage: 'Bild auswählen',
      subject: 'Fachbereich',
      educationLevel: 'Bildungsstufe',
      allSubjects: 'Alle Fächer',
      allLevels: 'Alle Stufen',
      allTypes: 'Alle Materialtypen',
      documents: 'Dokumente',
      noDocuments: 'Noch keine Dokumente hochgeladen',
      uploadDocument: 'Dokument hochladen',
      invalidFileType: 'Nur PDF, TXT und DOCX Dateien sind erlaubt',
      fileTooLarge: 'Die Datei darf nicht größer als 10MB sein',
      aiSettings: 'KI-Einstellungen',
      setPassword: 'Passwort setzen',
      active: 'Aktiv',
      inactive: 'Inaktiv',
      publicInGallery: 'Öffentlich in der Galerie',
      notInGallery: 'Nicht in der Galerie',
      searchWLO: 'WirLernenOnline-Materialien durchsuchen...',
      noMaterialsFound: 'Keine Materialien gefunden',
      wloResources: 'WirLernenOnline-Materialien',
      dropFilesHere: 'Dateien hier ablegen oder klicken zum Auswählen',
      allowedFileTypes: 'Erlaubte Dateitypen: PDF, TXT, DOCX',
      selectFile: 'Datei auswählen',
      conversationStarters: 'Gesprächsstarter',
      conversationStartersHelp: 'Definieren Sie bis zu 4 Fragen oder Themen, die Nutzende zu Beginn auswählen können',
      conversationStarter: 'Gesprächsstarter'
    },
    welcome: {
      title: 'Willkommen bei WLO-Bot',
      subtitle: 'Gestalten Sie Ihren Unterricht mit KI-Chatbots, die perfekt auf Ihre pädagogischen Ziele abgestimmt sind.',
      forTeachers: 'Für Lehrkräfte',
      forTeachersDesc: 'Erstellen Sie maßgeschneiderte KI-Assistenten und integrieren Sie Ihre Lehrmaterialien für personalisierte Lernerfahrungen.',
      features: {
        customChatbots: 'Personalisierte Chatbots',
        customChatbotsDesc: 'Erstellen Sie KI-Assistenten, die perfekt auf Ihre Lehrinhalte abgestimmt sind',
        smartTools: 'Smarte Werkzeuge',
        smartToolsDesc: 'Nutzen Sie Websuche und Dokumentenanalyse für fundierte Antworten',
        resourceIntegration: 'Materialintegration',
        resourceIntegrationDesc: 'Binden Sie Ihre Lehrmaterialien nahtlos in die Chatbots ein'
      }
    },
    accessCode: {
      title: 'Willkommen bei WLO-Bot'
    },
    gallery: {
      title: 'Chatbot-Galerie',
      searchPlaceholder: 'Chatbots durchsuchen...',
      filters: 'Filter',
      directAccess: 'Direkter Zugang',
      subject: 'Fach',
      allSubjects: 'Alle Fächer',
      educationLevel: 'Bildungsstufe',
      allLevels: 'Alle Stufen',
      chatbotId: 'Chatbot-ID',
      enterChatbotId: 'Chatbot-ID eingeben',
      password: 'Passwort',
      optionalPassword: 'Optionales Passwort',
      access: 'Zugreifen',
      invalidId: 'Ungültige Chatbot-ID',
      invalidPassword: 'Ungültiges Passwort',
      inactiveChatbot: 'Dieser Chatbot ist nicht aktiv',
      noChatbotsFound: 'Keine Chatbots gefunden',
      tryAdjustingFilters: 'Versuchen Sie die Filter anzupassen oder suchen Sie nach etwas anderem',
      startChat: 'Chat starten',
      author: 'Autor',
      allAuthors: 'Alle Autoren',
      passwordRequired: 'Dieser Chatbot erfordert ein Passwort.',
      accessDenied: 'Zugriff verweigert. Dieser Chatbot ist nicht öffentlich verfügbar.'
    }
  },
  en: {
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      save: 'Save',
      cancel: 'Cancel',
      create: 'Create',
      edit: 'Edit',
      delete: 'Delete',
      share: 'Share',
      upload: 'Upload',
      send: 'Send',
      select: 'Select',
      search: 'Search',
      noResults: 'No results found',
      backToGallery: 'Back to Gallery',
      finish: 'Finish',
      test: 'Test',
      features: 'Features',
      filter: 'Filter',
      all: 'All'
    },
    nav: {
      home: 'Home',
      teachers: 'For Teachers',
      gallery: 'Gallery',
      admin: 'Admin'
    },
    auth: {
      signIn: 'Sign In',
      signOut: 'Sign Out',
      createAccount: 'Create Account',
      email: 'Email',
      password: 'Password',
      fullName: 'Full Name',
      alreadyHaveAccount: 'Already have an account?',
      dontHaveAccount: "Don't have an account?"
    },
    profile: {
      editProfile: 'Edit Profile',
      fullName: 'Full Name',
      institution: 'Institution',
      subjects: 'Subjects',
      educationLevels: 'Education Levels'
    },
    tools: {
      enableTools: 'Enable Tools',
      documentQA: 'Document Knowledge',
      documentQADesc: 'Integrates uploaded documents into the chatbot\'s knowledge',
      wloResources: 'WLO Materials',
      wloResourcesDesc: 'Integrates selected WirLernenOnline materials into the chatbot',
      learningProgress: 'Learning Progress',
      learningProgressDesc: 'Tracks and analyzes learning progress during conversation',
      outputControl: 'Output Control',
      outputControlDesc: 'Checks AI responses for educational suitability and topic relevance'
    },
    chat: {
      greeting: 'Hello! I am',
      typeMessage: 'Type a message...',
      suggestedTopics: 'Here are some suggestions to get started:',
      useTools: 'Use /{tool} for tools',
      toolUsed: 'Tool Used'
    },
    dashboard: {
      deleteConfirmation: 'Are you sure you want to delete this chatbot? This action cannot be undone.',
      title: 'Teacher Dashboard',
      newChatbot: 'New Chatbot',
      myChatbots: 'My Chatbots',
      createChatbot: 'Create Chatbot',
      editChatbot: 'Edit Chatbot',
      chatbotName: 'Name',
      chatbotDescription: 'Description',
      systemPrompt: 'System Prompt',
      imageUrl: 'Image URL',
      selectImage: 'Select Image',
      subject: 'Subject',
      educationLevel: 'Education Level',
      allSubjects: 'All Subjects',
      allLevels: 'All Levels',
      allTypes: 'All Material Types',
      documents: 'Documents',
      noDocuments: 'No documents uploaded yet',
      uploadDocument: 'Upload Document',
      invalidFileType: 'Only PDF, TXT and DOCX files are allowed',
      fileTooLarge: 'File size must be less than 10MB',
      aiSettings: 'AI Settings',
      setPassword: 'Set Password',
      active: 'Active',
      inactive: 'Inactive',
      publicInGallery: 'Public in Gallery',
      notInGallery: 'Not in Gallery',
      searchWLO: 'Search WirLernenOnline materials...',
      noMaterialsFound: 'No materials found',
      wloResources: 'WirLernenOnline Materials',
      dropFilesHere: 'Drop files here or click to select',
      allowedFileTypes: 'Allowed file types: PDF, TXT, DOCX',
      selectFile: 'Select File',
      conversationStarters: 'Conversation Starters',
      conversationStartersHelp: 'Define up to 4 questions or topics that users can select at the beginning',
      conversationStarter: 'Conversation Starter'
    },
    welcome: {
      title: 'Welcome to WLO-Bot',
      subtitle: 'Shape your teaching with AI chatbots perfectly aligned with your pedagogical goals.',
      forTeachers: 'For Teachers',
      forTeachersDesc: 'Create custom AI assistants and integrate your teaching materials for personalized learning experiences.',
      features: {
        customChatbots: 'Custom Chatbots',
        customChatbotsDesc: 'Create AI assistants perfectly tailored to your teaching content',
        smartTools: 'Smart Tools',
        smartToolsDesc: 'Use web search and document analysis for informed responses',
        resourceIntegration: 'Resource Integration',
        resourceIntegrationDesc: 'Seamlessly integrate your teaching materials into chatbots'
      }
    },
    accessCode: {
      title: 'Welcome to WLO-Bot'
    },
    gallery: {
      title: 'Chatbot Gallery',
      searchPlaceholder: 'Search chatbots...',
      filters: 'Filters',
      directAccess: 'Direct Access',
      subject: 'Subject',
      allSubjects: 'All Subjects',
      educationLevel: 'Education Level',
      allLevels: 'All Levels',
      chatbotId: 'Chatbot ID',
      enterChatbotId: 'Enter Chatbot ID',
      password: 'Password',
      optionalPassword: 'Optional Password',
      access: 'Access',
      invalidId: 'Invalid Chatbot ID',
      invalidPassword: 'Invalid Password',
      inactiveChatbot: 'This chatbot is not active',
      noChatbotsFound: 'No chatbots found',
      tryAdjustingFilters: 'Try adjusting the filters or searching for something else',
      startChat: 'Start Chat',
      author: 'Author',
      allAuthors: 'All Authors',
      passwordRequired: 'This chatbot requires a password.',
      accessDenied: 'Access denied. This chatbot is not publicly available.'
    }
  }
} as const;

export type TranslationType = typeof translations;
export type { Language };
export { translations };