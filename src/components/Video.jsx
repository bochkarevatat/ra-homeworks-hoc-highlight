/* eslint-disable react/prop-types */

import WithHoc from "./WithHoc";


const Video = WithHoc((props) => {
  return (
      <div className="item item-video">
          <iframe
          src={props.url}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          ></iframe>
          <p className="views">Просмотров: {props.views}</p>
      </div>
  )
})

export default Video;