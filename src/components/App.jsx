import React from 'react';
import Header  from './Header';
import Resume from './Resume';
import ProfileDisplay from './ProfileDisplay';
import Background from "./../images/cactus.jpg";
import { Switch, Route } from 'react-router-dom';

function App(props) {

  var appStyle = {
    margin: "50",
    color: "pink",
    backgroundImage: "url(" + Background + ")",
    height: '600',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    marginLeft: '150',
    paddingTop: '10'
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
