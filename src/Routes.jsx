import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import ClientPage from './pages/ClientPage';
import ProjectPage from './pages/ProjectPage';
import TaskPage from './pages/TaskPage';
import FinancialPage from './pages/FinancialPage';
import UserPage from './pages/UserPage';
import WorkspacePage from './pages/WorkspacePage';
import ProfilePage from './pages/ProfilePage';
import Logout from './pages/Logout';
import Login from './pages/Login';

export default () => (
  <>
    <Route exact path="/"><Home /></Route>
    <Route path="/clients"><ClientPage /></Route>
    <Route path="/projects"><ProjectPage /></Route>
    <Route path="/tasks"><TaskPage /></Route>
    <Route path="/financial"><FinancialPage /></Route>
    <Route path="/users"><UserPage /></Route>
    <Route path="/workspaces"><WorkspacePage /></Route>
    <Route path="/profile"><ProfilePage /></Route>
    <Route path="/logout"><Logout /></Route>
    <Route path="/login"><Login /></Route>
  </>
);