import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/images/dashboard/arrow-left.svg";
import { BsArrowLeft } from "react-icons/bs";
import darkRed from "../../assets/images/dashboard/dark-red.png";
import green from "../../assets/images/dashboard/green.png";
import orrange from "../../assets/images/dashboard/orrange.png";
import parrot from "../../assets/images/dashboard/parrot.png";
import yellow from "../../assets/images/dashboard/yellow.png";
import red from "../../assets/images/dashboard/red.png";

export default function View({ record, handleShowViewPage }) {
  const [selectedOption, setSelectedOption] = useState({
    loan: "true",
    message: "false",
    checklist: "false",
  });

  const [selectedSubOption, setSelectedSubOption] = useState({
    student: "true",
    partner: "false",
  });

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--status-color",
      getColorByStatus(record.status)
    );
  }, []);

  const statusArr = ["Loan Approved", "Under Review", "Rejected"];

  function handleSelectedOption(name) {
    let keys = Object.keys(selectedOption);
    let obj = {};

    keys.forEach((key) => {
      if (name === key) {
        obj[key] = "true";
      } else {
        obj[key] = "false";
      }
    });
    setSelectedOption(obj);
  }

  function handleSelectedSubOption(name) {
    let keys = Object.keys(selectedSubOption);
    let obj = {};

    keys.forEach((key) => {
      if (name === key) {
        obj[key] = "true";
      } else {
        obj[key] = "false";
      }
    });
    setSelectedSubOption(obj);
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
      <div className="container-fluid px-3">
        <div className="row">
          <div className="d-flex flex-row align-items-center py-2">
            <BsArrowLeft className="text-muted me-2" />
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => handleShowViewPage(false)}
              className="text-muted"
            >
              Back
            </span>
          </div>
        </div>
        <div className="row my-2">
          <h3 className="fw-bold text-dark"> Case ID {record.caseId}</h3>
        </div>
        <div className="row mb-2 ">
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
            <span class="dropdown">
              <button
                class="btn btn-transparent dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className={`fs-6  ${getColorByStatus(record.status)}`}>
                  {record.status}
                </span>
              </button>
              <ul class="dropdown-menu dropdown-shadow rounded-4">
                {statusArr.map((status) => {
                  return (
                    <li>
                      <a class="dropdown-item" href="#">
                        <span className={`fs-6 ${getColorByStatus(status)}`}>
                          {status}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </span>
          </div>
        </div>
        <div className="row mb-2 ">
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
        <div className="row mb-2 ">
          <div className="col-sm-3">
            <span className="fw-bold fs-6 text-dark">City : </span>
            <span className="fs-6 text-dark">{record.city}</span>
          </div>
          <div className="col-sm-3">
            <span className="fw-bold fs-6 text-dark">State : </span>
            <span className="fs-6 text-dark">{record.city}</span>
          </div>
          <div className="col-sm-3">
            <button
              type="button"
              class="btn btn-sm btn-danger rounded-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Un-Assign Partner
            </button>
          </div>
        </div>
        <Tabs
          selectedOption={selectedOption}
          selectedSubOption={selectedSubOption}
          handleSelectedOption={handleSelectedOption}
          handleSelectedSubOption={handleSelectedSubOption}
        />
        <div className="row mb-2">
          <div className="container-fluid">
            <div class="card card-shadow card-height">
              <div class="card-header card-bg text-center">
                Check Eglibility
              </div>
              <div class="card-body">
                <pre>
                  <code className="text-dark">
                    {JSON.stringify(selectedOption, null, 2)}
                  </code>
                </pre>
                <pre>
                  <code className="text-dark">
                    {JSON.stringify(selectedSubOption, null, 2)}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm modal-dialog-centered">
          <div class="modal-content modal-bg">
            <div class="modal-body ">
              <div className="container">
                <div className="row py-3">
                  <button type="button" class="btn  btn-primary rounded-5">
                    Are you sure
                  </button>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="row px-3">
                      <button type="button" class="btn btn-danger rounded-5">
                        Yes
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row px-3">
                      <button type="button" class="btn btn-light  rounded-5">
                        No
                      </button>
                    </div>
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

function Tabs({
  selectedOption,
  handleSelectedOption,
  selectedSubOption,
  handleSelectedSubOption,
}) {
  return (
    <div className="row mb-2">
      <span className="float-left">
        <div className="d-flex flex-row justify-content-start mb-1">
          <span>
            <button
              id="loan"
              value="true"
              type="button"
              onClick={() => handleSelectedOption("loan")}
              className={`btn btn-sm btn-left ${
                selectedOption.loan === "true" ? "btn-active " : "btn-inactive"
              }`}
            >
              <span className="text-light fw-bold">
                <small>Loan Application</small>{" "}
              </span>
            </button>
          </span>
          <span>
            <div class="d-flex flex-column">
              <span>
                <button
                  type="button"
                  value="message"
                  onClick={() => handleSelectedOption("message")}
                  className={`w-100 btn btn-sm btn-mid ${
                    selectedOption.message === "true"
                      ? "btn-active "
                      : "btn-inactive "
                  }`}
                >
                  <span className="text-light fw-bold">Message Board</span>
                </button>
              </span>
              <span
                style={{
                  visibility:
                    selectedOption.message === "true" ? "visible" : "hidden",
                }}
              >
                <div
                  style={{
                    marginTop: 2,
                  }}
                  className="d-flex flex-row justify-content-center"
                >
                  <button
                    type="button"
                    id="student"
                    onClick={(e) => handleSelectedSubOption("student")}
                    className={`btn btn-sm btn-hover-dark btn-left-2 ${
                      selectedSubOption.student === "true"
                        ? "btn-active-light "
                        : "btn-active "
                    }`}
                  >
                    <span className="text-light fw-bold">Student</span>
                  </button>
                  <button
                    type="button"
                    id="partner"
                    onClick={(e) => handleSelectedSubOption("partner")}
                    className={`btn btn-sm btn-hover-dark btn-right-2 ${
                      selectedSubOption.partner === "true"
                        ? "btn-active-light "
                        : "btn-active "
                    }`}
                  >
                    <span className="text-light fw-bold">Partner</span>
                  </button>
                </div>
              </span>
            </div>
          </span>
          <span>
            <button
              type="button"
              id="checklist"
              onClick={(e) => handleSelectedOption("checklist")}
              className={`btn btn-sm btn-right ${
                selectedOption.checklist === "true"
                  ? "btn-active "
                  : "btn-inactive "
              }`}
            >
              <span className="text-light fw-bold">Checklist</span>
            </button>
          </span>
        </div>
      </span>
    </div>
  );
}
