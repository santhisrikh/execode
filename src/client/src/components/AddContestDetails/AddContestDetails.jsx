import React, { Component } from "react";

class AddContestDetails extends Component {
  render() {
    return (
      <div className="mt-3">
        <div className="form-group row">
          <label htmlFor="contest-name" className="col-sm-2 col-form-label">
            Contest Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="contest-name"
              name="contest_name"
              value={this.props.contest_name}
              onChange={this.props.handleDetailsChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Start-Date" className="col-sm-2 col-form-label">
            Start Date
          </label>
          <div className="col-sm-4">
            <input
              type="date"
              className="form-control"
              id="Start-Date"
              placeholder="Start-Date"
              name="start_date"
              value={this.props.start_date}
              onChange={this.props.handleDetailsChange}
            />
          </div>
          <label htmlFor="Start-Time" className="col-sm-2 col-form-label">
            Start Time
          </label>
          <div className="col-sm-4">
            <input
              type="time"
              className="form-control"
              id="Start-Time"
              placeholder="Start-Time"
              name="start_time"
              value={this.props.start_time}
              onChange={this.props.handleDetailsChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="End-Date" className="col-sm-2 col-form-label">
            Start Date
          </label>
          <div className="col-sm-4">
            <input
              type="date"
              className="form-control"
              id="End-Date"
              placeholder="End-Date"
              name="end_date"
              value={this.props.end_date}
              onChange={this.props.handleDetailsChange}
            />
          </div>
          <label htmlFor="End-Time" className="col-sm-2 col-form-label">
            End Time
          </label>
          <div className="col-sm-4">
            <input
              type="time"
              className="form-control"
              id="End-Time"
              placeholder="End-Time"
              name="end_time"
              value={this.props.end_time}
              onChange={this.props.handleDetailsChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="" className="col-sm-3 col-form-label">
            Landing Page Description
          </label>
          <textarea
            className="form-control"
            aria-label="With textarea"
            name="details"
            value={this.props.details}
            onChange={this.props.handleDetailsChange}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default AddContestDetails;
