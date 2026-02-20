
import React from 'react';
import { Service, Testimonial, TeamMember, BlogPost, PortfolioProject } from './types';

export const BRAND = {
  name: "Elite Computer Services",
  motto: "We aim to make digital literacy universal, empowering everyone with the skills to leverage technology to enhance their lives.",
  phone: "+231 770-025232",
  email: "support@elitescomputerservices.com",
  website: "elitescomputerservices.com",
  address: "Paynesville, A.B Tolbert Road. Liberia",
  hours: "10:00 - 18:00"
};

export const IMAGES = {
  // Updated to a professional server infrastructure visual for maximum technical authority
  // hero image resolution logic:
  // 1. look for an `assets/hero-flyer.jpg` file (preferred)
  // 2. if missing, also check the school-gallery directory in case you
  //    accidentally placed it there. note that your filename must be exactly
  //    `hero-flyer.jpg` (no extra dots) or it will fail to resolve.
  // 3. if neither file exists, fall back to the remote demo image.
  hero: (() => {
    try {
      return new URL('./assets/hero-flyer.jpg', import.meta.url).href;
    } catch {
      try {
        return new URL('./assets/school-gallery/hero-flyer.jpg', import.meta.url).href;
      } catch {
        return "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2000";
      }
    }
  })(),
  welcome: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1600",
  about: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600",
  PLACEHOLDERS: {
    laserPrinting: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=1200",
    photocopy: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1200"
  }
};

export const SERVICES: Service[] = [
  {
    id: "computer-school",
    title: "Computer School",
    description: "We provide the best quality computer education with a 80% practical, that will give you the experiences needed.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    details: ["3-Month Intensive", "80% Practical Labs", "Professional Certification"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "computer-repair",
    title: "Computer Repair",
    description: "Fast and reliable computer repairs. From hardware fixes to software troubleshooting, we've got you covered.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    details: ["Screen Replacement", "OS Re-installation", "Hardware Upgrades"],
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "custom-built",
    title: "Custom Built",
    description: "Our systems are meticulously hand-built by skilled technicians, ensuring premium quality.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    details: ["Gaming Rigs", "Workstations", "Component Sourcing"],
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "mobile-repair",
    title: "Mobile Repair",
    description: "Expert smartphone and tablet repair. We fix screens, charging ports, and more for all major brands.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    details: ["Screen Replacement", "Battery Swap", "Charging Port Repair"],
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "data-recovery",
    title: "Data Recovery",
    description: "Data recovery from any type of hard drive, HDD and SSD. Deleted data, reformatting, electronics failure, etc.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    details: ["Hard Drive Recovery", "Forensic Imaging", "Cloud Backup Setup"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "industrial-laser-printing",
    title: "Industrial Laser Printing",
    description: "Precision meets innovation. We specialize in high-quality laser printing for all or any work application.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    details: ["ID Card Printing", "Banner Design", "Business Cards"],
    image: IMAGES.PLACEHOLDERS.laserPrinting
  },
  {
    id: "industrial-photocopy",
    title: "Industrial Photocopy",
    description: "High-speed and high-quality industrial photocopying services for large volume documents and business projects.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
    details: ["Bulk Copying", "Book Binding", "Document Scanning"],
    image: IMAGES.PLACEHOLDERS.photocopy
  }
];

