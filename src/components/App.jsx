import React from 'react';
import Header  from './Header';
import Resume from './Resume';
import ProfileDisplay from './ProfileDisplay';
import Background from "./../images/cactus.jpg";
import { Switch, Route } from 'react-router-dom';

function App(props) {

  var appStyle = {
    textAlign: 'center',
    margin: "50px",
    color: "pink",
    backgroundImage: "url(" + Background + ")",
    height: '980px',
    width: '1000px',
    backgroundRepeat: 'no-repeat',
    marginLeft: '130px',
    paddingTop: '10px'
  };

  return (
    <div style={appStyle}>
      <Header/>
      <Switch>
        <Route exact path="/" component={ProfileDisplay}/>
        <Route path="/resume" component={Resume}/>
      </Switch>
    </div>
  );
}

export default App;
