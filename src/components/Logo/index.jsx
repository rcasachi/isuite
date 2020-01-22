import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Logo extends React.Component {
  render() {
    return (
      <Link to={this.props.link} title={this.props.title} className="logo">
        <img src={this.props.image} alt={this.props.alternative} />
      </Link>
    );
  }
}

export default Logo;