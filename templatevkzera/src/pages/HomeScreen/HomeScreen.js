import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import { images } from "../../assets";

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(HomeScreen);
