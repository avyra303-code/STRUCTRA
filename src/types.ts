export type Category = 'Productivity' | 'Routines' | 'Aesthetic Setups' | 'Self-Improvement';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: Category;
  date: string;
  coverImage: string;
  content: string;
  readingTime: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'Tool' | 'Template' | 'Setup';
  link: string;
  description: string;
  image: string;
  price?: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  link: string;
  category: string;
}
