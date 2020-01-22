import React from 'react';
import { Link } from 'react-router-dom';
import { TiBusinessCard } from 'react-icons/ti';
import { AiOutlineProject } from 'react-icons/ai';
import { MdAttachMoney, MdPlaylistAddCheck } from 'react-icons/md';
import './styles.css';

class SideMenu extends React.Component {
  render() {
    return (
      <div className="sidemenu">
        <Link to="/clients" title="Clients" className="sidemenu--item">
          <TiBusinessCard className="sidemenu--item_icon" />
        </Link>
        <Link to="/projects" title="Projects" className="sidemenu--item">
          <AiOutlineProject className="sidemenu--item_icon" />
        </Link>
        <Link to="/tasks" title="Tasks" className="sidemenu--item">
          <MdPlaylistAddCheck className="sidemenu--item_icon" />
        </Link>
        <Link to="/financial" title="Financial" className="sidemenu--item">
          <MdAttachMoney className="sidemenu--item_icon" />
        </Link>
      </div>
    );
  }
}

export default SideMenu;