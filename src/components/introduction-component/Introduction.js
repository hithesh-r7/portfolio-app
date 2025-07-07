import React from 'react';
import './Introduction.css';

function Introduction() {
  return (
    <div className="main-container">
        <div className="flex flex-col items-center justify-center text-white">
        <div className="profile-photo"></div>
        <div className="text-4xl font-bold mb-5">Hithesh R</div>
        <div className="text-2xl mb-10">Full Stack Developer</div>
        <div className="text-center">I build exceptional and accessible digital experiences for the web. Focused on creating<br></br>elegant solutions to complex problems.</div>
        </div>
    </div>
  );
}

export default Introduction;
