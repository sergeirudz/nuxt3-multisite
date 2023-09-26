import { defineNuxtModule, createResolver, addTemplate } from '@nuxt/kit';
import palette from '../../assets/styles/palette.json';
import type { Config } from 'tailwindcss';

// const COLORS = Object.fromEntries(
//   Object.entries(palette).map(([key, value]) => {
//     return [
//       key,
//       {
//         ...Object.fromEntries(
//           Object.entries(value).map(([innerKey, innerValue]) => {
//             return [
//               innerKey,
//               `rgb(${getRgbChannels(innerValue)} / <alpha-value>)`,
//             ];
//           })
//         ),
//       },
//     ];
//   })
// );

export default defineNuxtModule({
  meta: {
    name: 'nuxt-tailwind-theme',
  },
  async setup(options, nuxt) {
    // @ts-ignore
    nuxt.hook('tailwindcss:config', function (tailwindConfig: Config) {
      tailwindConfig.theme!.extend!.colors = {
        ...tailwindConfig.theme!.extend!.colors,
        ...palette,
      };
    });
  },
});

/* 
https://nuxt.com/docs/guide/going-further/modules/#module-definition

*/
