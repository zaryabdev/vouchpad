import React from "react";
import Lottie from "react-lottie";

import mainBackgourndSvg from "../../assets/images/login/Rectangle_3305.svg";
import formBackgroundSvg from "../../assets/images/login/Rectangle_3303.svg";
import rechaptcha from "../../assets/images/login/g847.svg";
import animationData from "../../assets/animation/login/108277.json";

export default function Login() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderer: "svg",
  };
  return (
    <React.Fragment>
      <div id="login" className="container-fluid">
        <div
          className="row"
          style={{
            backgroundImage: `url(${mainBackgourndSvg})`,
            width: "100vw",
            height: "100vh",
          }}
        >
          <div className="col-sm-6">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                height: "100vh",
              }}
            >
              <Lottie
                isClickToPauseDisabled
                options={defaultOptions}
                height={350}
                width={350}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundImage: `url(${formBackgroundSvg})`,
                height: "100vh",
              }}
            >
              <div className="glass-background">
                <div>
                  <center>
                    <p className="h5 text-light mb-3">
                      Sign in to your account
                    </p>
                  </center>
                  <div className="mb-3">
                    <p className="mb-0 text-light">
                      <small>Email address</small>
                    </p>
                    <input
                      type="email"
                      className="form-control rounded-3 "
                      style={{
                        background: "transparent",
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <p className="mb-0 text-light">
                      <small>Password</small>
                    </p>
                    <input
                      type="password"
                      className="form-control rounded-3 "
                      style={{
                        background: "transparent",
                      }}
                    />
                  </div>
                  <center>
                    <p className="text-light">
                      <small> Forgot password?</small>
                    </p>
                  </center>
                  <div className="row px-2">
                    <center>
                      <div className="border rounded-3 ">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="m-2">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              <p className="m-0  text-light">I am human</p>
                            </div>
                          </div>
                          <div className="div">
                            <div className="m-2">
                              <div
                                style={{
                                  backgroundImage: `url(${rechaptcha})`,
                                }}
                              >
                                <div
                                  style={{
                                    width: 56,
                                    height: 37,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row px-2">
                        <button
                          type="button"
                          className="btn btn-primary rounded-4 mt-3"
                        >
                          Sign in
                        </button>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
