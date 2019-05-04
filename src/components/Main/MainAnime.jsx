import React from "react";
import List from "./List";
import { connect } from "react-redux";

const MainAnime = props => {
  console.log(props);
  return (
    <div className="anime-view__wrapper">
      <h3>Animes ({props.animes.animes.length})</h3>
      <List list={props.animes.animes} />
    </div>
  );
};
const mapStateToProps = state => ({
  animes: state.animes,
});

export default connect(
  mapStateToProps,
  null
)(MainAnime);
