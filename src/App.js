import React, { Component } from 'react';
import './App.css';
import Travel from './Travel';


const data = [
  {
    destination: "Paris",
    country: "France",

    photo: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1607&h=1607&q=80",
    distance: "1 987 km"
  },

  {
    destination: "Moscou",
    country: "Russia",
    photo: "https://images.unsplash.com/photo-1504615458222-979e04d69a27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1607&h=1607&q=80",
    distance: "5 836 km"
  },
]

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className=" travel d-flex flex-wrap justify-content-around mt-4">
          {data.map((value, index) => <Travel data={value} key={index} />)}
        </div>
      </div>);
  }
}

export default App;
