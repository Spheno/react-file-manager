import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import uploadAPI from "../utils/uploadAPI";
import { withRouter } from "react-router-dom";

class LeftPanel extends Component {
  async handleFileUpload(e) {
    e.preventDefault();

    try {
      const data = new FormData();
      const selectedFiles = e.target.files;

      data.set("dirPath", this.props.match.url);

      for (const key of Object.keys(selectedFiles)) {
        data.append("uploadForm", selectedFiles[key]);
      }

      const response = await uploadAPI.uploadFiles(data);
      console.log(response);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="col-3 leftSide text-center">
        <p className="my-3 lead">Upload some files</p>
        <Form
          name="uploadForm"
          onChange={(e) => this.handleFileUpload(e)}
          method="POST"
          encType="multipart/form-data"
        >
          <Form.File name="uploadForm" label="" custom multiple />
        </Form>
      </div>
    );
  }
}

export default withRouter(LeftPanel);
