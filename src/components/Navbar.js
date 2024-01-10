import React, { Component } from "react";
import PropTypes from "prop-types";
export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <i className={this.props.icon}></i>
            {this.props.title}
          </a>
        </div>
      </nav>
    );
  }
}
// alanları parametre olarak dışardan gönderme
Navbar.defaultProps = {
  icon: "bi bi-github",
  title: "Finder App Github Users",
};
// alanların tipi ve şartı
Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Navbar;
