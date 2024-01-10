import React from "react";

//hata mesajları
const ErrorAlert = (props) => {
  return (
    //hata mesajları null değilse
    props.error !== null && (
      <div className="container mt-2">
        <div className={`alert alert-${props.error.type}`}>
          {props.error.msg}
        </div>
      </div>
    )
  );
};

export default ErrorAlert;
