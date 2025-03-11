export type ImagesState = {
  id: string;
  total: number;
  page: number;
  perPage: number;
  total_pages: number;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
};
