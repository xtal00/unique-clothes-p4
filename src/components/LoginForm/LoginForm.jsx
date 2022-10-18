import React, { Component }  from 'react';
import "./LoginForm.css"
export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ 
          email: this.state.email, 
          password: this.state.password
        })
      }
      const fetchResponse = await fetch("/api/users/login", options)

      if (!fetchResponse.ok) throw new Error("Fetch Failed - Bad Request")

      let token = await fetchResponse.json()
      localStorage.setItem('token', token)

      const user = JSON.parse(atob(token.split('.')[1])).user
      this.props.setUserInState(user)
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    return (
      <div className="loginform">
        <div className="" onSubmit={this.handleSubmit}>
          <form autoComplete="off">
            <label>Email: </label>
            <input calssName='input'
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            /> <br/><br/>
            <label>Password: </label>
            <input className='input'
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            /> <br/><br/>
            <button type="submit">LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}