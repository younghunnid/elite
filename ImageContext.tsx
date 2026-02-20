
import React, { createContext, useContext, useState, useEffect } from 'react';
import { IMAGES, SERVICES } from './constants';

type ImageMap = Record<string, string>;

interface ImageContextType {
  images: ImageMap;
  updateImage: (key: string, file: File) => void;
  resetImage: (key: string) => void;
  resetAll: () => void;
  isLoading: boolean;
  itGallery: string[];
  schoolGallery: string[];
  addToGallery: (world: 'it' | 'school', file: File) => void;
  removeFromGallery: (world: 'it' | 'school', index: number) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

const createDefaultMap = (): ImageMap => {
  const map: ImageMap = {
    'it-hero': IMAGES.hero,
    // attempt to use a local file named school-hero.jpg if present; otherwise
    // fall back to the remote placeholder. this allows you to override the
    // school hero independently of the main hero.
    'school-hero': (() => {
      try {
        return new URL('./assets/school-hero.jpg', import.meta.url).href;
      } catch {
        return 'https://storage.googleapis.com/prompt-images/image_3.jpeg';
      }
    })(),
    'school-lab': 'https://storage.googleapis.com/prompt-images/image_1.jpeg',
    'school-programs': 'https://storage.googleapis.com/prompt-images/image_2.jpeg',
    'welcome-bg': IMAGES.welcome,
    'about-main': IMAGES.about,
    'about-side-1': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    'about-side-2': 'https://images.unsplash.com/photo-1573161158365-592945d81745?auto=format&fit=crop&q=80&w=800',
  };

  // Dynamically add all service images
  SERVICES.forEach(s => {
    if (s.image) map[`service-${s.id}`] = s.image;
  });

  return map;
};

const DEFAULT_IMAGES = createDefaultMap();

const DEFAULT_IT_GALLERY = [
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
];

// gather any local images placed inside assets/school-gallery folder
// Vite's import.meta.glob with eager loading returns modules with a default export path
const localSchoolFiles = import.meta.glob(
  './assets/school-gallery/*.{png,jpg,jpeg,webp}',
  { eager: true }
) as Record<string, { default: string }>;
const LOCAL_SCHOOL_GALLERY = Object.values(localSchoolFiles).map(m => m.default);

// if the developer has dropped files in assets/school-gallery we consider those
// the only images to show; remote demo placeholders should not appear.
const DEFAULT_SCHOOL_GALLERY = LOCAL_SCHOOL_GALLERY.length > 0
  ? [...LOCAL_SCHOOL_GALLERY]
  : [
      "https://storage.googleapis.com/prompt-images/image_3.jpeg",
      "https://storage.googleapis.com/prompt-images/image_1.jpeg",
      "https://storage.googleapis.com/prompt-images/image_5.jpeg",
      "https://storage.googleapis.com/prompt-images/image_13.jpeg",
      "https://storage.googleapis.com/prompt-images/image_2.jpeg",
      "https://storage.googleapis.com/prompt-images/image_0.jpeg",
    ];

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<ImageMap>(DEFAULT_IMAGES);
  const [itGallery, setItGallery] = useState<string[]>(DEFAULT_IT_GALLERY);
  const [schoolGallery, setSchoolGallery] = useState<string[]>(DEFAULT_SCHOOL_GALLERY);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('elite_custom_images');
    const savedItGallery = localStorage.getItem('elite_it_gallery');
    const savedSchoolGallery = localStorage.getItem('elite_school_gallery');

    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        setImages({ ...DEFAULT_IMAGES, ...parsed }); 
      } catch (e) {}
    }
    if (savedItGallery) {
      try { setItGallery(JSON.parse(savedItGallery)); } catch (e) {}
    }
    if (savedSchoolGallery) {
      try { setSchoolGallery(JSON.parse(savedSchoolGallery)); } catch (e) {}
    }
    setIsLoading(false);
  }, []);

  const updateImage = (key: string, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      const newImages = { ...images, [key]: base64 };
      setImages(newImages);
      localStorage.setItem('elite_custom_images', JSON.stringify(newImages));
    };
    reader.readAsDataURL(file);
  };

  const resetImage = (key: string) => {
    const newImages = { ...images, [key]: DEFAULT_IMAGES[key] };
    setImages(newImages);
    localStorage.setItem('elite_custom_images', JSON.stringify(newImages));
  };

  const resetAll = () => {
    setImages(DEFAULT_IMAGES);
    setItGallery(DEFAULT_IT_GALLERY);
    setSchoolGallery(DEFAULT_SCHOOL_GALLERY);
    localStorage.removeItem('elite_custom_images');
    localStorage.removeItem('elite_it_gallery');
    localStorage.removeItem('elite_school_gallery');
  };

  const addToGallery = (world: 'it' | 'school', file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      if (world === 'it') {
        const next = [base64, ...itGallery];
        setItGallery(next);
        localStorage.setItem('elite_it_gallery', JSON.stringify(next));
      } else {
        // when user adds a new school image we should drop any demo placeholders
        const filtered = schoolGallery.filter(img => !img.includes('storage.googleapis.com/prompt-images'));
        const next = [base64, ...filtered];
        setSchoolGallery(next);
        localStorage.setItem('elite_school_gallery', JSON.stringify(next));
      }
    };
    reader.readAsDataURL(file);
  };

  const removeFromGallery = (world: 'it' | 'school', index: number) => {
    if (world === 'it') {
      const next = itGallery.filter((_, i) => i !== index);
      setItGallery(next);
      localStorage.setItem('elite_it_gallery', JSON.stringify(next));
    } else {
      const next = schoolGallery.filter((_, i) => i !== index);
      setSchoolGallery(next);
      localStorage.setItem('elite_school_gallery', JSON.stringify(next));
    }
  };

  return (
    <ImageContext.Provider value={{ 
      images, updateImage, resetImage, resetAll, isLoading, 
      itGallery, schoolGallery, addToGallery, removeFromGallery 
    }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) throw new Error('useImages must be used within an ImageProvider');
  return context;
};
