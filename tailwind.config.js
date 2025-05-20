/** @type {import('tailwindcss').Config} */

import { a } from "react-spring";

const themeColors = {
  transparent: "transparent",
  white: "#ffffff",
  black: "#000000",
  pink: "#ff99fb",
  darkSlate: "rgba(73, 75, 112, 1)",
  100: "rgba(255, 238, 237, 1)",
  110: "rgba(255, 238, 237, 0.1)",
  120: "rgba(255, 238, 237, 0.2)",
  130: "rgba(255, 238, 237, 0.3)",
  140: "rgba(255, 238, 237, 0.4)",
  150: "rgba(255, 238, 237, 0.5)",
  160: "rgba(255, 238, 237, 0.6)",
  170: "rgba(255, 238, 237, 0.7)",
  180: "rgba(255, 238, 237, 0.8)",
  190: "rgba(255, 238, 237, 0.9)",

  200: "rgba(123, 253, 253, 1)",
  210: "rgba(123, 253, 253, 0.1)",
  220: "rgba(123, 253, 253, 0.2)",
  230: "rgba(123, 253, 253, 0.3)",
  240: "rgba(123, 253, 253, 0.4)",
  250: "rgba(123, 253, 253, 0.5)",
  260: "rgba(123, 253, 253, 0.6)",
  270: "rgba(123, 253, 253, 0.7)",
  280: "rgba(123, 253, 253, 0.8)",
  290: "rgba(123, 253, 253, 0.9)",

  300: "rgba(255, 189, 189, 1)",
  310: "rgba(255, 189, 189, 0.1)",
  320: "rgba(255, 189, 189, 0.2)",
  330: "rgba(255, 189, 189, 0.3)",
  340: "rgba(255, 189, 189, 0.4)",
  350: "rgba(255, 189, 189, 0.5)",
  360: "rgba(255, 189, 189, 0.6)",
  370: "rgba(255, 189, 189, 0.7)",
  380: "rgba(255, 189, 189, 0.8)",
  390: "rgba(255, 189, 189, 0.9)",

  400: "rgba(225, 171, 255, 1)",
  410: "rgba(225, 171, 255, 0.1)",
  420: "rgba(225, 171, 255, 0.2)",
  430: "rgba(225, 171, 255, 0.3)",
  440: "rgba(225, 171, 255, 0.4)",
  450: "rgba(225, 171, 255, 0.5)",
  460: "rgba(225, 171, 255, 0.6)",
  470: "rgba(225, 171, 255, 0.7)",
  480: "rgba(225, 171, 255, 0.8)",
  490: "rgba(225, 171, 255, 0.9)",

  500: "rgba(127, 111, 163, 1)",
  510: "rgba(127, 111, 163, 0.1)",
  520: "rgba(127, 111, 163, 0.2)",
  530: "rgba(127, 111, 163, 0.3)",
  540: "rgba(127, 111, 163, 0.4)",
  550: "rgba(127, 111, 163, 0.5)",
  560: "rgba(127, 111, 163, 0.6)",
  570: "rgba(127, 111, 163, 0.7)",
  580: "rgba(127, 111, 163, 0.8)",
  590: "rgba(127, 111, 163, 0.9)",

  600: "rgba(0, 107, 120, 1)",
  610: "rgba(0, 107, 120, 0.1)",
  620: "rgba(0, 107, 120, 0.2)",
  630: "rgba(0, 107, 120, 0.3)",
  640: "rgba(0, 107, 120, 0.4)",
  650: "rgba(0, 107, 120, 0.5)",
  660: "rgba(0, 107, 120, 0.6)",
  670: "rgba(0, 107, 120, 0.7)",
  680: "rgba(0, 107, 120, 0.8)",
  690: "rgba(0, 107, 120, 0.9)",

  700: "rgba(77, 66, 105, 1)",
  710: "rgba(77, 66, 105, 0.1)",
  720: "rgba(77, 66, 105, 0.2)",
  730: "rgba(77, 66, 105, 0.3)",
  740: "rgba(77, 66, 105, 0.4)",
  750: "rgba(77, 66, 105, 0.5)",
  760: "rgba(77, 66, 105, 0.6)",
  770: "rgba(77, 66, 105, 0.7)",
  780: "rgba(77, 66, 105, 0.8)",
  790: "rgba(77, 66, 105, 0.9)",

  800: "rgba(0, 53, 77, 1)",
  810: "rgba(0, 53, 77, 0.1)",
  820: "rgba(0, 53, 77, 0.2)",
  830: "rgba(0, 53, 77, 0.3)",
  840: "rgba(0, 53, 77, 0.4)",
  850: "rgba(0, 53, 77, 0.5)",
  860: "rgba(0, 53, 77, 0.6)",
  870: "rgba(0, 53, 77, 0.7)",
  880: "rgba(0, 53, 77, 0.8)",
  890: "rgba(0, 53, 77, 0.9)",

  900: "rgba(3, 6, 33, 1)",
  910: "rgba(3, 6, 33, 0.1)",
  920: "rgba(3, 6, 33, 0.2)",
  930: "rgba(3, 6, 33, 0.3)",
  940: "rgba(3, 6, 33, 0.4)",
  950: "rgba(3, 6, 33, 0.5)",
  960: "rgba(3, 6, 33, 0.6)",
  970: "rgba(3, 6, 33, 0.7)",
  980: "rgba(3, 6, 33, 0.8)",
  990: "rgba(3, 6, 33, 0.9)",
};

const generateVhUnits = () => {
  const units = {};
  for (let i = 1; i <= 1000; i++) {
    const value = `${i / 10}vh`;
    units[value] = value;
  }
  return units;
};

const generateFontSizeVh = () => {
  const fontSizes = {};
  for (let i = 1; i <= 1000; i++) {
    const value = `${i / 10}vh`;
    fontSizes[value] = [value, { lineHeight: value }];
  }
  return fontSizes;
};

const generateVwUnits = () => {
  const units = {};
  for (let i = 1; i <= 1000; i++) {
    const value = `${i / 10}vw`;
    units[value] = value;
  }
  return units;
};

