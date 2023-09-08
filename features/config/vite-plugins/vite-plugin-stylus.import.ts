import { join, resolve } from 'path'
import type { Plugin } from 'vite'
// import type { Organization } from '~/@types'

export default function stylusImport(org: any): Plugin {
  return {
    name: 'vite-plugin-stylus-import',
    transform(code: string, id: string) {
      if(/.stylus$/g.test(id)) {
        return {
          code: `
          @import '${resolve(join(_dirname, '..', `assets/styles/common/_variables.styl`))}'
          @import '${resolve(join(_dirname, '..', `assets/styles/${org}/_variables.styl`))}'
          ${code}
          `,
            map: null
        }
      }
  return null
    }}}
