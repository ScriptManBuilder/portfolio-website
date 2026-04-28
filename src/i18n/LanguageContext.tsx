import { createContext, useContext, useEffect, useState, type PropsWithChildren } from 'react';
import { translations, type Language } from './translations';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
}

const STORAGE_KEY = 'portfolio-language';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const updateMetaTag = (
  selector: string,
  value: string,
  attribute: 'content' | 'href' = 'content',
) => {
  const element = document.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
};

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);

  return savedLanguage === 'uk' ? 'uk' : 'en';
};

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);

    const seo = translations[language].seo;

    document.title = seo.title;
    updateMetaTag('meta[name="title"]', seo.metaTitle);
    updateMetaTag('meta[name="description"]', seo.description);
    updateMetaTag('meta[name="language"]', seo.language);
    updateMetaTag('meta[property="og:title"]', seo.title);
    updateMetaTag('meta[property="og:description"]', seo.ogDescription);
    updateMetaTag('meta[property="og:locale"]', seo.locale);
    updateMetaTag('meta[name="twitter:title"]', seo.title);
    updateMetaTag('meta[name="twitter:description"]', seo.twitterDescription);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
};