import React from 'react'

export default function Projects() {
  function goToSwe() {
    // same behavior as the original site: navigate to the external software-engineer projects
    window.location.href = 'http://ec2-50-16-177-186.compute-1.amazonaws.com/~roberto/'
  }

  return (
    <div>
      <h2>Projects</h2>
      <p>
        Software engineering and other projects. Click the button below to go to the software
        engineering projects hosted externally.
      </p>
      <button id="swe_button" className="project_button" onClick={goToSwe}>Software Engineer Projects</button>
    </div>
  )
}
