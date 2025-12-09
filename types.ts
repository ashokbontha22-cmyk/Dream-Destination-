export interface Destination {
  id: number;
  title: string;
  category: string;
  image: string;
  priceStart: string;
}

export interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  pricePerNight: string;
  image: string;
  tag: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}