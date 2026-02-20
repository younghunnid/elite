
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  image?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  img: string;
  bio: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  img: string;
  excerpt: string;
}

export interface PortfolioProject {
  title: string;
  category: string;
  desc: string;
  img: string;
  date: string;
}
