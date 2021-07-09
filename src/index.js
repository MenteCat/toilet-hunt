import React from 'react';
import ReactDom from 'react-dom';
import './style.css'

class Main extends React.Component {
  render(){
    return (
      <div className="container">
        <h1 className="title">Toilet Search</h1>
      </div>
    );
  }
}
ReactDom.render(<Main />, document.getElementById('root'));