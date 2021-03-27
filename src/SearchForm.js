import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      year: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let year = this.state.year;
    if (!Number(year)) {
      alert("Hello");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <div className="grid-header">
          <div id="searchForm" className="float-left text-align-left round-edges header-item"><h3>Find the perfect Model.</h3>
            <div id="searchFormBody" className="round-edges">
            <h1 className="hide">Hello {this.state.username} {this.state.year}</h1>
            <label>Make:</label>
            <input
                type='text'
                name='username'
                onChange={this.myChangeHandler}
            />
            <br/>
            <br/>

            <label>Model:</label>
            <input
                type='text'
                name='model'
                onChange={this.myChangeHandler}
            />
            <br/>
            <br/>

            <label>Year:</label>
            <input
                type='text'
                name='year'
                onChange={this.myChangeHandler}
            />
            <br/>
            <br/>

            <label>Price Range:</label>
            <input
                type='text'
                name='price'
                onChange={this.myChangeHandler}
            />

            <br/>
            <br/>
            <button onClick={this.mySubmitHandler} className="pointer">SUBMIT</button>
            </div>
        </div>
        <div className="header-item carlabel">
        <span id="car-label">
            <br />
            <br />
            <br /><strong>Devel</strong><span> SIXTEEN</span>
            <br />
            <i> ---Top SPEED</i></span> 
        <br /> 347 mph | 550kmh
        </div>
    </div>
    );
  }
}

//ReactDOM.render(<SearchForm />, document.getElementById('root'));
export default SearchForm;