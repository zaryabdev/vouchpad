import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import groupIcon from "../../assets/images/dashboard/Group_5366@2x.png";

export default function Dashboard(params) {
  return (
    <React.Fragment>
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-sm-3">
            <div
              className="row bg-dark"
              style={{
                height: "100vh",
              }}
            >
              <div className="col-sm-12">
                <img
                  style={{
                    width: "110px",
                    height: "110px",
                  }}
                  src=""
                  className="border rounded my-3"
                  alt=""
                />
                <ul class="ps-5 navbar-nav">
                  <li class="nav-item">
                    <div class="d-flex flex-row align-items-end mb-3">
                      <img
                        src={groupIcon}
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                        alt=""
                      />
                      <Link class="nav-link active text-light">Dashboard</Link>
                    </div>
                  </li>
                  <li class="nav-item">
                    <div class="d-flex flex-row align-items-end mb-3">
                      <img
                        src={groupIcon}
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                        alt=""
                      />
                      <Link class="nav-link active text-light">
                        Support Messages
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-9"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
