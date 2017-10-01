import React from 'react';
import Header  from './Header';
import Resume from './Resume';
import ProfileDisplay from './ProfileDisplay';
import Background from "./../images/cactus.jpg";
import { Switch, Route } from 'react-router-dom';

function App(props) {

  var appStyle = {
    textAlign: 'center',
    margin: "50",
    color: "pink",
    backgroundImage: "url(" + Background + ")",
    height: '980',
    width: '1000',
    backgroundRepeat: 'no-repeat',
    marginLeft: '130',
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
