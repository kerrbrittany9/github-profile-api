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
      // display: 'grid',
      // gridTemplateColumns: '40% 40%',
      // gridGap: '3% 3%',
      // gridTemplateRows: '10% 10% 10%'

    }
    return (
      <div style={resumeStyles}>
        <h3>Overview</h3>
        <p>Junior web developer with a strong background in forensic psychology and languages. Passion for creating web applications that provide a great user experience.</p>
        <h3>Education</h3>
        <h5>Epicodus</h5>
        <p>Completion of 800-hr developer training in PHP/JavaScript/React: full-stack pair programming, individual / group projects and capstone.</p>
        <h5>Ohio University</h5>
        <p>Bachelor of arts in psychology with minor degree in fine arts. Dean’s list.</p>
        <h3>Relevant Skills</h3>
        <p>JavaScript, jQuery, PHP, SQL, CSS, HTML, Bootstrap, Ember, Angular, Silex, React.js, Jest, Babel, Node.js, Redux, Moment; Spanish and Portuguese fluency; years of professional psychology experience, which I use for assessing user experience.</p>
        // <h3>Work Experience</h3>
        // <h5>Yoga Instructor</h5>
        // <ul>
        //   <li>Communicate complex posture sequences to guide multi-level yoga classes through a spirited flow and meditation practice. </li>
        // </ul>
        // <h5>Bilingual Jail Diversion Coordinator, Bluebonnet Trails</h5>
        // <ul>
        //   <li>Assessed the needs of over 250 individuals/month, mitigating crisis with ASIST suicide prevention with 100% success.</li>
        //   <li>Coordinated continuity of care for consumers of the San Antonio State Hospital, increasing diversion rate by over 60%.</li>
        //   <li>Implemented a cross-match service in mental health and judicial systems to serve high-risk consumers in all 8 jails in our authority</li>
        // </ul>
        // <h5>Bilingual Case Manager, MHMRA of Harris Co.</h5>
        // <ul>
        //   <li>Educated a caseload of 30+ adult consumers of the mental health system on symptom management.</li>
        //   <li>Assessed consumers needs and strengths at least 1/month, linking to 100+ services.</li>
        // </ul>
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
