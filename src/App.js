import React, { Component } from 'react'
import Header from './Components/Header';
import Navbar from "./Components/Navbar";
import Body from './Components/Body';
import Footer from './Components/Footer';
class App extends Component {
  render() {
    return (
      <div style={{position:"relative"}}>
        <Header />
        <Navbar />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App;