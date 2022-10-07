import React, { useMemo, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import groupIcon from "../../assets/images/dashboard/Group_5366@2x.png";
import profilePic from "../../assets/images/dashboard/profile-pic.png";
import gearIcon from "../../assets/images/dashboard/#000000fe.png";
import darkRed from "../../assets/images/dashboard/dark-red.png";
import green from "../../assets/images/dashboard/green.png";
import orrange from "../../assets/images/dashboard/orrange.png";
import parrot from "../../assets/images/dashboard/parrot.png";
import yellow from "../../assets/images/dashboard/yellow.png";
import red from "../../assets/images/dashboard/red.png";

import getData from "../../utils/makeData";

export default function Dashboard(params) {
  const data = React.useMemo(() => getData(20), []);
  function getColorByCreditScore(score) {
    let color = darkRed;

    if (score > 800) color = green;
    else if (score > 700) color = orrange;
    else if (score > 600) color = orrange;
    else if (score > 500) color = parrot;
    else if (score > 400) color = red;
    else if (score <= 400) color = darkRed;

    return (
      <img
        src={color}
        style={{
          width: "20px",
          height: "20px",
        }}
        alt=""
      />
    );
  }
  function getColorByRatings(rating) {
    let color = darkRed;

    if (rating > 80) color = green;
    else if (rating > 70) color = orrange;
    else if (rating > 60) color = orrange;
    else if (rating > 50) color = parrot;
    else if (rating > 40) color = red;
    else if (rating <= 40) color = darkRed;

    return (
      <img
        src={color}
        style={{
          width: "20px",
          height: "20px",
        }}
        alt=""
      />
    );
  }

  function getColorByStatus(status) {
    let color = "";

    if (status == "Loan Approved") color = "text-success";
    else if (status == "Under Review") color = "text-warning";
    else if (status == "Rejected") color = "text-danger";

    return color;
  }
  return (
    <React.Fragment>
      <div id="dashboard" className="container-fluid px-0">
        <div className="row">
          <div className="col-sm-3">
            <div
              className="row nav-bg"
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
                <ul className="ps-5 navbar-nav">
                  <li className="nav-item">
                    <div className="d-flex flex-row align-items-end mb-3">
                      <img
                        src={groupIcon}
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                        alt=""
                      />
                      <Link className="nav-link active text-light">
                        Dashboard
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="d-flex flex-row align-items-end mb-3">
                      <img
                        src={groupIcon}
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                        alt=""
                      />
                      <Link className="nav-link active text-light">
                        Support Messages
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="row border-bottom">
              <div className="d-flex justify-content-end align-items-center">
                <div className="p-2">
                  <img
                    src={gearIcon}
                    style={{
                      width: "25px",
                      height: "25px",
                    }}
                    alt=""
                  />
                </div>
                <div className="p-2">Welcome back,</div>
                <div className="p-2 fw-semibold"> John</div>
                <div className="p-2">
                  <img
                    src={profilePic}
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row ps-4">
              <div className="p-4 d-flex justify-content-between">
                <div className="">
                  <h3 className="fw-bold"> All Cases</h3>
                </div>
                <div className="p-2">Search Bar</div>
              </div>
            </div>
            <div className="row ps-4">
              <p className="text-muted ms-1">
                Here are your stats for December 22, 2022
              </p>
            </div>
            <div className="row ps-4">
              <table className="table table-shadow">
                <thead className="table-header">
                  <tr>
                    <th scope="col-sm-1">
                      <p className="fw-light text-light">Case ID</p>
                    </th>
                    <th scope="col">
                      <p className="fw-light text-light">Student Name</p>
                    </th>
                    <th scope="col">
                      <p className="fw-light text-light">Date</p>
                    </th>
                    <th scope="col">
                      <p className="fw-light text-light">
                        Loan Request (USD $)
                      </p>
                    </th>
                    <th scope="col">
                      <p className="fw-light text-light">Credit Score &#169;</p>
                    </th>
                    <th scope="col">
                      <p className="fw-light text-light">Fair Rating &#169;</p>
                    </th>
                    <th scope="col">
                      <p className="fw-light text-light">Status</p>
                    </th>
                    <th scope="col">
                      <p className="fw-light text-light">Action</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{item.caseId}</th>
                        <td>{item.studentName}</td>
                        <td>August {item.day}, 2022</td>
                        <td>$ {item.loan}</td>
                        <td>
                          {getColorByCreditScore(item.creditScore)}
                          {item.creditScore}
                        </td>
                        <td>
                          {getColorByRatings(item.fairRating)}
                          {item.fairRating}
                        </td>
                        <td>
                          <p className={`${getColorByStatus(item.status)}`}>
                            {" "}
                            {item.status}{" "}
                          </p>
                        </td>
                        <td>View</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
