import { api } from "../utils/constants";

export const products = [
  {
    id: "xYerUi",
    name: "Coffee Machine 1",
    price: 49.0,
    quantity: 1,
    comments: 1,
    rating: 4,
    basic: true,
    images: [
      {
        image: api + "200/300",
      },
      {
        image: api + "200/300?v=1",
      },
      {
        image: api + "200/300?v=2",
      },
    ],
    image: "/assets/img/1.png",
  },
  {
    id: "mXxTbb",
    name: "Coffee Machine 2",
    price: 99.99,
    quantity: 1,
    comments: 3,
    rating: 3,
    basic: false,
    images: [
      {
        image: api + "200/300",
      },
      {
        image: api + "200/300?v=1",
      },
      {
        image: api + "200/300?v=2",
      },
    ],
    image: "/assets/img/1.png",
  },
  {
    id: "c6xueB",
    name: "Coffee Machine 3",
    price: 184.43,
    quantity: 1,
    comments: 2,
    rating: 4,
    basic: true,
    images: [
      {
        image: api + "200/300",
      },
      {
        image: api + "200/300?v=1",
      },
      {
        image: api + "200/300?v=2",
      },
    ],
    image: "/assets/img/1.png",
  },
  {
    id: "c1tbl6",
    name: "Coffee Machine 4",
    price: 41.41,
    quantity: 1,
    comments: 2,
    rating: 2,
    basic: false,
    images: [
      {
        image: api + "200/300",
      },
      {
        image: api + "200/300?v=1",
      },
      {
        image: api + "200/300?v=2",
      },
    ],
    image: "/assets/img/1.png",
  },
];

export const prices = [
  { label: "$1 - $50", value: [1, 50] },
  { label: "$51 - $100", value: [51, 100] },
  { label: "$101 - $200", value: [101, 200] },
];
export const options = ["Relevant", "Price", "Rating"];
