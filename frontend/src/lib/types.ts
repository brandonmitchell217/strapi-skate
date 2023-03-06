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
      key?: string | number;
      title: string;
      location?: string;
      description?: string;
      category?: string;
      name?: string;
      hometown?: string;
      stock?: number;
      age?: number;
      image?: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
            url: string;
          };
        };
      };
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
export interface ProductProps {
  products: Props;
}

export interface TeamMembersProps {
  teamMembers: Props;
}
