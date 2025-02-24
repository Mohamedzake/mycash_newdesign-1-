// import type { Config } from "tailwindcss";

// export default {
//   darkMode: ["class"],
//   mode: "jit",
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
//   ],
//   theme: {
//     fontFamily: {
//       cairo_new: ["Cairo"],
//     },
//     extend: {
//       backgroundImage: {
//         bg_lg: "url('/cashaicamswide.webp')",
//         bg_sm: "url('/mycashaismall.webp')",
//         mycash_large: "url('/cashaicamswide.webp')",
//         herobg: "url('/heronew.webp')",
//         solutions_bg: "url('/solutions_bg.webp')",
//         sales_bg: "url('/sales_bg.webp')",
//         pos_bg: "url('/pos.webp')",
//         contactus_bg: "url('/video_bg.gif')",
//         articles_bg: "url('/articles_bg.webp')",
//       },
//       screens: {
//         xxs: "320px",
//         xs: "450px",
//       },

//       lineHeight: {
//         "40": "100px",
//       },
//       spacing: {
//         "85": "23rem",
//         "105": "6.563rem",
//         "90": "4.5rem",
//       },
//       fontSize: {
//         "2.5xs": "0.783rem",
//       },
//       colors: {
//         green: "#6EC531",
//         primary: {
//           blue: "#232773",
//           green: "#6EC531",
//           grey: {
//             brands: "#F9F9F9",
//             grey: "#393939",
//             softgrey: "#f5f6ff",
//             carousel: "#F3F4F6",
//             softer: "#fafafa",
//             arrow: "#D9D9D9",
//             form: "#979797",
//             package: "#636363",
//           },

//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         grident: {
//           darkblue: "#00084D",
//           lightblue: "#1D63ED",
//         },
//         accent: {
//           "50": "#FAF5F0",
//           "100": "#F4ECE1",
//           "200": "#E8D6BF",
//           "300": "#DDC2A2",
//           "400": "#D2AF84",
//           "500": "#C69963",
//           "600": "#B78343",
//           "700": "#926835",
//           "800": "#6C4D28",
//           "900": "#4B351B",
//           "950": "#382814",
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         chart: {
//           "1": "hsl(var(--chart-1))",
//           "2": "hsl(var(--chart-2))",
//           "3": "hsl(var(--chart-3))",
//           "4": "hsl(var(--chart-4))",
//           "5": "hsl(var(--chart-5))",
//         },
//       },

//       leading: {
//         "20": "780px",
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//     },
//   },
//   // eslint-disable-next-line @typescript-eslint/no-require-imports
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;

// import type { Config } from "tailwindcss";

// const addVariablesForColors = ({ addBase, theme }: any) => {
//   const colors = theme("colors");
//   const flattenColors = (colors: any, prefix = "") => {
//     return Object.entries(colors).reduce((acc, [key, value]) => {
//       const newKey = prefix ? `${prefix}-${key}` : key;
//       if (typeof value === "string") {
//         acc[`--${newKey}`] = value;
//       } else {
//         Object.assign(acc, flattenColors(value, newKey));
//       }
//       return acc;
//     }, {} as Record<string, string>);
//   };

//   addBase({
//     ":root": flattenColors(colors),
//   });
// };

// export default {
//   darkMode: ["class"],
//   mode: "jit",
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         scroll:
//           "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
//       },

//       keyframes: {
//         scroll: {
//           to: {
//             transform: "translate(calc(-50% - 0.5rem))",
//           },
//         },
//       },
//       maxWidth: {
//         "8xl": "90rem",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate"), addVariablesForColors],
// } satisfies Config;
import type { Config } from "tailwindcss";

const addVariablesForColors = ({ addBase, theme }: any) => {
  const colors = theme("colors");
  const flattenColors = (colors: any, prefix = "") => {
    return Object.entries(colors).reduce((acc, [key, value]) => {
      const newKey = prefix ? `${prefix}-${key}` : key;
      if (typeof value === "string") {
        acc[`--${newKey}`] = value;
      } else {
        Object.assign(acc, flattenColors(value, newKey));
      }
      return acc;
    }, {} as Record<string, string>);
  };

  addBase({
    ":root": flattenColors(colors),
  });
};

export default {
  darkMode: ["class"],
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;
