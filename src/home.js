import React from 'react';
import Page from './page.js'
import Header from './header.js'
import GridListSimple from './components/gridList';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const Home = (props) => (
  <div>
    <Header title="Home"/>
    <p>
      hola Homepage
    </p>
    <div >
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <GridListSimple/>
      </MuiThemeProvider>

    </div>
    <Page title="Home"/>
  </div>
);

export default Home
