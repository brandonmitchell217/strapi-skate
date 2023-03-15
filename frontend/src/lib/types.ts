export interface pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ImageProps {
  data?: {
    attributes: {
      formats: {
        thumbnail: {
          url: string;
        };
      };
      url: string;
    };
    bg?: {
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
}
export interface AttributesProps {
  key?: string | number;
  title: string;
  location?: string;
  description?: string;
  category?: string;
  name?: string;
  hometown?: string;
  stock?: number;
  bg?: ImageProps;
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
}

export interface DataProps {
  id: number;
  attributes: AttributesProps;
}

export interface SingleProps {
  data: {
    id: number;
    attributes: AttributesProps;
  };
  meta: { pagination: pagination };
}

export interface Props {
  data: {
    id: number;
    attributes: AttributesProps;
  }[];
  meta: { pagination: pagination };
}

export interface RestaurantProps {
  restaurants: Props;
}
export interface ProductsProps {
  products: Props;
}
export interface ProductProps {
  product: SingleProps;
}

export interface TeamMembersProps {
  teamMembers: Props;
}
