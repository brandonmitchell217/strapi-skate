export interface pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Props {
  data: {
    id: number;
    attributes: {
      title?: string;
      location?: string;
      description?: string;
      image?: string;
      price?: number;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }[];
  meta: { pagination: pagination };
}

export interface RestaurantProps {
  restaurants: Props;
}
