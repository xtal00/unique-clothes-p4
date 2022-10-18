
import React, { Component }  from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../Homepage/Homepage';
import Logo from "../../components/Logo/Logo"

export default class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        token = null;
      } else {
        let userDoc = payload.user;
        this.setState({ user: userDoc });
      }
    }
  }

  handleLogout = () => {
    // let token = localStorage.getItem("token");
    console.log("logout");
    localStorage.removeItem("token");
    // token = null;
    this.setState({ user: "" });
  };

  setUserInState = (incominguserData) => {
    this.setState({ user: incominguserData})
  }

  render(){
    return (
      <main className="App">
        { this.state.user ? (
        <Routes>
          <Route path="/home" element={<HomePage handleLogout={this.handleLogout} />}/>
        </Routes>

        ): (
          <AuthPage setUserInState={this.setUserInState} user={this.state.user} />
          )
        }
      </main>
    );
  }
}