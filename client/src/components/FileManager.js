import React, { Component } from "react";
import Navbar from "./Navbar";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

class FileManager extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card window">
              <Navbar />

              <div className="row d-flex h-100 w-100 m-auto">
                <LeftPanel />
                <RightPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FileManager;
