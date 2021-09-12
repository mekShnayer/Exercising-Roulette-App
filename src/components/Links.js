import React from 'react';
import { Link } from 'react-router-dom';

function Links() {
  return (
    <ul className='link-list'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/personalZone">Personal Zone</Link></li>
      <li><Link to="/workout">Workout</Link></li>
    </ul>
  )
}

export default Links;