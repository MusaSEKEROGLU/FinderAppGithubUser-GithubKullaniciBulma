import React, { Component } from "react";
import User from "./User";
import Loading from "./Loading";

export class UserList extends Component {
  render() {
    //Yükleniyor iconu
    if(this.props.loading){
      return <Loading />;
    }
    return (     
      <div>
        {this.props.users.map((user) => (
          <User user={user} key = {user.id}/>
        ))}
      </div>
    );
  }
}

export default UserList;
