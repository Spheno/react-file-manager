import React, { Component } from "react";

import "./App.css";
import FileManager from "./components/FileManager";

class App extends Component {
  state = {};

  componentDidMount() {}

  handleSubmit = async (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="d-flex flex-column">
        <div className="mb-3">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <h1 className="font-weight-light mt-4 mb-5 text-white">
                  File Manager with React and NodeJS
                </h1>
                <p className="lead text-light">
                  Manage the content of a local directory. <br />
                  Here, you can <span className="font-weight-bold">upload</span>
                  , <span className="font-weight-bold">download</span> and{" "}
                  <span className="font-weight-bold">remove</span> a file where
                  you want.
                </p>
              </div>
            </div>
          </div>

          <FileManager />

        </div>

        <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
          <div className="container text-center">
            <small>Copyright &copy; Mohamed Lakhal</small>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
