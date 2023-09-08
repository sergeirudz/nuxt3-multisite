import palette from './assets/styles/common/org1/palette'
import hexRgb from 'hex-rgb'

function getRgbChannels(hex: string) {
  const { red, green, blue } = hexRgb(hex)
  return `${red} ${green} ${blue}`
  // getRgbChannels('#0099aa') => 0 153 170
}
const tailwindOrgColors = palette;

export default Object.fromEntries(Object.entries(tailwindOrgColors).map(([key, value]) => {
  return [key, {
    ...Object.fromEntries(
      Object.entries(value as string).map(([innerKey, innerValue]) => {
        return [innerKey, `rgb(${getRgbChannels(innerValue as string)} / <alpha-value>)`];
      })
    )
  }];
}));
