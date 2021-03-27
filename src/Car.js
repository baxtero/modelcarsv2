
import React from 'react';
class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: this.props.color,
            close: "hide",
            img: this.props.img
        };
    }

    showColorPicker = () =>{
        this.setState({close:"block"});
    }

    hideColorPicker = () =>{
        this.setState({close:"hide"});
    }

    changeColor = (event) =>{
        this.setState({color: event.target.id});
        this.hideColorPicker();
    }

    showPreview = (event) =>{
        window.location.replace('?id=' + event.target.id.replace("view_",  ""));
    }

    render(){
    return <span>
        <colorpicker className={this.state.close}>
            <color className='car-color' id="red" onClick={this.changeColor}></color>
            <color className='car-color' id="blue" onClick={this.changeColor}></color>
            <color className='car-color' id="yellow" onClick={this.changeColor}></color>
            <color className='car-color' id="white" onClick={this.changeColor}></color>
            <color className='car-color' id="black" onClick={this.changeColor}></color>
        </colorpicker>

        <img src={this.state.img} alt={this.props.name} width="100%" />
            <br />Color Picker: <color className='car-color' id={this.state.color} onClick={this.showColorPicker}></color> 
            <carname>{this.state.color}</carname>
            <br /><strong>{this.props.name}</strong>
            <br />{this.props.ftype} - {this.props.ctype}
            <br />{this.props.hp}<br />
            <br /><price>{this.props.price}</price>
            <hr />
            <button className='tile-cart-button' id={`add_${this.props.id}`}>Add to cart</button>
            <button className='tile-cart-button' id={`view_${this.props.id}`} onClick={this.showPreview}>View more</button>
        </span>;
    }
}

export default Car;