import actionsData from './actionsData'

export default () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(actionsData)
    }, 100)
  })
}
