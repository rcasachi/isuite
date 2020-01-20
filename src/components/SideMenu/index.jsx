import React from 'react';
import { TiBusinessCard } from 'react-icons/ti';
import { AiOutlineProject } from 'react-icons/ai';
import { MdAttachMoney, MdPlaylistAddCheck } from 'react-icons/md';
import './styles.css';

class SideMenu extends React.Component {
  render() {
    return (
      <div className="sidemenu">
        <a href="/clients" title="Clients" className="sidemenu--item">
          <TiBusinessCard className="sidemenu--item_icon" />
        </a>
        <a href="/projects" title="Projects" className="sidemenu--item">
          <AiOutlineProject className="sidemenu--item_icon" />
        </a>
        <a href="/tasks" title="Tasks" className="sidemenu--item">
          <MdPlaylistAddCheck className="sidemenu--item_icon" />
        </a>
        <a href="/financial" title="Financial" className="sidemenu--item">
          <MdAttachMoney className="sidemenu--item_icon" />
        </a>
      </div>
    );
  }
}

export default SideMenu;