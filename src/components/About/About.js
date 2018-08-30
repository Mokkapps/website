import React from 'react';

import SkillBar from '../SkillBar';

export default () => (
    <div>
    <img
      style={{ borderRadius: '50%' }}
      src="./about.jpg"
      width="250"
      height="250"
    />

    <h2>I am a software developer from the Bavarian Forest and currently live in Munich.</h2>

    <h2>Highly committed, agile personality with broad experience in the field of application development. Experience in working in agile team settings. Delivering excellent results and used to work under pressure.</h2>
    
    <h2>I am very interested in development of mobile apps, websites and video games. If I am not coding I play videogames or do sports.</h2>

    <h1>Skills</h1>
    <SkillBar/>
    </div>
  );
