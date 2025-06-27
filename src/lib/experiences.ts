export type RedeemValue = { points: number; value: string };
export type Experience = {
  name: string;
  description: string;
  category: string;
  earnMultiplier: string;
  redeemValues: RedeemValue[];
  link: string;
};

export const experiences: Experience[] = [
  {
    name: "Nibs Etc.",
    description: "Granola that's good for you and the planet",
    category: "Shopping",
    earnMultiplier: "5x",
    redeemValues: [
      { points: 1755, value: "£15" },
      { points: 3510, value: "£30" },
      { points: 7020, value: "£60" },
    ],
    link: "https://nibsetc.com",
  },
  {
    name: "Urban Greens",
    description: "Fresh, healthy salad bowls",
    category: "Dining",
    earnMultiplier: "3x",
    redeemValues: [
      { points: 1200, value: "£10" },
      { points: 2400, value: "£20" },
      { points: 4800, value: "£40" },
    ],
    link: "https://urbangreens.co.uk",
  },
  {
    name: "Everyman Cinema",
    description: "Boutique cinema experience",
    category: "Entertainment",
    earnMultiplier: "2x",
    redeemValues: [
      { points: 2000, value: "£15" },
      { points: 4000, value: "£30" },
      { points: 8000, value: "£60" },
    ],
    link: "https://everymancinema.com",
  },
];
