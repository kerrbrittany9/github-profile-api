import React from 'react';
import ProfileDisplay from './ProfileDisplay';
import Background from "./../images/cactus.jpg";

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
      <h1>Brittany Hardison's Github</h1>
      <ProfileDisplay/>
    </div>
  );
}

export default App;
