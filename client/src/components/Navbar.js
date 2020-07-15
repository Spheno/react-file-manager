import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class Navbar extends Component {
  render() {
    let { currentDir } = this.props;

    return (
      <div className="row d-inline-flex w-100 m-auto top">
        <div className="w-25 h-100 my-auto text-center font-weight-bolder text-uppercase">
          Your Workspace
        </div>
        <div className="w-75 text-center align-content-center">
          <Breadcrumb>Home {currentDir}</Breadcrumb>
        </div>
      </div>
    );
  }
}

export default Navbar;
