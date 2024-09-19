const today = new Date();

today.setUTCHours(0, 0, 0, 0);

const yesterday = new Date(Date.now() - 86400000);

yesterday.setUTCHours(0, 0, 0, 0);

export const stock = [
  {
    name: "BVSP",
    date: [today.toISOString(), yesterday.toISOString()],
  },
  {
    name: "IFIX",
    date: [today.toISOString(), yesterday.toISOString()],
  },
];
