import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Centres d'intérêt</h3>
      <ul>
          <li className="hobby">
              <i className="fas fa-running"></i>
              <span>Sport</span>
          </li>
          <li className="hobby">
              <i className="fas fa-plane-departure"></i>
              <span>Voyages</span>
          </li>
          <li className="hobby">
              <i className="fas fa-utensils"></i>
              <span>Cuisine</span>
          </li>
          <li className="hobby">
              <i className="fas fa-gamepad"></i>
              <span>Jeux vidéo</span>
          </li>
          <li className="hobby">
              <i className="fas fa-film"></i>
              <span>Cinéma</span>
          </li>
      </ul>
      
    </div>
  );
};

export default Hobbies;
