import React from 'react';
import ReactDom from 'react-dom';
import './style.css'
import SearchToilets from './SearchToilets';

class Main extends React.Component {
  render(){
    return (
      <div className="container">
        <h1 className="title">Toilet Search</h1>
        <SearchToilets />
      </div>
    );
  }
}
ReactDom.render(<Main />, document.getElementById('root'));