# Info

- Add <https://tailwindcss.nuxtjs.org/tailwind/viewer>

## Commands

### Organizations

- Add org
  - ```pnpm dlx nuxi init orgs/org1```
- Start org
  - ```pnpm --filter org1 run dev```
    - org1 is 'name:' inside orgs/org1/package.json

### Features

- Add feature
  - ``` pnpm dlx nuxi init features/config ```
  - select 'pnpn'

### Install packages

- ``` pnpm add primevue --filter config ```
- ``` pnpm add -D tailwindcss postcss autoprefixer --filter ./features/config ```
  - Install package to a specific feature. config is 'name:' inside features/config/package.json

### Other

Nuxi CLI: <https://vueschool.io/articles/vuejs-tutorials/getting-started-with-nuxi-nuxt-cli/>

- npx nuxi analyze
- Add component:
  - cd features/config
  - ``` npx nuxi add component Header ```
