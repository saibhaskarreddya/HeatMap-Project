import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>HomeScreen</h1>
            <Link to='/input'>Input</Link><br/>
            <Link to='/table'>Tables</Link><br/>
            <Link to='/Login'>Login</Link><br/>
            <Link to='/Api'>Api</Link><br/>
            <Link to='/Char'>Char</Link><br/>
              <Link to='/HeatmapChartt'>HeatmapChartt</Link><br/>
            <Link to='/HeatmapChart'>HeatmapChart</Link>
        </div>

    )
}

export default Home;