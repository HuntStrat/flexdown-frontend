interface Image {
    uri: string;
    is_base_image: boolean;
  }
  
  interface Property {
    sale_type: string;
    category: string;
    price: number;
    address: string;
    images: Image[];
  }
  
 export interface PropertyData {
    status: string;
    message: string;
    data: {
      property: Property;
    };
  }