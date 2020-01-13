import React from "react";

const language=["Java", "C++", "Python", "Javascript(Node.js)"]

const challengeSettings = () => {
  return (
    <div className="container p-1">
        {/* inner navbar */}
        <div className="row p-2 mx-3 ">
           <p>CreateChallange > Settings</p> 
        </div>
       {/* content  */}
      <div className="p-2">
        <div className="d-flex justify-content-end p-1">
            <button className="btn btn-success">Create Challange</button>
        </div>
        <div className="border border-dark p-4">
          <div className="row">
            <button className="btn btn-success p-2 col-2 mx-1">Details</button>
            <button className="btn btn-success p-2 col-2 mx-1">Test Cases</button>
            <button className="btn btn-success p-2 col-2 mx-1">Sign Ups</button>
          </div>
          <h2 className="mb-5 mt-3">Settings</h2>
          <div className="row">
            <div className="col-md-3 col-12">
                <select name="language" className="custom-select">
                    <option selected disabled>Language</option>
                    {language.map(lang=>{
                    return <option value={lang}>{lang}</option>
                    })}
                </select>
            </div>
            <div className="col-md-3 col-12 my-1">
              <button className="btn btn-secondary col-md-12">Time limit</button>
            </div>
            <div className="col-md-3 col-12 my-1">
              <button className="btn btn-secondary col-md-12">Memory limit</button>
            </div>
            <div className="col-md-3 col-12 my-1">
              <button className="btn btn-success col-md-12">Add</button>
            </div>
            <h5 className="my-3 mx-3">Timelimit_Memory Table</h5>
            <div className="col-md-12">
              {/* table here */}
              <div className="border border-dark p-5"></div>  
            </div>
          </div>
       </div>
      </div>
      
    </div>
  );
};

export default challengeSettings;
