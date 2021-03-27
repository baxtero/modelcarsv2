//Content.js
import React from 'react';
import SearchForm from './SearchForm';
import TopPicksCars from './TopPicksCars';
import Parent from './Parent';

class Content extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      click: ''
    }
  }

 

  render(){
  return(
    <main className="content page-body-layout" >
      <div></div>
      <div>
        <SearchForm />
        <Parent />
        <TopPicksCars />
      </div>
      <div></div>
    </main>
  )
}
}
export default Content;