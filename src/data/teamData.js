export const teamData = [
  {
    id: 1,
    location: "Central Texas",
    name: "Islanders",
    owner: "Kelso Brooks",
    colors: {
      primary: "#2ba516",
      secondary: "#ff6d00",
      tertiary: "#ffffff",
      text: "#ffffff"
    },
    logo: "/images/islanders-logo.png"
  },
  {
    id: 2,
    location: "Cedar Park",
    name: "Ice Babies",
    owner: "Kyle Harris",
    colors: {
      primary: "#7437bf",
      secondary: "#ffffff",
      tertiary: "#cbcbcb",
      text: "#000000"
    },
    logo: "/images/icebabies-logo.png"
  },
  {
    id: 3,
    location: "West Loop",
    name: "Wenches",
    owner: "Dylon Hopp",
    colors: {
      primary: "#7437bf",
      secondary: "#ffffff",
      tertiary: "#cbcbcb",
      text: "#000000"
    },
    logo: "/images/wenches-logo.png"
  },
  {
    id: 4,
    location: "North Mexico",
    name: "Cartels",
    owner: "Ashley Melero",
    colors: {
      primary: "#7437bf",
      secondary: "#ffffff",
      tertiary: "#cbcbcb",
      text: "#000000"
    },
    logo: "/images/cartels-logo.png"
  },
  {
    id: 5,
    location: "Texas",
    name: "Toad Lickers",
    owner: "Matt Lessig",
    colors: {
      primary: "#7437bf",
      secondary: "#ffffff",
      tertiary: "#cbcbcb",
      text: "#000000"
    },
    logo: "/images/toad-lickers-logo.png"
  },
  {
    id: 6,
    location: "Mill Run",
    name: "Digital Rays",
    owner: "Jacob Phillips",
    colors: {
      primary: "#7437bf",
      secondary: "#ffffff",
      tertiary: "#cbcbcb",
      text: "#000000"
    },
    logo: "/images/digital-rays-logo.png"
  },
  {
    id: 7,
    location: "Pflugerville",
    name: "Beer",
    owner: "Chris Canik",
    colors: {
      primary: "#7437bf",
      secondary: "#ffffff",
      tertiary: "#cbcbcb",
      text: "#000000"
    },
    logo: "/images/beer-logo.png"
  },
  // Add more teams here...
];

export const getTeamById = (id) => {
  return teamData.find(team => team.id === id);
};

export const getTeamByName = (name) => {
  return teamData.find(team => team.name.toLowerCase() === name.toLowerCase());
};
