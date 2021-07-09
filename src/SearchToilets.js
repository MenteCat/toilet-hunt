import React from 'react';
export default function SearchToilets() {
  return (
    <form className="form">
      <label className="label" htmlFor="query">Postcode</label>
      <input className="input" type="text" name="query"
      placeholder="i.e. TW2" />
      <button className="button" type="submit">Search</button>
    </form>
  )
}