import React from 'react';
import Logo from '../../components/Logo';
import SideMenu from '../../components/SideMenu';
import FootMenu from '../../components/FootMenu';
import './styles.css';

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <Logo 
          image={process.env.PUBLIC_URL + '/logo.png'} 
          alternative="iSuite" 
          title="Home" 
          link="/"
        />
        <SideMenu />
        <FootMenu />
      </nav>
    );
  }
}

export default NavBar;
