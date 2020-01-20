import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserDashboard from "./Dashboard/User/UserDashboard";
import Settings from "./Dashboard/Settings";
import Profile from "./Dashboard/Profile";
import Reports from "./Dashboard/Reports";
import NavBar from "./Dashboard/NavBar";
import TodayContest from "./Dashboard/User/Contest/TodayContest";
import ContestChallenge from "./Dashboard/User/Challenge/ContestChallenge";
import SingleChallenge from "./Dashboard/User/Challenge/SingleChallenge";
import SubmitCode from "./Dashboard/User/Challenge/SubmitCode";
import AdminDashboard from "./Dashboard/Admin/AdminDashboard";
import AllContest from "./Dashboard/Admin/Contest/AllContest";
import ContestLeaderboard from "./Dashboard/Admin/Contest/ContestLeaderboard";
import UserSubmissions from "./Dashboard/Admin/Contest/UserSubmissions";
import CreateChallenge from "./Dashboard/Admin/CreateChallenge/CreateChallenge";
import CreateContest from "./Dashboard/Admin/CreateContest/CreateContest";

const DashboardRoutes = props => {
  const { isAuth } = props;
  return isAuth ? (
    <>
      <Route path="/dashboard" render={NavBar} />
      <Route path="/dashboard" exact render={() => <UserDashboard />} />
      {/* <Route
        path="/dashboard/user/all-contest/"
        exact
        render={() => <UserDashboard />}
      /> */}
      <Route
        path="/dashboard/user/contest/"
        exact
        render={() => <ContestChallenge />}
      />
      <Route
        path="/dashboard/user/contest/today"
        exact
        render={() => <TodayContest />}
      />
      <Route
        path="/dashboard/user/contest/challenge"
        exact
        render={() => <SingleChallenge />}
      />
      <Route
        path="/dashboard/user/contest/challenge/submitcode"
        exact
        render={() => <SubmitCode />}
      />
      {/* Leader board integeration */}
      <Route path="/dashboard/settings" render={() => <Settings />} />
      <Route path="/dashboard/profile" render={() => <Profile />} />
      <Route path="/dashboard/reports" render={() => <Reports />} />

      {/* Admin Dashboard - need authorization */}
      {/* also need navbar for user */}
      <Route path="/dashboard/admin/" exact render={() => <AdminDashboard />} />
      <Route
        path="/dashboard/admin/all-contest"
        exact
        render={() => <AllContest />}
      />
      <Route
        path="/dashboard/admin/:contestId/leaderboard/"
        exact
        render={({ match }) => (
          <ContestLeaderboard contestId={match.params.contestId} />
        )}
      />
      <Route
        path="/dashboard/admin/:contestId/user-submission/:userId"
        exact
        render={({ match }) => (
          <UserSubmissions
            contestId={match.params.contestId}
            userId={match.params.userId}
          />
        )}
      />
      <Route
        path="/dashboard/admin/create-challenge"
        exact
        render={() => <CreateChallenge />}
      />
      <Route
        path="/dashboard/admin/create-contest"
        exact
        render={() => <CreateContest />}
      />
    </>
  ) : (
    <Redirect to="/login" />
  );
};

DashboardRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps)(DashboardRoutes);
