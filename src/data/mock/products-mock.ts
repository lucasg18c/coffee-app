import { Product } from "@/types";

export const featured: Product[] = [
  {
    id: 1,
    title: "Espresso Brown Coffee",
    images: [
      require("@assets/coffee_2.png"),
      require("@assets/coffee_1.png"),
      require("@assets/coffee_3.png"),
    ],
    price: 5.99,
    description: "Complex flavor",
    rating: 4.5,
    reviews: 10000,
  },
  {
    id: 2,
    title: "Espresso Brown Coffee",
    images: [require("@assets/coffee_3.png")],
    price: 5.99,
    description: "Complex flavor",
    rating: 3.5,
    reviews: 54,
  },
  {
    id: 3,
    title: "Espresso Brown Coffee",
    images: [require("@assets/coffee_4.png")],
    price: 5.99,
    description: "Complex flavor",
    rating: 4,
    reviews: 95000,
  },
];
