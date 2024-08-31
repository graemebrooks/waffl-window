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
  // Add more teams here...
];

export const getTeamById = (id) => {
  return teamData.find(team => team.id === id);
};

export const getTeamByName = (name) => {
  return teamData.find(team => team.name.toLowerCase() === name.toLowerCase());
};
