import React, { Component } from "react";
import downloadAPI from "../utils/downloadAPI";
import download from "downloadjs";

class FileItem extends Component {
  async downloadFile(file, currentDir) {
    const letsDownload = window.confirm("Do you want to download this file ?");

    if (letsDownload)
      try {
        let path = currentDir + file;

        // If file is in first directory (home)
        if (currentDir !== "/") path = currentDir + "/" + file;

        const data = await downloadAPI.downloadFile(path);
        download(data, file);
      } catch (error) {
        console.log(error);
      }
  }

  render() {
    return (
      <div
        className="text-center d-inline-flex mt-2 mr-3 mb-0"
        role="button"
        onClick={async () =>
          this.downloadFile(this.props.file, this.props.currentDir)
        }
      >
        <span>
          <svg
            height="3em"
            viewBox="0 0 16 16"
            className="bi bi-file-arrow-down-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg>
          <p className="lead text-dark">{this.props.file}</p>
        </span>
      </div>
    );
  }
}

export default FileItem;
