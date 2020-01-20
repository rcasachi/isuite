import React from 'react';
import CardUserMenu from '../CardUserMenu';
import { MdViewList, MdSupervisorAccount } from 'react-icons/md';
import './styles.css';

class FootMenu extends React.Component {
  render() {
    return (
      <div className="footmenu">
        <a href="/users" title="Users" className="footmenu--item">
          <MdSupervisorAccount className="footmenu--item_icon" />
        </a>
        <a href="/workspaces" title="Workspaces" className="footmenu--item">
          <MdViewList className="footmenu--item_icon" />
        </a>
        <CardUserMenu />
      </div>
    );
  }
}

export default FootMenu;