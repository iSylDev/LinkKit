export interface Bookmark {
  id: string
  user_id?: string;
  url: string;
  image_url: string | null
  title: string;
  description: string;
  is_archived: boolean;
  is_pinned: boolean;
  view_count: number
  last_visited_at: string;
  created_at: string;
  tags:[];
}

export type NewBookmarkProp = {
  title: string;
  description: string;
  websiteurl: string;
  tags: string[];
}

export type StatsShowcaseProp = {
  view_count: number
  last_visited_at: string;
  created_at: string;
  is_pinned: boolean
}