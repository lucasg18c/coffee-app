import { Product } from "@/types";
import { featured } from "./products-mock";

export const productService = {
  getProductById: (id: number): Promise<Product | undefined> => {
    return new Promise((resolve) => {
      resolve(featured.find((p) => p.id === id));
    });
  },
};
