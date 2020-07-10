import React, { Component } from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

console.log(this)//returning undefined

class Options extends Component {
    optionsCalculator(){
        this.props.features[this.props.feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return ( //this is the item choice buttons. they are dependant on the constants above
            <div key={itemHash} className="feature__item">
                <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(this.props.feature)}
                checked={item.name === this.state.selected[this.props.feature].name}
                onChange={e => this.updateFeature(this.props.feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
            </div>
            );
        });
    }
    render(){ //no direct return causing an error
    //features = Object.keys(this.props.features).map((feature, idx) => { Commented out because of error not returning
         return(optionsCalculator())
    //})
    }
}

export default Options;