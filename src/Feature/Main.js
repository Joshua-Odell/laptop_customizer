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
            feature={feature}
            idx={idx}
            features={this.props.features}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
          />
        ))}
      </section>
    );
  }
}