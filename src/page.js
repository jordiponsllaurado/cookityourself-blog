import React from 'react';
import { Link } from 'react-router';

const Page = ({ title }) => (
    <div className="App">
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
    </div>
);

export default Page
