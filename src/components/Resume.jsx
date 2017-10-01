import React from "react";

function Resume(){
  var resumeStyles = {
    textAlign: 'left',
    padding: '100',
    paddingTop: '0',
    color: '#F2D7D5',
    display: 'grid',
      gridTemplateColumns: '50% 50%',
      gridGap: '5% 10%',

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
    </div>
  );
}

export default Resume;
