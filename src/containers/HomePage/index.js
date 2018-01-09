import React from 'react';
import Page from '../../page.js'
import Header from '../../header.js'
import { Link } from 'react-router';
import './styles.css';

import { CardComponent } from '../../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const atLogo = require('../../assets/images/zucchini_flower.jpg');

export const menuItems = [
  {
    title: 'Zucchini and salmon flowers',
    url: '/2018/01/zucchini-and-salmon-flowers.',
    publishedDate: '1-1-2018',
    logo: atLogo,
  },
  {
    title: 'Meatballs',
    publishedDate: '1-1-2018',
    url: 'meatballs',
    logo: atLogo,
  },
  {
    title: 'Test',
    publishedDate: '1-1-2018',
    url: '/test',
    logo: atLogo,
  },
];

const Home = (props) => (
  <div>
    <Header title="Home"/>
    <p>
      hola Homepage
    </p>
    <div className='homePage'>
      {menuItems.map((item, index) =>
         <Link href={item.url} key={index}>
           <MuiThemeProvider>
             <CardComponent key={index} {...item} />
           </MuiThemeProvider>
         </Link>
       )}
   </div>
    <Page title="Home"/>

  </div>
);

export default Home
