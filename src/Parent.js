import React from 'react';

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            qty: 0,
            color:'White',
            close: "hide",
            data:'',
        }
    }

    formtochild = (params) =>{
        this.setState({ data : params })
      }

      
    handleCallbackQty = (childData) =>{
        this.setState({qty: childData})
    }

    closePreview = () => { 
        window.location.replace('/');
        };

    showColorPicker = () =>{
        this.setState({close:"block"});
    }

    changeColor = (event) =>{
        this.setState({color: event.target.id});
        this.hideColorPicker();
    }

    hideColorPicker = () =>{
        this.setState({close:"hide"});
    }

    render(){
        const {qty} = this.state;
        
        const query =  window.location.search;
        var id = (new URLSearchParams(query)).get("id");
        
        var data = require('./TopPicks.json');
        var item = null;
        
        for (var i = 0; i < data.length; i++)
        {
            if(id == data[i].id){
                item = data[i];
            }
            //item.push(<Car id={obj.id} img={obj.img} name={obj.name} ftype={obj.ftype} ctype={obj.ctype} hp={obj.hp} price={obj.price} color={obj.color} />);
        }
        console.log(item);
        if(parseInt(id) > 0) {
        return(
            <div className={`overlay ${parseInt(id) > 0? `` : `hide` }`}>
                <quickview>
                    <colorpicker className={this.state.close}>
                        <color className='car-color' id="red" onClick={this.changeColor}></color>
                        <color className='car-color' id="blue" onClick={this.changeColor}></color>
                        <color className='car-color' id="yellow" onClick={this.changeColor}></color>
                        <color className='car-color' id="white" onClick={this.changeColor}></color>
                        <color className='car-color' id="black" onClick={this.changeColor}></color>
                    </colorpicker>
                    
                <div className="float-right"><i className="fas fa-times-circle close pointer" onClick={this.closePreview}></i></div>
                    <div className="hide">Quickview {id}</div>
                <div className="preview-header">
                    <strong>
                        {qty}<br />  
                        Select Color: <color className='car-color' id={this.state.color} onClick={this.showColorPicker}></color>
                        {this.state.color}
                        <br />{item.name}
                    </strong>
                    <img src={item.img} width="100%" alt={item.name} />
                </div>
                <Qty qtyParentCallBack = {this.handleCallbackQty}/>
                <br />
                <Color color={this.state.color} />
                <br />
                <CartItems data={this.state.data} />
                <br />
                <AddCart qty={this.state.qty} callback={this.formtochild}/>
                </quickview>
            </div>
        )
        }else{
            return(<div></div>)
        }
    }
}

class Qty extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.qty
        }
    }

    qtyChange =(event) =>{
        this.props.qtyParentCallBack(event.target.value);
    }

    render(){
        return(
        <div>
            Select Qty: 
            <select name="qty" id="qty" onChange={this.qtyChange}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
        )
    }
}


class Color extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.color
        }
    }

    render(){
        return(
            <div>Color:  <color className='car-color' id={this.props.color}></color> 
            </div>
        )
    }
}

class AddCart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    getContent = (event) =>{
        this.props.callback(this.props.qty + " Item(s) were added to Cart");
    }
    
    render(){
        return(
            <button className='tile-cart-button' id="add" onClick={this.getContent}>Add to cart</button>
        )
    }
}

class CartItems extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <label className='tile-cart-button' id="add">{this.props.data}</label>
        )
    }
}


export default Parent;
/*
class TopPicksPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        year: null
      };
    }

    closePreview = () => { 
        window.location.replace('/');
        };

    
    render() {
        const query =  window.location.search;
        var id = (new URLSearchParams(query)).get("id");
        
        return (
            <div className={`overlay ${parseInt(id) > 0? `` : `hide` }`}>
                <quickview>
                <div className="float-right"><i className="fas fa-times-circle close pointer" onClick={this.closePreview}></i></div>
                    Quickview {id}
                </quickview>
            </div>
        )

    }
}

export default TopPicksPanel;*/