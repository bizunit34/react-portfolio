import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import ProjectPage from './ProjectPage/ProjectPage';
import AboutMePage from './AboutMePage/AboutMePage';
import Header from './Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';

library.add(fab)

class App extends React.Component {
  render(){
    return (
      <div className='App'>
        <header className='page-header'>
          <Header />
        </header>
        <main className='page-main'>
          <Switch>
            <Route 
              exact path='/'
              component={LandingPage}
            />
            <Route 
              path='/projects'
              component={ProjectPage}
            />
            <Route 
              path='/aboutme'
              component={AboutMePage}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
