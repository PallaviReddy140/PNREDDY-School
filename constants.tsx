
import React from 'react';
import { 
  Calendar, 
  BookOpen, 
  Users, 
  Lightbulb,
  Microscope,
  Layout,
  ClipboardCheck,
  Languages,
  ShieldCheck,
  Trophy,
  Target,
  Shield,
  Star,
  Zap,
  Briefcase
} from 'lucide-react';
import { NavLink, Facility, GalleryItem } from './types';

export const SCHOOL_NAME = "PNREDDY Techno School";
export const SCHOOL_TAGLINE = "Strong Foundations. Brighter Futures.";
export const SCHOOL_SLOGAN_TELUGU = "విద్యే మా బలం – భవిష్యత్తే మా లక్ష్యం";
export const FOUNDER_NAME = "Sri P. Narsimha Reddy";
export const SCHOOL_PHONE = "9849501388";
export const SCHOOL_EMAIL = "info@pnreddytechno.com";

export const FOUNDER_IMAGE = "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=800&q=80"; 

export const LEADERSHIP_TEAM = [
  {
    id: 'chairman',
    name: FOUNDER_NAME,
    role: "Chairman",
    focus: "Vision & Philosophy",
    icon: <Target size={18} />,
    defaultImg: FOUNDER_IMAGE,
    bio: "The architect of our institutional vision, ensuring we remain rooted in traditional values while embracing modern progress."
  },
  {
    id: 'md',
    name: "Sri P. Bharath Reddy",
    role: "Managing Director",
    focus: "Strategy & Control",
    icon: <Shield size={18} />,
    defaultImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "Leading our strategic initiatives and maintaining high standards of operational control and infrastructure development."
  },
  {
    id: 'principal',
    name: "Mrs. P. Shailaja Reddy",
    role: "Principal",
    focus: "Education Quality",
    icon: <Star size={18} />,
    defaultImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Ensuring academic excellence and maintaining the highest pedagogical standards in the SSC curriculum."
  },
  {
    id: 'vp',
    name: "Mr. K. Ravi Teja",
    role: "Vice Principal",
    focus: "Academic Execution",
    icon: <Zap size={18} />,
    defaultImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    bio: "Directly overseeing classroom execution, teacher performance, and student discipline on a daily basis."
  },
  {
    id: 'admin_head',
    name: "Mr. M. Srinivas Rao",
    role: "Admin Head",
    focus: "Support Systems",
    icon: <Briefcase size={18} />,
    defaultImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    bio: "Managing campus security, transport, and facility support systems to ensure a safe environment for every child."
  }
];

export const EXTERNAL_SHEET_URL = ""; 

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'School Staff', path: '/staff' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Gallery', path: '/gallery' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'p1',
    type: 'image',
    category: 'Campus',
    year: '2024',
    title: 'Main Campus Entrance',
    caption: 'The landmark building of PNREDDY Techno School in Hyderabad.',
    thumbnail: 'https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&w=800&q=80',
    url: 'https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'p2',
    type: 'image',
    category: 'Events',
    year: '2024',
    title: 'Annual Day Celebrations',
    caption: 'Celebrating the cultural heritage of Telangana with traditional dance.',
    thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'p3',
    type: 'image',
    category: 'Labs',
    year: '2024',
    title: 'Advanced Science Lab',
    caption: 'Students exploring practical experiments in our physics laboratory.',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'v1',
    type: 'youtube',
    category: 'Events',
    year: '2024',
    title: 'School Virtual Tour',
    caption: 'Take a look inside our high-tech classrooms and facilities.',
    thumbnail: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    url: 'dQw4w9WgXcQ' // Sample ID
  },
  {
    id: 'v2',
    type: 'video',
    category: 'Sports',
    year: '2024',
    title: 'Sports Day Highlights',
    caption: 'Glimpses of our students competing in the annual sports meet.',
    thumbnail: 'https://images.unsplash.com/photo-1526676023641-72e4237584ec?auto=format&fit=crop&w=800&q=80',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4' // Sample MP4
  }
];

export const HERO_CARDS = [
  {
    title: "Established 2001",
    desc: "Over 2 decades of academic excellence in Hyderabad.",
    icon: <Calendar className="text-blue-600" size={24} />
  },
  {
    title: "SSC Excellence",
    desc: "Consistent 100% pass results in State Board exams.",
    icon: <Trophy className="text-blue-600" size={24} />
  },
  {
    title: "Expert Mentors",
    desc: "Qualified teachers dedicated to child development.",
    icon: <Users className="text-blue-600" size={24} />
  },
  {
    title: "Safe Environment",
    desc: "CCTV monitored campus with child-safe protocols.",
    icon: <ShieldCheck className="text-blue-600" size={24} />
  }
];

export const ACADEMIC_FEATURES = [
  {
    title: "IIT-Foundation",
    desc: "Building analytical skills for competitive exams from Class VI.",
    icon: <Microscope className="text-blue-500" />,
    bgColor: "bg-blue-50"
  },
  {
    title: "Digital Classrooms",
    desc: "Interactive smart boards for engaging multimedia learning.",
    icon: <Layout className="text-cyan-500" />,
    bgColor: "bg-cyan-50"
  },
  {
    title: "Skill Assessments",
    desc: "Weekly micro-tests to track and improve student performance.",
    icon: <ClipboardCheck className="text-orange-500" />,
    bgColor: "bg-orange-50"
  },
  {
    title: "Language Mastery",
    desc: "Strong emphasis on Telugu, Hindi, and English fluency.",
    icon: <Languages className="text-purple-500" />,
    bgColor: "bg-purple-50"
  }
];

export const FACILITIES: Facility[] = [
  {
    id: '1',
    title: "Smart Classrooms",
    description: "Every classroom is equipped with high-definition digital boards to bring lessons to life.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    icon: <Layout size={24} />
  },
  {
    id: '2',
    title: "Physics & Bio Labs",
    description: "Well-equipped laboratories designed for practical experimentation and scientific discovery.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    icon: <Microscope size={24} />
  },
  {
    id: '3',
    title: "Central Library",
    description: "A wide range of books and digital resources to encourage the habit of reading.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    icon: <BookOpen size={24} />
  },
  {
    id: '4',
    title: "Computer Center",
    description: "High-speed internet and modern hardware to provide essential digital literacy.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    icon: <Lightbulb size={24} />
  },
  {
    id: '5',
    title: "Indoor Sports Room",
    description: "Facilities for Chess, Carrom, and Table Tennis to promote mental and physical agility.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    icon: <Users size={24} />
  },
  {
    id: '6',
    title: "Safe Transport",
    description: "GPS-enabled school buses covering all major locations in the surrounding areas.",
    image: "https://images.unsplash.com/photo-1556611317-06488d07018c?auto=format&fit=crop&w=800&q=80",
    icon: <ShieldCheck size={24} />
  }
];
