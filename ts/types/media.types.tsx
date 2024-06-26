export type Media = {
  id: number;
  uuid: string;
  collection_name: string;
  name: string;
  file_name: string;
  mime_type: string;
  disk: string;
  size: number;
  manipulations: string[];
  custom_properties: string[];
  responsive_images: ResponsiveImages;
  order_column: number;
  created_at: string;
  updated_at: string;
  original_url: string;
  preview_url: string;
  positions: {
    banner: string;
    preview: string;
  };
};

type ResponsiveImages = {
  media_library_original?: MediaLibraryOriginal;
};
type MediaLibraryOriginal = {
  base64svg: string;
  urls: string[];
};