const generateFontSizeVw = () => {
  const fontSizes = {};
  for (let i = 1; i <= 1000; i++) {
    const value = `${i / 10}vw`;
    fontSizes[value] = [value, { lineHeight: value }];
  }
  return fontSizes;
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

// MAKING A PLUGIN:
// const NameOfPlugin = plugin(function ({ addUtilities }) {
//   const utilities = {
//     ".className": { styles },
//   };

//   addUtilities(utilities, ["responsive", "hover"]);
// });

// const NameOfPlugin = plugin(function ({ addUtilities }) {
//   const utilities = {
//     ".className": { styles },
//   };

//   addUtilities(utilities, ["responsive", "hover"]);
// });
const transitionTimingFunctionsPlugin = plugin(function ({
  addUtilities,
  theme,
}) {
  const timingFunctions = theme("transitionTimingFunction");
  const newUtilities = Object.keys(timingFunctions).reduce((acc, key) => {
    // Creating shorter class names, e.g., .ease-elastic
    const name = `.ease-${key}`;
    acc[name] = { transitionTimingFunction: timingFunctions[key] };
    return acc;
  }, {});

  addUtilities(newUtilities, ["responsive", "hover"]);
});

const transformStyles = plugin(function ({ addUtilities }) {
  const utilities = {
    ".transform-style-3d": {
      transformStyle: "preserve-3d",
    },
    // Add more custom utilities as needed
  };
  addUtilities(utilities, ["responsive", "hover"]);
});

const backfaceVisibilityPlugin = plugin(function ({ addUtilities }) {
  const utilities = {
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
  };

  addUtilities(utilities, ["responsive", "hover"]);
});

const perspectivePlugin = plugin(function ({ addUtilities }) {
  const utilities = {
    ".perspective-30": { perspective: "30vh" },
    ".perspective-40": { perspective: "40vh" },
    ".perspective-50": { perspective: "50vh" },
    ".perspective-60": { perspective: "60vh" },
    ".perspective-70": { perspective: "70vh" },
    ".perspective-80": { perspective: "80vh" },
    ".perspective-90": { perspective: "90vh" },
    ".perspective-100": { perspective: "100vh" },
    ".perspective-110": { perspective: "110vh" },
    ".perspective-120": { perspective: "120vh" },
    ".perspective-130": { perspective: "130vh" },
    ".perspective-140": { perspective: "140vh" },
    ".perspective-150": { perspective: "150vh" },
    ".perspective-160": { perspective: "160vh" },
    ".perspective-170": { perspective: "170vh" },
    ".perspective-180": { perspective: "180vh" },
    ".perspective-190": { perspective: "190vh" },
    ".perspective-200": { perspective: "200vh" },
  };

  addUtilities(utilities, ["responsive", "hover"]);
});

// ROTATE PLUGIN
const rotatePlugin = plugin(function ({ addUtilities }) {
  const increments = 5; // Set to your desired increment
  const maxRotation = 180;
  const rotations = Array.from(
    { length: maxRotation / increments + 1 },
    (_, i) => i * increments
  );

  const utilities = Object.assign(
    {},
    ...rotations.flatMap((value) => [
      {
        [`.rotate-${value}`]: {
          transform: `rotate(${value}deg)`,
        },
      },
      value !== 0
        ? {
            [`.\\-rotate-${value}`]: {
              transform: `rotate(-${value}deg)`,
            },
          }
        : {},
    ])
  );

  addUtilities(utilities, ["responsive", "hover"]);
});

const buttonStyles = plugin(function ({ addUtilities, theme }) {
  // Base styles for all buttons, excluding shadow properties
  const baseButtonStyles = {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: "0.1vh",
    transition: "all 0.3s ease-in-out",
  };

  // Function to generate button styles with specific colors and shadows
  function generateButtonStyles(
    fontSize,
    height,
    bgColor,
    color,
    borderColor,
    hoverBgColor,
    hoverColor,
    hoverBorderColor,
    hoverTextStrokeWidth = "0.1vh"
  ) {
    return {
      ...baseButtonStyles,
      fontSize,
      height,
      backgroundColor: theme(`colors.${bgColor}`, "transparent"),
      color: theme(`colors.${color}`, "currentColor"),
      borderColor: theme(`colors.${borderColor}`, "transparent"),
      boxShadow: theme("boxShadow.shadowNarrowNormal"),
      textShadow: theme("textShadow.textShadow"),
      "&:hover": {
        backgroundColor: theme(`colors.${hoverBgColor}`, "transparent"),
        color: theme(`colors.${hoverColor}`, "currentColor"),
        borderColor: theme(`colors.${hoverBorderColor}`, "transparent"),
        boxShadow: theme("boxShadow.metallicEdgesMd"),
        textShadow: theme("textShadow.lightTextShadow"),
        "-webkit-text-stroke-width": hoverTextStrokeWidth,
        "-webkit-text-stroke-color": theme(
          `colors.${hoverBorderColor}`,
          "currentColor"
        ), // Use the border color for stroke color on hover
      },
    };
  }

  // Function to generate unstyled button styles without shadows
  function generateUnstyledButtonStyles(fontSize, height) {
    return {
      ...baseButtonStyles,
      fontSize,
      height,
      backgroundColor: "transparent",
      color: "currentColor",
      borderColor: "transparent",
      boxShadow: "none", // No box shadow for unstyled buttons
      "&:hover": {
        backgroundColor: "transparent",
        color: "currentColor",
        borderColor: "transparent",
        boxShadow: "none", // No box shadow on hover for unstyled buttons
      },
    };
  }

  // Utilities for specific button types
  const utilities = {
    ".normalButtonStyles": generateButtonStyles(
      "2.1vh", // fontSize
      "3.5vh", // height
      "col.600", // bgColor
      "col.100", // color
      "col.900", // borderColor
      "col.300", // hoverBgColor
      "col.900", // hoverColor
      "col.970" //hoverBorderColor
    ),
    ".smallButtonStyles": generateButtonStyles(
      "1.6vh", // fontSize
      "2.9vh", // height
      "col.600", // bgColor
      "col.100", // color
      "col.900", // borderColor
      "col.300", // hoverBgColor
      "col.900", // hoverColor
      "col.970" //hoverBorderColor
    ),
    ".negativeButtonStyles": generateButtonStyles(
      "2.1vh", // fontSize
      "3.5vh", // height
      "col.pink", // bgColor
      "col.100", // color
      "col.800", // borderColor
      "col.500", // hoverBgColor
      "col.900", // hoverColor
      "col.200" //hoverBorderColor
    ),
    ".smallNegativeButtonStyles": generateButtonStyles(
      "1.6vh", // fontSize
      "2.9vh", // height
      "col.pink", // bgColor
      "col.100", // color
      "col.800", // borderColor
      "col.500", // hoverBgColor
      "col.900", // hoverColor
      "col.200" //hoverBorderColor
    ),
    ".unstyledButtonStyles": generateUnstyledButtonStyles("2.1vh", "3.5vh"),
    ".smallUnstyledButtonStyles": generateUnstyledButtonStyles(
      "1.6vh",
      "2.9vh"
    ),
  };

  addUtilities(utilities, ["responsive", "hover"]);
});

const typographyPlugin = plugin(function ({ addUtilities }) {
  const utilities = {
    ".text-xs-tighter": { fontSize: "1.2vh", lineHeight: "1.2vh" },
    ".text-xs-normal": { fontSize: "1.2vh", lineHeight: "1.8vh" },
    ".text-xs-tight": { fontSize: "1.2vh", lineHeight: "1.4vh" },
    ".text-xs-loose": { fontSize: "1.2vh", lineHeight: "2.2vh" },
    ".text-xs-looser": { fontSize: "1.2vh", lineHeight: "2.6vh" },

    ".text-sm-tighter": { fontSize: "1.5vh", lineHeight: "1.5vh" },
    ".text-sm-normal": { fontSize: "1.5vh", lineHeight: "2.1vh" },
    ".text-sm-tight": { fontSize: "1.5vh", lineHeight: "1.7vh" },
    ".text-sm-loose": { fontSize: "1.5vh", lineHeight: "2.5vh" },
    ".text-sm-looser": { fontSize: "1.5vh", lineHeight: "2.9vh" },

    ".text-md-tighter": { fontSize: "2vh", lineHeight: "2vh" },
    ".text-md-normal": { fontSize: "2vh", lineHeight: "2.5vh" },
    ".text-md-tight": { fontSize: "2vh", lineHeight: "2.2vh" },
    ".text-md-loose": { fontSize: "2vh", lineHeight: "3vh" },
    ".text-md-looser": { fontSize: "2vh", lineHeight: "3.9vh" },

    ".text-lg-tighter": { fontSize: "2.4vh", lineHeight: "2.4vh" },
    ".text-lg-normal": { fontSize: "2.4vh", lineHeight: "3vh" },
    ".text-lg-tight": { fontSize: "2.4vh", lineHeight: "2.6vh" },
    ".text-lg-loose": { fontSize: "2.4vh", lineHeight: "3.4vh" },
    ".text-lg-looser": { fontSize: "2.4vh", lineHeight: "3.8vh" },

    ".text-xl-tighter": { fontSize: "3.1vh", lineHeight: "3.1vh" },
    ".text-xl-normal": { fontSize: "3.1vh", lineHeight: "3.7vh" },
    ".text-xl-tight": { fontSize: "3.1vh", lineHeight: "3.2vh" },
    ".text-xl-loose": { fontSize: "3.1vh", lineHeight: "4.1vh" },
    ".text-xl-looser": { fontSize: "3.1vh", lineHeight: "4.5vh" },

    ".text-xxl-tighter": { fontSize: "3.6vh", lineHeight: "3.6vh" },
    ".text-xxl-normal": { fontSize: "3.6vh", lineHeight: "4.2vh" },
    ".text-xxl-tight": { fontSize: "3.6vh", lineHeight: "3.8vh" },
    ".text-xxl-loose": { fontSize: "3.6vh", lineHeight: "4.6vh" },
    ".text-xxl-looser": { fontSize: "3.6vh", lineHeight: "5vh" },

    ".text-xxxl-tighter": { fontSize: "4.1vh", lineHeight: "4.1vh" },
    ".text-xxxl-normal": { fontSize: "4.1vh", lineHeight: "4.7vh" },
    ".text-xxxl-tight": { fontSize: "4.1vh", lineHeight: "4.3vh" },
    ".text-xxxl-loose": { fontSize: "4.1vh", lineHeight: "5.1vh" },
    ".text-xxxl-looser": { fontSize: "4.1vh", lineHeight: "5.5vh" },

    ".text-mega-tighter": { fontSize: "4.3vh", lineHeight: "4.3vh" },
    ".text-mega-normal": { fontSize: "4.3vh", lineHeight: "4.9vh" },
    ".text-mega-tight": { fontSize: "4.3vh", lineHeight: "4.5vh" },
    ".text-mega-loose": { fontSize: "4.3vh", lineHeight: "5.3vh" },
    ".text-mega-looser": { fontSize: "4.3vh", lineHeight: "5.7vh" },

    ".text-too-big-tighter": { fontSize: "4.5vh", lineHeight: "4.5vh" },
    ".text-too-big-normal": { fontSize: "4.5vh", lineHeight: "5.1vh" },
    ".text-too-big-tight": { fontSize: "4.5vh", lineHeight: "4.7vh" },
    ".text-too-big-loose": { fontSize: "4.5vh", lineHeight: "5.5vh" },
    ".text-too-big-looser": { fontSize: "4.5vh", lineHeight: "5.9vh" },

    ".text-insane-tighter": { fontSize: "5.1vh", lineHeight: "5.1vh" },
    ".text-insane-normal": { fontSize: "5.1vh", lineHeight: "5.7vh" },
    ".text-insane-tight": { fontSize: "5.1vh", lineHeight: "5.3vh" },
    ".text-insane-loose": { fontSize: "5.1vh", lineHeight: "6.1vh" },
    ".text-insane-looser": { fontSize: "5.1vh", lineHeight: "6.5vh" },
  };

  addUtilities(utilities, ["responsive", "hover"]);
});

const customBackgroundsPlugin = plugin(function ({ addUtilities, theme }) {
  const generateBackgroundUtilities = () => {
    const utilities = {};
    // Assuming you have defined your colors under 'colors.col' and gradients under 'backgroundImage'
    const colors = theme("colors.col", {});
    const gradients = theme("backgroundImage", {});

    Object.keys(colors).forEach((color) => {
      Object.keys(gradients).forEach((gradient) => {
        const className = `.bg-${color}-${gradient.replace(/\./g, "-")}`; // Sanitizing class name
        utilities[className] = {
          backgroundColor: colors[color],
          backgroundImage: gradients[gradient],
        };
      });
    });

    return utilities;
  };

  addUtilities(generateBackgroundUtilities(), ["responsive", "hover"]);
});

const customBordersPlugin = plugin(function ({ addUtilities, theme }) {
  // Define the sizes with corresponding border widths
  const sizes = {
    sm: "0.1vh",
    md: "0.2vh",
    lg: "0.3vh",
    xl: "0.4vh",
  };

  // Colors to iterate over
  const colorKeys = [
    "100",
    "190",
    "180",
    "170",
    "160",
    "150",
    "200",
    "290",
    "280",
    "270",
    "260",
    "250",
    "300",
    "390",
    "380",
    "370",
    "360",
    "350",
    "400",
    "490",
    "480",
    "470",
    "460",
    "450",
    "500",
    "590",
    "580",
    "570",
    "560",
    "550",
    "600",
    "690",
    "680",
    "670",
    "660",
    "650",
    "700",
    "790",
    "780",
    "770",
    "760",
    "750",
    "800",
    "890",
    "880",
    "870",
    "860",
    "850",
    "900",
    "990",
    "980",
    "970",
    "960",
    "950",
  ];

  const borderUtilities = {};

  // Iterate over each size
  Object.entries(sizes).forEach(([size, borderWidth]) => {
    // For each color
    colorKeys.forEach((color) => {
      const colorKey = `col.${color}`;
      const borderColor = theme(`colors.${colorKey}`, "currentColor");

      // Generate utility for each size and color
      borderUtilities[`.border-${color}-${size}`] = {
        borderWidth: borderWidth,
        borderStyle: "solid",
        borderColor: borderColor,
      };

      // Optional: Generate hover state utilities if needed
      borderUtilities[`.hover\\:border-${color}-${size}:hover`] = {
        borderWidth: borderWidth,
        borderStyle: "solid",
        borderColor: borderColor,
      };

      // Optional: Generate utilities for specific sides if needed (e.g., bottom border)
      borderUtilities[`.border-b-${color}-${size}`] = {
        borderBottomWidth: borderWidth,
        borderStyle: "solid",
        borderBottomColor: borderColor,
      };
      borderUtilities[`.border-t-${color}-${size}`] = {
        borderTopWidth: borderWidth,
        borderStyle: "solid",
        borderTopColor: borderColor,
      };
      borderUtilities[`.border-r-${color}-${size}`] = {
        borderRightWidth: borderWidth,
        borderStyle: "solid",
        borderRightColor: borderColor,
      };
      borderUtilities[`.border-l-${color}-${size}`] = {
        borderLeftWidth: borderWidth,
        borderStyle: "solid",
        borderLeftColor: borderColor,
      };
    });
  });

  // Add the generated utilities to Tailwind
  addUtilities(borderUtilities, ["responsive", "hover"]);
});

export default {
  content: ["./app/**/*.{tsx,ts,jsx,js}"],
  theme: {
    extend: {
      colors: { col: themeColors },
      height: Object.assign(
        { "0px": "0px" },
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}svh`]: `${(i + 1) / 10}svh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
          [`${i + 1}px`]: `${i + 1}px`,
        }))
      ),
      minHeight: Object.assign(
        { "0px": "0px" },
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}svh`]: `${(i + 1) / 10}svh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
          [`${i + 1}px`]: `${i + 1}px`,
        }))
      ),
      maxHeight: Object.assign(
        { "0px": "0px" },
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}svh`]: `${(i + 1) / 10}svh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
          [`${i + 1}px`]: `${i + 1}px`,
        }))
      ),
      width: Object.assign(
        { "0px": "0px" },
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}svh`]: `${(i + 1) / 10}svh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
          [`${i + 1}px`]: `${i + 1}px`,
        }))
      ),
      maxWidth: Object.assign(
        { "0px": "0px" },
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}svh`]: `${(i + 1) / 10}svh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
          [`${i + 1}px`]: `${i + 1}px`,
        }))
      ),
      minWidth: Object.assign(
        { "0px": "0px" },
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}svh`]: `${(i + 1) / 10}svh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
          [`${i + 1}px`]: `${i + 1}px`,
        }))
      ),
      padding: Object.assign(
        { "0px": "0px" },
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}svh`]: `${(i + 1) / 10}svh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
          [`${i + 1}px`]: `${i + 1}px`,
        }))
      ),
      gap: Object.assign(
        { "0px": "0px" },
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}svh`]: `${(i + 1) / 10}svh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
          [`${i + 1}px`]: `${i + 1}px`,
        }))
      ),
      spacing: Object.assign(
        { "0px": "0px" },
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}svh`]: `${(i + 1) / 10}svh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
          [`${i + 1}px`]: `${i + 1}px`,
        }))
      ),
      borderRadius: Object.assign(
        {
          xxs: "0.3vh",
          xs: "0.5vh",
          sm: "0.7vh",
          md: "1vh",
          lg: "1.5vh",
          xl: "2vh",
          xxl: "3vh",
          xxxl: "4vh",
          full: "100%",
        },
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}svh`]: `${(i + 1) / 10}svh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
          [`${i + 1}px`]: `${i + 1}px`,
        }))
      ),
      transition: ["hover", "focus"],
      duration: ["hover", "focus"],
      scale: {
        // add ability to scale by 0.1% from 0.1% to 100%
        // use props such as scale-105
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        })),
      },
      fontFamily: {
        112: "1.12",
        113: "1.13",
        114: "1.14",
        115: "1.15",
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        cursive: ["The Girl Next Door", "cursive"],
      },
      fontSize: {
        xxs: ["1.2vh", { lineHeight: "1.8vh" }],
        xs: ["1.3vh", { lineHeight: "2.2vh" }],
        sm: ["1.5vh", { lineHeight: "2.3vh" }],
        md: ["1.7vh", { lineHeight: "2.6vh" }],
        mdlg: ["1.9vh", { lineHeight: "2.8vh" }],
        lg: ["2.3vh", { lineHeight: "3.1vh" }],
        lger: ["2.6vh", { lineHeight: "3.4vh" }],
        xl: ["3vh", { lineHeight: "3.8vh" }],
        xxl: ["3.5vh", { lineHeight: "4.3vh" }],
        xxxl: ["4vh", { lineHeight: "4.8vh" }],
        mega: ["4.2vh", { lineHeight: "5vh" }],
        tooBig: ["4.4vh", { lineHeight: "5.2vh" }],
        insane: ["5vh", { lineHeight: "5.8vh" }],
        ...generateFontSizeVh(),
        ...generateFontSizeVw(),
      },
      spacing: {
        ...generateVhUnits(),
        ...generateVwUnits(),
      },
      screens: {
        mobile: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1600px",
        fullHD: "1920px",
        quadHD: "2560px",
        ultraHD: "3840px",
      },
      boxShadow: {
        boxGlowWhite:
          "0 0 0.5vh #f8e8ff, 0 0 1vh #f8e8ff, 0 0 1.5vh #f8e8ff, 0 0 1vh #f8e8ff, 0 0 3vh #f8e8ff, 0 0 4vh #f8e8ff, 0 0 5.5vh #f8e8ff, 0 0 7.5vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxGlowWhiteMd:
          "0 0 0.3vh #f8e8ff, 0 0 0.8vh #f8e8ff, 0 0 1.2vh #f8e8ff, 0 0 0.8vh #f8e8ff, 0 0 2.5vh #f8e8ff, 0 0 3vh #f8e8ff, 0 0 4vh #f8e8ff, 0 0 5vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxGlowWhiteSm:
          "0 0 0.2vh #f8e8ff, 0 0 0.6vh #f8e8ff, 0 0 0.9vh #f8e8ff, 0 0 0.6vh #f8e8ff, 0 0 2vh #f8e8ff, 0 0 2.2vh #f8e8ff, 0 0 3vh #f8e8ff, 0 0 4vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxGlowWhiteXs:
          "0 0 0.1vh #f8e8ff, 0 0 0.4vh #f8e8ff, 0 0 0.6vh #f8e8ff, 0 0 0.4vh #f8e8ff, 0 0 1.5vh #f8e8ff, 0 0 1.8vh #f8e8ff, 0 0 2vh #f8e8ff, 0 0 3vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxGlowWhite3xs:
          "0 0 0.05vh #f8e8ff, 0 0 0.2vh #f8e8ff, 0 0 0.3vh #f8e8ff, 0 0 0.2vh #f8e8ff, 0 0 0.3vh #f8e8ff, 0 0 0.4vh #f8e8ff, 0 0 0.4vh #f8e8ff, 0 0 1.5vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxGlowWhiteXxs:
          "0 0 0.05vh #f8e8ff, 0 0 0.2vh #f8e8ff, 0 0 0.3vh #f8e8ff, 0 0 0.2vh #f8e8ff, 0 0 0.3vh #f8e8ff, 0 0 0.4vh #f8e8ff, 0 0 0.4vh #f8e8ff, 0 0 1.5vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxGlowWhiteLg:
          "0 0 0.8vh #f8e8ff, 0 0 1.2vh #f8e8ff, 0 0 2vh #f8e8ff, 0 0 1.2vh #f8e8ff, 0 0 4vh #f8e8ff, 0 0 5vh #f8e8ff, 0 0 6.5vh #f8e8ff, 0 0 9vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxGlowWhiteXl:
          "0 0 1vh #f8e8ff, 0 0 1.5vh #f8e8ff, 0 0 2.5vh #f8e8ff, 0 0 1.5vh #f8e8ff, 0 0 5vh #f8e8ff, 0 0 6vh #f8e8ff, 0 0 8vh #f8e8ff, 0 0 10vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxGlowWhiteXxl:
          "0 0 1.2vh #f8e8ff, 0 0 1.8vh #f8e8ff, 0 0 3vh #f8e8ff, 0 0 1.8vh #f8e8ff, 0 0 6vh #f8e8ff, 0 0 7vh #f8e8ff, 0 0 9vh #f8e8ff, 0 0 12vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",

        boxFogLg:
          "0 0 0.8vh #000, 0 0 1.2vh #000, 0 0 2vh #000, 0 0 1.2vh #000, 0 0 4vh #000, 0 0 5vh #575757, 0 0 6.5vh #5E5E5E, 0 0 9vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxFogXl:
          "0 0 1vh #000, 0 0 1.5vh #000, 0 0 2.5vh #000, 0 0 1.5vh #000, 0 0 5vh #000, 0 0 6vh #575757, 0 0 8vh #5E5E5E, 0 0 10vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxFogXxl:
          "0 0 1.2vh #000, 0 0 1.8vh #000, 0 0 3vh #000, 0 0 1.8vh #000, 0 0 6vh #000, 0 0 7vh #575757, 0 0 9vh #5E5E5E, 0 0 12vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxFog:
          "0 0 0.5vh #000, 0 0 1vh #000, 0 0 1.5vh #000, 0 0 1vh #000, 0 0 3vh #000, 0 0 4vh #575757, 0 0 5.5vh #5E5E5E, 0 0 7.5vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxFogMd:
          "0 0 0.3vh #000, 0 0 0.8vh #000, 0 0 1.2vh #000, 0 0 0.8vh #000, 0 0 2.5vh #000, 0 0 3vh #575757, 0 0 4vh #5E5E5E, 0 0 5vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxFogSm:
          "0 0 0.2vh #000, 0 0 0.6vh #000, 0 0 0.9vh #000, 0 0 0.6vh #000, 0 0 2vh #000, 0 0 2.2vh #575757, 0 0 3vh #5E5E5E, 0 0 4vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxFogXs:
          "0 0 0.1vh #000, 0 0 0.4vh #000, 0 0 0.6vh #000, 0 0 0.4vh #000, 0 0 1.5vh #000, 0 0 1.8vh #575757, 0 0 2vh #5E5E5E, 0 0 3vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxFogXxs:
          "0 0 0.1vh #000, 0 0 0.4vh #000, 0 0 0.6vh #000, 0 0 0.2vh #000, 0 0 0.6vh #000, 0 0 1vh #575757, 0 0 1vh #5E5E5E, 0 0 1.5vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        boxFog3xs:
          "0 0 0.05vh #000, 0 0 0.2vh #000, 0 0 0.3vh #000, 0 0 0.1vh #000, 0 0 0.3vh #000, 0 0 0.5vh #575757, 0 0 0.5vh #5E5E5E, 0 0 0.3vh #000, 0.1vh 0.1vh 0.1vh rgba(0,0,0,0);",

        shadowNarrowTight: "0.1vh 0.1vh 0.3vh rgba(0, 0, 0, 0.9)",
        shadowNarrowNormal: "0.1vh 0.1vh 0.6vh rgba(0, 0, 0, 0.9)",
        shadowNarrowLoose: "0.1vh 0.1vh 0.9vh rgba(0, 0, 0, 0.9)",
        shadowNarrowLooser: "0.1vh 0.1vh 1.2vh rgba(0, 0, 0, 0.9)",
        shadowBroadTight: "0.2vh 0.2vh 0.3vh rgba(0, 0, 0, 0.9)",
        shadowBroadNormal: "0.2vh 0.2vh 0.6vh rgba(0, 0, 0, 0.9)",
        shadowBroadLoose: "0.2vh 0.2vh 0.9vh rgba(0, 0, 0, 0.9)",
        shadowBroadLooser: "0.2vh 0.2vh 0.9vh rgba(0, 0, 0, 0.9)",
        shadowWideTight: "0.3vh 0.3vh 0.3vh rgba(0, 0, 0, 0.9)",
        shadowWideNormal: "0.3vh 0.3vh 0.6vh rgba(0, 0, 0, 0.9)",
        shadowWideLoose: "0.3vh 0.3vh 0.9vh rgba(0, 0, 0, 0.9)",
        shadowWideLooser: "0.3vh 0.3vh 0.9vh rgba(0, 0, 0, 0.9)",
        insetShadowSm: "inset 0 0 0.3vh rgba(0, 0, 0, 0.9)",
        insetShadowMd: "inset 0 0 0.6vh rgba(0, 0, 0, 0.9)",
        insetShadowLg: "inset 0 0 0.9vh rgba(0, 0, 0, 0.9)",
        insetShadowXl: "inset 0 0 1.2vh rgba(0, 0, 0, 0.9)",
        insetShadowXxl: "inset 0 0 1.5vh rgba(0, 0, 0, 0.9)",
        insetShadow3xl: "inset 0 0 2vh rgba(0, 0, 0, 0.9)",
        insetShadow4xl: "inset 0 0 2.5vh rgba(0, 0, 0, 0.9)",
        insetShadow5xl: "inset 0 0 3vh rgba(0, 0, 0, 0.9)",
        insetShadow6xl: "inset 0 0 3.5vh rgba(0, 0, 0, 0.9)",
        insetGlowSm: "inset 0 0 0.3vh rgba(255, 255, 255, 0.9)",
        insetGlowMd: "inset 0 0 0.6vh rgba(255, 255, 255, 0.9)",
        insetGlowLg: "inset 0 0 0.9vh rgba(255, 255, 255, 0.9)",
        insetGlowXl: "inset 0 0 1.2vh rgba(255, 255, 255, 0.9)",
        insetGlowXxl: "inset 0 0 1.5vh rgba(255, 255, 255, 0.9)",
        insetGlow3xl: "inset 0 0 2vh rgba(255, 255, 255, 0.9)",
        insetGlow4xl: "inset 0 0 2.5vh rgba(255, 255, 255, 0.9)",
        insetGlow5xl: "inset 0 0 3vh rgba(255, 255, 255, 0.9)",
        insetGlow6xl: "inset 0 0 3.5vh rgba(255, 255, 255, 0.9)",
        lightShadowTight: "0.2vh 0.2vh 0.3vh rgba(240, 240, 240, 0.9)",
        lightShadowNormal: "0.2vh 0.2vh 0.6vh rgba(240, 240, 240, 0.9)",
        lightShadowLoose: "0.2vh 0.2vh 0.9vh rgba(240, 240, 240, 0.9)",
        lightShadowLooser: "0.2vh 0.2vh 1.2vh rgba(240, 240, 240, 0.9)",
        standoutShadowSm: "rgb(38, 57, 77) 0px 0.3vh 1.5vh -0.4vh",
        standoutShadowMd: "rgb(38, 57, 77) 0px 0.5vh 2.5vh -0.4vh",
        standoutShadowLg: "rgb(38, 57, 77) 0px 1vh 4.5vh -0.6vh",
        standoutShadowXl: "rgb(38, 57, 77) 0px 0.8vh 3.5vh -0.5vh",
        shadow3DXs:
          "rgba(0, 0, 0, 0.17) 0px -0.1vh 0.1vh 0px inset, rgba(0, 0, 0, 0.15) 0px -0.15vh 0.15vh 0px inset, rgba(0, 0, 0, 0.1) 0px -0.4vh 0.2vh 0px inset, rgba(0, 0, 0, 0.06) 0px -0.01vh 0.1vh, rgba(0, 0, 0, 0.09) 0px -0.02vh 0.1vh, rgba(0, 0, 0, 0.09) 0px -0.1vh 0.02vh, rgba(0, 0, 0, 0.09) 0px -0.05vh 0.04vh, rgba(0, 0, 0, 0.09) 0px -0.15vh 0.1vh",
        shadow3DSm:
          "rgba(0, 0, 0, 0.17) 0px -0.3vh 0.3vh 0px inset, rgba(0, 0, 0, 0.15) 0px -0.3vh 0.3vh 0px inset, rgba(0, 0, 0, 0.1) 0px -0.8vh 0.4vh 0px inset, rgba(0, 0, 0, 0.06) 0px -0.02vh 0.2vh, rgba(0, 0, 0, 0.09) 0px -0.04vh 0.2vh, rgba(0, 0, 0, 0.09) 0px -0.2vh 0.04vh, rgba(0, 0, 0, 0.09) 0px -0.1vh 0.08vh, rgba(0, 0, 0, 0.09) 0px -0.3vh 0.2vh",
        shadow3DMd:
          "rgba(0, 0, 0, 0.17) 0px -0.6vh 0.6vh 0px inset, rgba(0, 0, 0, 0.15) 0px -0.45vh 0.45vh 0px inset, rgba(0, 0, 0, 0.1) 0px -1.2vh 0.6vh 0px inset, rgba(0, 0, 0, 0.06) 0px -0.1vh 0.5vh, rgba(0, 0, 0, 0.09) 0px -0.1vh 0.2vh, rgba(0, 0, 0, 0.09) 0px -0.3vh 0.04vh, rgba(0, 0, 0, 0.09) 0px -0.15vh 0.08vh, rgba(0, 0, 0, 0.09) 0px -0.4vh 0.3vh",
        shadow3DLg:
          "rgba(0, 0, 0, 0.17) 0px -0.9vh 0.9vh 0px inset, rgba(0, 0, 0, 0.15) 0px -0.6vh 0.6vh 0px inset, rgba(0, 0, 0, 0.1) 0px -1.6vh 0.8vh 0px inset, rgba(0, 0, 0, 0.06) 0px -0.03vh 0.6vh, rgba(0, 0, 0, 0.09) 0px -0.2vh 0.2vh, rgba(0, 0, 0, 0.09) 0px -0.4vh 0.04vh, rgba(0, 0, 0, 0.09) 0px -0.2vh 0.08vh, rgba(0, 0, 0, 0.09) 0px -0.5vh 0.4vh",
        shadow3DXl:
          "rgba(0, 0, 0, 0.17) 0px -2vh 2vh 0px inset, rgba(0, 0, 0, 0.15) 0px -3vh 3vh 0px inset, rgba(0, 0, 0, 0.1) 0px -8vh 4vh 0px inset, rgba(0, 0, 0, 0.06) 0px -0.2vh 0.1vh, rgba(0, 0, 0, 0.09) 0px -0.5vh 0.2vh, rgba(0, 0, 0, 0.09) 0px -0.8vh 0.4vh, rgba(0, 0, 0, 0.09) 0px -1.5vh 0.8vh, rgba(0, 0, 0, 0.09) 0px -3vh 2vh",
        lightGlowSm: "0 0 0.1vh #FFF, 0 0 1px #ebd7d5, 0 0 0.3vh #FFF",
        lightGlowMd: "0 0 0.2vh #FFF, 0 0 2px #ebd7d5, 0 0 0.6vh #FFF",
        lightGlowLg: "0 0 0.3vh #FFF, 0 0 3px #ebd7d5, 0 0 0.9vh #FFF",
        lightGlowXl: "0 0 0.4vh #FFF, 0 0 4px #ebd7d5, 0 0 1.2vh #FFF",
        boxGlowXxs:
          "#00FFFF 0px 0px 0.05vh, #00FFFF 0px 0px 0.1vh, #FFF 0px 0px 0.15vh, #d5f5f0 0px 0px 0.2vh, #d5f5f0 0px 0px 0.3vh, 0.8vh 0.1vh 0.6vh rgba(0,0,0,0);",
        boxGlowXs:
          "#00FFFF 0px 0px 0.1vh, #00FFFF 0px 0px 0.2vh, #FFF 0px 0px 0.3vh, #d5f5f0 0px 0px 0.4vh, #d5f5f0 0px 0px 0.6vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        boxGlowSm:
          "#00FFFF 0px 0px 0.2vh, #00FFFF 0px 0px 0.4vh, #FFF 0px 0px 0.6vh, #d5f5f0 0px 0px 0.8vh, #d5f5f0 0px 0px 1.2vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        boxGlowMd:
          "#00FFFF 0px 0px 0.3vh, #00FFFF 0px 0px 0.6vh, #FFF 0px 0px 0.9vh, #d5f5f0 0px 0px 1.2vh, #d5f5f0 0px 0px 1.8vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        boxGlowLg:
          "#00FFFF 0px 0px 0.5vh, #00FFFF 0px 0px 1vh, #FFF 0px 0px 1.5vh, #d5f5f0 0px 0px 2vh, #d5f5f0 0px 0px 3vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        boxGlowXl:
          "#00FFFF 0px 0px 0.7vh, #00FFFF 0px 0px 1.4vh, #FFF 0px 0px 2.1vh, #d5f5f0 0px 0px 2.8vh, #d5f5f0 0px 0px 4.2vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        metallicEdgesSm:
          "#000 0.05vh 0.05vh 0.05vh, black 0px 0px 0.2vh, #FFF 0px 0px 0.1vh, #FFF 0px 0px 0.2vh, #FFF 0px 0px 0.3vh, #FFF 0px 0px 0.4vh, #FFF 0px 0px 0.5vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        metallicEdgesMd:
          "#000 0.1vh 0.1vh 0.1vh, white 0px 0px 0.1vh, rgb(123, 253, 253) 0px 0px 0.2vh, #00FFFF 0px 0px 0.3vh, #FFF 0px 0px 0.4vh, #e3fcf9 0px 0px 0.5vh, #e3fcf9 0px 0px 0.6vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        metallicEdgesLg:
          "#000 0.2vh 0.2vh 0.2vh, white 0px 0px 0.2vh, #00FFFF 0px 0px 4px, #00FFFF 0px 0px 6px, #FFF 0px 0px 8px, #d5f5f0 0px 0px 1vh, #d5f5f0 0px 0px 1.2vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        metallicEdgesXl:
          "#000 0.3vh 0.3vh 0.3vh, white 0px 0px 0.3vh, #00FFFF 0px 0px 0.6vh, #00FFFF 0px 0px 0.9vh, #FFF 0px 0px 1vh, #d5f5f0 0px 0px 1.2vh, #d5f5f0 0px 0px 1.4vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
      },
      textShadow: {
        noShadow: "none",
        none: "",
        lightTextShadow: "0.1vh 0.1vh 0.3vh rgba(255, 255, 255, 0.9)",
        textShadow: "0.2vh 0.2vh 0.2vh rgba(0, 0, 0, 0.9)",
        subtleTextShadow: "0.1vh 0.1vh 0.2vh rgba(0, 0, 0, 0.9)",
        standoutTextShadow: "0.3vh 0.3vh 0.4vh rgba(0, 0, 0, 0.9)",
        textFogLg:
          "0 0 0.8vh #000, 0 0 1.2vh #000, 0 0 2vh #000, 0 0 1.2vh #000, 0 0 4vh #000, 0 0 5vh #575757, 0 0 6.5vh #5E5E5E, 0 0 9vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textFogXl:
          "0 0 1vh #000, 0 0 1.5vh #000, 0 0 2.5vh #000, 0 0 1.5vh #000, 0 0 5vh #000, 0 0 6vh #575757, 0 0 8vh #5E5E5E, 0 0 10vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textFogXxl:
          "0 0 1.2vh #000, 0 0 1.8vh #000, 0 0 3vh #000, 0 0 1.8vh #000, 0 0 6vh #000, 0 0 7vh #575757, 0 0 9vh #5E5E5E, 0 0 12vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textFog:
          "0 0 0.5vh #000, 0 0 1vh #000, 0 0 1.5vh #000, 0 0 1vh #000, 0 0 3vh #000, 0 0 4vh #575757, 0 0 5.5vh #5E5E5E, 0 0 7.5vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textFogMd:
          "0 0 0.3vh #000, 0 0 0.8vh #000, 0 0 1.2vh #000, 0 0 0.8vh #000, 0 0 2.5vh #000, 0 0 3vh #575757, 0 0 4vh #5E5E5E, 0 0 5vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textFogSm:
          "0 0 0.2vh #000, 0 0 0.6vh #000, 0 0 0.9vh #000, 0 0 0.6vh #000, 0 0 2vh #000, 0 0 2.2vh #575757, 0 0 3vh #5E5E5E, 0 0 4vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textFogXs:
          "0 0 0.1vh #000, 0 0 0.4vh #000, 0 0 0.6vh #000, 0 0 0.4vh #000, 0 0 1.5vh #000, 0 0 1.8vh #575757, 0 0 2vh #5E5E5E, 0 0 3vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textFogXxs:
          "0 0 0.1vh #000, 0 0 0.4vh #000, 0 0 0.6vh #000, 0 0 0.2vh #000, 0 0 0.6vh #000, 0 0 1vh #575757, 0 0 1vh #5E5E5E, 0 0 1.5vh #000, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textFog3xs:
          "0 0 0.05vh #000, 0 0 0.2vh #000, 0 0 0.3vh #000, 0 0 0.1vh #000, 0 0 0.3vh #000, 0 0 0.5vh #575757, 0 0 0.5vh #5E5E5E, 0 0 0.3vh #000, 0.1vh 0.1vh 0.1vh rgba(0,0,0,0);",
        textGlowXxs:
          "#91ffff 0px 0px 0.05vh, #91ffff 0px 0px 0.1vh, #FFF 0px 0px 0.15vh, rgb(123, 253, 253) 0px 0px 0.1vh, rgb(123, 253, 253) 0px 0px 0.1vh, 0.1vh 0.03vh 0.05vh rgba(0,0,0,0);",
        textGlowXs:
          "#91ffff 0px 0px 0.1vh, #91ffff 0px 0px 0.2vh, #FFF 0px 0px 0.3vh, rgb(123, 253, 253) 0px 0px 0.2vh, rgb(123, 253, 253) 0px 0px 0.2vh, 0.15vh 0.05vh 0.1vh rgba(0,0,0,0);",
        textGlowSm:
          "#91ffff 0px 0px 0.2vh, #91ffff 0px 0px 0.4vh, #FFF 0px 0px 0.6vh, rgb(123, 253, 253) 0px 0px 0.4vh, rgb(123, 253, 253) 0px 0px 0.4vh, 0.3vh 0.1vh 0.2vh rgba(0,0,0,0);",
        textGlowMd:
          "#91ffff 0px 0px 0.3vh, #91ffff 0px 0px 0.6vh, #FFF 0px 0px 0.9vh, rgb(123, 253, 253) 0px 0px 0.6vh, rgb(123, 253, 253) 0px 0px 0.6vh, 0.45vh 0.15vh 0.3vh rgba(0,0,0,0);",
        textGlowLg:
          "#91ffff 0px 0px 0.4vh, #91ffff 0px 0px 0.8vh, #FFF 0px 0px 1.2vh, rgb(123, 253, 253) 0px 0px 0.8vh, rgb(123, 253, 253) 0px 0px 0.8vh, 0.6vh 0.16vh 0.6vh rgba(0,0,0,0);",
        textGlowXl:
          "#91ffff 0px 0px 0.5vh, #91ffff 0px 0px 1vh, #FFF 0px 0px 1.5vh, rgb(123, 253, 253) 0px 0px 1vh, rgb(123, 253, 253) 0px 0px 1vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",

        boldText:
          "#000 0.05vh 0.05vh 0.05vh, black 0px 0px 0.5vh,  #FFF 0px 0px 0.2vh, #FFF 0px 0px 0.3vh, #FFF 0px 0px 1.2vh, #FFF 0px 0px 0.4vh, #FFF 0px 0px 0.5vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",
        boldTextGlow:
          "#000 0.1vh 0.1vh 0.1vh, white 0px 0px 0.7vh,  #00FFFF 0px 0px 0.8vh, #00FFFF 0px 0px 1vh, #FFF 0px 0px 1.5vh, #FF2D95 0px 0px 1vh, #FF2D95 0px 0px 3vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0);",

        textGlowPurple:
          "0 0 0.5vh #d9c7ff, 0 0 1vh #d9c7ff, 0 0 1.5vh #d9c7ff, 0 0 1vh #d9c7ff, 0 0 3vh #d9c7ff, 0 0 4vh #330033, 0 0 5.5vh #d9c7ff, 0 0 7.5vh #d9c7ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textGlowPurpleMd:
          "0 0 0.3vh #d9c7ff, 0 0 0.8vh #d9c7ff, 0 0 1.2vh #d9c7ff, 0 0 0.8vh #d9c7ff, 0 0 2.5vh #d9c7ff, 0 0 3vh #330033, 0 0 4vh #d9c7ff, 0 0 5vh #d9c7ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textGlowPurpleSm:
          "0 0 0.2vh #d9c7ff, 0 0 0.6vh #d9c7ff, 0 0 0.9vh #d9c7ff, 0 0 0.6vh #d9c7ff, 0 0 2vh #d9c7ff, 0 0 2.2vh #330033, 0 0 3vh #d9c7ff, 0 0 4vh #d9c7ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textGlowPurpleXs:
          "0 0 0.1vh #d9c7ff, 0 0 0.4vh #d9c7ff, 0 0 0.6vh #d9c7ff, 0 0 0.4vh #d9c7ff, 0 0 1.5vh #d9c7ff, 0 0 1.8vh #330033, 0 0 2vh #d9c7ff, 0 0 3vh #d9c7ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textGlowPurpleXxs:
          "0 0 0.05vh #d9c7ff, 0 0 0.2vh #d9c7ff, 0 0 0.3vh #d9c7ff, 0 0 0.2vh #d9c7ff, 0 0 0.3vh #d9c7ff, 0 0 0.4vh #330033, 0 0 0.4vh #d9c7ff, 0 0 1.5vh #d9c7ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textGlowPurpleLg:
          "0 0 0.8vh #d9c7ff, 0 0 1.2vh #d9c7ff, 0 0 2vh #d9c7ff, 0 0 1.2vh #d9c7ff, 0 0 4vh #d9c7ff, 0 0 5vh #330033, 0 0 6.5vh #d9c7ff, 0 0 9vh #d9c7ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textGlowPurpleXl:
          "0 0 1vh #d9c7ff, 0 0 1.5vh #d9c7ff, 0 0 2.5vh #d9c7ff, 0 0 1.5vh #d9c7ff, 0 0 5vh #d9c7ff, 0 0 6vh #330033, 0 0 8vh #d9c7ff, 0 0 10vh #d9c7ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textGlowPurpleXxl:
          "0 0 1.2vh #d9c7ff, 0 0 1.8vh #d9c7ff, 0 0 3vh #d9c7ff, 0 0 1.8vh #d9c7ff, 0 0 6vh #d9c7ff, 0 0 7vh #330033, 0 0 9vh #d9c7ff, 0 0 12vh #d9c7ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",

        textGlowWhite3xs:
          "0 0 0.02vh #f8e8ff, 0 0 0.1vh #f8e8ff, 0 0 0.1vh #f8e8ff, 0 0 0.1vh #f8e8ff, 0 0 0.1vh #f8e8ff, 0 0 0.1vh #f8e8ff, 0 0 0.1vh #f8e8ff, 0 0 0.7vh #f8e8ff, 0.1vh 0.1vh 0.1vh rgba(0,0,0,0);",
        textGlowWhiteXxs:
          "0 0 0.05vh #f8e8ff, 0 0 0.2vh #f8e8ff, 0 0 0.3vh #f8e8ff, 0 0 0.2vh #f8e8ff, 0 0 0.25vh #f8e8ff, 0 0 0.3vh #f8e8ff, 0 0 0.3vh #f8e8ff, 0 0 1.5vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textGlowWhiteXs:
          "0 0 0.1vh #f8e8ff, 0 0 0.4vh #f8e8ff, 0 0 0.6vh #f8e8ff, 0 0 0.4vh #f8e8ff, 0 0 1.5vh #f8e8ff, 0 0 1.8vh #f8e8ff, 0 0 2vh #f8e8ff, 0 0 3vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textGlowWhiteSm:
          "0 0 0.2vh #f8e8ff, 0 0 0.6vh #f8e8ff, 0 0 0.9vh #f8e8ff, 0 0 0.6vh #f8e8ff, 0 0 2vh #f8e8ff, 0 0 2.2vh #f8e8ff, 0 0 3vh #f8e8ff, 0 0 4vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textGlowWhiteMd:
          "0 0 0.3vh #f8e8ff, 0 0 0.8vh #f8e8ff, 0 0 1.2vh #f8e8ff, 0 0 0.8vh #f8e8ff, 0 0 2.5vh #f8e8ff, 0 0 3vh #f8e8ff, 0 0 4vh #f8e8ff, 0 0 5vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textGlowWhiteLg:
          "0 0 0.8vh #f8e8ff, 0 0 1.2vh #f8e8ff, 0 0 2vh #f8e8ff, 0 0 1.2vh #f8e8ff, 0 0 4vh #f8e8ff, 0 0 5vh #f8e8ff, 0 0 6.5vh #f8e8ff, 0 0 9vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textGlowWhiteXl:
          "0 0 1vh #f8e8ff, 0 0 1.5vh #f8e8ff, 0 0 2.5vh #f8e8ff, 0 0 1.5vh #f8e8ff, 0 0 5vh #f8e8ff, 0 0 6vh #f8e8ff, 0 0 8vh #f8e8ff, 0 0 10vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
        textGlowWhiteXxl:
          "0 0 1.2vh #f8e8ff, 0 0 1.8vh #f8e8ff, 0 0 3vh #f8e8ff, 0 0 1.8vh #f8e8ff, 0 0 6vh #f8e8ff, 0 0 7vh #f8e8ff, 0 0 9vh #f8e8ff, 0 0 12vh #f8e8ff, 0.2vh 0.2vh 0.2vh rgba(0,0,0,0);",
      },
      textStrokeWidth: {
        1: "0.02vh",
        2: "0.03vh",
        3: "0.04vh",
        4: "0.05vh",
        5: "0.06vh",
        6: "0.07vh",
        7: "0.08vh",
        8: "0.09vh",
        9: "0.1vh",
        10: "0.11vh",
        11: "0.12vh",
        12: "0.13vh",
        13: "0.14vh",
        14: "0.15vh",
        15: "0.16vh",
        16: "0.17vh",
        17: "0.18vh",
        18: "0.19vh",
        19: "0.2vh",
        20: "0.21vh",
      },
      textStrokeColor: themeColors,
      backgroundImage: {
        // FadeOut Gradients
        fadeOut900Op07:
          "radial-gradient(circle, rgba(3, 6, 33, 0.7), rgba(3, 6, 33, 0))",
        fadeOut900Op05:
          "radial-gradient(circle, rgba(3, 6, 33, 0.5), rgba(3, 6, 33, 0))",
        fadeOut900Op03:
          "radial-gradient(circle, rgba(3, 6, 33, 0.3), rgba(3, 6, 33, 0))",
        fadeOut800Op07:
          "radial-gradient(circle, rgba(0, 53, 77, 0.7), rgba(0, 53, 77, 0))",
        fadeOut800Op05:
          "radial-gradient(circle, rgba(0, 53, 77, 0.5), rgba(0, 53, 77, 0))",
        fadeOut800Op03:
          "radial-gradient(circle, rgba(0, 53, 77, 0.3), rgba(0, 53, 77, 0))",
        fadeOut700Op07:
          "radial-gradient(circle, rgba(77, 66, 105, 0.7), rgba(77, 66, 105, 0))",
        fadeOut700Op05:
          "radial-gradient(circle, rgba(77, 66, 105, 0.5), rgba(77, 66, 105, 0))",
        fadeOut700Op03:
          "radial-gradient(circle, rgba(77, 66, 105, 0.3), rgba(77, 66, 105, 0))",
        fadeOut600Op07:
          "radial-gradient(circle, rgba(0, 107, 120, 0.7), rgba(0, 107, 120, 0))",
        fadeOut600Op05:
          "radial-gradient(circle, rgba(0, 107, 120, 0.5), rgba(0, 107, 120, 0))",
        fadeOut600Op03:
          "radial-gradient(circle, rgba(0, 107, 120, 0.3), rgba(0, 107, 120, 0))",
        fadeOut500Op07:
          "radial-gradient(circle, rgba(127, 111, 163, 0.7), rgba(127, 111, 163, 0))",
        fadeOut500Op05:
          "radial-gradient(circle, rgba(127, 111, 163, 0.5), rgba(127, 111, 163, 0))",
        fadeOut500Op03:
          "radial-gradient(circle, rgba(127, 111, 163, 0.3), rgba(127, 111, 163, 0))",
        fadeOut400Op07:
          "radial-gradient(circle, rgba(225, 171, 255, 0.7), rgba(225, 171, 255, 0))",
        fadeOut400Op05:
          "radial-gradient(circle, rgba(225, 171, 255, 0.5), rgba(225, 171, 255, 0))",
        fadeOut400Op03:
          "radial-gradient(circle, rgba(225, 171, 255, 0.3), rgba(225, 171, 255, 0))",
        fadeOut300Op07:
          "radial-gradient(circle, rgba(255, 189, 189, 0.7), rgba(255, 189, 189, 0))",
        fadeOut300Op05:
          "radial-gradient(circle, rgba(255, 189, 189, 0.5), rgba(255, 189, 189, 0))",
        fadeOut300Op03:
          "radial-gradient(circle, rgba(255, 189, 189, 0.3), rgba(255, 189, 189, 0))",
        fadeOut200Op07:
          "radial-gradient(circle, rgba(123, 253, 253, 0.7), rgba(123, 253, 253, 0))",
        fadeOut200Op05:
          "radial-gradient(circle, rgba(123, 253, 253, 0.5), rgba(123, 253, 253, 0))",
        fadeOut200Op03:
          "radial-gradient(circle, rgba(123, 253, 253, 0.3), rgba(123, 253, 253, 0))",
        fadeOut100Op07:
          "radial-gradient(circle, rgba(255, 238, 237, 0.7), rgba(255, 238, 237, 0))",
        fadeOut100Op05:
          "radial-gradient(circle, rgba(255, 238, 237, 0.5), rgba(255, 238, 237, 0))",
        fadeOut100Op03:
          "radial-gradient(circle, rgba(255, 238, 237, 0.3), rgba(255, 238, 237, 0))",
        // Linear Gradients
        linear1:
          "linear-gradient(to top, rgba(255, 238, 237, 1), rgba(123, 253, 253, 1))",
        linear1op25:
          "linear-gradient(to top, rgba(255, 238, 237, 0.25), rgba(123, 253, 253, 0.25))",
        linear1op50:
          "linear-gradient(to top, rgba(255, 238, 237, 0.5), rgba(123, 253, 253, 0.5))",
        linear1op75:
          "linear-gradient(to top, rgba(255, 238, 237, 0.75), rgba(123, 253, 253, 0.75))",

        linear2:
          "linear-gradient(to bottom, rgba(255, 189, 189, 1), rgba(225, 171, 255, 1))",
        linear2op25:
          "linear-gradient(to bottom, rgba(255, 189, 189, 0.25), rgba(225, 171, 255, 0.25))",
        linear2op50:
          "linear-gradient(to bottom, rgba(255, 189, 189, 0.5), rgba(225, 171, 255, 0.5))",
        linear2op75:
          "linear-gradient(to bottom, rgba(255, 189, 189, 0.75), rgba(225, 171, 255, 0.75))",

        linear3:
          "linear-gradient(to right, rgba(127, 111, 163, 1), rgba(0, 107, 120, 1))",
        linear3op25:
          "linear-gradient(to right, rgba(127, 111, 163, 0.25), rgba(0, 107, 120, 0.25))",
        linear3op50:
          "linear-gradient(to right, rgba(127, 111, 163, 0.5), rgba(0, 107, 120, 0.5))",
        linear3op75:
          "linear-gradient(to right, rgba(127, 111, 163, 0.75), rgba(0, 107, 120, 0.75))",

        linear4:
          "linear-gradient(to left, rgba(77, 66, 105, 1), rgba(0, 107, 120, 1))",
        linear4op25:
          "linear-gradient(to left, rgba(77, 66, 105, 0.25), rgba(0, 107, 120, 0.25))",
        linear4op50:
          "linear-gradient(to left, rgba(77, 66, 105, 0.5), rgba(0, 107, 120, 0.5))",
        linear4op75:
          "linear-gradient(to left, rgba(77, 66, 105, 0.75), rgba(0, 107, 120, 0.75))",

        linear5:
          "linear-gradient(to top, rgba(0, 107, 120, 1), rgba(77, 66, 105, 1))",
        linear5op25:
          "linear-gradient(to top, rgba(0, 107, 120, 0.25), rgba(77, 66, 105, 0.25))",
        linear5op50:
          "linear-gradient(to top, rgba(0, 107, 120, 0.5), rgba(77, 66, 105, 0.5))",
        linear5op75:
          "linear-gradient(to top, rgba(0, 107, 120, 0.75), rgba(77, 66, 105, 0.75))",

        linear6:
          "linear-gradient(to bottom, rgba(0, 53, 77, 1), rgba(3, 6, 33, 1))",
        linear6op25:
          "linear-gradient(to bottom, rgba(0, 53, 77, 0.25), rgba(3, 6, 33, 0.25))",
        linear6op50:
          "linear-gradient(to bottom, rgba(0, 53, 77, 0.5), rgba(3, 6, 33, 0.5))",
        linear6op75:
          "linear-gradient(to bottom, rgba(0, 53, 77, 0.75), rgba(3, 6, 33, 0.75))",

        // Diagonal Gradients
        diagonal1:
          "linear-gradient(45deg, rgba(255, 238, 237, 1), rgba(255, 189, 189, 1))",
        diagonal1op25:
          "linear-gradient(45deg, rgba(255, 238, 237, 0.25), rgba(255, 189, 189, 0.25))",
        veryLightDiagonal:
          "linear-gradient(45deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85)), rgba(255, 255, 255, 0.95),",
        diagonal1op50:
          "linear-gradient(45deg, rgba(255, 238, 237, 0.5), rgba(255, 189, 189, 0.5))",
        diagonal1op75:
          "linear-gradient(45deg, rgba(255, 238, 237, 0.75), rgba(255, 189, 189, 0.75))",

        diagonal2:
          "linear-gradient(45deg, rgba(123, 253, 253, 1), rgba(225, 171, 255, 1))",
        diagonal2op25:
          "linear-gradient(45deg, rgba(123, 253, 253, 0.25), rgba(225, 171, 255, 0.25))",
        diagonal2op50:
          "linear-gradient(45deg, rgba(123, 253, 253, 0.5), rgba(225, 171, 255, 0.5))",
        diagonal2op75:
          "linear-gradient(45deg, rgba(123, 253, 253, 0.75), rgba(225, 171, 255, 0.75))",

        diagonal3:
          "linear-gradient(45deg, rgba(127, 111, 163, 1), rgba(77, 66, 105, 1))",
        diagonal3op25:
          "linear-gradient(45deg, rgba(127, 111, 163, 0.25), rgba(77, 66, 105, 0.25))",
        diagonal3op50:
          "linear-gradient(45deg, rgba(127, 111, 163, 0.5), rgba(77, 66, 105, 0.5))",
        diagonal3op75:
          "linear-gradient(45deg, rgba(127, 111, 163, 0.75), rgba(77, 66, 105, 0.75))",

        diagonal4:
          "linear-gradient(45deg, rgba(0, 107, 120, 1), rgba(0, 53, 77, 1))",
        diagonal4op25:
          "linear-gradient(45deg, rgba(0, 107, 120, 0.25), rgba(0, 53, 77, 0.25))",
        diagonal4op50:
          "linear-gradient(45deg, rgba(0, 107, 120, 0.5), rgba(0, 53, 77, 0.5))",
        diagonal4op75:
          "linear-gradient(45deg, rgba(0, 107, 120, 0.75), rgba(0, 53, 77, 0.75))",

        diagonal5:
          "linear-gradient(45deg, rgba(255, 189, 189, 1), rgba(127, 111, 163, 1))",
        diagonal5op25:
          "linear-gradient(45deg, rgba(255, 189, 189, 0.25), rgba(127, 111, 163, 0.25))",
        diagonal5op50:
          "linear-gradient(45deg, rgba(255, 189, 189, 0.5), rgba(127, 111, 163, 0.5))",
        diagonal5op75:
          "linear-gradient(45deg, rgba(255, 189, 189, 0.75), rgba(127, 111, 163, 0.75))",

        diagonal6:
          "linear-gradient(45deg, rgba(225, 171, 255, 1), rgba(0, 107, 120, 1))",
        diagonal6op25:
          "linear-gradient(45deg, rgba(225, 171, 255, 0.25), rgba(0, 107, 120, 0.25))",
        diagonal6op50:
          "linear-gradient(45deg, rgba(225, 171, 255, 0.5), rgba(0, 107, 120, 0.5))",
        diagonal6op75:
          "linear-gradient(45deg, rgba(225, 171, 255, 0.75), rgba(0, 107, 120, 0.75))",

        // Radial Gradients
        radial1:
          "radial-gradient(circle, rgba(123, 253, 253, 1) 0%, rgba(225, 171, 255, 1) 100%)",
        radial1op25:
          "radial-gradient(circle, rgba(123, 253, 253, 0.25) 0%, rgba(225, 171, 255, 0.25) 100%)",
        radial1op50:
          "radial-gradient(circle, rgba(123, 253, 253, 0.5) 0%, rgba(225, 171, 255, 0.5) 100%)",
        radial1op75:
          "radial-gradient(circle, rgba(123, 253, 253, 0.75) 0%, rgba(225, 171, 255, 0.75) 100%)",

        radial2:
          "radial-gradient(circle, rgba(255, 189, 189, 1) 0%, rgba(225, 171, 255, 1) 100%)",
        radial2op25:
          "radial-gradient(circle, rgba(255, 189, 189, 0.25) 0%, rgba(225, 171, 255, 0.25) 100%)",
        radial2op50:
          "radial-gradient(circle, rgba(255, 189, 189, 0.5) 0%, rgba(225, 171, 255, 0.5) 100%)",
        radial2op75:
          "radial-gradient(circle, rgba(255, 189, 189, 0.75) 0%, rgba(225, 171, 255, 0.75) 100%)",

        radial3:
          "radial-gradient(circle, rgba(127, 111, 163, 1) 0%, rgba(0, 107, 120, 1) 100%)",
        radial3op25:
          "radial-gradient(circle, rgba(127, 111, 163, 0.25) 0%, rgba(0, 107, 120, 0.25) 100%)",
        radial3op50:
          "radial-gradient(circle, rgba(127, 111, 163, 0.5) 0%, rgba(0, 107, 120, 0.5) 100%)",
        radial3op75:
          "radial-gradient(circle, rgba(127, 111, 163, 0.75) 0%, rgba(0, 107, 120, 0.75) 100%)",

        radial4:
          "radial-gradient(circle, rgba(225, 171, 255, 1) 0%, rgba(123, 253, 253, 1) 100%)",
        radial4op25:
          "radial-gradient(circle, rgba(225, 171, 255, 0.25) 0%, rgba(123, 253, 253, 0.25) 100%)",
        radial4op50:
          "radial-gradient(circle, rgba(225, 171, 255, 0.5) 0%, rgba(123, 253, 253, 0.5) 100%)",
        radial4op75:
          "radial-gradient(circle, rgba(225, 171, 255, 0.75) 0%, rgba(123, 253, 253, 0.75) 100%)",

        radial5:
          "radial-gradient(circle, rgba(127, 111, 163, 1) 0%, rgba(255, 189, 189, 1) 100%)",
        radial5op50:
          "radial-gradient(circle, rgba(127, 111, 163, 0.5) 0%, rgba(255, 189, 189, 0.5) 100%)",
        radial5op75:
          "radial-gradient(circle, rgba(127, 111, 163, 0.75) 0%, rgba(255, 189, 189, 0.75) 100%)",

        radial6:
          "radial-gradient(circle, rgba(77, 66, 105, 1) 0%, rgba(0, 53, 77, 1) 100%)",
        radial6op25:
          "radial-gradient(circle, rgba(77, 66, 105, 0.25) 0%, rgba(0, 53, 77, 0.25) 100%)",
        radial6op50:
          "radial-gradient(circle, rgba(77, 66, 105, 0.5) 0%, rgba(0, 53, 77, 0.5) 100%)",
        radial6op75:
          "radial-gradient(circle, rgba(77, 66, 105, 0.75) 0%, rgba(0, 53, 77, 0.75) 100%)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeOutUp: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-100%)" },
        },
        fadeOutDown: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(100%)" },
        },
        fadeOutRight: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(100%)" },
        },
        fadeOutLeft: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(-100%)" },
        },
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        rotateUp: {
          from: { transform: "rotateX(0deg)" },
          to: { transform: "rotateX(360deg)" },
        },
        rotateDown: {
          from: { transform: "rotateX(0deg)" },
          to: { transform: "rotateX(-360deg)" },
        },
        rotateLeft: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(360deg)" },
        },
        rotateRight: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(-360deg)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        scaleDown: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        scaleUpLeft: {
          "0%": { transform: "scale(0) translateX(0)" },
          "100%": { transform: "scale(1) translateX(-50%)" },
        },
        scaleUpRight: {
          "0%": { transform: "scale(0) translateX(0)" },
          "100%": { transform: "scale(1) translateX(50%)" },
        },
        scaleDownLeft: {
          "0%": { transform: "scale(1) translateX(0)" },
          "100%": { transform: "scale(0) translateX(-50%)" },
        },
        scaleDownRight: {
          "0%": { transform: "scale(1) translateX(0)" },
          "100%": { transform: "scale(0) translateX(50%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        slideDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInUp50vh: {
          "0%": { transform: "translateY(50vh)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        slideOutDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        slideUpLeft: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%) translateX(-100%)" },
        },
        slideUpRight: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%) translateX(100%)" },
        },
        slideDownLeft: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%) translateX(-100%)" },
        },
        slideDownRight: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%) translateX(100%)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        heartbeat: {
          "0%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.3)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.3)" },
          "70%": { transform: "scale(1)" },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: 1 },
          "100%": { transform: "scale(2.4)", opacity: 0 },
        },
        rippleUp: {
          "0%": { transform: "scale(0.8) translateY(0)", opacity: 1 },
          "100%": { transform: "scale(2.4) translateY(-50%)", opacity: 0 },
        },
        rippleDown: {
          "0%": { transform: "scale(0.8) translateY(0)", opacity: 1 },
          "100%": { transform: "scale(2.4) translateY(50%)", opacity: 0 },
        },
        rippleLeft: {
          "0%": { transform: "scale(0.8) translateX(0)", opacity: 1 },
          "100%": { transform: "scale(2.4) translateX(-50%)", opacity: 0 },
        },
        rippleRight: {
          "0%": { transform: "scale(0.8) translateX(0)", opacity: 1 },
          "100%": { transform: "scale(2.4) translateX(50%)", opacity: 0 },
        },
        // Define keyframes for diagonal directions
        rippleUpLeft: {
          "0%": { transform: "scale(0.8) translate(0, 0)", opacity: 1 },
          "100%": {
            transform: "scale(2.4) translate(-50%, -50%)",
            opacity: 0,
          },
        },
        rippleUpRight: {
          "0%": { transform: "scale(0.8) translate(0, 0)", opacity: 1 },
          "100%": {
            transform: "scale(2.4) translate(50%, -50%)",
            opacity: 0,
          },
        },
        rippleDownLeft: {
          "0%": { transform: "scale(0.8) translate(0, 0)", opacity: 1 },
          "100%": {
            transform: "scale(2.4) translate(-50%, 50%)",
            opacity: 0,
          },
        },
        rippleDownRight: {
          "0%": { transform: "scale(0.8) translate(0, 0)", opacity: 1 },
          "100%": { transform: "scale(2.4) translate(50%, 50%)", opacity: 0 },
        },
        hueRotate: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
        hueRotateUp: {
          "0%": { transform: "translateY(0)", filter: "hue-rotate(0deg)" },
          "100%": {
            transform: "translateY(-50%)",
            filter: "hue-rotate(360deg)",
          },
        },
        hueRotateDown: {
          "0%": { transform: "translateY(0)", filter: "hue-rotate(0deg)" },
          "100%": {
            transform: "translateY(50%)",
            filter: "hue-rotate(360deg)",
          },
        },
        hueRotateLeft: {
          "0%": { transform: "translateX(0)", filter: "hue-rotate(0deg)" },
          "100%": {
            transform: "translateX(-50%)",
            filter: "hue-rotate(360deg)",
          },
        },
        hueRotateRight: {
          "0%": { transform: "translateX(0)", filter: "hue-rotate(0deg)" },
          "100%": {
            transform: "translateX(50%)",
            filter: "hue-rotate(360deg)",
          },
        },
        vibrate: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(1vh)" },
        },
        vibrateUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateY(-1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translateY(1vh)" },
        },
        vibrateDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateY(1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translateY(-1vh)" },
        },
        vibrateLeft: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(1vh)" },
        },
        vibrateRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(-1vh)" },
        },
        vibrateUpLeft: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translate(-1vh, -1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translate(1vh, 1vh)" },
        },
        vibrateUpRight: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translate(1vh, -1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translate(-1vh, 1vh)" },
        },
        vibrateDownLeft: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translate(-1vh, 1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translate(1vh, -1vh)" },
        },
        vibrateDownRight: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translate(1vh, 1vh)" },
          "20%, 40%, 60%, 80%": { transform: "translate(-1vh, -1vh)" },
        },
        raindrop: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        drawBorder: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        wiggle: "wiggle 1.5s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-out",
        fadeOut: "fadeOut 0.5s ease-out",
        fadeInUp: "fadeInUp 1.5s ease-out",
        fadeInDown: "fadeInDown 1.5s ease-out",
        fadeInRight: "fadeInRight 1.5s ease-out",
        fadeInLeft: "fadeInLeft 1.5s ease-out",
        fadeOutUp: "fadeOutUp 1.5s ease-out",
        fadeOutDown: "fadeOutDown 1.5s ease-out",
        fadeOutRight: "fadeOutRight 1.5s ease-out",
        fadeOutLeft: "fadeOutLeft 1.5s ease-out",
        rotate: "rotate 2s linear infinite",
        rotateUp: "rotateUp 1.5s linear infinite",
        rotateDown: "rotateDown 1.5s linear infinite",
        rotateLeft: "rotateLeft 1.5s linear infinite",
        rotateRight: "rotateRight 1.5s linear infinite",
        scaleUp: "scaleUp 1.5s ease-out",
        scaleDown: "scaleDown 1.5s ease-out",
        scaleUpLeft: "scaleUpLeft 1.5s ease-out",
        scaleUpRight: "scaleUpRight 1.5s ease-out",
        scaleDownLeft: "scaleDownLeft 1.5s ease-out",
        scaleDownRight: "scaleDownRight 1.5s ease-out",
        slideUp: "slideUp 1.5s ease-out",
        slideDown: "slideDown 1.5s ease-out",
        slideLeft: "slideLeft 1.5s ease-out",
        slideRight: "slideRight 1.5s ease-out",
        slideInUp: "slideInUp 1.5s ease-out",
        slideInUp50vh: "slideInUp50vh 1.5s ease-out",
        slideInDown: "slideInDown 1.5s ease-out",
        slideInRight: "slideInRight 1.5s ease-out",
        slideInLeft: "slideInLeft 1.5s ease-out",
        slideOutUp: "slideOutUp 1.5s ease-out",
        slideOutDown: "slideOutDown 1.5s ease-out",
        slideUpLeft: "slideUpLeft 1.5s ease-out",
        slideUpRight: "slideUpRight 1.5s ease-out",
        slideDownLeft: "slideDownLeft 1.5s ease-out",
        slideDownRight: "slideDownRight 1.5s ease-out",
        zoomIn: "zoomIn 1.5s ease-out",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        ripple: "ripple 1.5s linear infinite",
        rippleUp: "rippleUp 1.5s linear infinite",
        rippleDown: "rippleDown 1.5s linear infinite",
        rippleLeft: "rippleLeft 1.5s linear infinite",
        rippleRight: "rippleRight 1.5s linear infinite",
        rippleUpLeft: "rippleUpLeft 1.5s linear infinite",
        rippleUpRight: "rippleUpRight 1.5s linear infinite",
        rippleDownLeft: "rippleDownLeft 1.5s linear infinite",
        rippleDownRight: "rippleDownRight 1.5s linear infinite",
        hueRotate: "hueRotate 3s linear infinite",
        hueRotateUp: "hueRotateUp 3s linear infinite",
        hueRotateDown: "hueRotateDown 3s linear infinite",
        hueRotateLeft: "hueRotateLeft 3s linear infinite",
        hueRotateRight: "hueRotateRight 3s linear infinite",
        vibrate: "vibrate 1.5s infinite",
        vibrateUp: "vibrateUp 1.5s infinite",
        vibrateDown: "vibrateDown 1.5s infinite",
        vibrateLeft: "vibrateLeft 1.5s infinite",
        vibrateRight: "vibrateRight 1.5s infinite",
        vibrateUpLeft: "vibrateUpLeft 1.5s infinite",
        vibrateUpRight: "vibrateUpRight 1.5s infinite",
        vibrateDownLeft: "vibrateDownLeft 1.5s infinite",
        vibrateDownRight: "vibrateDownRight 1.5s infinite",
        rain: "raindrop 1s linear infinite",
        animation: {
          drawBorder: "drawBorder 1s ease forwards 1s", // 1s duration, 1s delay
        },
      },
      transitionTimingFunction: {
        elastic: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        "ease-in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
        "ease-in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        "ease-in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
        "ease-in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        "ease-in-sine": "cubic-bezier(0.47, 0, 0.745, 0.715)",
        "ease-in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "ease-in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
        "ease-in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
        "ease-out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "ease-out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
        "ease-out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
        "ease-out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
        "ease-out-sine": "cubic-bezier(0.39, 0.575, 0.565, 1)",
        "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "ease-out-circ": "cubic-bezier(0.075, 0.82, 0.165, 1)",
        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "ease-in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
        "ease-in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
        "ease-in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
        "ease-in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",
        "ease-in-out-sine": "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
        "ease-in-out-expo": "cubic-bezier(1, 0, 0, 1)",
        "ease-in-out-circ": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
        "ease-in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "snail-pace": "cubic-bezier(0.2, 0.1, 0.3, 0.2)",
        "bounce-out": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "elastic-start": "cubic-bezier(0.75, -0.5, 0.25, 1.75)",
        "sharp-snap": "cubic-bezier(0.9, 0.1, 0.1, 0.1)",
        "slow-mo": "cubic-bezier(0.05, 0.85, 0.15, 1)",
      },
      maskImage: {
        "fade-bottom":
          "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        "fade-top":
          "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        "fade-left":
          "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        "fade-right":
          "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        "fade-outer":
          "radial-gradient(circle, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
        "fade-top-bottom":
          "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0))",
        "fade-right-left":
          "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0))",
        "fade-center":
          "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 50%)",
      },
    },
  },
  variants: {
    // Enable variants for text shadow if needed
    textShadow: ["responsive", "hover", "focus"],
  },
  plugins: [
    // TEXT SHADOW PLUGIN
    plugin(function ({ addUtilities, theme }) {
      const textShadows = theme("textShadow");
      const newUtilities = {};

      Object.keys(textShadows).forEach((key) => {
        // Skip HD keys to prevent duplication
        if (key.endsWith("HD")) return;

        const normalValue = textShadows[key];
        const hdKey = `${key}HD`;
        const hdValue = textShadows[hdKey];

        // Normal utility
        newUtilities[`.${key}`] = {
          textShadow: normalValue,
        };

        // HD utility with a media query
        if (hdValue) {
          newUtilities[`@media (min-width: 1920px)`] = {
            ...newUtilities[`@media (min-width: 1920px)`],
            [`.${key}`]: {
              textShadow: hdValue,
            },
          };
        }
      });

      addUtilities(newUtilities, ["responsive", "hover", "focus"]);
    }),
    // TEXT STROKE PLUGIN
    plugin(function ({ addUtilities, theme, e }) {
      const newUtilities = {};
      const strokeWidths = theme("textStrokeWidth", {});
      const strokeColors = theme("textStrokeColor", {});

      Object.keys(strokeWidths).forEach((widthKey) => {
        Object.keys(strokeColors).forEach((colorKey) => {
          const className = `.text-stroke-${widthKey}-${e(colorKey)}`;
          newUtilities[className] = {
            "-webkit-text-stroke-width": strokeWidths[widthKey],
            "-webkit-text-stroke-color": strokeColors[colorKey],
          };
        });
      });

      addUtilities(newUtilities, ["responsive", "hover", "focus"]);
    }),
    // TRANSITIONS PLUGIN
    plugin(function ({ addUtilities }) {
      const transitionUtilities = {
        ".transition-300": {
          transition: "all 300ms ease-in-out",
        },
        ".transition-400": {
          transition: "all 400ms ease-in-out",
        },
        ".transition-500": {
          transition: "all 500ms ease-in-out",
        },
        ".transition-600": {
          transition: "all 600ms ease-in-out",
        },
        ".transition-700": {
          transition: "all 700ms ease-in-out",
        },
        ".transition-800": {
          transition: "all 800ms ease-in-out",
        },
        ".transition-900": {
          transition: "all 900ms ease-in-out",
        },
        ".transition-1000": {
          transition: "all 1000ms ease-in-out",
        },
        ".transition-1100": {
          transition: "all 1100ms ease-in-out",
        },
        ".transition-1200": {
          transition: "all 1200ms ease-in-out",
        },
        ".transition-1300": {
          transition: "all 1300ms ease-in-out",
        },
        ".transition-1400": {
          transition: "all 1400ms ease-in-out",
        },
        ".transition-1500": {
          transition: "all 1500ms ease-in-out",
        },
        ".transition-1600": {
          transition: "all 1600ms ease-in-out",
        },
        ".transition-1700": {
          transition: "all 1700ms ease-in-out",
        },
        ".transition-1800": {
          transition: "all 1800ms ease-in-out",
        },
        ".transition-1900": {
          transition: "all 1900ms ease-in-out",
        },
        ".transition-2000": {
          transition: "all 2000ms ease-in-out",
        },
      };
      addUtilities(transitionUtilities, ["responsive", "hover", "focus"]);
    }),
    // BOX SHADOW PLUGIN
    plugin(function ({ addUtilities, theme }) {
      const boxShadows = theme("boxShadow");
      const newUtilities = {};

      Object.keys(boxShadows).forEach((key) => {
        // Skip HD keys to prevent duplication
        if (key.endsWith("HD")) return;

        const normalValue = boxShadows[key];
        const hdKey = `${key}HD`;
        const hdValue = boxShadows[hdKey];

        // Normal utility
        newUtilities[`.${key}`] = {
          boxShadow: normalValue,
        };

        // HD utility with a media query
        if (hdValue) {
          newUtilities[`@media (min-width: 1920px)`] = {
            ...newUtilities[`@media (min-width: 1920px)`],
            [`.${key}`]: {
              boxShadow: hdValue,
            },
          };
        }
      });

      addUtilities(newUtilities, ["responsive", "hover", "focus"]);
    }),
    // SCALE ITEM PLUGIN
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".scale-item-xs": {
          "@apply hover:cursor-pointer hover:scale-101 transition-all duration-500":
            {},
        },
        ".scale-item-sm": {
          "@apply hover:cursor-pointer hover:scale-102 transition-all duration-500":
            {},
        },
        ".scale-item-md": {
          "@apply hover:cursor-pointer hover:scale-103 transition-all duration-500":
            {},
        },
        ".scale-item-lg": {
          "@apply hover:cursor-pointer hover:scale-104 transition-all duration-500":
            {},
        },
        ".scale-item-Looser": {
          "@apply hover:cursor-pointer hover:scale-105 transition-all duration-500":
            {},
        },
        ".scale-item-xxl": {
          "@apply hover:cursor-pointer hover:scale-107 transition-all duration-500":
            {},
        },
      };

      // Add the utilities to Tailwind
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
    // OVERLAYS PLUGIN
    plugin(function ({ addBase, theme }) {
      addBase({
        ".defaultOverlay": {
          backgroundColor: theme("colors.col.550"), // Accessing your theme colors
          backdropFilter: "blur(4px)", // Example - use 'backdrop-blur-md' directly if appropriate
        },
        ".insetOverlay": {
          boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)", // Example - adjust as needed
          backgroundColor: theme("colors.col.930"),
        },
        ".defaultOverlayBlur": {
          backdropFilter: "blur(4px)",
        },
        ".imageOverlay": {
          backgroundImage:
            "linear-gradient(rgba(255, 233, 122, 0.4), rgba(255, 233, 122, 0.6)), url('/images/doathingbg2.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        },
        ".defaultTextGradient": {
          backgroundImage:
            "linear-gradient(to right, #D0E2F2, #D9B5AD, #e4edf5,  #D9B5AD, #D0E2F2);",
        },
        ".butterflyFont": {
          fontFamily: "'Butterfly Kids', cursive",
        },
        ".mono-font": {
          fontFamily: '"Roboto", monospace',
        },
        ".fade-bottom": {
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          "-webkit-mask-image":
            "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        },
        ".fade-top": {
          maskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          "-webkit-mask-image":
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        },
        ".fade-left": {
          maskImage:
            "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          "-webkit-mask-image":
            "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        },
        ".fade-right": {
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          "-webkit-mask-image":
            "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        },
        ".fade-outer": {
          maskImage:
            "radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 70%)",
          "-webkit-mask-image":
            "radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 70%)",
        },
        ".fade-top-bottom": {
          maskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0))",
          "-webkit-mask-image":
            "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0))",
        },
        ".fade-right-left": {
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0))",
          "-webkit-mask-image":
            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0))",
        },
        ".fade-center": {
          maskImage:
            "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 50%)",
          "-webkit-mask-image":
            "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 50%)",
        },
      });
    }),
    // Z-INDEX PLUGIN 0 to 1000 by 5s
    plugin(function ({ addUtilities }) {
      const newUtilities = {};
      for (let i = 0; i <= 1000; i += 5) {
        newUtilities[`z-${i}`] = {
          zIndex: i,
        };
      }
      addUtilities(newUtilities, ["responsive", "hover", "focus"]);
    }),
    // INPUT AND TEXTAREA PLUGIN
    plugin(function ({ addComponents, theme }) {
      const newComponents = {
        label: {
          color: theme("colors.col.700"),
          fontSize: theme("fontSize.lg[0]"),
          fontWeight: "bold",
        },
        ".inputStyles, input": {
          width: "100%",
          backgroundColor: "transparent",
          color: theme("colors.col.100"),
          padding: `0.4vh 1vh`,
          borderBottomWidth: "0.2vh",
          borderBottomStyle: "solid",
          borderBottomColor: theme("colors.col.770"),
          borderRadius: 0,
          fontWeight: 500,
          pointerEvents: "auto",
          lineHeight: theme("fontSize.md[1].lineHeight"),
          "@media (min-width: 320px)": {
            fontSize: "16px",
            lineHeight: "1.44",
          },
          "@media (min-width: 640px)": {
            fontSize: "2vh",
          },
          "@media (min-width: 1280px)": {
            fontSize: "2.1vh",
          },
          outline: "none",
          "&:focus": {
            borderRadius: "1vh",
            backgroundColor: theme("colors.col.180"),
            borderBottomWidth: "0.2vh",
            borderBottomColor: theme("colors.col.600"),
            boxShadow: theme("boxShadow.insetGlowXxl"),
            transition: "all 0.3s ease-in-out",
            outline: `0.2vh solid ${theme("colors.col.200")}`, // Added focus ring
            outlineOffset: "0.2vh",
            color: theme("colors.col.900"),
          },
          "&:-webkit-autofill": {
            borderRadius: "0.7vh",
            "-webkit-box-shadow": `0 0 0 100px ${theme(
              "colors.col.180"
            )} inset !important`,
            "-webkit-text-fill-color": theme("colors.col.900"),
            transition: "background-color 5000s ease-in-out 0s",
          },
          "&:-webkit-autofill:focus": {
            borderRadius: "0.7vh",
            "-webkit-box-shadow": `0 0 0 100px ${theme(
              "colors.col.180"
            )} inset !important`,
            "-webkit-text-fill-color": theme("colors.col.900"),
            borderBottomColor: theme("colors.col.600"),
          },
          transition: "all 0.4s ease-in-out",
        },
        ".textareaStyles, textarea": {
          width: "100%",
          pointerEvents: "auto",
          backgroundColor: "transparent",
          color: theme("colors.col.900"),
          padding: `0.4vh 1vh`,
          borderBottomWidth: "0.2vh",
          borderBottomStyle: "solid",
          borderBottomColor: theme("colors.col.770"),
          borderRadius: 0,
          outline: "none",
          "&:focus": {
            borderRadius: "0.7vh",
            backgroundColor: theme("colors.col.white"),
            boxShadow: `${theme("boxShadow.insetGlow6xl")}, 0 0 0 0.2vh ${theme(
              "colors.col.200"
            )}`,
            transition: "all 0.3s ease-in-out",
            outline: "none",
          },
          transition: "all 0.4s ease-in-out",
          "@media (min-width: 320px)": {
            fontSize: "16px",
            lineHeight: "1.44",
          },
          "@media (min-width: 640px)": {
            fontSize: "2vh",
          },
          "@media (min-width: 1280px)": {
            fontSize: "2.1vh",
          },
          "&:-webkit-autofill": {
            "-webkit-box-shadow": `0 0 0 100px ${theme(
              "colors.col.180"
            )} inset !important`,
            "-webkit-text-fill-color": theme("colors.col.900"),
            transition: "background-color 5000s ease-in-out 0s",
          },
          "&:-webkit-autofill:focus": {
            borderRadius: "0.7vh",
            "-webkit-box-shadow": `0 0 0 100px ${theme(
              "colors.col.180"
            )} inset !important`,
            "-webkit-text-fill-color": theme("colors.col.900"),
            borderBottomColor: theme("colors.col.600"),
          },
          transition: "all 0.4s ease-in-out",
        },

        ".inline-input-styles": {
          display: "inline-block",
          width: "auto",
          padding: "0 1vh",
          margin: "0 0.5vh",
          borderWidth: 0,
          borderBottomStyle: "solid",
          borderBottomWidth: "0.2vh",
          backgroundColor: theme("colors.col.100"),
          color: theme("colors.col.900"),
          fontSize: theme("fontSize.md[0]"),
          borderBottomColor: theme("colors.col.770"),
          boxShadow: theme("boxShadow.insetGlow6xl"),
          outline: "none",
          transition: "all 0.3s ease-in-out",
          caretColor: "purple",
          pointerEvents: "auto",
          caretWidth: "5px",
          "&:not(:-webkit-autofill)::-webkit-input-caret": {
            caretColor: "purple",
            caretWidth: "3px",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "2px",
            backgroundColor: "purple",
            animation: "blink 1s step-start 0s infinite",
          },
          "&:focus::after": {
            animation: "blink 1s step-start 0s infinite",
          },
          "&:focus": {
            backgroundColor: theme("colors.col.100"),
            boxShadow: theme("boxShadow.shadowNarrowNormal"),
            transition: "all 0.3s ease-in-out",
            outline: "none",
          },
          "@screen mobile": {
            fontSize: "16px",
            lineHeight: "1.2",
          },
          "@screen md": {
            fontSize: "1.9vh",
          },
          "@screen xl": {
            fontSize: "2.1vh",
          },
          "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus":
            {
              "-webkit-text-fill-color": theme("colors.col.900"),
              "-webkit-box-shadow": `0 0 0 100px ${theme(
                "colors.col.100"
              )} inset !important`,
              transition: "background-color 5000s ease-in-out 0s",
              "border-bottom-color": theme("colors.col.770"),
              "background-color": theme("colors.col.100"),
              "font-size": "inherit",
              "caret-color": "purple",
            },
          "&:-webkit-autofill:focus": {
            "-webkit-box-shadow": `0 0 0 100px ${theme(
              "colors.col.white"
            )} inset !important`,
            "background-color": theme("colors.col.white"),
          },
        },
        // ".textareaStyles": {
        //   width: "100%",
        //   backgroundColor: "transparent",
        //   color: theme("colors.col.900"),
        //   padding: `0.4vh 1vh`,
        //   borderWidth: "0.2vh",
        //   borderStyle: "solid",
        //   fontSize: theme("fontSize.md[0]"),
        //   borderColor: theme("colors.col.470"),
        //   borderBottomColor: theme("colors.col.770"),
        //   backgroundColor: theme("colors.col.140"),
        //   outline: "none",
        //   "@screen mobile": {
        //     fontSize: "16px",
        //     lineHeight: "1.2",
        //   },
        //   "@screen md": {
        //     fontSize: "1.9vh",
        //   },
        //   "@screen xl": {
        //     fontSize: "2.1vh",
        //   },
        //   "&:focus": {
        //     backgroundColor: theme("colors.col.180"),
        //     borderWidth: "0.2vh",
        //     borderRadius: "0.7vh",
        //     borderColor: theme("colors.col.400"),
        //     boxShadow: theme("boxShadow.insetGlow6xl"),
        //     borderBottomColor: theme("colors.col.600"),
        //     boxShadow: theme("boxShadow.insetGlowXxl"),
        //   },
        //   transition: "all 0.4s ease-in-out",
        // },
        // ".cometTextInputStyles": {
        //   width: "100%",
        //   backgroundColor: theme("colors.col.180"),
        //   color: theme("colors.col.900"),
        //   padding: `0.4vh 1vh`,
        //   borderWidth: "0.2vh",
        //   borderStyle: "solid",
        //   pointerEvents: "auto",
        //   fontSize: theme("fontSize.md[0]"),
        //   borderColor: theme("colors.col.470"),
        //   outline: "none",
        //   "@screen mobile": {
        //     fontSize: "16px",
        //     lineHeight: "1.2",
        //   },
        //   "@screen md": {
        //     fontSize: "1.9vh",
        //   },
        //   "@screen xl": {
        //     fontSize: "2.1vh",
        //   },
        //   "&:focus": {
        //     backgroundColor: theme("colors.col.100"),
        //     borderWidth: "0.2vh",
        //     borderRadius: "0.7vh",
        //     borderColor: theme("colors.col.400"),
        //     boxShadow: theme("boxShadow.insetGlow6xl"),
        //   },
        //   transition: "all 0.4s ease-in-out",
        // },
        ".minimal-input-styles, .admin-form-container input": {
          width: "100%",
          padding: "0 1vh",
          margin: "0 0.5vh",
          borderWidth: 0,
          borderRadius: 0,
          borderBottomStyle: "solid",
          borderBottomWidth: "0.2vh",
          backgroundColor: theme("colors.col.180"),
          color: theme("colors.col.900"),
          fontSize: theme("fontSize.md[0]"),
          borderBottomColor: theme("colors.col.770"),
          boxShadow: theme("boxShadow.insetGlow2xl"),
          outline: "none",
          pointerEvents: "auto",
          transition: "all 0.3s ease-in-out",
          caretColor: "purple",
          caretWidth: "5px",
          "&:focus": {
            borderRadius: "0.7vh",
            backgroundColor: theme("colors.col.white"),
            boxShadow: theme("boxShadow.insetGlow6xl"),
            transition: "all 0.3s ease-in-out",
            outline: `0.2vh solid ${theme("colors.col.200")}`,
            outlineOffset: "0.2vh",
            "-webkit-border-radius": "1vh",
            "-moz-border-radius": "1vh",
            "outline-radius": "1vh",
            "-webkit-outline-radius": "1vh",
          },
          "@screen mobile": {
            fontSize: "16px",
            lineHeight: "1.2",
          },
          "@screen md": {
            fontSize: "1.9vh",
          },
          "@screen xl": {
            fontSize: "2.1vh",
          },
          "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus":
            {
              "-webkit-text-fill-color": theme("colors.col.900"),
              "-webkit-box-shadow": `0 0 0 100px ${theme(
                "colors.col.170"
              )} inset !important`,
              transition: "background-color 5000s ease-in-out 0s",
              "border-bottom-color": theme("colors.col.770"),
              "background-color": theme("colors.col.170"),
              "font-size": "inherit",
              "caret-color": "purple",
            },
          "&:-webkit-autofill:focus": {
            "-webkit-box-shadow": `0 0 0 100px ${theme(
              "colors.col.white"
            )} inset !important`,
            "background-color": theme("colors.col.white"),
          },
        },
        ".minimal-textarea-styles, .admin-form-container textarea": {
          width: "100%",
          padding: "0 1vh",
          margin: "0 0.5vh",
          borderWidth: 0,
          borderRadius: 0,
          borderBottomStyle: "solid",
          borderBottomWidth: "0.2vh",
          backgroundColor: theme("colors.col.180"),
          borderBottomColor: theme("colors.col.770"),
          color: theme("colors.col.900"),
          fontSize: theme("fontSize.md[0]"),
          boxShadow: theme("boxShadow.insetGlow2xl"),
          outline: "none",
          pointerEvents: "auto",
          transition: "all 0.3s ease-in-out",
          caretColor: "purple",
          caretWidth: "5px",
          "&:focus": {
            borderRadius: "1vh",
            backgroundColor: theme("colors.col.white"),
            boxShadow: theme("boxShadow.insetGlow6xl"),
            transition: "all 0.3s ease-in-out",
            outline: `0.2vh solid ${theme("colors.col.200")}`,
            outlineOffset: "0.2vh",
            "-webkit-border-radius": "1vh",
            "-moz-border-radius": "1vh",
            "outline-radius": "1vh",
            "-webkit-outline-radius": "1vh",
          },
          "@screen mobile": {
            fontSize: "16px",
            lineHeight: "1.2",
          },
          "@screen md": {
            fontSize: "1.9vh",
          },
          "@screen xl": {
            fontSize: "2.1vh",
          },
          "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus":
            {
              "-webkit-text-fill-color": theme("colors.col.900"),
              "-webkit-box-shadow": `0 0 0 100px ${theme(
                "colors.col.170"
              )} inset !important`,
              transition: "background-color 5000s ease-in-out 0s",
              "border-bottom-color": theme("colors.col.770"),
              "background-color": theme("colors.col.170"),
              "font-size": "inherit",
              "caret-color": "purple",
            },
          "&:-webkit-autofill:focus": {
            "-webkit-box-shadow": `0 0 0 100px ${theme(
              "colors.col.white"
            )} inset !important`,
            "background-color": theme("colors.col.white"),
          },
        },
        ".admin-form-container label": {
          fontWeight: 700,
          color: theme("colors.col.700"),
          textShadow: theme("textShadow.textGlowWhiteXxs"),
        },
        ".admin-form-container .slider": {
          borderRadius: "1vh",
          width: "100%",
          padding: "0", // Remove padding
          margin: "1vh 0", // Add vertical margin instead
          border: "none", // Remove all borders
          backgroundColor: "transparent",
          boxShadow: theme("boxShadow.shadowNarrowTight"),

          // Reset track styles
          "&::-webkit-slider-runnable-track": {
            backgroundColor: theme("colors.col.500"),
            height: "0.6vh",
            borderRadius: "0.2vh",
          },

          // Reset thumb styles
          "&::-webkit-slider-thumb": {
            appearance: "none",
            width: "2vh",
            height: "2vh",
            backgroundColor: theme("colors.col.300"),
            border: `0.2vh solid ${theme("colors.col.950")}`,
            borderRadius: "50%",
            marginTop: "-0.8vh", // Centers the thumb on the track
            cursor: "pointer",
            boxShadow: theme("boxShadow.shadowNarrowNormal"),
          },

          // Firefox styles
          "&::-moz-range-track": {
            backgroundColor: theme("colors.col.300"),
            height: "0.4vh",
            borderRadius: "0.2vh",
          },

          "&::-moz-range-thumb": {
            width: "2vh",
            height: "2vh",
            backgroundColor: theme("colors.col.300"),
            border: `0.2vh solid ${theme("colors.col.900")}`,
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: theme("boxShadow.boxGlowWhiteSm"),
          },

          // Focus styles
          "&:focus": {
            outline: "none",
            backgroundColor: "transparent",
            boxShadow: theme("boxShadow.boxGlowWhiteXxs"),
          },
        },
      };

      addComponents(newComponents);
      addComponents(newComponents);
    }),
    // ELEMENTS and LINKS PLUGIN
    plugin(function ({ addBase, theme }) {
      addBase({
        html: {
          padding: 0,
          margin: 0,
          boxSizing: "border-box",
          scrollBehavior: "smooth",
          overflowX: "hidden",
          scrollbarWidth: "thin",
          overflow: "hidden",
          borderFadius: "none",
          maxHeight: "100svh",
        },
        body: {
          color: theme("colors.col.900"),
          width: "100%",
          maxHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: '"Quicksand", sans-serif',
          // backgroundImage: "url('/images/siteBackground.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          padding: 0,
          position: "relative",
          overflow: "hidden",
          scrollBehavior: "smooth",
          borderRadius: "0px",
          fontSize: theme("fontSize.md[0]"),
          fontWeight: 500,
          lineHeight: theme("fontSize.md[1].lineHeight"),
          "@screen mobile": {
            fontSize: "2vh",
            lineHeight: "1.44",
          },
          "@screen xl": {
            fontSize: "2.1vh",
          },
        },
        input: {
          "@screen mobile": {
            fontSize: "2vh",
            lineHeight: "1.44",
          },
          "@screen md": {
            fontSize: "2.1vh",
          },
          "@screen xl": {
            fontSize: "2.3vh",
          },
        },
        textarea: {
          "@screen mobile": {
            fontSize: "2vh",
            lineHeight: "1.44",
          },
          "@screen md": {
            fontSize: "2.1vh",
          },
          "@screen xl": {
            fontSize: "2.3vh",
          },
        },
        a: {
          color: theme("colors.col.300"),
          textDecoration: "none",
          position: "relative",
          display: "inline-block",
          pointerEvents: "auto",
          tabIndex: 0,
          "&:hover": {
            color: theme("colors.col.200"),
          },

          "&:focus": {
            outline: "none",
            ring: `0.2vh solid ${theme("colors.col.300")}`,
            color: theme("colors.col.200"),
            // textDecoration: "underline",
          },
        },
        ".link-no-styles": {
          color: "inherit",
          textDecoration: "none",
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "transparent",
            color: "inherit",
          },
        },
        // a non-focusable link
        ".non-focusable-link": {
          pointerEvents: "none",
          tabIndex: -1,
          outline: "none",
          color: "inherit",
          textDecoration: "none",
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          padding: "0",
          margin: "0",
          textShadow: "none",
          fontWeight: "inherit",
          display: "inline",
          position: "static",
          "&:hover": {
            backgroundColor: "transparent",
            color: "inherit",
          },
          "&:focus": {
            outline: "none",
          },
          "&::before": {
            content: "none",
          },
        },
        // gradebook sidebar card
        ".gradebook-sidebar-card": {
          pointerEvents: "none",
          outline: "none",
          color: "inherit",
          textDecoration: "none",
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          padding: "0",
          margin: "0",
          textShadow: "none",
          fontWeight: "inherit",
          display: "inline",
          position: "static",
          "&:hover": {
            backgroundColor: "transparent",
            color: "black",
          },
          "&:focus": {
            outline: "none",
            color: "black",
          },
          "&::before": {
            content: "none",
          },
        },
        p: {
          margin: 0,
          padding: 0,
          // fontSize: "inherit",
        },
        h1: {
          color: theme("colors.col.700"),
          textShadow: theme("textShadow.textGlowXxs"),
          marginTop: "1.5vh",
          fontWeight: 600,
          marginBottom: "1.5vh",
          "@screen mobile": {
            fontSize: "3.4vh",
            lineHeight: 1.2,
          },
          "@screen sm": {
            fontSize: "3.6vh",
          },
          "@screen md": {
            fontSize: "4.5vh",
          },
        },
        h2: {
          color: theme("colors.col.700"),
          textShadow: theme("textShadow.textGlowXxs"),
          fontWeight: 600,
          marginTop: "1.5vh",
          marginBottom: "1.5vh",
          "@screen mobile": {
            fontSize: "3vh",
            lineHeight: 1.2,
          },
          "@screen sm": {
            fontSize: "3.2vh",
          },
          "@screen md": {
            fontSize: "3.6vh",
          },
        },
        h3: {
          color: theme("colors.col.700"),
          textShadow: theme("textShadow.textGlowXxs"),
          fontWeight: 600,
          marginTop: "1.5vh",
          marginBottom: "1.5vh",
          "@screen mobile": {
            fontSize: "2.6vh",
            lineHeight: 1.2,
          },
          "@screen sm": {
            fontSize: "2.8vh",
          },
          "@screen md": {
            fontSize: "3.2vh",
          },
        },
        h4: {
          color: theme("colors.col.700"),
          textShadow: theme("textShadow.textGlowXxs"),
          fontWeight: 600,
          marginTop: "1.5vh",
          marginBottom: "1.5vh",
          "@screen mobile": {
            fontSize: "2.2vh",
            lineHeight: 1.2,
          },
          "@screen sm": {
            fontSize: "2.4vh",
          },
          "@screen md": {
            fontSize: "2.8vh",
          },
        },
        h5: {
          color: theme("colors.col.700"),
          textShadow: theme("textShadow.textGlowXxs"),
          fontWeight: 600,
          marginTop: "1.5vh",
          marginBottom: "1.5vh",
          "@screen mobile": {
            fontSize: "2vh",
            lineHeight: 1.2,
          },
          "@screen sm": {
            fontSize: "2.2vh",
          },
          "@screen md": {
            fontSize: "2.6vh",
          },
        },
        h6: {
          color: theme("colors.col.700"),
          textShadow: theme("textShadow.textGlowXxs"),
          fontWeight: 600,
          marginTop: "1.5vh",
          marginBottom: "1.5vh",
          "@screen mobile": {
            fontSize: "1.8vh",
            lineHeight: 1.2,
          },
          "@screen sm": {
            fontSize: "2vh",
          },
          "@screen md": {
            fontSize: "2.4vh",
          },
        },
        table: {
          borderCollapse: "collapse",
          borderRadius: "0",
          width: "96%",
          margin: "2vh",
          boxShadow: theme("boxShadow.shadowNarrowTight"),
          backgroundColor: theme("colors.col.940"),
        },
        th: {
          border: `0.2vh solid ${theme("colors.col.900")}`,
          padding: "0.7vh 1vh",
          borderRadius: "0",
          textAlign: "left",
          backgroundColor: theme("colors.col.970"),
          borderRadius: "1vh 1vh 0vh 0vh",
          borderRadius: "0",
          color: theme("colors.col.500"),
          fontWeight: "bold",
        },
        td: {
          border: `0.2vh solid ${theme("colors.col.900")}`,
          padding: "0.7vh 1vh",
          borderRadius: "0",
          textAlign: "left",
          textAlign: "center",
          padding: "0.5vh 1vh",
        },
        hr: {
          border: "none",
          borderRadius: "0",
          borderTop: `0.2vh solid cyan`,
          margin: "1vh 0",
        },
        pre: {
          backgroundColor: theme("colors.col.700"),
          color: theme("colors.col.100"),
          padding: "0.5vh 1vh",
          borderRadius: "1vh",
          overflowX: "auto",
          fontSize: "1.5vh",
          fontFamily: "monospace",
        },
        sup: {
          top: "-0.5vh",
          fontSize: "1.4vh",
          lineHeight: 0,
          position: "relative",
          verticalAlign: "baseline",
        },
        sub: {
          bottom: "-0.25vh",
          fontSize: "1.4vh",
          lineHeight: 0,
          position: "relative",
          verticalAlign: "baseline",
        },
        abbr: {
          borderBottom: `0.2vh dotted ${theme("colors.col.300")}`,
          cursor: "help",
        },
        address: {
          fontStyle: "italic",
          color: theme("colors.col.200"),
          marginBottom: "2vh",
        },
        cite: {
          fontStyle: "italic",
          color: theme("colors.col.300"),
          padding: "0.5vh",
        },
        details: {
          border: `0.2vh solid ${theme("colors.col.550")}`,
          borderRadius: "1vh",
          marginBottom: "2vh",
          backgroundColor: theme("colors.col.970"),
          overflow: "hidden",
        },
        summary: {
          fontWeight: "bold",
          cursor: "pointer",
          padding: "1vh 1.5vh",
          backgroundColor: theme("colors.col.970"),
          color: theme("colors.col.500"),
          display: "flex",
          alignItems: "center",
          transition: "background-color 300ms ease-in-out",
          "&::marker": {
            content: "none",
          },
          "&::before": {
            content: "'▶'",
            marginRight: "1vh",
            transition: "transform 300ms ease-in-out",
          },
        },
        "details[open] > summary::before": {
          transform: "rotate(90deg)",
        },
        "details > div": {
          padding: "0 1.5vh",
          transition: "all 300ms ease-in-out",
          maxHeight: "0",
          overflow: "hidden",
        },
        "details[open] > p": {
          padding: "0 1.5vh 1vh 3.5vh",
          fontSize: "inherit",
        },
        time: {
          color: theme("colors.col.300"),
          fontStyle: "italic",
        },
        var: {
          fontStyle: "italic",
          color: theme("colors.col.400"),
        },
        kbd: {
          backgroundColor: theme("colors.col.100"),
          border: `0.2vh solid ${theme("colors.col.200")}`,
          borderRadius: "0.5vh",
          padding: "0.2vh 0.5vh",
          fontSize: "1.6vh",
        },
        mark: {
          backgroundColor: theme("colors.col.200"),
          color: theme("colors.col.500"),
          padding: "0.2vh 0.5vh",
        },
        progress: {
          width: "100%",
          height: "2vh",
          marginBottom: "1vh",
        },
        mark: {
          width: "100%",
          height: "2vh",
          marginBottom: "1vh",
        },
        output: {
          color: theme("colors.col.400"),
          fontSize: "1.8vh",
        },
        dialog: {
          border: `0.2vh solid ${theme("colors.col.300")}`,
          borderRadius: "1vh",
          padding: "2vh",
          backgroundColor: theme("colors.col.100"),
        },
        figure: {
          margin: "2vh 0",
          textAlign: "center",
        },
        figcaption: {
          color: theme("colors.col.300"),
          fontSize: "1.6vh",
          fontStyle: "italic",
          marginTop: "1vh",
        },
        main: {
          margin: "3vh 0",
        },
        article: {
          margin: "3vh 0",
        },
        section: {
          margin: "3vh 0",
        },
        header: {
          backgroundColor: theme("colors.col.100"),
          color: theme("colors.col.500"),
          padding: "2vh",
          textAlign: "center",
        },
        footer: {
          backgroundColor: theme("colors.col.100"),
          color: theme("colors.col.500"),
          padding: "2vh",
          textAlign: "center",
        },
        aside: {
          color: "#ffa1f6",
          textShadow: theme("textShadow.textShadow"),
          fontFamily: "monospace",
          padding: "0.5vh",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          paddingLeft: "4vh",
          "@screen mobile": {
            fontSize: "1.8vh",
            lineHeight: 1.44,
          },
          "@screen sm": {
            fontSize: "2vh",
          },
          "@screen md": {
            fontSize: "2.1vh",
          },
          "@screen xl": {
            fontSize: "2.3vh",
          },
        },
        nav: {
          backgroundColor: theme("colors.col.100"),
          padding: "1vh",
          "& ul": {
            listStyle: "none",
            padding: 0,
            "& li": {
              display: "inline-block",
              marginRight: "2vh",
              "& a": {
                color: theme("colors.col.400"),
                textDecoration: "none",
                "&:hover": {
                  color: theme("colors.col.500"),
                  textDecoration: "underline",
                },
              },
            },
          },
        },
        span: {
          fontSize: "inherit",
        },
        "li:has(> a:first-child)": {
          listStyleType: "none",
          paddingLeft: "0",
        },
        "li > a": {
          color: theme("colors.col.700"),
          fontWeight: 600,
        },
        ul: {
          paddingLeft: "3vh",
          marginTop: 0,
          marginBottom: 0,
        },
        iframe: {
          "@screen mobile": {
            width: "90vw",
            margin: "2vh auto",
            height: "30svh",
            display: "flex",
            justifySelf: "center",
            alignSelf: "center",
            border: "0.2vh solid theme('colors.col.900')",
            boxShadow: theme("boxShadow.shadowNarrowNormal"),
          },
          "@screen sm": {
            height: "40svh",
          },
          "@screen md": {
            width: "85vw",
            height: "50svh",
          },
          "@screen lg": {
            width: "80vh",
            height: "50svh",
          },
        },
        ".captcha-iframe iframe": {
          "@screen mobile": {
            width: "auto",
            margin: "0.2vh auto",
            height: "auto",
            display: "flex",
            justifySelf: "center",
            alignSelf: "center",
            border: "none",
            boxShadow: "none",
            pointerEvents: "auto",
            cursor: "pointer",
          },
        },
        table: {
          borderCollapse: "collapse",
          borderRadius: "0",
          width: "96%",
          margin: "2vh",
          boxShadow: theme("boxShadow.shadowNarrowTight"),
          backgroundColor: theme("colors.col.100"),
        },
        th: {
          border: `0.15vh solid ${theme("colors.col.850")}`,
          padding: "0.7vh 1vh",
          borderRadius: "0",
          textAlign: "center",
          fontSize: theme("fontSize.sm[0]"),
          backgroundColor: theme("colors.col.790"),
          borderRadius: "1vh 1vh 0vh 0vh",
          borderRadius: "0",
          color: theme("colors.col.100"),
          textShadow: theme("textShadow.textShadow"),
          fontWeight: "bold",
        },
        td: {
          border: `0.15vh solid ${theme("colors.col.850")}`,
          padding: "0.7vh 1vh",
          borderRadius: "0",
          fontSize: theme("fontSize.sm[0]"),
          textAlign: "center",
          padding: "0.5vh 1vh",
        },
      });
    }),
    // COURSE CONTENT
    plugin(function ({ addBase, theme }) {
      addBase({
        ".html-course-content h1, .html-course-content h2, .html-course-content h3, .html-course-content h4, .html-course-content h5, .html-course-content h6":
          {
            textShadow: theme("textShadow.textGlowWhite3xs"),
          },
        ".html-course-content p": {
          marginTop: "1vh",
          marginBottom: "1.5vh",
        },
        ".html-course-content-small p, .html-course-content-small a": {
          "@screen md": {
            fontSize: theme("fontSize.md[0]"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.mdlg[0]"),
          },
          "@screen xl": {
            fontSize: "2.1vh",
          },
        },
        ".html-course-content p > a": {
          // no link emoji
          "&::before": {
            content: "none",
          },
          textShadow: theme("textShadow.lightTextShadow"),
          lineHeight: 1.2,
          paddingLeft: "0.8vh",
          paddingRight: "0.8vh",
          borderRadius: "1.5vh",
          backgroundColor: theme("colors.col.200"),
          border: `0.2vh solid ${theme("colors.col.860")}`,
          boxShadow: theme("boxShadow.shadowNarrowTight"),
          margin: "0 0.3vh",
          "&:hover": {
            backgroundColor: theme("colors.col.400"),
            color: theme("colors.col.900"),
          },
        },
        ".html-course-content strong": {
          color: theme("colors.col.700"),
          fontWeight: 700,
          textShadow: theme("textShadow.textGlowWhiteXxs"),
        },
        ".html-course-content ul, .html-course-content ol, .html-course-content ul > ul, .html-course-content ol > ul":
          {
            marginTop: "1.5vh",
            "@screen mobile": {
              paddingLeft: "1.5vh",
            },
            "@screen sm": {
              paddingLeft: "2.5vh",
            },
            "@screen md": {
              paddingLeft: "4.5vh",
            },
          },
        ".html-course-content ul > li, .html-course-content ol > li": {
          marginTop: "0.5vh",
          paddingTop: "0",
          listStyleType: "'➤ '",
        },
        ".html-course-content ul > li > ul > li, .html-course-content ol > li > ol > li, .html-course-content ol > li > ul > li, .html-course-content ul > li > ol > li":
          {
            listStyleType: "'๏ '",
          },
        ".html-course-content hr": {
          border: "none",
          borderRadius: "0",
          borderTop: `0.2vh solid #333`,
          boxShadow: theme("boxShadow.shadowNarrowTight"),
          margin: "2vh 0",
          opacity: 0.6,
        },
        ".html-course-content a": {
          color: theme("colors.col.700"),
          textShadow: theme("textShadow.textGlowXxs"),
          fontWeight: 700,
          textDecoration: "none",
          position: "relative",
          paddingLeft: "calc(1.2em + 0.4vh)",
          display: "inline-block",
          textShadow: theme("textShadow.lightTextShadow"),
          lineHeight: 1.2,
          paddingLeft: "0.8vh",
          paddingRight: "0.8vh",
          borderRadius: "1.5vh",
          backgroundColor: theme("colors.col.260"),
          border: `0.2vh solid ${theme("colors.col.860")}`,
          boxShadow: theme("boxShadow.shadowNarrowTight"),
          margin: "0 0.3vh",
          transition: "all 0.3s ease-in-out",

          // "&::before": {
          //   content: '"🔗"',
          //   position: "absolute",
          //   left: "0",
          //   top: "0",
          //   fontSize: "inherit",
          //   opacity: "1",
          //   transition: "transform 0.3s ease-in-out",
          // },
          "&::before": {
            content: "none",
            paddingLeft: "0.5vh",
            paddingRight: "0.5vh",
            // position: "absolute",
            // left: "0",
            // top: "0",
            // fontSize: "inherit",
            // opacity: "1",
            // transition: "transform 0.3s ease-in-out",
          },
          "&:has(img)": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "1vh 0",
            justifyContent: "center",
            paddingLeft: 0,
            paddingTop: "1vh",
            paddingBottom: "1vh",
            gap: "0.5vh",

            "&::before": {
              content: "none",
            },

            "&::after": {
              content: '"🎥 Go to Video"',
              fontSize: "0.8em",
              color: theme("colors.col.800"),
              hover: {
                textShadow: theme("textShadow.textGlowXs"),
              },
            },
          },

          "&:hover": {
            backgroundColor: theme("colors.col.460"),
            color: theme("colors.col.900"),
          },

          "&:focus": {
            outline: "none",
          },

          "@keyframes spin": {
            "0%": {
              transform: "rotate(0deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
        },
        ".html-course-content a > h1, .html-course-content a > h2, .html-course-content a > h3, .html-course-content a > h4, .html-course-content a > h5, .html-course-content a > h6":
          {
            marginTop: "0",
            marginBottom: "0",
            lineHeight: "1.2",
          },
        ".html-course-content a:has(button)": {
          margin: "0 0 2vh 0",
          padding: "0.5vh 1.5vh",
        },
        ".html-course-content a > strong": {
          color: theme("colors.col.600"),
          textShadow: theme("textShadow.textGlowXs"),
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            color: theme("colors.col.700"),
            textShadow: theme("textShadow.textGlowSm"),
          },
        },
        ".html-course-content img": {
          alignSelf: "center",
          justifySelf: "center",
          width: "auto",
          height: "auto",
          boxShadow: theme("boxShadow.shadowNarrowNormal"),
          borderRadius: "1vh",
          margin: "1vh",
          "@screen sm": {
            maxHeight: "50vh",
            maxWidth: "90vw",
          },
          "@screen md": {
            maxWidth: "85vw",
          },
          "@screen lg": {
            maxWidth: "85%",
          },
        },
        ".html-course-content-small img": {
          "@screen md": {
            maxWidth: "75%",
          },
          "@screen lg": {
            maxWidth: "80%",
          },
        },
        ".html-course-content a:has(img)": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
          padding: "2vh",
          margin: "0",
          "&:hover": {
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "none",
            textDecoration: "underline",

            transition: "all 0.3s ease-in-out",
          },
        },
        ".html-course-content a > img": {
          marginTop: "1vh",
          marginBottom: "none",
          width: "80%",
          height: "auto",
          "&:hover": {
            transition: "all 0.3s ease-in-out",
            transform: "rotate(2deg)",
            boxShadow: theme("boxShadow.shadowNarrowLoose"),
          },
        },
        ".html-course-content article": {
          border: `0.2vh solid ${theme("colors.col.950")}`,
          boxShadow: theme("boxShadow.insetShadowSm"),
          backgroundColor: theme("colors.col.410"),
          backgroundImage: theme("backgroundImage.veryLightDiagonal"),
          padding: "2vh 1vh 1vh 1vh",
          marginBottom: "1.5vh",
          marginTop: "4vh",
          position: "relative",
          "@screen md": {
            padding: "2.5vh",
          },
        },
        ".html-course-content article > label": {
          position: "absolute",
          top: "-2.2vh",
          left: "-1vh",
          backgroundColor: theme("colors.col.700"),
          backgroundImage: theme("backgroundImage.diagonal3op75"),
          padding: "0.7vh 1.5vh",
          borderRadius: "2vh",
          color: theme("colors.col.100"),
          fontWeight: 600,
          fontSize: theme("fontSize.mdlg[0]"),
          textShadow: theme("textShadow.subtleTextShadow"),
          border: `0.2vh solid ${theme("colors.col.950")}`,
          boxShadow: theme("boxShadow.shadowNarrowNormal"),
          lineHeight: 1.2,
        },
        ".html-course-content-small article": {
          "@screen md": {
            fontSize: theme("fontSize.md[0]"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.mdlg[0]"),
          },
          "@screen xl": {
            fontSize: "2.1vh",
          },
        },
        ".html-course-content figure": {
          display: "flex",
          width: "85%",
          flexDirection: "column",
          alignItems: "center",
          padding: "1vh",
          justifyContent: "center",
          margin: "1vh",
          border: `0.2vh solid ${theme("colors.col.950")}`,
          boxShadow: theme("boxShadow.shadowNarrowTight"),
          backgroundColor: theme("colors.col.340"),
          alignSelf: "center",
          justifySelf: "center",
          "@screen md": {
            margin: "3vh 0vh",
            padding: "2vh",
          },
        },
        ".html-course-content-small figure": {
          width: "90%",
        },
        ".html-course-content figure > img": {
          marginTop: "0.4vh",
          marginBottom: "0.4vh",
        },
        ".html-course-content figcaption": {
          fontSize: theme("fontSize.sm[0]"),
          fontStyle: "italic",
          lineHeight: 1.2,
          fontWeight: 600,
          color: theme("colors.col.900"),
          padding: "0 6vh",
          textAlign: "center",
        },
        ".html-course-content blockquote": {
          borderLeft: `0.5vh solid ${theme("colors.col.600")}`,
          padding: "0.5vh 1vh",
          margin: "2vh 0",
          backgroundColor: theme("colors.col.260"),
          boxShadow: theme("boxShadow.shadowNarrowNormal"),
          color: theme("colors.col.900"),
          fontStyle: "italic",
          "& p": {
            margin: 0,
          },
        },
        ".html-course-content section": {
          alignSelf: "center",
          justifySelf: "center",
          backgroundColor: theme("colors.col.410"),
          backgroundImage: theme("backgroundImage.veryLightDiagonal"),
          padding: "1vh 2vh",
          color: theme("colors.col.900"),
          textShadow: theme("textShadow.textGlowWhite3xs"),
          borderRadius: "2.5vh",
          border: `0.2vh solid ${theme("colors.col.650")}`,
          boxShadow: theme("boxShadow.insetShadowLg"),
          width: "100%",
          "@screen mobile": {
            width: "90%",
          },
          "@screen md": {
            width: "85%",
            padding: "2vh",
          },
        },
        ".html-course-content section > h1, .html-course-content section > h2, .html-course-content section > h3, .html-course-content section > h4, .html-course-content section > h5, .html-course-content section > h6":
          {
            color: theme("colors.col.900"),
            textShadow: theme("textShadow.textGlowWhite3xs"),
            // emoji character size
          },
        ".html-course-content section strong": {
          color: theme("colors.col.900"),
          textShadow: theme("textShadow.textGlowWhite3xs"),
        },
        ".html-course-content section a": {
          color: theme("colors.col.800"),
          textShadow: theme("textShadow.textGlowWhite3xs"),
          backgroundColor: theme("colors.col.460"),
          padding: "0.1vh 1vh",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: theme("colors.col.200"),
            color: theme("colors.col.900"),
          },
        },
        ".html-course-content-small section": {
          width: "95%",
        },
        ".html-course-content container": {
          display: "grid",
          width: "100%",
          gap: "1vh",
          padding: "1vh",
          margin: "1vh",
          borderRadius: "1vh",
          backgroundColor: theme("colors.col.920"),
          boxShadow: theme("boxShadow.shadowNarrowNormal"),
          "@screen mobile": {
            gridTemplateColumns: "1fr", // One full-width column
            width: "100%",
          },
          "@screen sm": {
            gridTemplateColumns: "1fr", // One full-width column
            width: "100%",
          },
          "@screen md": {
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))", // Two equal columns that fill space
            width: "100%",
          },
          "@screen xl": {
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))", // Two equal columns that fill space
            width: "100%",
          },
          "@screen xxl": {
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))", // Two equal columns that fill space
            width: "100%",
          },
        },
        ".html-course-content card": {
          display: "flex",
          flexDirection: "column",
          width: "90%",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-between",
          gap: "0.5vh",
          backgroundColor: theme("colors.col.800"),
          color: theme("colors.col.200"),
          boxShadow: theme("boxShadow.shadowNarrowNormal"),
          padding: "1vh",
          paddingBottom: "2vh",
          justifySelf: "center",
          alignSelf: "center",
          position: "relative",
          margin: "1vh 0",
        },
        ".html-course-content card > label": {
          position: "absolute",
          top: "-2.2vh",
          backgroundColor: theme("colors.col.200"),
          padding: "0.7vh 2.5vh",
          borderRadius: "3vh",
          color: theme("colors.col.800"),
          fontWeight: 600,
          fontSize: theme("fontSize.lg[0]"),
          textShadow: theme("textShadow.textGlowWhite3xs"),
          border: `0.2vh solid ${theme("colors.col.950")}`,
          boxShadow: theme("boxShadow.shadowNarrowNormal"),
          lineHeight: 1.2,
        },
        ".html-course-content card:has(label)": {
          marginTop: "4vh",
          paddingTop: "3vh",
          paddingBottom: "1vh",
        },
        ".html-course-content card > h1, .html-course-content card > h2, .html-course-content card > h3, .html-course-content card > h4, .html-course-content card > h5, .html-course-content card > h6":
          {
            color: theme("colors.col.100"),
            textShadow: theme("textShadow.textShadow"),
          },
        ".html-course-content card > a": {
          width: "100%",
        },
        ".html-course-content card > figcaption": {
          width: "100%",
          backgroundColor: "transparent",
          boxShadow: theme("boxShadow.insetShadow6xl"),
          fontStyle: "normal",
          padding: "0",
          textAlign: "center",
        },
        ".html-course-content card > li": {
          color: theme("colors.col.100"),
          textShadow: theme("textShadow.textShadow"),
        },
        ".html-course-content ul > card ": {
          color: theme("colors.col.300"),
          textShadow: theme("textShadow.textShadow"),
          margin: "0.7vh 0",
        },
        ".html-course-content card > li > strong": {
          color: theme("colors.col.300"),
          textShadow: theme("textShadow.textShadow"),
        },
        ".html-course-content card > figcaption > a": {
          color: theme("colors.col.200"),
          textShadow: theme("textShadow.textShadow"),
          fontStyle: "none",
          fontWeight: 700,
          textDecoration: "none",
          display: "flex",
          flex: "1",
          textShadow: theme("textShadow.textShadow"),
          lineHeight: 1.5,
          backgroundColor: "transparent",
          boxShadow: "none",
          margin: "0",
          transition: "all 0.3s ease-in-out",
          border: `none`,
          padding: "0.5vh 1vh",
          textAlign: "center",
          justifyContent: "center",
          borderRadius: "0.7vh",
          "&:hover": {
            backgroundColor: theme("colors.col.200"),
            color: theme("colors.col.900"),
            textShadow: theme("textShadow.textGlowXs"),
            boxShadow: theme("boxShadow.shadowNarrowNormal"),
          },
        },
        ".html-course-content code": {
          whiteSpace: "nowrap",
          backgroundColor: theme("colors.col.330"),
          fontFamily: theme("fontFamily.mono"),
          fontSize: theme("fontSize.md[0]"),
          color: theme("colors.col.800"),
          textShadow: theme("textShadow.textGlowWhite3xs"),
          fontWeight: 600,
          padding: "0.2vh 0.8vh",
          borderRadius: "1vh",
          border: `0.1vh solid ${theme("colors.col.970")}`,
          boxShadow: theme("boxShadow.shadowNarrowNormal"),
          margin: "0 0.5vh",
        },
        ".html-course-content section > code, .html-course-content section > p > code, .html-course-content section > li > code":
          {
            fontSize: theme("fontSize.md[0]"),
            fontWeight: 500,
            color: theme("colors.col.100"),
            backgroundColor: theme("colors.col.950"),
            textShadow: theme("textShadow.textShadow"),
          },
        ".html-course-content section ul > li > code, .html-course-content section ol > li > code":
          {
            fontSize: theme("fontSize.md[0]"),
            fontWeight: 500,
            color: theme("colors.col.100"),
            backgroundColor: theme("colors.col.950"),
            textShadow: theme("textShadow.textShadow"),
          },
        ".html-course-content card > strong": {
          color: theme("colors.col.100"),
          textShadow: theme("textShadow.textShadow"),
        },
        ".html-course-content card > strong, .html-course-content card strong, .html-course-content card *:not(a) > strong":
          {
            color: theme("colors.col.100"),
            textShadow: theme("textShadow.textShadow"),
          },
        ".html-course-content-small h1": {
          "@screen mobile": {
            fontSize: theme("fontSize.xl[0]"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.xxl[0]"),
          },
        },
        ".html-course-content-small h2": {
          "@screen mobile": {
            fontSize: theme("fontSize.lg[0]"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.xl[0]"),
          },
        },
        ".html-course-content-small h3": {
          "@screen mobile": {
            fontSize: theme("fontSize.md[0]"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.lg[0]"),
          },
        },
        ".html-course-content-small h4": {
          "@screen mobile": {
            fontSize: theme("fontSize.md[0]"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.lg[0]"),
          },
        },
        ".html-course-content-small h5": {
          "@screen mobile": {
            fontSize: theme("fontSize.md[0]"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.sm[0]"),
          },
        },
        ".html-course-content-small h6": {
          "@screen mobile": {
            fontSize: theme("fontSize.sm[0]"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.xs[0]"),
          },
        },
        ".html-course-content-small": {
          "@screen md": {
            fontSize: theme("fontSize.md[0]"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.mdlg[0]"),
          },
          "@screen xl": {
            fontSize: "2.1vh",
          },
        },
        ".html-course-content pre": {
          backgroundColor: theme("colors.col.700"),
          backgroundImage: theme("backgroundImage.linear6op25"),
          color: theme("colors.col.100"),
          padding: "1vh",
          borderRadius: "1vh",
          border: `0.2vh solid ${theme("colors.col.950")}`,
          boxShadow: theme("boxShadow.insetShadowLg"),
          alignSelf: "center",
          justifySelf: "center",
          fontFamily: theme("fontFamily.mono"),
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          textWrap: "wrap",
          width: "100%",
          "@screen mobile": {
            width: "90%",
          },
          "@screen md": {
            width: "85%",
            padding: "2vh",
          },
        },
        ".html-course-content pre > strong": {
          color: theme("colors.col.100"),
          textShadow: theme("textShadow.subtleTextShadow"),
          fontWeight: 600,
        },
        // KaTeX styles
        ".html-course-content .katex, .html-course-content-small .katex": {
          fontFamily: ["Quicksand", "sans-serif"],
          "@screen mobile": {
            fontSize: "2vh",
            lineHeight: "1.44",
          },
          "@screen xl": {
            fontSize: "2.1vh",
          },
        },

        // Add nested list styles
        ".html-course-content-small ul > li > ul, .html-course-content-small ol > li > ol, .html-course-content-small ul > li > ol, .html-course-content-small ol > li > ul":
          {
            fontSize: "inherit", // This ensures nested lists inherit the parent's font size
            lineHeight: "inherit",
            listStyleType: "circle",
          },
        ".html-course-content-small ul > li > ul > li, .html-course-content-small ol > li > ol > li, .html-course-content-small ul > li > ol > li, .html-course-content-small ol > li > ul > li":
          {
            fontSize: "inherit", // This ensures nested list items inherit the parent's font size
            lineHeight: "inherit",
            listStyleType: "circle",
          },
        ".course-carousel img": {
          alignSelf: "center",
          justifySelf: "center",
          width: "auto",
          maxWidth: "90%",
          height: "auto",
          boxShadow: theme("boxShadow.shadowNarrowNormal"),
          borderRadius: "1vh",
          margin: "1vh",
          "@screen sm": {
            maxHeight: "50vh",
          },
        },
        ".course-carousel ul, .course-carousel ol, .course-carousel ul > ul, .course-carousel ol > ul":
          {
            marginTop: "1.5vh",
            "@screen mobile": {
              paddingLeft: "1.5vh",
            },
            "@screen sm": {
              paddingLeft: "2.5vh",
            },
            "@screen md": {
              paddingLeft: "4.5vh",
            },
          },
        ".course-carousel ul > li, .course-carousel ol > li": {
          marginTop: "1.5vh",
          paddingTop: "0",
          listStyleType: "'๏ '",
        },
      });
    }),

    // KaTeX table styles
    plugin(function ({ addComponents }) {
      const katexTableStyles = {
        // Target all KaTeX elements inside table cells
        ".html-course-content td .katex": {
          fontSize: "inherit !important",
          lineHeight: "inherit !important",
        },
        // Fix display math
        ".html-course-content td .katex-display": {
          margin: "0 !important",
        },
        // Fix specific KaTeX components
        ".html-course-content td .katex .katex-mathml": {
          fontSize: "inherit !important",
        },
        ".html-course-content td .katex .mord": {
          fontSize: "inherit !important",
        },
        ".html-course-content td .katex .mbin": {
          fontSize: "inherit !important",
        },
        ".html-course-content td .katex .mfrac": {
          fontSize: "inherit !important",
        },
        ".html-course-content td .katex .msubsup": {
          fontSize: "inherit !important",
        },
        // Force all nested elements to inherit size
        ".html-course-content td .katex *": {
          fontSize: "inherit !important",
        },
      };

      addComponents(katexTableStyles);
    }),
    // ACTIVITY CONTENT
    plugin(function ({ addBase, theme }) {
      addBase({
        ".activity-content": {
          // Base styles for activity-content container
        },
        ".activity-content p": {
          margin: "1vh 0",
        },
        ".activity-content a": {
          color: "inherit",
          textDecoration: "none",
        },
        ".activity-content a:has(img)": {
          "&::before": {
            content: "none",
          },
          paddingLeft: 0,
          display: "inline-block",
        },
        ".activity-content img": {
          width: "auto",
          height: "auto",
          borderRadius: "1vh",
          border: `0.2vh solid ${theme("colors.col.950")}`,
          boxShadow: theme("boxShadow.shadowNarrowNormal"),
          maxWidth: "95vw",
          maxHeight: "75svh",
          "@screen sm": {
            maxWidth: "85vw",
          },
          "@screen md": {
            maxWidth: "80vw",
          },
          "@screen lg": {
            maxWidth: "75vw",
          },
          "@screen xl": {
            maxWidth: "60vw",
          },
        },
        ".activity-content figure": {
          display: "flex",
          flexDirection: "column",
          gap: 0,
          alignItems: "center",
        },
        ".activity-content figure > img": {
          margin: 0,
        },
        ".activity-content figcaption": {
          margin: 0,
          paddingTop: "0.5vh",
          fontSize: "1.7vh",
          fontWeight: 600,
          color: theme("colors.col.700"),
          textShadow: theme("textShadow.textGlowWhiteXs"),
          textAlign: "center",
        },
        ".activity-content strong, .activity-content li > strong, .activity-content li > a > strong, .activity-content em":
          {
            fontWeight: 600,
          },
        ".activity-content hr": {
          margin: "1vh 0",
          border: 0,
          borderTop: "1px solid currentColor",
        },
        ".activity-content h1": {
          color: theme("colors.col.700"),
          textShadow: theme("textShadow.textGlowWhiteXxs"),
        },
        ".activity-content h2": {
          color: theme("colors.col.700"),
          textShadow: theme("textShadow.textGlowWhiteXxs"),
        },
        ".activity-content h3": {
          color: theme("colors.col.700"),
          textShadow: theme("textShadow.textGlowWhiteXxs"),
        },
        ".activity-content h4": {
          color: theme("colors.col.700"),
          textShadow: theme("textShadow.textGlowWhiteXxs"),
        },
        ".activity-content h5": {
          color: theme("colors.col.700"),
          textShadow: theme("textShadow.textGlowWhiteXxs"),
        },
        ".activity-content h6": {
          color: theme("colors.col.700"),
          textShadow: theme("textShadow.textGlowWhiteXxs"),
        },
        ".activity-content strong": {
          color: theme("colors.col.800"),
          fontWeight: 700,
          textShadow: theme("textShadow.textGlowWhiteXxs"),
        },
        ".activity-content a > strong": {
          color: theme("colors.col.800"),
          textShadow: theme("textShadow.textGlowWhiteXs"),
          transition: "all 0.3s ease-in-out",
          textDecoration: "underline",
          "&:hover": {
            color: theme("colors.col.700"),
            textShadow: theme("textShadow.textGlowSm"),
          },
        },
        ".activity-content-small p, .activity-content-small a": {
          "@screen md": {
            fontSize: theme("fontSize.md[0]"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.mdlg[0]"),
          },
          "@screen xl": {
            fontSize: "2.1vh",
          },
        },
        ".activity-content-small img": {
          "@screen md": {
            maxWidth: "75%",
          },
          "@screen lg": {
            maxWidth: "80%",
          },
        },
        ".activity-content-small article": {
          "@screen md": {
            fontSize: theme("fontSize.md[0]"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.mdlg[0]"),
          },
          "@screen xl": {
            fontSize: "2.1vh",
          },
        },
        ".activity-content-small figure": {
          width: "90%",
        },
        ".activity-content-small section": {
          width: "95%",
        },
        ".activity-content-small h1": {
          "@screen mobile": {
            fontSize: theme("fontSize.xl[0]"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.xxl[0]"),
          },
        },
        ".activity-content-small h2": {
          "@screen mobile": {
            fontSize: theme("fontSize.lg[0]"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.xl[0]"),
          },
        },
        ".activity-content-small h3": {
          "@screen mobile": {
            fontSize: theme("fontSize.md[0]"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.lg[0]"),
          },
        },
        ".activity-content-small h4": {
          "@screen mobile": {
            fontSize: theme("fontSize.md[0]"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.lg[0]"),
          },
        },
        ".activity-content-small h5": {
          "@screen mobile": {
            fontSize: theme("fontSize.md[0]"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.sm[0]"),
          },
        },
        ".activity-content-small h6": {
          "@screen mobile": {
            fontSize: theme("fontSize.sm[0]"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.xs[0]"),
          },
        },
      });
    }),
    // SPECIAL
    // ACTIVITY CONTENT
    plugin(function ({ addBase, theme }) {
      addBase({
        ".minimal-button": {
          height: "fit-content",
          fontSize: theme("fontSize.xs[0]"),
          pointerEvents: "auto",
          focus: "outline-none focus:ring-1 focus:ring-col-200",
          padding: "0.2vh 0.6vh",
          borderRadius: "2vh",
          border: `0.2vh solid ${theme("colors.col.950")}`,
          boxShadow: theme("boxShadow.shadowNarrowNormal"),
          lineHeight: 1,
          margin: "0",
          backgroundColor: theme("colors.col.300"),
        },
        ".scroll-y-container": {
          overflowY: "auto !important",
          overflowX: "hidden !important",
          pointerEvents: "auto !important",
        },
      });
    }),
    typographyPlugin,
    customBackgroundsPlugin,
    buttonStyles,
    customBordersPlugin,
    transitionTimingFunctionsPlugin,
    perspectivePlugin,
    rotatePlugin,
    backfaceVisibilityPlugin,
    transformStyles,
    // BLUR UTILITIES
    plugin(function ({ addUtilities, theme }) {
      const blurUtilities = {};
      const blurValues = {
        none: "0px",
        xxs: "2px",
        xs: "4px",
        sm: "8px",
        md: "12px",
        mdlg: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "28px",
        "3xl": "32px",
        "4xl": "36px",
        "5xl": "40px",
      };

      Object.entries(blurValues).forEach(([key, value]) => {
        blurUtilities[`.blur-${key}`] = {
          "backdrop-filter": `blur(${value})`,
          "-webkit-backdrop-filter": `blur(${value})`, // For Safari support
        };
      });

      addUtilities(blurUtilities, ["responsive"]);
    }),
    // SPECIAL
    plugin(function ({ addUtilities, theme }) {
      addUtilities(
        {
          ".scroll-y-container": {
            overflowY: "auto",
            overflowX: "hidden",
            pointerEvents: "auto",
            height: "100%",
            maxHeight: "100%",
          },
        },

        ["responsive"]
      );
    }),
  ],
};
