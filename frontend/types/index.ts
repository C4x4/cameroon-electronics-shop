export interface ProductResponse {
    id: string;
    nameEn: string;
    nameFr: string;
    priceXaf: number;
    formattedPrice: string;
    warranty: string;
    imageUrl: string | null;
}