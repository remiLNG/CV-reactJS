import React, { Component } from "react";
import { languagesData } from "../../data/languagesData.js";

import ProgressBar from "./ProgressBar";

export default class Languages extends Component {
 state = {
   languages: languagesData,
 }

  render() {
    let {languages} = this.state
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="langages, frameworks & bibliothèques"
        />
      </div>
    );
  }
}
