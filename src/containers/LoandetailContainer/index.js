import React, { Component } from "react";
import { connect } from "react-redux";
import LoanDetail from "../../components/Loandetail";
import { searchUsers } from "../../actions";

export class LoandetailContainer extends Component {

  render() {
    const { user, searchUsers } = this.props
    return (
      <LoanDetail navigation={this.props.navigation} user={user} searchFn={searchUsers}/>
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
)(LoandetailContainer);