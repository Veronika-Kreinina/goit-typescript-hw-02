export type ImagesState = {
  id: string;
  total: number;
  page: number;
  perPage: number;
  total_pages: number;
  urls: {
    small: string;
    regular: string;
  };
};
