import { createContext, useState, useContext, useEffect } from 'react';

// Create a context for managing content
const ContentContext = createContext();

// Initial content for the pages
const initialContent = {
  home: {
    hero: {
      title: 'Welcome to Our Yoga Studio',
      subtitle: 'Find your balance, peace, and strength through our expert-led yoga classes',
      content: '<p>At our studio, we believe in the transformative power of yoga. Join our community and experience the benefits of regular practice in a welcoming environment.</p>'
    },
    about: {
      title: 'About Our Studio',
      content: '<p>Founded in 2020, our studio brings together experienced instructors and modern facilities to provide the best yoga experience for practitioners of all levels.</p><p>Our philosophy centers on inclusivity, mindfulness, and personal growth.</p>'
    }
  },
  schedule: {
    intro: {
      title: 'Class Schedule',
      content: '<p>Find the perfect class for your schedule and needs. We offer a variety of classes throughout the week, from beginner-friendly sessions to advanced practices.</p>'
    },
  },
  instructors: {
    intro: {
      title: 'Our Instructors',
      content: '<p>Meet our team of certified and experienced yoga instructors. Each brings their unique approach and expertise to help you on your yoga journey.</p>'
    },
  },
  contact: {
    intro: {
      title: 'Contact Us',
      content: '<p>Have questions or ready to begin? Reach out to us using the form below or visit our studio at the address provided.</p>'
    },
    location: {
      title: 'Our Location',
      content: '<p>123 Yoga Street<br />Serenity City, ZC 12345<br />Phone: (555) 123-4567<br />Email: info@yogastudio.com</p>'
    }
  }
};

export const ContentProvider = ({ children }) => {
  // Load content from localStorage or use initial content
  const [content, setContent] = useState(() => {
    const savedContent = localStorage.getItem('yogaStudioContent');
    return savedContent ? JSON.parse(savedContent) : initialContent;
  });

  // Save content to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('yogaStudioContent', JSON.stringify(content));
  }, [content]);

  // Function to update content
  const updateContent = (page, section, field, value) => {
    setContent(prevContent => ({
      ...prevContent,
      [page]: {
        ...prevContent[page],
        [section]: {
          ...prevContent[page][section],
          [field]: value
        }
      }
    }));
  };

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};

// Custom hook to use the content context
export const useContent = () => useContext(ContentContext);

