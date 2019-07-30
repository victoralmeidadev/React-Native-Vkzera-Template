import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import { images } from "../../assets";
import { loadingSplashScreenComplete } from "../../reducer/actions";

class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(async () => {
      this.props.navigation.navigate("AppStack");
    }, 2500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SplashScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadingSplashScreen: state.reducer.loadingSplashScreen
  };
};

export default connect(
  mapStateToProps,
  {
    loadingSplashScreenComplete
  }
)(SplashScreen);
