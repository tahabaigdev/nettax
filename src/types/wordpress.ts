export interface WpPost {
  link: string;
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf?: {
    hero_subtitle?: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string;
    }[];
    ["wp:term"]?: {
      name: string;
    }[][];
    author?: {
      name: string;
    }[];
  };
  date: string; // 👈 Add this line
}
