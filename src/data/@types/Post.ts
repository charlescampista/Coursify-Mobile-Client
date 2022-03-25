export interface Post {
  id: number;
  title: string;
  status: string;
  featuredMedia: number; //accesable as featured_media in the endpoint
  content: string; //accesable as contend.rendered in the endpoint
  description: string; //accesable as excerpt.rendered in the endpoint
  pageViews: string; //accesable as page_views in the endpoint
  categories: number[];
}
