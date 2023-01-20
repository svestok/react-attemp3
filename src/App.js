import React from "react";
import Search from "./Search";
import './App.css';
import {Grid} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid container  spacing={0}>
          <Grid item lg={3}><p> Moscow</p></Grid>
          <Grid item  lg={3}><p> Berlin</p></Grid>
          <Grid item  lg={3}><p> Minsk</p></Grid>
          <Grid item lg={3}><Search /></Grid>
        </Grid>
        <ul><li> London, 20.01.2023 14:20</li>
          <li> Temperature: 12°C</li>
          <li>Humidity: 80%</li>
          <li>Wind:4 km/h</li>
        </ul>
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <h2>⛅️</h2> 
            <p>16°C/14°C</p>
          </Grid>
          <Grid item lg={3}>
          <h2>☀️</h2>
          <p>17°C/15°C</p>
          </Grid>
          <Grid item lg={3}>
          <h2>⛅️</h2>
          <p>20°C/18°C</p>
          </Grid>
          <Grid item lg={3}>
          <h2>☀️</h2>
          <p>25°C/23°C</p>
          </Grid>
        </Grid>

        <a
          className="App-link"
          href="https://github.com/svestok"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source
        </a><div>by Sviatlana Zhyhalava</div>
        </header>
    </div>
  );
}

export default App;
