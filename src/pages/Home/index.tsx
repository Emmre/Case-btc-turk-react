import React from "react"
import { getSources } from "services"
import Button from "components/Button"
import Divider from "components/Divider"
import { Link } from "react-router-dom"

const Home = () => {
  const [data, setData] = React.useState([])
  const [category, setCategory] = React.useState([])
  const [active, setActive] = React.useState("")

  React.useEffect(() => {
    const sourcesNews = async () => {
      const { sources } = await getSources()
      const categories = sources.map((source) => source.category)
      const uniqueCategories = [...new Set(categories)]
      setCategory(uniqueCategories)
      setData(sources)
    }
    sourcesNews()
  }, [])
  console.log(data)

  return (
    <div className="container">
      <div className="button-box">
        <Button className={"primary"}>
          <span>News</span>
        </Button>
        {category.map((item: any) => (
          <Button
            key={item}
            onClick={() => {
              setActive(item)
            }}
            className={`primary ${active === item ? "active" : ""}`}
          >
            <span>{item}</span>
          </Button>
        ))}
      </div>

      <Divider />
      <div className="card-box">
        {data
          .filter((source) => source.category === active || active === "")
          .map((item: any) => (
            <Link to={`${item.category}/${item.id}`} key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Home
