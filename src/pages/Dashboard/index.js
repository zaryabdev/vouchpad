import React, { useEffect, useMemo, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import icon from "../../assets/images/dashboard/icon-one.svg";
import iconWhite from "../../assets/images/dashboard/icon-one-white.svg";
import profilePic from "../../assets/images/dashboard/profile-pic.png";
import gearIcon from "../../assets/images/dashboard/#000000fe.png";
import darkRed from "../../assets/images/dashboard/dark-red.png";
import green from "../../assets/images/dashboard/green.png";
import orrange from "../../assets/images/dashboard/orrange.png";
import parrot from "../../assets/images/dashboard/parrot.png";
import yellow from "../../assets/images/dashboard/yellow.png";
import red from "../../assets/images/dashboard/red.png";
import logo from "../../assets/images/dashboard/brand-logo.png";
import arrowDown from "../../assets/images/dashboard/arrow-down.png";

import getData from "../../utils/makeData";

import View from "../View";

function Dashboard(params) {
  const data = React.useMemo(() => getData(10), []);
  const navigate = useNavigate();

  const [showNavLinkItems, setShowNavItems] = useState(false);
  const [toggleView, setToggleView] = useState(false);
  const [width, setWidth] = useState("desktop");

  useEffect(() => {
    getCurrentWidthAndHeight();
  }, []);

  function handleToggleView(value) {
    setToggleView(value);
  }

  function getCurrentWidthAndHeight() {
    function checkWidth() {
      if (window.innerWidth > 576) {
        setWidth("desktop");
      } else if (window.innerWidth < 576) {
        setWidth("mobile");
      }
    }

    checkWidth();

    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }

  function openNav() {
    document.getElementById("mySidenav").style.display = "block";
    setTimeout(() => {
      document.getElementById("mySidenav").style.width = "100%";
    }, 10);
    // document.getElementById("main").style.marginLeft = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    setTimeout(() => {
      document.getElementById("mySidenav").style.display = "none";
    }, 300);

    // document.getElementById("main").style.marginLeft = "0";
  }

  // function toggleSurveyItems() {
  //   debugger;
  //   let value = mySurvey.current.style.display;
  //   if (value === "none" || value === "") {
  //     mySurvey.current.style.display = "display";
  //     newSurvey.current.style.display = "display";
  //   } else if (value === "display") {
  //     mySurvey.current.style.display = "hidden";
  //     newSurvey.current.style.display = "hidden";
  //   }
  // }

  return (
    <React.Fragment>
      <div id="dashboard" className="container-fluid px-0">
        <div className="row bg-dark">
          <div
            id="mySidenav"
            className={`${width === "desktop" ? "col-sm-2" : "sidenav"}`}
          >
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <img
                    className="mt-4 mb-3"
                    style={{
                      width: "130px",
                      height: "110px",
                    }}
                    src={logo}
                    alt=""
                  />
                </div>
                <button onClick={() => closeNav()}>Clsoe </button>
              </div>
              <div className="col-sm-12">
                <div className="row ms-4 my-2">
                  <div class="position-relative ps-4 py-3 color-white sidebar-item-bg">
                    Dashboard
                    <span class="position-absolute top-50 start-0 translate-middle">
                      <div className="icon-bg bg-light">
                        <img
                          src={icon}
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                          alt=""
                        />
                      </div>
                    </span>
                  </div>
                </div>
                <div className="row ms-4 my-2">
                  <div class="position-relative ps-4 py-3 color-white">
                    Support Messages
                    <span class="position-absolute top-50 start-0 translate-middle">
                      <div className="icon-bg ">
                        <img
                          src={icon}
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                          alt=""
                        />
                      </div>
                    </span>
                  </div>
                </div>
                <div className="row ms-4 mt-2">
                  <div
                    class={`position-relative ps-4 py-3 color-white ${
                      showNavLinkItems === true ? "sidebar-item-bg" : ""
                    }`}
                  >
                    <div class="d-flex align-items-center">
                      <div class="">Survey</div>
                      <div class="ms-auto">
                        <img
                          onClick={() => setShowNavItems(!showNavLinkItems)}
                          src={arrowDown}
                          className="flip-img"
                          style={{
                            width: "10px",
                            height: "10px",
                            cursor: "pointer",
                          }}
                          alt=""
                        />
                      </div>
                    </div>
                    <span class="position-absolute top-50 start-0 translate-middle">
                      <div
                        className={`icon-bg ${
                          showNavLinkItems === true ? "bg-light" : ""
                        }`}
                      >
                        <img
                          src={icon}
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                          alt=""
                        />
                      </div>
                    </span>
                  </div>
                </div>
                {showNavLinkItems === true && (
                  <>
                    <div className="row ms-5 my-0">
                      <div class="d-flex align-items-center sidebar-item-bg-2a">
                        <div class="p-2 pe-0 color-white">
                          <img
                            src={iconWhite}
                            style={{
                              width: "15px",
                              height: "15px",
                            }}
                            alt=""
                          />
                        </div>
                        <div class="p-2 color-white">My surveys</div>
                      </div>
                    </div>
                    <div className="row ms-5 my-0">
                      <div class="d-flex align-items-center sidebar-item-bg-2b">
                        <div class="p-2 pe-0 color-white">
                          <img
                            src={iconWhite}
                            style={{
                              width: "15px",
                              height: "15px",
                            }}
                            alt=""
                          />
                        </div>
                        <div class="p-2 pe-0 color-white">
                          Create new survey
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="row ms-4 mb-auto">
                  <div
                    onClick={() => {
                      setTimeout(() => navigate("/login"), 200);
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                    class="position-relative ps-4 py-3 color-white"
                  >
                    Log out
                    <span class="position-absolute top-50 start-0 translate-middle">
                      <div className="icon-bg">
                        <img
                          src={icon}
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                          alt=""
                        />
                      </div>
                    </span>
                  </div>
                </div>
                {/* <div className="row">
                  <div
                    class="d-flex align-items-start flex-column"
                    style={{ height: "80vh" }}
                  >
                    <div class="row bg-primary">
                      <div class="col-sm-12   sidebar-item-bg position-relative">
                        Dashboard
                        <span class="position-absolute top-50 start-0 translate-middle">
                          <div className="icon-bg bg-light">
                            <img
                              src={groupIcon}
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                              alt=""
                            />
                          </div>
                        </span>
                      </div>
                    </div>
                    <div class="">
                      <div
                        type="button"
                        class="btn btn-primary position-relative"
                      >
                        Support Messages{" "}
                        <span class="position-absolute top-50 start-0 translate-middle badge border border-light rounded-circle bg-danger p-2">
                          <span class="visually-hidden"></span>
                        </span>
                      </div>
                    </div>
                    <div class="mb-auto">
                      <div
                        type="button"
                        class="btn btn-primary position-relative"
                      >
                        <div class="d-flex align-items-center">
                          <div class="p-2">Flex item 1</div>
                          <div class="p-2">Flex item 2</div>
                        </div>
                        <span class="position-absolute top-50 start-0 translate-middle badge border border-light rounded-circle bg-danger p-2">
                          <span class="visually-hidden"></span>
                        </span>
                      </div>
                      <div
                        type="button"
                        class="btn btn-primary position-relative"
                      >
                        Logout
                        <span class="position-absolute top-50 start-0 translate-middle badge border border-light rounded-circle bg-danger p-2">
                          <span class="visually-hidden"></span>
                        </span>
                      </div>
                    </div>
                    <div class="">Log out</div>
                  </div>
                </div> */}
                {/* <ul className="ps-5 navbar-nav">
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
                </ul> */}
              </div>
            </div>
          </div>
          <div className="col-sm-10 bg-light">
            <Header openNav={openNav} />
            {toggleView === false && (
              <React.Fragment>
                <div className="row ps-4 ">
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
                <div className="row ps-4 me-2">
                  <TableTwo
                    data={data}
                    handleToggleView={handleToggleView}
                    width={width}
                  />
                  {/* <TableOne data={data} handleToggleView={handleToggleView} /> */}
                </div>
                <div className="row mt-4">
                  <div className="d-flex justify-content-end align-items-center">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <a className="page-link">Previous</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </React.Fragment>
            )}
            {toggleView === true && <View />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function TableTwo({ data, handleToggleView, width }) {
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

    if (status == "Loan Approved") color = "text-success";
    else if (status == "Under Review") color = "text-warning";
    else if (status == "Rejected") color = "text-danger";

    return color;
  }
  return (
    <div id="main-app" className="scroll-me px-0 table-shadow">
      <Table className="table">
        <Thead className="table-header sticky-top">
          <Tr>
            <Th scope="col-sm-1">
              <p
                className={`fw-light ${
                  width === "mobile" ? "text-light" : "text-dark"
                }`}
              >
                Case ID
              </p>
            </Th>
            <Th scope="col">
              <p
                className={`fw-light ${
                  width === "mobile" ? "text-light" : "text-dark"
                }`}
              >
                Student Name
              </p>
            </Th>
            <Th scope="col">
              <p
                className={`fw-light ${
                  width === "mobile" ? "text-light" : "text-dark"
                }`}
              >
                Date
              </p>
            </Th>
            <Th scope="col">
              <p
                className={`fw-light ${
                  width === "mobile" ? "text-light" : "text-dark"
                }`}
              >
                Loan Request (USD $)
              </p>
            </Th>
            <Th scope="col">
              <p
                className={`fw-light ${
                  width === "mobile" ? "text-light" : "text-dark"
                }`}
              >
                Credit Score &#169;
              </p>
            </Th>
            <Th scope="col">
              <p
                className={`fw-light ${
                  width === "mobile" ? "text-light" : "text-dark"
                }`}
              >
                Fair Rating &#169;
              </p>
            </Th>
            <Th scope="col">
              <p
                className={`fw-light ${
                  width === "mobile" ? "text-light" : "text-dark"
                }`}
              >
                Status
              </p>
            </Th>
            <Th scope="col">
              <p
                className={`fw-light ${
                  width === "mobile" ? "text-light" : "text-dark"
                }`}
              >
                Action
              </p>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => {
            return (
              <Tr>
                <Td>{item.caseId}</Td>
                <Td>{item.studentName}</Td>
                <Td>August {item.day}, 2022</Td>
                <Td>$ {item.loan}</Td>
                <Td>
                  {getColorByCreditScore(item.creditScore)}
                  {item.creditScore}
                </Td>
                <Td>
                  {getColorByRatings(item.fairRating)}
                  {item.fairRating}
                </Td>
                <Td>
                  <p className={`${getColorByStatus(item.status)}`}>
                    {" "}
                    {item.status}{" "}
                  </p>
                </Td>
                <Td>
                  <button
                    onClick={() => {
                      setTimeout(() => {
                        handleToggleView(true);
                      }, 200);
                    }}
                    className="btn btn-sm btn-primary rounded-5 px-3 table-shadow"
                  >
                    View
                  </button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
}

function TableOne({ data, handleToggleView }) {
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

    if (status == "Loan Approved") color = "text-success";
    else if (status == "Under Review") color = "text-warning";
    else if (status == "Rejected") color = "text-danger";

    return color;
  }
  return (
    <div id="main-app" className="scroll-me px-0 table-shadow">
      <table className="table ">
        <thead className="table-header sticky-top">
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
              <p className="fw-light text-light">Loan Request (USD $)</p>
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
                <td>
                  <button
                    onClick={() => {
                      setTimeout(() => {
                        handleToggleView(true);
                      }, 200);
                    }}
                    className="btn btn-sm btn-primary rounded-5 px-3 table-shadow"
                  >
                    View
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Header({ openNav }) {
  return (
    <div className="row border-bottom">
      <div className="d-flex justify-content-end align-items-center">
        <div onClick={() => openNav()} className="p-2">
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
  );
}

export { Header, Dashboard };
