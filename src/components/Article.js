import React from "react";

function Article(props) {
  return (
    <article>
      <h3>{props.date}</h3>
      <h2>
        <a href="#">{props.title}</a>
      </h2>
      <img src={props.imageSrc} alt={props.alt} style={{ width: "auto" }} />
      <p>{props.content}</p>
      <p className="more">
        <a href="#">Continues...</a>
      </p>
    </article>
  );
}

export default Article;
