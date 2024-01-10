import ErrorAlert from "./components/ErrorAlert";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import UserList from "./components/UserList";
import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false, //yükleniyor başta false
      users: [], //users lar başta boş
      error: null, //başlangıçta hata mesajı
    };
  }
  //users lar 1 saniye sonra gelsin
  searchUsers = (keyword) => {
    this.setState({ loading: true }); //arama kelimesi girildikten sonra yükleniyor butonunun durumu
    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then((response) => response.json())
        .then((data) => this.setState({ users: data.items, loading: false })); //items,url deki bilgiler dizi içinde olduğu için
    }, 1000);
  };
  //arama sonuçlarını temizle
  clearResults = () => {
    this.setState({ users: [] });
  };
  // hata mesajı 3 saniye sonra kaybolur
  displayErrorAlert = (msg, type) => {
    this.setState({ error: { msg: msg, type: type } });
    setTimeout(() => {
      this.setState({
        error: null,
      });
    }, 3000);
  };

  render() {
    return (
      <div>
        <Navbar />
        <Search
          searchUsers={this.searchUsers} //arama
          clearResults={this.clearResults} //arama sonuçlarını temizle
          //arama kelimesi sıfırdan küçükse arama sonuçlarını temizle butonunu gösterme
          showClearButton={this.state.users.length > 0 ? true : false}
          //hata mesajı
          displayErrorAlert={this.displayErrorAlert}
        />
        {/* hata mesajı */}
        <ErrorAlert error={this.state.error} />
        <div className="container mt-3">
          <UserList users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
