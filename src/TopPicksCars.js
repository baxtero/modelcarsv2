import React from 'react';
import Car from './Car';

const TopPicksCars = () => {

    function ListItem(props) {
        return <li className="cart-list">
            {props.value}</li>;
    }
  
    function ItemList(props) {
        const item = props.item;
        return (
        <ul className="grid-cart-items">
            {item.map((number) =>
            <ListItem key={number}
                        value={number} />
            )}
        </ul>
        );
    }
    
    
    var data = require('./TopPicks.json');
    const item = [];
    for (var i = 0; i < data.length; i++)
    {
        var obj = data[i];
        item.push(<Car id={obj.id} img={obj.img} name={obj.name} ftype={obj.ftype} ctype={obj.ctype} hp={obj.hp} price={obj.price} color={obj.color} />);
    }

      return (
        <section name="top-picks">
            <div className="top-picks-header">Top Picks</div>
            <div className="cart-bg">
            <ItemList item={item} />
            </div>
        </section>
    )
  }

export default TopPicksCars;