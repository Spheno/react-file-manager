import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import browseAPI from "../utils/browseAPI";
import Folder from "./Folder";
import FileItem from "./FileItem";

class RightPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentDir: "/",
      files: [],
      folders: [],
    };
  }

  async componentDidMount() {
    try {
      const data = await browseAPI.getPathContent(this.state.currentDir);
      console.log(data);
      this.setState({
        files: data.files,
        folders: data.folders,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let { loading, currentDir, files, folders } = this.state;

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
            return <Folder key={id} folder={folder} currentDir={currentDir} />;
          })}

          {files.map((file, id) => {
            return <FileItem key={id} file={file} currentDir={currentDir} />;
          })}
        </div>
      );
  }
}

export default RightPanel;
