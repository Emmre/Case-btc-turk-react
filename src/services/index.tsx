import axios from "axios"

export const getSources = async () => {
  const data = axios
    .get(
      "https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=6517c7f12e7140328cc1277ec3ed050a"
    )
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return data
}

export const getSourcesNews = async (source) => {
  const data = axios
    .get(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=6517c7f12e7140328cc1277ec3ed050a`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return data
}