export const PRODUCTS = [
  { id: 1, name: "Dell Latitude 5420", price: "$450.00", category: "Laptop", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "HP EliteBook 840", price: "$520.00", category: "Laptop", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Logitech Wireless Mouse", price: "$25.00", category: "Accessory", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Antivirus License (1 Year)", price: "$35.00", category: "Software", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400" },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { 
    name: "Moses K. Vah", 
    role: "CEO & Founder", 
    img: "./assets/school-hero.jpg", // using the hero image as a placeholder for the CEO to reinforce brand identity
    bio: "Visionary leader with over 10 years of experience in the IT industry. Moses founded Elite Computer Services with a mission to bridge the digital divide in Liberia and provide world-class technical support to local businesses.",
    socials: { linkedin: "#", twitter: "#" }
  },
  { 
    name: "Newman Beyan Kollie", 
    role: "Founder & Head of School", 
    img: "./assets/school-hero.jpg", // using the hero image as a placeholder for the Head of School
    bio: "Passionate educator and tech enthusiast. Newman leads the Academic Wing, ensuring that our 3-month intensive program remains the most practical and impactful computer education in Paynesville.",
    socials: { linkedin: "#", facebook: "#" }
  },
  { 
    name: "Sarah T. Johnson", 
    role: "Senior Systems Engineer", 
    img: "./assets/school-hero.jpg",
    bio: "Expert in network infrastructure and server management. Sarah oversees our business consulting wing, helping local enterprises build robust and secure digital foundations.",
    socials: { linkedin: "#" }
  },
  { 
    name: "Emmanuel Flomo", 
    role: "Lead Hardware Technician", 
    img: "./assets/school-hero.jpg",
    bio: "Master of micro-soldering and complex logic board repairs. If it has a circuit board, Emmanuel can fix it. He ensures every repair meets Elite's utmost quality standards.",
    socials: { twitter: "#" }
  },
  { 
    name: "Blessing Roberts", 
    role: "Printing & Graphics Lead", 
    img: "./assets/school-hero.jpg",
    bio: "Creative mind behind our industrial printing services. Blessing combines technical precision with artistic flair to deliver high-quality banners, ID cards, and brand materials.",
    socials: { facebook: "#" }
  },
  { 
    name: "Jefferson Toe", 
    role: "Data Recovery Specialist", 
    img: "./assets/school-hero.jpg",
    bio: "Our 'miracle worker' for lost data. Jefferson uses advanced forensic imaging to recover mission-critical information from damaged or formatted drives.",
    socials: { linkedin: "#" }
  },
];

export const BLOG_POSTS: BlogPost[] = [
  { 
    id: 1, 
    title: "Why Practical Learning is the Future of Tech", 
    date: "Nov 15, 2024", 
    category: "Education", 
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    excerpt: "Discover why E.C.L focuses on 80% practical training and how it prepares students for real-world technical challenges better than traditional theory-only classes."
  },
  { 
    id: 2, 
    title: "5 Signs Your Hard Drive is About to Fail", 
    date: "Oct 28, 2024", 
    category: "Tips", 
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600",
    excerpt: "Don't wait for a crash. Learn the warning signs of hardware failure and how our data recovery team can help you safeguard your business information."
  },
  { 
    id: 3, 
    title: "Elite Services Expands Industrial Printing Wing", 
    date: "Oct 05, 2024", 
    category: "News", 
    img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=600",
    excerpt: "We've upgraded our facilities with the latest laser printing technology, enabling faster turnarounds and higher precision for all our corporate clients."
  },
  { 
    id: 4, 
    title: "Cybersecurity Basics for Small Businesses", 
    date: "Sept 12, 2024", 
    category: "Security", 
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
    excerpt: "In an increasingly connected world, protecting your business data is more important than ever. Our experts share essential tips for basic digital safety."
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  { 
    title: "NGO Hub Network Deployment", 
    category: "Networking", 
    date: "Jan 2024",
    desc: "Designed and implemented a full office LAN for a major international NGO branch in Monrovia, including server rack setup and secure Wi-Fi deployment.", 
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Digital Literacy Workshop 2023", 
    category: "Education", 
    date: "Dec 2023",
    desc: "Successfully trained over 150 local professionals in modern computer productivity tools during our annual summer intensive technical workshop.", 
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Industrial Printing Solution for Banking", 
    category: "Printing", 
    date: "Oct 2023",
    desc: "Developed a customized ID card printing and security workflow for a leading local financial institution, enhancing their internal security protocols.", 
    img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Corporate Fleet Maintenance - Retail Chain", 
    category: "Maintenance", 
    date: "Aug 2023",
    desc: "Currently managing the hardware maintenance of over 50 workstations across multiple retail locations, ensuring zero downtime for business operations.", 
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Forensic Data Recovery Case #442", 
    category: "Data Recovery", 
    date: "June 2023",
    desc: "Recovered 2TB of mission-critical legal documents from a physically damaged SSD for a prominent local law firm within 48 hours.", 
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "E-Commerce Platform for Local Store", 
    category: "Web Dev", 
    date: "May 2023",
    desc: "Built a fully responsive and secure online storefront for a local electronics retailer, integrating local payment solutions and inventory management.", 
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "James K.",
    role: "Business Owner",
    content: "Elite Computer Services saved my business data when all hope was lost. Truly technical experts.",
    rating: 5
  }
];
