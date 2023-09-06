export default async (language) => {
    const config = useRuntimeConfig()

    const url = `https://newsapi.org/v2/top-headlines?from=2023-08-08&sortBy=popularity&apiKey=03f7df15f89d489d9438feae576c9b8d&pageSize=10&page=1&country=us`

    const {data} = await useFetch(url)

    return data
}