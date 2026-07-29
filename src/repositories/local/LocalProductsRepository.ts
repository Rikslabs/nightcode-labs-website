import type { ProductsRepository } from "../contracts";
import type { HeadquartersProvider } from "@/providers";
export class LocalProductsRepository implements ProductsRepository { constructor(private readonly provider: HeadquartersProvider) {} getProducts() { return this.provider.getProducts(); } getFeaturedProduct() { return this.getProducts().find((product) => product.featured); } getLaboratoryPipeline() { return this.provider.getLaboratoryPipeline(); } getProductStatus() { return this.provider.getProductStatus(); } }
