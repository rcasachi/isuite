import React from 'react';
import { Link } from 'react-router-dom';
import CardUserMenu from '../CardUserMenu';
import { MdViewList, MdSupervisorAccount } from 'react-icons/md';
import './styles.css';

class FootMenu extends React.Component {
  render() {
    return (
      <div className="footmenu">
        <Link to="/users" title="Users" className="footmenu--item">
          <MdSupervisorAccount className="footmenu--item_icon" />
        </Link>
        <Link to="/workspaces" title="Workspaces" className="footmenu--item">
          <MdViewList className="footmenu--item_icon" />
        </Link>
        <CardUserMenu />
      </div>
    );
  }
}

export default FootMenu;