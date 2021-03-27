import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import Account from './Account';


class App extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
    
  nav = React.createRef();
  
  handleScroll = () => {
    if(window.scrollY === 0)
      document.getElementById("nav").style.backgroundColor = "rgb(0 0 0 / 0%)";
    else 
      document.getElementById("nav").style.backgroundColor = "rgb(0 0 0)";
    ///console.log(window.scrollY + " - " +window.screenTop);
    
  };
  
  render(){
    
    return (
      <div className="App">
      <Account />
      <Navbar />
      <Content />
    </div>
    );
  }
}

export default App;