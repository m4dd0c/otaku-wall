interface IWall {
  id: number;
  id_v2: string;
  image_url: string;
  sample_url: string;
  image_size: number;
  image_width: number;
  image_height: number;
  rating: string;
  is_original: boolean;
  is_screenshot: boolean;
  is_flagged: boolean;
  is_animated: boolean;
  artist: string | null;
  characters: Character[];
  tags: Tag[];
  created_at: number;
  updated_at: number;
}

interface Character {
  id: number;
  id_v2: string;
  name: string;
  description: string;
  sub: string;
  is_nsfw: boolean;
}

interface Tag {
  id: number;
  id_v2: string;
  name: string;
  description: string;
  sub: string;
  is_nsfw: boolean;
}
