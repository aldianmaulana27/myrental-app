import React, { Component } from "react";
import UserService from "../services/UserService";
import { withRouter } from "./withRouter";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
  }

  loginUser = (e) => {
    e.preventDefault();

    let login = { email: this.state.email, password: this.state.password };
    console.log("login =>" + JSON.stringify(login));

    UserService.loginUser(login).then((res) => {
      this.props.navigate("/");
    });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <>
        <section>
          <div className="container">
            <div className="row">
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Log In</h3>
                <p className="text-center">
                  Login and Enjoy rent Car experience{" "}
                </p>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        placeholder="E-Mail"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.changeEmailHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.changePasswordHandler}
                      />
                    </div>
                    <button
                      className="btn btn-success"
                      onClick={this.loginUser}
                      style={{ marginTop: "5px" }}
                    >
                      Login
                    </button>
                    <p>
                      Do not have account?{" "}
                      <a href="http://localhost:3000/add-user">register here</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>

            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(Login);
