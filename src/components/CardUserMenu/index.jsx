import React from 'react';
import { Link } from 'react-router-dom';
import { MdPersonOutline, MdExitToApp } from 'react-icons/md';
import './styles.css';

class CardUserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isMenuOpen: false};
    this.boxRef = null;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  closeIt() {
    this.setState({ isMenuOpen: false });
  }

  /** 
   * Handle click at Avatar Link and open modal box
   */
  handleProfileClick = e => {
    e.preventDefault();
    this.setState(prev => ({ isMenuOpen: !prev.isMenuOpen }));
  };

  /**
   * Handle Outside Clicks and force the close action of the box
   */
  handleOutsideClick = e => {
    if(this.boxRef.contains(e.target)) {
      return;
    }

    this.closeIt();
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <div ref={boxRef => { this.boxRef = boxRef }}>
        <a href="/profile" title="Profile" className="profile-item" onClick={this.handleProfileClick}>
          <img src="https://avatars0.githubusercontent.com/u/6841275?s=460&v=4" alt="Rafael Casachi"/>
        </a>

        {isMenuOpen &&
          (<aside className="profile-box">
            <div className="box--title">
              <h6>Rafael Casachi</h6>
              <span>Administrador</span>
            </div>
            <div className="box--menu">
              <Link to="/profile" title="Profile" onClick={() => this.closeIt()}>
                <MdPersonOutline className="box--menu_icon" /> Profile
              </Link>
              <Link to="/logout" title="Logout" onClick={() => this.closeIt()}>
                <MdExitToApp className="box--menu_icon" /> Logout
              </Link>
            </div>
          </aside>)
        }
      </div>
    );
  }
}

export default CardUserMenu;