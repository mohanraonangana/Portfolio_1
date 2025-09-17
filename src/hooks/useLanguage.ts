import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChange', handleLanguageChange as EventListener);
  }, []);

  const translations = {
    en: {
      hero: {
        greeting: "Hey, I'm Mohanrao 👋",
        subtitle: "Entry-level Developer learning web development | React & Java enthusiast based in India",
        description: "Hello, World! I am Mohanrao Nangana, an aspiring Full-Stack Developer passionate about crafting high-performance, scalable web applications. With a growing foundation in React, Node.js, and Spring Boot, I thrive on building seamless user experiences and learning to optimize system performance.\n\nAs I develop my skills in front-end and backend development, I work on multiple projects to strengthen my understanding. I enjoy learning through hands-on experience and am building a strong foundation in JavaScript, React, and web development.\n\nOne of my notable projects, the Campus Placement Management System, streamlines the placement process for educational institutions. I am currently seeking internship and entry-level software roles where I can contribute my growing skills and continue to develop as a programmer.\n\nLet's connect and collaborate!"
      },
      sections: {
        about: "About",
        stack: "Stack",
        education: "Education",
        projects: "Projects",
        internships: "Internships",
        achievements: "Achievements",
        contact: "Contact"
      },
      education: {
        university: "K L Deemed to be University",
        degree: "Bachelor of Technology in Computer Science & Engineering",
        period: "2022 - 2026"
      },
      projects: {
        placement: {
          title: "Job Portal",
          description: "A comprehensive job board application built with Next.js, MongoDB, and Tailwind CSS. Features job posting, application tracking, bookmarking, and user authentication with JWT validation."
        },
        seafood: {
          title: "Seafood Export-Import Website",
          description: "An e-commerce platform for seafood trading companies with order management and tracking capabilities."
        },
        health: {
          title: "Health & Nutrient Management System",
          description: "A web application for tracking personal health metrics and nutritional information with customized meal planning."
        }
      },
      internships: {
        title: "AI/ML Virtual Internship",
        company: "Eduskills",
        period: "June 2023 - August 2023",
        description: "Participated in an intensive AI/ML internship program focusing on practical applications of machine learning algorithms and data analysis."
      },
      achievements: {
        hackathon: {
          title: "College Hackathon - 3rd Place",
          event: "KL University Tech Fest 2023",
          description: "Developed an innovative solution for automated waste segregation using computer vision and IoT technologies."
        },
        coding: {
          title: "Competitive Programming",
          event: "Various Coding Platforms",
          description: "Consistently solved complex algorithmic problems and participated in coding competitions."
        }
      },
      contact: {
        email: "Send Email"
      },
      footer: "© 2025 Mohanrao Nangana. All rights reserved."
    },
    hi: {
      hero: {
        greeting: "नमस्ते, मैं मोहनराव हूं 👋",
        subtitle: "प्रवेश-स्तर के डेवलपर वेब डेवलपमेंट सीख रहे हैं | भारत में रहने वाले React और Java उत्साही",
        description: "हैलो, वर्ल्ड! मैं मोहनराव नंगाना हूं, एक उभरता हुआ फुल-स्टैक डेवलपर जो उच्च-प्रदर्शन, स्केलेबल वेब एप्लिकेशन बनाने के लिए उत्साहित है। React, Node.js, और Spring Boot में बढ़ती नींव के साथ, मैं निर्बाध उपयोगकर्ता अनुभव बनाने और सिस्टम प्रदर्शन को अनुकूलित करना सीखने में रुचि रखता हूं।\n\nजैसे-जैसे मैं फ्रंट-एंड और बैकएंड डेवलपमेंट में अपने कौशल विकसित करता हूं, मैं अपनी समझ को मजबूत करने के लिए कई प्रोजेक्ट पर काम करता हूं। मैं हाथों-हाथ अनुभव के माध्यम से सीखने का आनंद लेता हूं और JavaScript, React, और वेब डेवलपमेंट में मजबूत नींव बना रहा हूं।\n\nमेरे उल्लेखनीय प्रोजेक्ट्स में से एक, कैंपस प्लेसमेंट मैनेजमेंट सिस्टम, शैक्षणिक संस्थानों के लिए प्लेसमेंट प्रक्रिया को सुव्यवस्थित करता है। मैं वर्तमान में इंटर्नशिप और प्रवेश-स्तर के सॉफ्टवेयर रोल की तलाश में हूं जहां मैं अपने बढ़ते कौशल का योगदान दे सकूं और एक प्रोग्रामर के रूप में विकसित होता रहूं।\n\nआइए जुड़ें और सहयोग करें!"
      },
      sections: {
        about: "के बारे में",
        stack: "स्टैक",
        education: "शिक्षा",
        projects: "प्रोजेक्ट्स",
        internships: "इंटर्नशिप",
        achievements: "उपलब्धियां",
        contact: "संपर्क"
      },
      education: {
        university: "के एल डीम्ड टू बी यूनिवर्सिटी",
        degree: "कंप्यूटर साइंस एंड इंजीनियरिंग में बैचलर ऑफ टेक्नोलॉजी",
        period: "2022 - 2026"
      },
      projects: {
        placement: {
          title: "जॉब पोर्टल",
          description: "Next.js, MongoDB, और Tailwind CSS के साथ बनाया गया एक व्यापक जॉब बोर्ड एप्लिकेशन। जॉब पोस्टिंग, एप्लिकेशन ट्रैकिंग, बुकमार्किंग, और JWT वैलिडेशन के साथ यूजर ऑथेंटिकेशन की सुविधाएं शामिल हैं।"
        },
        seafood: {
          title: "समुद्री भोजन निर्यात-आयात वेबसाइट",
          description: "समुद्री भोजन व्यापार कंपनियों के लिए एक ई-कॉमर्स प्लेटफॉर्म जिसमें ऑर्डर प्रबंधन और ट्रैकिंग क्षमताएं हैं।"
        },
        health: {
          title: "स्वास्थ्य और पोषक तत्व प्रबंधन सिस्टम",
          description: "व्यक्तिगत स्वास्थ्य मेट्रिक्स और पोषण संबंधी जानकारी को ट्रैक करने के लिए एक वेब एप्लिकेशन जिसमें अनुकूलित भोजन योजना शामिल है।"
        }
      },
      internships: {
        title: "AI/ML वर्चुअल इंटर्नशिप",
        company: "एडुस्किल्स",
        period: "जून 2023 - अगस्त 2023",
        description: "मशीन लर्निंग एल्गोरिदम और डेटा विश्लेषण के व्यावहारिक अनुप्रयोगों पर केंद्रित एक गहन AI/ML इंटर्नशिप कार्यक्रम में भाग लिया।"
      },
      achievements: {
        hackathon: {
          title: "कॉलेज हैकाथॉन - तीसरा स्थान",
          event: "केएल यूनिवर्सिटी टेक फेस्ट 2023",
          description: "कंप्यूटर विजन और IoT तकनीकों का उपयोग करके स्वचालित कचरा पृथक्करण के लिए एक नवाचार समाधान विकसित किया।"
        },
        coding: {
          title: "प्रतिस्पर्धी प्रोग्रामिंग",
          event: "विभिन्न कोडिंग प्लेटफॉर्म",
          description: "जटिल एल्गोरिदमिक समस्याओं को लगातार हल किया और कोडिंग प्रतियोगिताओं में भाग लिया।"
        }
      },
      contact: {
        email: "ईमेल भेजें"
      },
      footer: "© 2025 मोहनराव नंगाना। सभी अधिकार सुरक्षित।"
    },
    te: {
      hero: {
        greeting: "నమస్కారం, నేను మోహన్రావ్ 👋",
        subtitle: "వెబ్ డెవలప్మెంట్ నేర్చుకుంటున్న ఎంట్రీ-లెవెల్ డెవలపర్ | భారతదేశంలో ఉన్న React మరియు Java ఉత్సాహి",
        description: "హలో, వరల్డ్! నేను మోహన్రావ్ నంగానా, హై-పెర్ఫార్మెన్స్, స్కేలబుల్ వెబ్ అప్లికేషన్లను రూపొందించడంపై ఆసక్తి ఉన్న ఒక ఉద్భవిస్తున్న ఫుల్-స్టాక్ డెవలపర్. React, Node.js, మరియు Spring Bootలో పెరుగుతున్న పునాదితో, నేను నిర్విఘ్నమైన వినియోగదారు అనుభవాలను నిర్మించడం మరియు సిస్టమ్ పనితీరును ఆప్టిమైజ్ చేయడం నేర్చుకోవడంలో ఆసక్తి చూపిస్తున్నాను.\n\nఫ్రంట్-ఎండ్ మరియు బ్యాకెండ్ డెవలప్మెంట్లో నా నైపుణ్యాలను అభివృద్ధి చేస్తున్నప్పుడు, నేను నా అవగాహనను బలపరచడానికి అనేక ప్రాజెక్ట్లపై పని చేస్తున్నాను. నేను ప్రాక్టికల్ అనుభవం ద్వారా నేర్చుకోవడాన్ని ఆస్వాదిస్తున్నాను మరియు JavaScript, React, మరియు వెబ్ డెవలప్మెంట్లో బలమైన పునాదిని నిర్మిస్తున్నాను.\n\nనా గమనించదగిన ప్రాజెక్ట్లలో ఒకటి, క్యాంపస్ ప్లేస్మెంట్ మేనేజ్మెంట్ సిస్టమ్, విద్యా సంస్థల కోసం ప్లేస్మెంట్ ప్రక్రియను సులభతరం చేస్తుంది. నేను ప్రస్తుతం ఇంటర్న్షిప్ మరియు ఎంట్రీ-లెవెల్ సాఫ్ట్వేర్ రోళ్ల కోసం చూస్తున్నాను, ఇక్కడ నేను నా పెరుగుతున్న నైపుణ్యాలను సమర్పించగలను మరియు ఒక ప్రోగ్రామర్ గా అభివృద్ధి చెందుతూనే ఉంటాను.\n\nమనం కనెక్ట్ అవ్వండి మరియు సహకరిద్దాం!"
      },
      sections: {
        about: "గురించి",
        stack: "స్టాక్",
        education: "విద్య",
        projects: "ప్రాజెక్ట్లు",
        internships: "ఇంటర్న్షిప్లు",
        achievements: "సాధనలు",
        contact: "సంప్రదింపు"
      },
      education: {
        university: "కె.ఎల్. డీమ్డ్ టు బి యూనివర్సిటీ",
        degree: "కంప్యూటర్ సైన్స్ & ఇంజనీరింగ్లో బ్యాచిలర్ ఆఫ్ టెక్నాలజీ",
        period: "2022 - 2026"
      },
      projects: {
        placement: {
          title: "జాబ్ పోర్టల్",
          description: "Next.js, MongoDB, మరియు Tailwind CSSతో నిర్మించిన సమగ్ర జాబ్ బోర్డ్ అప్లికేషన్. జాబ్ పోస్టింగ్, అప్లికేషన్ ట్రాకింగ్, బుక్మార్కింగ్, మరియు JWT వాలిడేషన్తో యూజర్ ఆథెంటికేషన్ లక్షణాలు ఉన్నాయి."
        },
        seafood: {
          title: "సీఫుడ్ ఎక్స్పోర్ట్-ఇంపోర్ట్ వెబ్సైట్",
          description: "ఆర్డర్ మేనేజ్మెంట్ మరియు ట్రాకింగ్ సామర్థ్యాలతో సముద్ర ఆహార వ్యాపార కంపెనీల కోసం ఈ-కామర్స్ ప్లాట్ఫారమ్."
        },
        health: {
          title: "ఆరోగ్య & పోషక పదార్థ మేనేజ్మెంట్ సిస్టమ్",
          description: "వ్యక్తిగత ఆరోగ్య మెట్రిక్స్ మరియు పోషక సమాచారాన్ని ట్రాక్ చేసే వెబ్ అప్లికేషన్, అనుకూలీకరించిన ఆహార ప్రణాళికతో."
        }
      },
      internships: {
        title: "AI/ML వర్చువల్ ఇంటర్న్షిప్",
        company: "ఎడుస్కిల్స్",
        period: "జూన్ 2023 - ఆగస్ట్ 2023",
        description: "మెషిన్ లెర్నింగ్ అల్గోరిథమ్లు మరియు డేటా విశ్లేషణ యొక్క ఆచరణాత్మక అనువర్తనాలపై దృష్టి పెట్టిన గాఢ AI/ML ఇంటర్న్షిప్ కార్యక్రమంలో పాల్గొన్నాను."
      },
      achievements: {
        hackathon: {
          title: "కాలేజీ హ్యాకథాన్ - 3వ స్థానం",
          event: "కె.ఎల్. యూనివర్సిటీ టెక్ ఫెస్ట్ 2023",
          description: "కంప్యూటర్ విజన్ మరియు IoT సాంకేతికతలను ఉపయోగించి స్వయంచాలక వేస్ట్ సెగ్రిగేషన్ కోసం నవీన పరిష్కారాన్ని అభివృద్ధి చేశాను."
        },
        coding: {
          title: "పోటీ ప్రోగ్రామింగ్",
          event: "వివిధ కోడింగ్ ప్లాట్ఫారమ్లు",
          description: "సంక్లిష్ట అల్గోరిథమిక్ సమస్యలను నిరంతరంగా పరిష్కరించాను మరియు కోడింగ్ పోటీలలో పాల్గొన్నాను."
        }
      },
      contact: {
        email: "ఇమెయిల్ పంపండి"
      },
      footer: "© 2025 మోహన్రావ్ నంగానా. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి."
    }
  };

  return { language, translations: translations[language as keyof typeof translations] || translations.en };
};
