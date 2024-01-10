import React, { Component } from "react";

//arama yap
export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "", //başlangıçta aramalar boş gelsin
    };
  }
  //arama yaparken girilen değeri al
  onChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };
  //arama yaparken girilen değeri butona tıklayınca al
  onSubmit = (e) => {
    e.preventDefault(); //sayfayı yenileme yapmadan ara
    // hata mesajının kontrolü  msg-type
    if (this.state.keyword === "") {
      this.props.displayErrorAlert("Please enter keyword.", "danger");
    } else {
      this.props.searchUsers(this.state.keyword);
      this.setState({ keyword: "" });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group mb-3">
            <input
              onChange={this.onChange}
              value={this.state.keyword}
              type="text"
              className="form-control"
              placeholder="Keyword"
            />
            <button
              className="btn btn-secondary"
              type="submit"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </form>
        {/* arama yapılmamış ise butonu gizle */}
        {this.props.showClearButton && (
          <button
            //arama sonuçlarini temizle
            onClick={this.props.clearResults}
            className="btn btn-outline-danger mt-2 btn-block"
          >
            Clear Results
          </button>
        )}
      </div>
    );
  }
}

export default Search;
