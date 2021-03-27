import React from 'react';

class Account extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          close : true,
        };
      }
    
    hideForm = () => { 
        this.setState(state => ({close: !state.close}));
        };
      

    render(){
        return(
            <div id="login-signup" className={this.state.close ? "container-layout hide" : "container-layout"}>
                <div className="left-div"></div>
                <div className="center-div">
                    <div className="account-container">
                        <div className="username">
                            <label>Username</label>
                            <input type="text"></input>
                        </div>
                        <div className="password">
                        <label>Password</label>
                            <input type="password"></input>
                        </div>

                        <div className="fname signup-form">
                            <label>First Name</label>
                            <input type="text"></input>
                        </div>  
                        <div className="lname signup-form">
                            <label>Last Name</label> 
                            <input type="text"></input>
                        </div>
                        <div className="email signup-form">
                            <label>Email</label> 
                            <input type="email"></input>
                        </div>
                        <div className="zip signup-form">
                            <label>Zip</label> 
                            <input type="text"></input>
                        </div>
                    </div>
                    <div className="account-container">
                        <div className="submit">
                            <button className="pointer">SUBMIT</button>
                        </div>
                        <div className="reset">
                            <button className="pointer">RESET</button>
                        </div>
                    </div>
                </div>
                <div className="right-div"><i className="fas fa-times-circle close pointer" onClick={this.hideForm}></i></div>
            </div>
            
        );
    }
}

export default Account;