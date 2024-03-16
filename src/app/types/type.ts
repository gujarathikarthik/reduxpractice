export interface productsType {
    id: number;
    title: string;
    description?: string;
    price?: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand: string;
    category?: string;
    thumbnail?: string;
    images?: string[];
}
export interface product {
    products: productsType[];
    total: number;
    skip: number;
    limit: number;
}

export interface addedProduct { id: number; title: string; brand: string; count: number; }
export interface addedProductNocount { id: number; title: string; brand: string; }