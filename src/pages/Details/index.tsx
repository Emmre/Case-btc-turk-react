import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { getSourcesNews } from "services"
import Slider from "react-slick"
import Button from "components/Button"
import { App } from "store/AppContext"

const Details = () => {
  const { setNews } = React.useContext(App)
  const [data, setData] = React.useState([])
  const { pathname } = useLocation()
  const navigate = useNavigate()
  console.log(navigate);
  
  const category = pathname.split("/")[1]
  const source = pathname.split("/")[2]

  React.useEffect(() => {
    const sourcesNews = async () => {
      const { articles } = await getSourcesNews(source)
      setData(articles)
    }
    sourcesNews()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const getNewDetails = item => {
    setNews(item)
    localStorage.setItem("news", JSON.stringify(item))
    const { title } = item
    const url =
      title
        .split(" ")
        .join("-")
        .replace(/^(.{5}[^\s]*).*/, "$1") + "\n"
    navigate(`/news/${url}`)
  }

  return (
    <div className='detail-page'>
      <div className='slider-content'>
        <div className='container'>
          <Slider {...settings}>
            {data?.map((item, i) => {
              const date = new Date(item.publishedAt)
              const hourAndMinute = date.toLocaleTimeString()
              return (
                <div
                  key={i}
                  className='slider-box'
                  onClick={() => getNewDetails(item)}
                >
                  <img src={item?.urlToImage} alt={item.title} loading='lazy' />
                  <h2>{item?.title}</h2>
                  <h3>{item?.description}</h3>
                  <h4>{hourAndMinute}</h4>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
      <div className='detail-content container'>
        <h1>
          <span>{category.toUpperCase()}</span>
          <Button onClick={() => navigate(-1)}>
            <span>Go to News</span>
          </Button>
        </h1>
        <div className='news-content'>
          {data?.slice(3)?.map((item, i) => {
            const date = new Date(item.publishedAt)
            const hourAndMinute = date.toLocaleTimeString()
            return (
              <div
                key={i}
                className='content-box'
                onClick={() => getNewDetails(item)}
              >
                <img src={item?.urlToImage} alt={item.title} loading='lazy' />
                <h2>{item?.title}</h2>
                <h3>{item?.description}</h3>
                <h4>{hourAndMinute}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Details
