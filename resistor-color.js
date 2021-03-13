export const colorCode = (color) => {
  const checkArray = Array.isArray(color);
  for (let i = 0; i < COLORS.length; i++) {
    COLORS[i] = COLORS[i].toLowerCase();
  }
  if (checkArray) {
    return COLORS;
  } else {
    return COLORS.indexOf(color.toLowerCase());
  }
};

export const COLORS = [
  "Black",
  "Brown",
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Violet",
  "Grey",
  "White"
];

