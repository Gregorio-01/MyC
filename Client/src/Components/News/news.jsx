import { ArticleNew } from "./components/articleNew"
import { TopNews } from "./components/topNews"
import information from "./data"
import "./news.css"

const News = () => {
  return (
    <div className="news-component">
      <TopNews />
      <article className="news-container">
        {
          information.map((info) => (
            <ArticleNew image={info.image} title={info.title} description={info.description} date={info.date} subTitle={info.subTitle} link={info.link}/>
          ))
        }
      </article>
    </div>
  )
}

export default News
