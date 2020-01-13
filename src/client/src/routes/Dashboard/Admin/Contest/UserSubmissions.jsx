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

// import Axios from "../../../../utils/axiosInterceptor"
class UserSubmissions extends Component {
  componentDidMount() {
    const { fetchUserSubmissions: fetchSubmissions } = this.props;
    fetchSubmissions();
  }

  viewUserCode = id => {
    const { fetchUserCode: fetchCode } = this.props;
    fetchCode(id);
  };

  render() {
    const { submissions, code, language } = this.props;
    return (
      <>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-lg-6">
            <table className="table table-striped text-center">
              <thead className="thead-dark">
                <tr className="text-white">
                  <th scope="col">Challenge Name</th>
                  <th scope="col">Score</th>
                  <th scope="col">Rank</th>
                  <th scope="col">Code</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map(ele => {
                  return (
                    <tr>
                      <td>{ele.userName}</td>
                      <td>{`${ele.score}/${ele.totalScore}`}</td>
                      <td>{ele.rank}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() => this.viewUserCode(ele.id)}
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
