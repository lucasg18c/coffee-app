export type Product = {
  id: number;
  image: any;
  title: string;
  description?: string;
  price: number;

  /**
   * Amount measured in "stars" to rate this product (1-5) allows 0.5 in between values
   */
  rating: number;

  /**
   * Amount of people who reviwed this product
   */
  reviews: number;
};
