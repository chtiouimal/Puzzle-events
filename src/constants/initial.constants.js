export const INITIAL_PUZZLE_DATA = {
  loggedIn: false,
  hasAccount: false,
  user: {},
  about: true,
};

export const REGIONS = [
  {
    value: "1",
    label: "Ariana",
  },
  {
    value: "2",
    label: "Béja",
  },
  {
    value: "3",
    label: "Ben Arous",
  },
  {
    value: "4",
    label: "Bizerte",
  },
  {
    value: "5",
    label: "Gabès",
  },
  {
    value: "6",
    label: "Gafsa",
  },
  {
    value: "7",
    label: "Jendouba",
  },
  {
    value: "8",
    label: "Kairouan",
  },
  {
    value: "9",
    label: "Kasserine",
  },
  {
    value: "10",
    label: "Kebili",
  },
  {
    value: "11",
    label: "Kef",
  },
  {
    value: "12",
    label: "Mahdia",
  },
  {
    value: "13",
    label: "Manouba",
  },
  {
    value: "14",
    label: "Medenine",
  },
  {
    value: "15",
    label: "Monastir",
  },
  {
    value: "16",
    label: "Nabeul",
  },
  {
    value: "17",
    label: "Sfax",
  },
  {
    value: "18",
    label: "Sidi Bouzid",
  },
  {
    value: "19",
    label: "Siliana",
  },
  {
    value: "20",
    label: "Sousse",
  },
  {
    value: "21",
    label: "Tataouine",
  },
  {
    value: "22",
    label: "Tozeur",
  },
  {
    value: "23",
    label: "Tunis",
  },
  {
    value: "24",
    label: "Zaghouan",
  },
];

export const TILE_COUNT = 1;
export const GRID_SIZE = Math.ceil(Math.sqrt(TILE_COUNT));
export const BOARD_SIZE = window.innerHeight - 192;
