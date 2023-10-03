import WithHoc from "./WithHoc";

/* eslint-disable react/prop-types */
const Article = WithHoc((props) => {
  return (
      <div className="item item-article">
          <h3><a href="#">{props.title}</a></h3>
          <p className="views">Прочтений: {props.views}</p>
      </div>
  )
})

export default Article;