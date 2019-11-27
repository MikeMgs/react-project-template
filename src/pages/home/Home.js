import React, { useEffect } from "react";
import { connect } from "react-redux";
import { example } from "../../redux/actions/actions";

const Home = props => {
  useEffect(() => {
    props.example("test");
    console.log(props);
    return () => {};
  }, [props]);
  return <div> home </div>;
};
const mapStateToProps = state => {
  const { content } = state;
  return { content };
};

export default connect(mapStateToProps, { example })(Home);
