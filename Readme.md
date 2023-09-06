# Info

- Add <https://tailwindcss.nuxtjs.org/tailwind/viewer>
- If I extend form config then the components don't work.

## Commands

- ``` "dev:org1": "pnpm --filter org1 run dev", ```
- ``` "dev:org2": "pnpm --filter org2 run dev" ```

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

- Install package for specific module. ('config' is 'name:' inside features/config/package.json)
  - ``` pnpm add primevue -D --filter config ```
- Install package at the root level
  - ``` pnpm add typescript -Dw ```

### Other

Nuxi CLI: <https://vueschool.io/articles/vuejs-tutorials/getting-started-with-nuxi-nuxt-cli/>

- npx nuxi analyze
- Add component:
  - cd features/config
  - ``` npx nuxi add component Header ```

## TODO

- add node version to package.json <https://www.marcusoft.net/2015/03/packagejson-and-engines-and-enginestrict.html>
- Create command to run all websites at the same time
- create global linting rules
- add @nuxtjs/robots
- add specific versions to generate feature or org
- create global tsconfig
- Dockerize
