import React from 'react';
export default function ToiletCard(props) {
  const toilet = props.toilet;
  // or can be destructured and be like ToiletCard({movie})
  // so that we can use the object property referencing the code below
  return (
    <div className="card">
    <img className="card--image"
        src={`${toilet.image_path}`}
        alt={toilet.title + ` image`}
    />
    <div className="card--content">
      <h3 className="card--title">(toilet.title)</h3>
      <p><small>LATEST UPDATE: {toilet.latest_update}</small></p>
      <p><small>RATING: {toilet.vote_avarage}</small></p>
      <p className="card--description">{toilet.overview}</p>
    </div>
  </div>

  )
}

