import tailwindOrgColors from '../../orgs/org1/assets/styles/common/org/tailwindOrgColors'
import hexRgb from 'hex-rgb'

function getRgbChannels(hex: string) {
  const { red, green, blue } = hexRgb(hex)
  return `${red} ${green} ${blue}`
  // getRgbChannels('#0099aa') => 0 153 170
}

export default Object.fromEntries(Object.entries(tailwindOrgColors).map(([key, value]) => {
  return [key, {
    ...Object.fromEntries(
      Object.entries(value).map(([innerKey, innerValue]) => {
        return [innerKey, `rgb(${getRgbChannels(innerValue)} / <alpha-value>)`];
      })
    )
  }];
}));
