import React, { useState } from "react";
import "./../App.css";
function Footer(props) {
  return (
    <div>
      <footer className="mt5 pv4 ph3 ph5-m ph6-l mid-gray">
        <small className="f6 db tc">Built by <b className="ttu"><a href="https://www.twitter.com/vulnmachines">Vulnmachines</a></b>.</small>
        <div className="tc mt3">
          <a href="https://secops.group/" title="Language" className="f6 dib ph2 link mid-gray hover-gold"><b>Managed by TheSecOps Group</b></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
