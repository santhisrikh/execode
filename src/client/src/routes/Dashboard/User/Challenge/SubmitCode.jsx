import React from "react";
import AceEditor from "react-ace";

class SubmitChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testcases: [1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      score: 10,
      show: false,
      passed: false,
      code: `var a=1;\n var arr = [1,2,3,4,5,6]`,
      language: "Javascript"
    };
  }
  render() {
    let testwait = this.state.testcases.map(a => {
      return (
        <div className="col-xl-5 ">
          <div className="spinner-border text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    });

    let testpass = this.state.testcases.map(a => {
      console.log(a);
      if (a === 1) {
        return (
          <div className="row">
            <div>
              <img
                src="https://image.flaticon.com/icons/png/512/368/368633.png"
                className="col-xl-1"
                alt="flat icon"
              ></img>
            </div>
          </div>
        );
      } else {
        return (
          <div className="row">
            <div>
              <img
                src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-1/254000/43-512.png"
                className="col-xl-1"
                alt="social messaging"
              ></img>
            </div>
          </div>
        );
      }
    });

    let cd = this.state.code;
    return (
      <div className="container">
        <h6 className="text-left">
          Submitted a few seconds ago • Score: {this.state.score}{" "}
        </h6>

        {/* this Section is for the testcase   */}
        {this.state.show ? (
          <div className="row col-xl-12 justify-content-start mt-4">
            {testpass}
          </div>
        ) : (
          <div className="row col-xl-12 justify-content-start mt-4">
            {testwait}
          </div>
        )}
        <div>
          <h2 className="text-left mt-4">Submitted Code</h2>
          <p className="text-secondary border text-left">
            Language : {this.state.language}
          </p>
          <div>
            <AceEditor
              mode="python"
              className="col-xl-12 "
              theme="github"
              defaultValue={cd}
              readOnly="true"
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default SubmitChallenge;
