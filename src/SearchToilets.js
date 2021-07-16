import React from 'react';
export default function SearchToilets() {
  //states -input query, toilets, hooks
  const [query, setQuery] = useState('');
  //create the state for toilets and update that state when appropriate
  const [toilets, setToilets] = useState('');

  const searchToilets = async(e) => {
    e.preventDefault();
    const query = "TW2";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;


    try {
      const res = await fetch(url);
      const data = await res.json();
      setToilets(data.results);
    }catch(err){
      console.error(err);
    }
  }
  return (
    <>
    <form className="form" onSubmit={searchToilets}>
      <label className="label" htmlFor="query">Postcode</label>
      <input className="input" type="text" name="query"
      placeholder="i.e. TW2" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button className="button" type="submit">Search</button>
    </form>
    <div className="card-list">
      {toilets.map(toilet => (
        <div className="card" key={toilet.id}>
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
      ))}
    </div>
    </>
  )
}