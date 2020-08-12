import React from 'react';
import './footer.css';

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer_left">
        <h1>Album Songs details</h1>
      </div>
      <div className="footer_center">
      <h1>Player control</h1>
      </div>
      <div className="footer_right">
        <p>Volume controls</p>
      </div>
    </div>
  );
}

export default Footer;
