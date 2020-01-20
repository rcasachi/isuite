import React from 'react';
import './styles.css';

class Logo extends React.Component {
  render() {
    return (
      <a href={this.props.link} title={this.props.title} className="logo">
        <img src={this.props.image} alt={this.props.alternative} />
      </a>
    );
  }
}

export default Logo;