export const translations = {
  it: {
    nav: {
      links: [
        { label: "Home", href: "#home" },
        { label: "Chi sono", href: "#about" },
        { label: "Progetti", href: "#projects" },
        { label: "Contatti", href: "#contatti" },
      ],
    },

    hero: {
      role: "Junior Developer",
      greeting: "Ciao, sono",
      name: "Dario Diana",
      subtitle:
        "Appassionato di sviluppo web, con focus sul front-end. Amo trasformare idee in interfacce pulite e funzionali.",
      cta: "Su di me",
      ctaSecondary: "Contattami",
    },

    skills: {
      title: "Skills",
      subtitle: "Tecnologie che uso e sto imparando.",
      coreSkills: "Core Skills",
      stylingSkills: "Styling Skills",
      frameworksLibraries: "Frameworks & Libraries",
      backendSkills: "Backend",
    },

    about: {
      title: "Chi sono",
      subtitle: "Un po' di me, il mio percorso e il mio CV.",
      bioLabel: "Bio",
      bioParagraphs: [
        "Sono uno sviluppatore di 25 anni con una forte passione per la tecnologia, nata quando ho assemblato il mio primo computer fisso a 15 anni.",
        "Dopo il liceo scientifico ho frequentato inizialmente Informatica all'Università Federico II di Napoli e successivamente Data Analytics presso l'Università Luigi Vanvitelli, corso interamente in lingua inglese. Il percorso si è interrotto nei primi mesi a causa di alcune difficoltà personali e di salute, che in quel periodo hanno reso alquanto complessa la continuità nello studio.",
        "Una volta superato quel periodo, ho deciso di intraprendere un percorso nel mondo dello sviluppo tramite la piattaforma Start2Impact che mi aveva attirato sin da subito per il suo focus su progetti pratici.",
        "Prima di terminare il mio percorso con Start2impact, nel 2025, mentre ero alla ricerca di opportunità lavorative su LinkedIn, ho scoperto un corso professionale promosso da ITForm e istituito dalla Regione Campania nell'ambito dello sviluppo web. Interessato ad acquisire esperienza dal vivo e consolidare le mie competenze, ho inviato la candidatura e sono stato selezionato. Il corso si è svolto tra giugno e ottobre, con esame finale teorico e pratico a dicembre 2025.",
        'Ho conseguito la qualifica EQF5 di "Tecnico Programmatore Siti Web", valida a livello europeo, attraverso un percorso di 300 ore che includeva anche 90 ore di tirocinio presso un\'azienda tech nel Centro Direzionale di Napoli.',
        "Ho un'ottima padronanza della lingua inglese, che utilizzo quotidianamente in diversi contesti, sia nello studio che nella vita di tutti i giorni. Mi considero fluido anche nella comunicazione orale.",
      ],
      readMore: "Leggi di più",
      showLess: "Mostra meno",
      educationLabel: "Formazione",
      workLabel: "Esperienze lavorative",
      downloadCV: "Scarica il CV",
      education: [
        {
          period: "2025",
          title: "Certificato EQF5 Tecnico/Programmatore Siti Web",
          institution: "ITForm",
          description:
            "Percorso professionalizzante orientato allo sviluppo web, con focus su basi solide di programmazione e applicazione pratica delle competenze.",
        },
        {
          period: "2024-2025",
          title: "Full Stack Developer",
          institution: "Start2Impact",
          description:
            "Percorso formativo focalizzato su progetti pratici, attraverso il quale ho sviluppato le basi del web development, partendo da HTML e CSS fino ad approfondire SASS e JavaScript.",
        },
        {
          period: "2013 — 2018",
          title: "Diploma Liceo Scientifico Indirizzo Scienze Applicate",
          institution: "Liceo Scientifico G. Siani",
          description:
            "Percorso di studi con indirizzo Scienze Applicate, caratterizzato da un maggiore focus su materie scientifiche e informatiche rispetto al tradizionale liceo scientifico.",
        },
      ],
      work: [
        {
          period: "2025",
          title: "Tirocinante Sviluppatore Web",
          company: "Azienda tech — Centro Direzionale, Napoli",
          description:
            "Tirocinio curricolare di 90 ore svolto nell'ambito del percorso EQF5 con ITForm. Affiancamento al team di sviluppo su attività di front-end e manutenzione di applicazioni web.",
        },
        {
          period: "2024-2025",
          title: "Cassiere Part-Time",
          company: "Supermercato locale",
          description: "Cassiere part-time dalle ore 8:00 alle 13:00, 1 anno.",
        },
      ],
    },

    projects: {
      title: "Progetti",
      subtitle: "Alcune cose su cui ho lavorato.",
      items: [
        {
          id: 1,
          title: "Portfolio React",
          description:
            "Portfolio personale realizzato con React e Tailwind CSS.",
          tags: ["React", "Tailwind CSS", "Vite"],
          github: "",
          live: "",
        },
        {
          id: 2,
          title: "Mini Todo App",
          description: "Applicazione Todo con gestione dello stato in React.",
          tags: ["React", "useState"],
          github: "",
          live: "",
        },
        {
          id: 3,
          title: "Dashboard",
          description: "Dashboard con componenti React riutilizzabili.",
          tags: ["React", "Components"],
          github: "",
          live: "",
        },
      ],
    },

    contact: {
      title: "Contatti",
      subtitle:
        "Nel caso vogliate collaborare, potete scrivermi sui social o tramite il form.",
      socialTitle: "Social",
      formTitle: "Scrivimi",
      nameLabel: "Nome",
      namePlaceholder: "Mario Rossi",
      emailLabel: "Email",
      emailPlaceholder: "mario@esempio.com",
      messageLabel: "Messaggio",
      messagePlaceholder: "Ciao! Volevo proporti una collaborazione su...",
      submit: "Invia messaggio",
      submitting: "Invio in corso…",
      successTitle: "Messaggio inviato!",
      successBody: "Ti risponderò il prima possibile.",
      errorTitle: "Invio fallito",
      errorBody: "Qualcosa è andato storto. Riprova o scrivimi direttamente.",
      sendAnother: "Invia un altro",
      retry: "Riprova",
      socialLinks: [
        { label: "GitHub", description: "I miei repository" },
        { label: "LinkedIn", description: "Profilo professionale" },
        { label: "Instagram", description: "Seguimi" },
        { label: "Discord", description: "Scrivimi in DM" },
      ],
    },
  },

  en: {
    nav: {
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contatti" },
      ],
    },

    hero: {
      role: "Junior Developer",
      greeting: "Hello, I am",
      name: "Dario Diana",
      subtitle:
        "Passionate about web development, with a focus on front-end. I love turning ideas into clean, functional interfaces.",
      cta: "About me",
      ctaSecondary: "Contact me",
    },

    skills: {
      title: "Skills",
      subtitle: "Technologies I use and I'm learning.",
      coreSkills: "Core Skills",
      stylingSkills: "Styling Skills",
      frameworksLibraries: "Frameworks & Libraries",
      backendSkills: "Backend",
    },

    about: {
      title: "About me",
      subtitle: "A little about me, my journey and my CV.",
      bioLabel: "Bio",
      bioParagraphs: [
        "I'm a 25-year-old developer with a long-standing passion for technology. My interest started early — I built my first desktop PC at 14 and have been exploring the world of tech ever since.",

        "After high school, I enrolled in Computer Science at Federico II University before switching to Data Analytics at Vanvitelli University, a degree program taught entirely in English. Although I had to leave university earlier than planned due to personal and health-related circumstances, that experience ultimately pushed me to focus more on coding.",

        "I later completed part of the Full Stack Development path at Start2Impact, a learning platform I chose for its strong project-based approach. During the summer of 2025, while looking for job opportunities on LinkedIn, I applied for and was selected to join a development training program organized by ITForm and funded by the Campania Region.", 
        
        "The program included 300 hours of training and a 90-hour internship at a tech company in Napoli. After passing the final examination in December, I earned an EQF Level 5 qualification in Web Development/Technician, recognized across Europe.",
      ],
      readMore: "Read more",
      showLess: "Show less",
      educationLabel: "Education",
      workLabel: "Work experience",
      downloadCV: "Download CV",
      education: [
        {
          period: "2025",
          title: "EQF5 Certificate — Technician / Web Developer",
          institution: "ITForm",
          description:
            "Professional training program focused on web development, with an emphasis on solid programming fundamentals and hands-on application of skills.",
        },
        {
          period: "2024-2025",
          title: "Full Stack Developer",
          institution: "Start2Impact",
          description:
            "Project-based training path through which I built a solid foundation in web development, from HTML and CSS to SASS and JavaScript.",
        },
        {
          period: "2013 — 2018",
          title: "Scientific High School Diploma — Applied Sciences",
          institution: "Liceo Scientifico G. Siani",
          description:
            "Academic course with an Applied Sciences focus, characterized by a greater emphasis on scientific and computer science subjects compared to the traditional scientific high school.",
        },
      ],
      work: [
        {
          period: "2025",
          title: "Web Development Intern",
          company: "ITConsulting — Centro Direzionale, Napoli",
          description:
            "Curricular internship as part of the EQF Level 5 program with ITForm. Worked on small projects within the development team, contributing to front-end tasks and web application maintenance.",
        },
        {
          period: "2024-2025",
          title: "Part-Time Cashier",
          company: "Local supermarket",
          description: "Part-time cashier role (08:00–13:30).",
        },
      ],
    },

    projects: {
      title: "Projects",
      subtitle: "Some things I've built",
      items: [
        {
          id: 1,
          title: "NeverMontell",
          description: "A website built for a private football fantasy league.",
          tags: ["PHP", "Bootstrap", "SASS", "Javascript"],
          github: "",
          live: "https://www.nevermontell.it/",
        },
        {
          id: 2,
          title: "Mini Todo App",
          description: "Todo application with React state management.",
          tags: ["React", "useState"],
          github: "",
          live: "",
        },
        {
          id: 3,
          title: "Dashboard",
          description: "Dashboard with reusable React components.",
          tags: ["React", "Components"],
          github: "",
          live: "",
        },
      ],
    },

    contact: {
      title: "",
      subtitle:
        "",
      socialTitle: "Social",
      formTitle: "Write me",
      nameLabel: "Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email",
      emailPlaceholder: "john@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Hi! I wanted to propose a collaboration on...",
      submit: "Send message",
      submitting: "Sending…",
      successTitle: "Message sent!",
      successBody: "I'll get back to you as soon as possible.",
      errorTitle: "Failed to send",
      errorBody: "Something went wrong. Try again or contact me directly.",
      sendAnother: "Send another",
      retry: "Try again",
      socialLinks: [
        { label: "GitHub", description: "My repositories" },
        { label: "LinkedIn", description: "Professional profile" },
        { label: "Instagram", description: "Follow me" },
        { label: "Discord", description: "Message me" },
      ],
    },
  },
};
