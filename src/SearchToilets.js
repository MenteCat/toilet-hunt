import React from 'react';
export default function SearchToilets() {

  const searchToilets = async(e) => {
    e.preventDefault();
    console.log("submitting");
    const query = "TW2";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    }catch(err){
      console.error(err);
    }

  }
  return (
    <form className="form" onSubmit={searchToilets}>
      <label className="label" htmlFor="query">Postcode</label>
      <input className="input" type="text" name="query"
      placeholder="i.e. TW2" />
      <button className="button" type="submit">Search</button>
    </form>
  )
}