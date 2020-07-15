import React, { Component } from "react";
import { withRouter } from "react-router";

class Folder extends Component {
  changeDir(folder) {
    if (this.props.match.url === "/") this.props.history.push(folder);
    else this.props.history.push(this.props.match.url + "/" + folder);
  }

  render() {
    return (
      <div
        as="button"
        className="text-center d-inline-flex mt-2 mr-3 mb-0"
        onClick={() => this.changeDir(this.props.folder)}
      >
        <span>
          <svg
            height="3em"
            viewBox="0 0 16 16"
            className="bi bi-folder-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"
            />
          </svg>
          <p className="lead text-dark">{this.props.folder}</p>
        </span>
      </div>
    );
  }
}

export default withRouter(Folder);
