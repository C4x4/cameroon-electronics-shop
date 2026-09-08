export class Product {
    constructor(
        public readonly id: string,
        public readonly nameEn: string,
        public readonly nameFr: string,
        public readonly priceXaf: number,
        public readonly warranty: string,
        public readonly imageUrl: string | null,
        public readonly category: string,
        public readonly brand: string
    ) {}


    public getFormattedPrice(): string {
        return new Intl.NumberFormat('fr-CM', { style: 'currency', currency: 'XAF' }).format(this.priceXaf);
    }
}