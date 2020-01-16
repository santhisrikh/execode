import React from "react";
import { Link } from "react-router-dom";
import competition from "../images/competition.svg";

const Home = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-6 py-3">
              <h1 className="h1">
                <i className="fas fa-file-code" />
                <span className="text-monospace"> Execode</span>
              </h1>
              <p className="lead">
                An open-source online coding platform which is complied with the
                best features of different platforms giving the admin control
                over the questions, visibility of test cases.
              </p>
              <div className="row mt-5">
                <div className="col-md-6">
                  <Link
                    className="btn btn-secondary btn-lg btn-block mb-3"
                    to="/register"
                  >
                    Register
                  </Link>
                </div>
                <div className="col-md-6">
                  <a
                    className="btn btn-outline-info btn-lg btn-block"
                    href="#howitwork"
                  >
                    How Execode works
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-right d-none d-md-block">
              <img className="img-fluid" src={competition} alt="competition" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="text-center py-3 mb-4">
          <h1>Available language </h1>
          <p>There are 4 different language on Execode for you to explore.</p>
        </div>
        <div className="text-center border-bottom">
          <ul className="list-inline">
            <li className="list-inline-item mr-4">
              <i className="fab fa-js-square fa-4x p-3 " />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java fa-4x  p-3" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python fa-4x   p-3" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-cuttlefish fa-4x  p-3" />
            </li>
          </ul>
        </div>
        <div id="howitwork" className="py-5 text-center col-md-6 offset-md-3">
          <h1>How Execode works</h1>
          <p>
            Learning through Execode is quite different to other programming
            websites
          </p>
          <div className="media mt-5">
            <div className="media-body">
              <i className="far fa-gem fa-3x" />
              <h5 className="mt-3">Choose a language to master</h5>
              Object oriented, functional, popular, emerging, or just plain
              obscure. With 4 different languages to explore, Execode has
              something for you!
            </div>
          </div>
          <div className="media mt-5">
            <div className="media-body">
              <i className="fas fa-laptop-code fa-3x" />
              <h5 className="mt-3">
                Complete a coding challenge on your computer
              </h5>
              All coding occurs on your machine in an environment with which you
              are familiar. Download the template, solve the problem and then
              upload your solution.
            </div>
          </div>
          <div className="media mt-5">
            <div className="media-body">
              <i className="fas fa-rocket fa-3x" />
              <h5 className="mt-3">
                Load your solution and review it with a mentor
              </h5>
              Discussing the code is one of the best ways to learn. Our friendly
              mentors will discuss your solutions online and introduce you to
              new ideas and techniques.
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid bg-dark text-center text-white">
        <div className="container-sm">
          <p className="lead">
            Sign up to Execode and get started on your first track now.
          </p>
          <Link className="btn btn-secondary" to="/register">
            Sign up for FREE
          </Link>
        </div>
      </div>
      <div className="container">
        <hr className="my-2" />
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="links">
              <p className="px-4">
                <span> Made with </span>
                <i className="fas fa-heart text-dark" />
                <span> and by </span>
                <span>
                  <i className="fas fa-mug-hot text-dark" />
                </span>
                <span> Masai Open Source</span>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 text-right ">
            <div>
              <a
                href="https://github.com/masai-school"
                rel="noreferrer"
                className="btn btn-link text-dark"
              >
                <i className="fab fa-github fa-2x" />
              </a>
              <a
                href="https://twitter.com/masaischool"
                rel="noreferrer"
                className="btn btn-link text-dark"
              >
                <i className="fab fa-twitter fa-2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
