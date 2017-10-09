import React from "react";
import {connect} from 'react-redux';
// import Stats from "./Stats.jsx";

class Resume extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var resumeStyles = {
      textAlign: 'left',
      paddingLeft: '100',
      paddingRight: '100',
      paddingTop: '0',
      color: '#F2D7D5'
    }

    var infoStyle = {
      fontSize: '10'
    }
    var headerStyle = {
      fontSize:  '12'
    }
    return (
      <div style={resumeStyles}>
        <h4>Overview</h4>
        <p style={infoStyle}>Junior web developer with a strong background in forensic psychology and languages. Passion for creating web applications that provide a great user experience.</p>
        <h4>Education</h4>
        <p style={headerStyle}><b>Epicodus</b></p>
        <p style={infoStyle}>Completion of 800-hr developer training in PHP/JavaScript/React: full-stack pair programming, individual / group projects and capstone.</p>
        <p style={headerStyle}><b>Ohio University</b></p>
        <p style={infoStyle}>Bachelor of arts in psychology with minor degree in fine arts. Dean’s list.</p>
        <h4>Relevant Skills</h4>
        <p style={infoStyle}>JavaScript, jQuery, PHP, SQL, CSS, HTML, Bootstrap, Ember, Angular, Silex, React.js, Jest, Babel, Node.js, Redux, Moment; Spanish and Portuguese fluency; years of professional psychology experience, which I use for assessing user experience.</p>
        <h4>Work Experience</h4>
        <p style={headerStyle}>Yoga Instructor</p>
        <ul>
          <li style={infoStyle}>Communicate complex posture sequences to guide multi-level yoga classes through a spirited flow and meditation practice. </li>
        </ul>
        <p style={headerStyle}>Bilingual Jail Diversion Coordinator, Bluebonnet Trails</p>
        <ul>
          <li style={infoStyle}>Assessed the needs of over 250 individuals/month, mitigating crisis with ASIST suicide prevention with 100% success.</li>
          <li style={infoStyle}>Coordinated continuity of care for consumers of the San Antonio State Hospital, increasing diversion rate by over 60%.</li>
          <li style={infoStyle}>Implemented a cross-match service in mental health and judicial systems to serve high-risk consumers in all 8 jails in our authority</li>
        </ul>
        <p style={headerStyle}>Bilingual Case Manager, MHMRA of Harris Co.</p>
        <ul>
          <li style={infoStyle}>Educated a caseload of 30+ adult consumers of the mental health system on symptom management.</li>
          <li style={infoStyle}>Assessed consumers needs and strengths at least 1/month, linking to 100+ services.</li>
        </ul>
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    profile: state
  };
};

export default connect(mapStateToProps)(Resume);
