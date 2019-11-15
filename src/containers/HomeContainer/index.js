import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "../../components/Home";

export class HomeContainer extends Component {

  goLoanDetail(){
    this.props.navigation.navigate("Loandetail");
  }

  render() {
    const { user, searchUsers } = this.props
    return (
      <Home navigation={this.props.navigation} user={user} searchFn={searchUsers}/>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);