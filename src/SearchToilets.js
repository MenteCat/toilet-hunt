import React, {useState} from 'react';
import ToiletCard from './ToiletCard';

export default function SearchToilets() {
  //states -input query, toilets, hooks
  const [query, setQuery] = useState('');
  //create the state for toilets and update that state when appropriate
  const [toilets, setToilets] = useState([]);

  const searchToilets = async(e) => {
    e.preventDefault();

    let url = null

    if (query.match(/([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/g)) {
      url = `http://localhost:8000/api/v1/public_toilet_items?postcode=${query}`
    } else {
      url = `http://localhost:8000/api/v1/public_toilet_items?street_name=${query}`
    }

    try {
      const res = await fetch(url);
      const data = await res.json();
      setToilets(data);
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
        <ToiletCard toilet={toilet} key={toilet.id}/>
      ))}
    </div>
    </>
  )
}