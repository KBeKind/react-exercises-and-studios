import React from "react";

const hobbyLinks = [
  "https://education.launchcode.org/SQL/index.html",
  "https://www.wunderground.com/forecast/us/mo/st.-louis",
];

const HobbyLinks = () => {
  return (
    <div>
      HobbyLinks
      <ul>
        <li>
          <a href={hobbyLinks[0]}>LC Link</a>
        </li>
        <li>
          <a href={hobbyLinks[1]}>Weather Link </a>
        </li>
      </ul>
    </div>
  );
};

export default HobbyLinks;
