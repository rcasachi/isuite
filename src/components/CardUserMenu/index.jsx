import React from 'react';
import { MdPersonOutline, MdExitToApp } from 'react-icons/md';
import './styles.css';

class CardUserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isMenuOpen: false};
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
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
  handleOutsideClick = () => {
    if(this.state.isMenuOpen) {
      this.setState({ isMenuOpen: false});
    }
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <>
        <a href="/" title="Profile" className="profile-item" onClick={this.handleProfileClick}>
          <img src="https://avatars0.githubusercontent.com/u/6841275?s=460&v=4" alt="Rafael Casachi"/>
        </a>

        {isMenuOpen ?
          (<aside className="profile-box">
            <div className="box--title">
              <h6>Rafael Casachi</h6>
              <span>Administrador</span>
            </div>
            <div className="box--menu">
              <a href="/profile" title="Profile">
                <MdPersonOutline className="box--menu_icon" /> Profile
              </a>
              <a href="/logout" title="Logout">
                <MdExitToApp className="box--menu_icon" /> Logout
              </a>
            </div>
          </aside>)
          : ''
        }
      </>
    );
  }
}

export default CardUserMenu;