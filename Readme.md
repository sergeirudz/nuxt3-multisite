# Info

- Add <https://tailwindcss.nuxtjs.org/tailwind/viewer>
- If I extend form config then the components don't work.
- VS code TailwindCSS extension <https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss>

## Starting the project

1. Install PNPM <https://pnpm.io/installation>
2. Install packages ``` pnpm i ```
3. Run different websites
    - i.e. ``` pnpm run dev:org1 ```

- Tailwind viewer '<http://localhost:3001/_tailwind/>'
  - NB! does not work on '<http://localhost:3001/_tailwind>'
  - Restart if you edit anything in tailwind config

### Organizations

- Add a new org
  - ```pnpm dlx nuxi init orgs/org1```
- Change 'name:' inside newly generated package.json
- Start org
  - ```pnpm --filter org1 run dev``` or add it to root package.json
    - org1 is 'name:' inside orgs/org1/package.json

### Features

- Add feature
  - ``` pnpm dlx nuxi init features/base ```
  - select 'pnpn'

### Un-/Install new packages

- Install package for specific module. ('base' is 'name:' inside features/base/package.json)
  - ``` pnpm add primevue -D --filter base ```
- Install package at the root level
  - ``` pnpm add typescript -Dw ```
- Unintall
  - ``` pnpm remove stylus --filter base ```

### Other

Nuxi CLI: <https://vueschool.io/articles/vuejs-tutorials/getting-started-with-nuxi-nuxt-cli/>

- npx nuxi analyze
- Add component:
  - cd features/base
  - ``` npx nuxi add component Header ```
- Generate tailwind colors for the theme <https://huetone.ardov.me/>

## TODO

- Tailwindcss themes
- Add Vitest <https://www.npmjs.com/package/nuxt-vitest>
- add Primevue components
- add node version to package.json <https://www.marcusoft.net/2015/03/packagejson-and-engines-and-enginestrict.html>
- Create command to run all websites at the same time
- create global linting rules
- add @nuxtjs/robots
- add specific versions to generate feature or org
- create global tsconfig
- Dockerize
- Storybook
- add husky
