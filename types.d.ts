type Product = {
    id: string;
    name: string;
    price: number;
    orpr: number;
    // Add more properties as needed, such as description, image, category, etc.
    description?: string;
    images: Array<{ image: string | { url: string } }>; 
    category?: string;
    seller?: string;
   
  };
