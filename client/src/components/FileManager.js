import React, { Component } from "react";
import Navbar from "./Navbar";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

class FileManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDir: "",
    };
  }

  componentDidMount() {
    this.setState({ currentDir: this.props.match.url });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.url !== prevProps.match.url) {
      this.setState({ currentDir: this.props.match.url });
    }
  }

  render() {
    let { currentDir } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card window">
              <Navbar currentDir={currentDir} />

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
