import statsData from './statsData'
export default async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(statsData)
    }, 100)
  })
}
