import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
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


  {
    destination: "Vienna",
    country: "Austria",
    photo: "https://images.unsplash.com/photo-1480413258216-ff003d179d65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1607&h=1607&q=80",
    distance: "7 076 km"
  },

  {
    destination: "Riyadh",
    country: "Saudi Arabia",
    photo: "https://images.unsplash.com/photo-1506795213373-430e921fe2ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1607&h=1607&q=80",
    distance: "9 456 km"
  },

  {
    destination: "London",
    country: "United Kingdom",
    photo: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1607&h=1607&q=80",
    distance: "9 456 km"
  },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      working: false
    }
  }

  handleClick = () => {
    this.setState({ working: !this.state.working });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.working? "App-logo logo-go-crazy" : "App-logo"} alt="logo" />
          <div>
            <button className="btn btn-outline-light" onClick={this.handleClick}>{this.state.working?"Sloth mode" : "Cheetah mode" }</button>
          </div>
        </header>
        <div className="container">
          <div className=" travel d-flex flex-wrap justify-content-start mt-4">
            {data.map((value, index) => <Travel data={value} key={index} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
