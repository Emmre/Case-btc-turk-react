import Button from "components/Button"
import React from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { App } from "store/AppContext"

const NewsDetail = () => {
  const navigate = useNavigate()
  const { news, setNews } = React.useContext(App)

  useEffect(() => {
    const news = JSON.parse(localStorage.getItem("news") || "{}")
    setNews(news)
  }, [])

  const date = new Date(news.publishedAt)
  const hourAndMinute = date.toLocaleTimeString()

  const { title, content, urlToImage, author, publishedAt } = news
  return (
    <div className='news-detail container'>
      <h1>{title}</h1>
      <img src={urlToImage} alt={title} />
      <h2>{content}</h2>
      <h3>{hourAndMinute}</h3>
      <Button className="active" onClick={() => navigate(-1)}>
        <span>Go to Back</span>
      </Button>
    </div>
  )
}

export default NewsDetail
