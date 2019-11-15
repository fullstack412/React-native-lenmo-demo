import React, { Component } from "react";
import Loading from "../../components/Loading";
import { connect } from "react-redux";
// import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

class LoadingContainer extends Component {
  componentDidMount() {
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 300);
    Font.loadAsync({
      'Avenir-Book': require('../../../assets/fonts/AvenirLTStd-Book.otf'),
      'Avenir-Medium': require('../../../assets/fonts/AvenirLTStd-Medium.otf'),
      'Avenir-Roman': require('../../../assets/fonts/AvenirLTStd-Roman.otf'),
    })

    this.props.navigation.navigate(this.props.auth.token ? "App" : "Login");
  }
  render() {
    return (
      <Loading navigation={this.props.navigation}/>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});


export default connect(
  mapStateToProps,
  null
)(LoadingContainer);
