import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import {
  fetchUserSubmissions,
  fetchUserCode
} from "../../../../redux/admin/action";

import Axios from "../../../../utils/axiosInterceptor";

class UserSubmissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submissions: [],
      code: ""
    };
  }

  getUserSubmissions = () => {
    // send auth token
    const { userId, contestId } = this.props;
    Axios.get(`contest/${contestId}/leaderboard/${userId}`).then(res => {
      // console.log(res);
      if (res && res.data && res.data.challenges) {
        this.setState({
          submissions: res.data.challenges
        });
      }
    });
  };

  getSubmittedCode = submission_id => {
    const { userId, contestId } = this.props;
    Axios.get(
      `contest/${contestId}/leaderboard/${userId}/code/${submission_id}`
    ).then(res => {
      // console.log(res);
      if (res && res.data && res.data.code) {
        this.setState({
          code: res.data.code
        });
      }
    });
  };

  componentDidMount() {
    // const { fetchUserSubmissions: fetchSubmissions } = this.props;
    // fetchSubmissions();
    this.getUserSubmissions();
  }

  viewUserCode = id => {
    // const { fetchUserCode: fetchCode } = this.props;
    // fetchCode(id);
    this.getSubmittedCode(id);
  };

  render() {
    // submissions from props : changed to submissions from state, code as well
    const { language, contestName } = this.props;
    const { submissions, code } = this.state;
    return (
      <>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-lg-6">
            <table className="table table-striped text-center">
              <thead className="thead-dark">
                <tr className="text-white">
                  <th scope="col">Challenge Name</th>
                  <th scope="col">Score</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Code</th>
                </tr>
              </thead>
              <tbody>
                {submissions &&
                  submissions.map(ele => {
                    return (
                      <tr key={"submission id" + submissions.submission_id}>
                        <td>{ele.challenge_name}</td>
                        <td>{ele.max_score}</td>
                        <td>{ele.name}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-dark"
                            onClick={() => this.viewUserCode(ele.submission_id)}
                          >
                            Code
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="col-lg-6">
            <AceEditor
              placeholder="View User Code"
              mode={language}
              theme="monokai"
              name="user-submission"
              onLoad={this.onLoad}
              onChange={this.onChange}
              fontSize={14}
              showPrintMargin
              showGutter
              highlightActiveLine
              value={code}
              setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

UserSubmissions.propTypes = {
  submissions: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchUserSubmissions: PropTypes.func.isRequired,
  fetchUserCode: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  submissions: state.admin.userSubmissions.submissions,
  code: state.admin.userSubmissions.viewCode,
  language: state.admin.userSubmissions.viewLanguage
});

export default connect(mapStateToProps, {
  fetchUserSubmissions,
  fetchUserCode
})(UserSubmissions);
