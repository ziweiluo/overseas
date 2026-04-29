export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceCard {
  title: string;
  subtitle: string;
  highlights: string[];
  accent?: 'blue' | 'cyan' | 'navy';
}

export interface UseCaseItem {
  title: string;
  products: string;
  value: string;
}

export interface CaseItem {
  title: string;
  summary: string;
  result: string;
}

export interface ArticleSection {
  title: string;
  description: string;
  bullets: string[];
}