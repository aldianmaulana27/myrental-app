import React, { Component } from "react";
import UserService from "../services/UserService";
import { withRouter } from "./withRouter";

class ListUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
    this.logout = this.logout.bind(this);
  }
  nextBtn = () => {
    const { history } = this.props;

    history.push("/display");
  };
  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({ users: res.data.results });
    });
  }

  logout() {
    this.props.navigate("/login");
  }

  render() {
    return (
      <section>
      <div>
        <h2 className="text-center">User List</h2>
        <div className="row">
          <table className="table table-striped table-bordered border-top-5px">
            <thead>
              <tr>
                <th>User name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.uuid}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="btn btn-danger"
          onClick={this.logout}
          style={{ marginTop: "10pxx" }}
        >
          Logout
        </button>
      </div>
      </section>
    );
  }
}

export default withRouter(ListUser);
