import React, { Component } from "react";

//Yükleniyor iconu
export class Loading extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Loading;

