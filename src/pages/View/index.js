import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/images/dashboard/arrow-left.svg";
import darkRed from "../../assets/images/dashboard/dark-red.png";
import green from "../../assets/images/dashboard/green.png";
import orrange from "../../assets/images/dashboard/orrange.png";
import parrot from "../../assets/images/dashboard/parrot.png";
import yellow from "../../assets/images/dashboard/yellow.png";
import red from "../../assets/images/dashboard/red.png";

export default function View({ record, handleShowViewPage }) {
  const navigate = useNavigate();

  // const [buttons] = useState([
  //   "loan",
  //   "message",
  //   "checklist",
  //   "student",
  //   "partner",
  // ]);

  const [selectedBtn, setSelectedBtn] = useState({
    loan: "true",
    message: "false",
    checklist: "false",
    student: "false",
    partner: "false",
  });

  function handleSelectedOption(name) {
    debugger;

    let keys = Object.keys(selectedBtn);
    let obj = {};

    keys.forEach((key) => {
      if (name === key) {
        obj[key] = "true";
      } else {
        obj[key] = "false";
      }
    });
    console.log(obj);
    setSelectedBtn(obj);
  }

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
        className="mx-2"
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
        className="mx-2"
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

    if (status == "Loan Approved") color = "green";
    else if (status == "Under Review") color = "yellow";
    else if (status == "Rejected") color = "red";

    return color;
  }
  return (
    <React.Fragment>
      <div className="container-fluid px-0">
        <div className="row  my-2 d-flex align-items-center ps-4">
          {/* <img
            className="mt-4 mb-3"
            style={{
              width: "25px",
              width: "25px",
            }}
            src={arrowLeft}
            alt=""
          /> */}
          <p
            style={{
              cursor: "pointer",
            }}
            onClick={() => handleShowViewPage(false)}
            className="text-muted ms-1 py-0 mb-0"
          >
            Back
          </p>
        </div>
        <div className="row ps-4 ">
          <div className="p-3 ps-2">
            <div className="">
              <h3 className="fw-bold text-dark"> Case ID {record.caseId}</h3>
            </div>
          </div>
        </div>
        <div className="row mb-2  ps-4">
          <div className="col-sm-3">
            <span className="fw-bold fs-6 text-dark">Student Name : </span>
            <span className="fs-6 text-dark">{record.studentName}</span>
          </div>
          <div className="col-sm-3">
            <span className="fw-bold fs-6 text-dark">Partner Name : </span>
            <span className="fs-6 text-dark">{record.partnerName}</span>
          </div>
          <div className="col-sm-3">
            <span className="fw-bold fs-6 text-dark">Credit Score : </span>
            <span className="fs-6 text-dark">
              {getColorByCreditScore(record.creditScore)} {record.creditScore}
            </span>
          </div>
          <div className="col-sm-3">
            <span className="fw-bold fs-6 text-dark">Status : </span>
            <span className={`fs-6 ${getColorByStatus(record.status)}`}>
              {record.status}
            </span>
          </div>
        </div>
        <div className="row mb-2  ps-4">
          <div className="col-sm-3">
            <span className="fw-bold fs-6 text-dark">Country : </span>
            <span className="fs-6 text-dark">{record.country}</span>
          </div>

          <div className="col-sm-3">
            <span className="fw-bold fs-6 text-dark">Partner Institute : </span>
            <span className="fs-6 text-dark">{record.partnerInstitute}</span>
          </div>
          <div className="col-sm-3">
            <span className="fw-bold fs-6 text-dark">Fair rating : </span>
            <span className="fs-6 text-dark">
              {getColorByRatings(record.fairRating)} {record.fairRating}
            </span>
          </div>
        </div>
        <div className="row mb-2  ps-4">
          <div className="col-sm-3">
            <span className="fw-bold fs-6 text-dark">City : </span>
            <span className="fs-6 text-dark">{record.city}</span>
          </div>
          <div className="col-sm-3">
            <span className="fw-bold fs-6 text-dark">State : </span>
            <span className="fs-6 text-dark">{record.city}</span>
          </div>
          <div className="col-sm-3">
            <button type="button" class="btn btn-sm btn-danger rounded-4">
              Un-Assign Partner
            </button>
          </div>
        </div>
        <div className="row mb-2 ps-4">
          <span className="float-left">
            <div className="d-flex flex-row justify-content-center mb-1">
              <button
                id="loan"
                value="true"
                type="button"
                onClick={() => handleSelectedOption("loan")}
                className={`btn btn-sm btn-left ${
                  selectedBtn.loan === "true" ? "btn-active " : "btn-inactive"
                }`}
              >
                <span className="text-light fw-bold">
                  <small>Loan Application</small>{" "}
                </span>
              </button>
              <button
                type="button"
                value="message"
                onClick={() => handleSelectedOption("message")}
                className={`btn btn-sm btn-mid ${
                  selectedBtn.message === "true"
                    ? "btn-active "
                    : "btn-inactive "
                }`}
              >
                <span className="text-light fw-bold">Message Board</span>
              </button>
              <button
                type="button"
                id="checklist"
                onClick={(e) => handleSelectedOption("checklist")}
                className={`btn btn-sm btn-right ${
                  selectedBtn.checklist === "true"
                    ? "btn-active "
                    : "btn-inactive "
                }`}
              >
                <span className="text-light fw-bold">Checklist</span>
              </button>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <button
                type="button"
                id="student"
                onClick={(e) => handleSelectedOption("student")}
                className={`btn btn-sm btn-left-2 ${
                  selectedBtn.student === "true"
                    ? "btn-active "
                    : "btn-inactive "
                }`}
              >
                <span className="text-light fw-bold">Student</span>
              </button>
              <button
                type="button"
                id="partner"
                onClick={(e) => handleSelectedOption("partner")}
                className={`btn btn-sm btn-right-2 ${
                  selectedBtn.partner === "true"
                    ? "btn-active "
                    : "btn-inactive "
                }`}
              >
                <span className="text-light fw-bold">Partner</span>
              </button>
            </div>
          </span>
        </div>
        <div className="row mb-2 ps-4">
          <div className="container-fluid">
            <div class="card card-shadow card-height">
              <div class="card-header card-bg text-center">
                Check Eglibility
              </div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p>A well-known quote, contained in a blockquote element.</p>
                  <footer class="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
