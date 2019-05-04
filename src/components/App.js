import "./App.css";
import { connect } from "react-redux";
import React, { Component } from "react";
import Nav from "./Nav/Nav";
import SideBar from "./Aside/SideBar";
import AnimeView from "./Main/AnimeView";
import * as AnimeActions from "../store/actions/actions";

class App extends Component {
  componentDidMount() {
    this.props.getAllAnimes({
      url: "http://notmyanimelist.herokuapp.com/animes",
    });
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="App__body">
          <SideBar />
          <AnimeView />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getAllAnimes: payload => {
    dispatch(AnimeActions.getAllAnimes(payload));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(App);
