import React from 'react';
import Feature from '../Feature/Feature';


export default class MainForm extends React.Component {
  static defaultProps = {
    features: {},
  };
  render() {
    return (
      <section>
        {Object.keys(this.props.features).map((feature, idx) => (
          <Feature
            key={idx}
            feature={feature}
            idx={idx}
            features={this.props.features}
            USCurrencyFormat={this.props.USCurrencyFormat}
            updateFeature={this.props.updateFeature}
            selected={this.props.selected}
          />
        ))}
      </section>
    );
  }
}