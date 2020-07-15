import React, { Component } from "react";
import { withRouter } from "react-router";

import Spinner from "react-bootstrap/Spinner";
import browseAPI from "../utils/browseAPI";
import Folder from "./Folder";
import FileItem from "./FileItem";

class RightPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      files: [],
      folders: [],
    };
  }

  async componentDidMount() {
    try {
      let path = this.props.match.url;

      const data = await browseAPI.getPathContent(path);
      console.log("data", data)
      this.setState({
        files: data.files,
        folders: data.folders,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.match.url !== prevProps.match.url) {
      try {
        let path = this.props.match.url;
        console.log("path", path);

        const data = await browseAPI.getPathContent(path);
        console.log("dataUP", data)

        this.setState({
          files: data.files,
          folders: data.folders,
          loading: false,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    let { loading, files, folders } = this.state;

    if (loading)
      return (
        <div className="m-auto">
          <Spinner animation="border" />
        </div>
      );
    else
      return (
        <div className="col-9 rightSide">
          {folders.map((folder, id) => {
            return (
              <Folder
                key={id}
                folder={folder}
              />
            );
          })}

          {files.map((file, id) => {
            return (
              <FileItem
                key={id}
                file={file}
                currentDir={this.props.match.url}
              />
            );
          })}
        </div>
      );
  }
}

export default withRouter(RightPanel);
