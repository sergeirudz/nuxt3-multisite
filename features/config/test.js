const themes = {
  "primary": {
    "50": "#eef2ff",
    "100": "#e0e7ff",
    "200": "#d0d7f7",
    "300": "#aab9ff",
    "400": "#8994ff",
    "500": "#6b70fc",
    "600": "#554fee",
    "700": "#453ccd",
    "800": "#3830a2",
    "900": "#272173"
  },
  "success": {
    "50": "#ecfdf4",
    "100": "#c9f2de",
    "200": "#9de9c6",
    "300": "#56d0a0",
    "400": "#00b380",
    "500": "#009268",
    "600": "#007955",
    "700": "#006344",
    "800": "#005038",
    "900": "#003422"
  },
    "warning": {
    "50": "#fffdf2",
    "100": "#fff1c2",
    "200": "#ffe59e",
    "300": "#ffc94d",
    "400": "#ffb524",
    "500": "#f29100",
    "600": "#d47d00",
    "700": "#b86e00",
    "800": "#965400",
    "900": "#783c00"
    },
    "danger": {
    "50": "#fff2f2",
    "100": "#ffd6d9",
    "200": "#ffa8b4",
    "300": "#ff708d",
    "400": "#ff3d71",
    "500": "#ff005c",
    "600": "#db0051",
    "700": "#b80045",
    "800": "#93003a",
    "900": "#70002e"
    },
    "info": {
    "50": "#f2f8ff",
    "100": "#c7e2ff",
    "200": "#94cbff",
    "300": "#42aaff",
    "400": "#0095ff",
    "500": "#0077db",
    "600": "#005db0",
    "700": "#004187",
    "800": "#002d5d",
    "900": "#001d3d"
    }
}


import hexRgb from 'hex-rgb'

function getRgbChannels(hex) {
  const { red, green, blue } = hexRgb(hex)
  return `${red} ${green} ${blue}`
  // getRgbChannels('#0099aa') => 0 153 170
}


// const result2 = Object.fromEntries(Object.entries(themes).map(([key, value]) => {
//   return [key, {
//     ...Object.fromEntries(
//       Object.entries(value).map(([innerKey, innerValue]) => {
//         return [innerKey, `rgb(${getRgbChannels(innerValue)} / <alpha-value>)`];
//       })
//     )
//   }];
// }));

const result2 = Object.fromEntries(Object.entries(themes).map(([key, value]) => {
  return [key, {
    ...Object.fromEntries(
      Object.entries(value).map(([innerKey, innerValue]) => {
        return [innerKey, `rgb(${getRgbChannels(innerValue)} / <alpha-value>)`];
      })
    )
  }];
}));



console.log(result2)
