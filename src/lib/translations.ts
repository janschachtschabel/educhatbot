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
      backToGallery: 'Zurück zur Galerie'
    },
    nav: {
      home: 'Startseite',
      teachers: 'Für Lehrende',
      gallery: 'Galerie',
    },
    auth: {
      signIn: 'Anmelden',
      signOut: 'Abmelden',
      createAccount: 'Konto erstellen',
      email: 'E-Mail',
      password: 'Passwort',
      fullName: 'Vollständiger Name',
      alreadyHaveAccount: 'Bereits ein Konto?',
      dontHaveAccount: 'Noch kein Konto?',
      emailInUse: 'Diese E-Mail-Adresse wird bereits verwendet',
      invalidCredentials: 'Ungültige Anmeldedaten',
    },
    profile: {
      editProfile: 'Profil bearbeiten',
      fullName: 'Vollständiger Name',
      authorNickname: 'Autoren-Nickname',
      authorNicknamePlaceholder: 'Ihr öffentlicher Name als Autor',
      authorNicknameHelp: 'Dieser Name wird bei Ihren veröffentlichten Chatbots angezeigt',
      bio: 'Über mich',
      institution: 'Institution',
      website: 'Website',
      subjects: 'Fächer',
      educationLevels: 'Bildungsstufen',
      socialLinks: 'Social Media Links',
    },
    dashboard: {
      title: 'Lehrkräfte-Dashboard',
      newChatbot: 'Neuer Chatbot',
      myChatbots: 'Meine Chatbots',
      activeSessions: 'Aktive Sitzungen',
      totalInteractions: 'Gesamte Interaktionen',
      createChatbot: 'Chatbot erstellen',
      editChatbot: 'Chatbot bearbeiten',
      chatbotName: 'Name',
      chatbotDescription: 'Beschreibung',
      systemPrompt: 'System-Prompt',
      imageUrl: 'Bild-URL',
      makePublic: 'Öffentlich machen',
      allowFork: 'Forken erlauben',
      documents: 'Dokumente',
      noDocuments: 'Noch keine Dokumente hochgeladen',
      uploadDocument: 'Dokument hochladen',
      aiSettings: 'KI-Einstellungen',
      provider: 'Anbieter',
      model: 'Modell',
      apiKey: 'API-Schlüssel',
      recentActivity: 'Letzte Aktivitäten',
      noActivity: 'Keine Aktivitäten vorhanden',
      allTemplates: 'Alle Vorlagen',
      publicTemplates: 'Öffentliche Vorlagen',
      privateTemplates: 'Private Vorlagen',
      setPassword: 'Passwort setzen',
      updatePassword: 'Passwort aktualisieren',
      newPassword: 'Neues Passwort',
      selectImage: 'Bild auswählen',
      searchImages: 'Bilder suchen...',
      searchWikimedia: 'Bilder auf Wikimedia Commons suchen...',
      wikimediaCredit: 'Bilder bereitgestellt von Wikimedia Commons',
      subject: 'Fachbereich',
      educationLevel: 'Bildungsstufe',
      author: 'Autor',
      searchWLO: 'WLO Materialien durchsuchen...',
      allTypes: 'Alle Materialtypen',
      wloResources: 'WirLernenOnline Materialien',
      invalidFileType: 'Nur PDF, TXT, DOCX und PPTX Dateien sind erlaubt',
      fileTooLarge: 'Die Datei darf nicht größer als 10MB sein',
      conversationStarters: 'Gesprächsstarter',
      conversationStartersHelp: 'Definiere bis zu 4 Fragen oder Themen, die Nutzende zu Beginn auswählen können',
      conversationStarter: 'Gesprächsstarter'
    },
    tools: {
      webSearch: 'Websuche',
      webSearchDesc: 'Im Internet mit DuckDuckGo suchen',
      documentQA: 'Dokumente-Wissen',
      documentQADesc: 'Integriert hochgeladene Dokumente in das Wissen des Chatbots',
      wloSearch: 'WLO-Suche',
      wloSearchDesc: 'Ermöglicht die Suche nach Bildungsinhalten von WirLernenOnline während des Chats',
      wloResources: 'WLO-Materialien',
      wloResourcesDesc: 'Integriert ausgewählte WirLernenOnline Materialien in den Chatbot',
      enableTools: 'Tools aktivieren',
    },
    welcome: {
      title: 'Willkommen bei EduBot',
      subtitle: 'Gestalten Sie Ihren Unterricht mit KI-Chatbots, die perfekt auf Ihre pädagogischen Ziele abgestimmt sind.',
      forTeachers: 'Für Lehrkräfte',
      forTeachersDesc: 'Erstellen Sie maßgeschneiderte KI-Assistenten und integrieren Sie Ihre Lehrmaterialien für personalisierte Lernerfahrungen.',
      features: {
        customChatbots: 'Personalisierte Chatbots',
        customChatbotsDesc: 'Erstellen Sie KI-Assistenten, die perfekt auf Ihre Lehrinhalte abgestimmt sind',
        smartTools: 'Smarte Werkzeuge',
        smartToolsDesc: 'Nutzen Sie Websuche und Dokumentenanalyse für fundierte Antworten',
        resourceIntegration: 'Materialintegration',
        resourceIntegrationDesc: 'Binden Sie Ihre Lehrmaterialien nahtlos in die Chatbots ein',
      },
    },
    chat: {
      greeting: 'Hallo! Ich bin',
      typeMessage: 'Nachricht eingeben...',
      useTools: 'Verwende /{tool} für Tools',
      uploadFile: 'Datei hochladen',
      toolUsed: 'Verwendetes Tool',
      suggestedTopics: 'Hier sind einige Vorschläge für den Einstieg:'
    },
    accessCode: {
      title: 'Willkommen bei EduBot',
      description: 'Geben Sie den 6-stelligen Zugangscode ein, den Sie von Ihrer Lehrkraft erhalten haben.',
      label: 'Zugangscode',
      submit: 'Chatbot starten',
      invalid: 'Ungültiger Zugangscode',
      invalidLength: 'Der Zugangscode muss 6 Zeichen lang sein',
      expired: 'Dieser Zugangscode ist abgelaufen',
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
      allAuthors: 'Alle Autoren'
    },
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
      backToGallery: 'Back to Gallery'
    },
    nav: {
      home: 'Home',
      teachers: 'For Teachers',
      gallery: 'Gallery',
    },
    auth: {
      signIn: 'Sign In',
      signOut: 'Sign Out',
      createAccount: 'Create Account',
      email: 'Email',
      password: 'Password',
      fullName: 'Full Name',
      alreadyHaveAccount: 'Already have an account?',
      dontHaveAccount: "Don't have an account?",
      emailInUse: 'This email is already in use',
      invalidCredentials: 'Invalid credentials',
    },
    profile: {
      editProfile: 'Edit Profile',
      fullName: 'Full Name',
      authorNickname: 'Author Nickname',
      authorNicknamePlaceholder: 'Your public name as author',
      authorNicknameHelp: 'This name will be displayed on your published chatbots',
      bio: 'About Me',
      institution: 'Institution',
      website: 'Website',
      subjects: 'Subjects',
      educationLevels: 'Education Levels',
      socialLinks: 'Social Media Links',
    },
    dashboard: {
      title: 'Teacher Dashboard',
      newChatbot: 'New Chatbot',
      myChatbots: 'My Chatbots',
      activeSessions: 'Active Sessions',
      totalInteractions: 'Total Interactions',
      createChatbot: 'Create Chatbot',
      editChatbot: 'Edit Chatbot',
      chatbotName: 'Name',
      chatbotDescription: 'Description',
      systemPrompt: 'System Prompt',
      imageUrl: 'Image URL',
      makePublic: 'Make Public',
      allowFork: 'Allow Fork',
      documents: 'Documents',
      noDocuments: 'No documents uploaded yet',
      uploadDocument: 'Upload Document',
      aiSettings: 'AI Settings',
      provider: 'Provider',
      model: 'Model',
      apiKey: 'API Key',
      recentActivity: 'Recent Activity',
      noActivity: 'No activity yet',
      allTemplates: 'All Templates',
      publicTemplates: 'Public Templates',
      privateTemplates: 'Private Templates',
      setPassword: 'Set Password',
      updatePassword: 'Update Password',
      newPassword: 'New Password',
      selectImage: 'Select Image',
      searchImages: 'Search images...',
      searchWikimedia: 'Search Wikimedia Commons for images...',
      wikimediaCredit: 'Images provided by Wikimedia Commons',
      subject: 'Subject',
      educationLevel: 'Education Level',
      author: 'Author',
      searchWLO: 'Search WLO resources...',
      allTypes: 'All resource types',
      wloResources: 'WirLernenOnline Resources',
      invalidFileType: 'Only PDF, TXT, DOCX and PPTX files are allowed',
      fileTooLarge: 'File size must be less than 10MB',
      conversationStarters: 'Conversation Starters',
      conversationStartersHelp: 'Define up to 4 questions or topics that users can select at the beginning',
      conversationStarter: 'Conversation Starter'
    },
    tools: {
      webSearch: 'Web Search',
      webSearchDesc: 'Search the internet using DuckDuckGo',
      documentQA: 'Document Knowledge',
      documentQADesc: 'Integrates uploaded documents into the chatbot\'s knowledge',
      wloSearch: 'WLO Search',
      wloSearchDesc: 'Enables searching WirLernenOnline educational content during chat',
      wloResources: 'WLO Materials',
      wloResourcesDesc: 'Integrates selected WirLernenOnline materials into the chatbot',
      enableTools: 'Enable Tools',
    },
    welcome: {
      title: 'Welcome to EduBot',
      subtitle: 'Shape your teaching with AI chatbots perfectly aligned with your pedagogical goals.',
      forTeachers: 'For Teachers',
      forTeachersDesc: 'Create custom AI assistants and integrate your teaching materials for personalized learning experiences.',
      features: {
        customChatbots: 'Custom Chatbots',
        customChatbotsDesc: 'Create AI assistants perfectly tailored to your teaching content',
        smartTools: 'Smart Tools',
        smartToolsDesc: 'Use web search and document analysis for informed responses',
        resourceIntegration: 'Resource Integration',
        resourceIntegrationDesc: 'Seamlessly integrate your teaching materials into chatbots',
      },
    },
    chat: {
      greeting: 'Hello! I am',
      typeMessage: 'Type a message...',
      useTools: 'Use /{tool} for tools',
      uploadFile: 'Upload File',
      toolUsed: 'Tool Used',
      suggestedTopics: 'Here are some suggestions to get started:'
    },
    accessCode: {
      title: 'Welcome to EduBot',
      description: 'Enter the 6-digit access code provided by your teacher.',
      label: 'Access Code',
      submit: 'Start Chatbot',
      invalid: 'Invalid access code',
      invalidLength: 'Access code must be 6 characters long',
      expired: 'This access code has expired',
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
      enterChatbotId: 'Enter chatbot ID',
      password: 'Password',
      optionalPassword: 'Optional password',
      access: 'Access',
      invalidId: 'Invalid chatbot ID',
      invalidPassword: 'Invalid password',
      inactiveChatbot: 'This chatbot is not active',
      noChatbotsFound: 'No chatbots found',
      tryAdjustingFilters: 'Try adjusting the filters or searching for something else',
      startChat: 'Start Chat',
      author: 'Author',
      allAuthors: 'All Authors'
    },
  },
} as const;

export type TranslationType = typeof translations;
export { translations };
export type { Language };