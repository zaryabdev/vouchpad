import React from "react";

export default function Login(params) {
  return (
    <React.Fragment>
      <div className="container-fluid">
        {/* <div>
          <img src="https://d4.alternativeto.net/kVHYQt_DxZ9nWUJN4kAajau11vtsCy5k8EiawQNCnCU/rs:fit:1200:1200:0/g:ce:0:0/YWJzOi8vZGlzdC9zLzhjNzljYjExLWZkOTctZTMxMS04OWNlLTAwMjU5MGEwNWY1Zl8yX2Z1bGwuanBn.jpg" />
          <img
            class="top"
            src="https://d4.alternativeto.net/kVHYQt_DxZ9nWUJN4kAajau11vtsCy5k8EiawQNCnCU/rs:fit:1200:1200:0/g:ce:0:0/YWJzOi8vZGlzdC9zLzhjNzljYjExLWZkOTctZTMxMS04OWNlLTAwMjU5MGEwNWY1Zl8yX2Z1bGwuanBn.jpg"
          />
        </div> */}
        <div className="left-pane">
          <div className="floating-img"></div>
        </div>
        <div className="right-pane">
          <div className="floating-form">
            <Form />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function Form(params) {
  return (
    <React.Fragment>
      <div className="background-img">
        <center>
          <p class="h4">Sign in to your account</p>
        </center>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <center>
          <p>Forgot password</p>
        </center>
        <center>
          <div class="border">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked">
                I am human
              </label>
            </div>
            <div className="recaptcha-img"></div>
            <a href="">Privacy</a>
            <a href="">Terms</a>
          </div>
          <button type="button" class="btn btn-primary">
            Sign in
          </button>
        </center>
      </div>
    </React.Fragment>
  );
}
