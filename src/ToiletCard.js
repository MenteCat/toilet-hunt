import React from 'react';
export default function ToiletCard(props) {
  const toilet = props.toilet;
  // or can be destructured and be like ToiletCard({movie})
  // so that we can use the object property referencing the code below
  return (
    <div className="card">
    <div className="card--content">
      <h3 className="card--title">{toilet.borough_name}</h3>
      <p><small>STREET NAME: {toilet.street_name == null ? 'Ops! No street name has been added yet.' : toilet.street_name}</small></p>
      <p><small>POSTCODE: {toilet.postcode == null ? 'Ops! No postcode has been added yet.' : toilet.postcode}</small></p>
    </div>
  </div>

  )
}

