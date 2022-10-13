import React, { useEffect, useMemo, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { BsSearch } from "react-icons/bs";

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
import listIcon from "../../assets/images/dashboard/list-icon.svg";
import xIcon from "../../assets/images/dashboard/x-icon.svg";
import arrowDown from "../../assets/images/dashboard/chevron-down.svg";
import arrowUp from "../../assets/images/dashboard/chevron-up.svg";
import searchIcon from "../../assets/images/dashboard/search.svg";

import getData from "../../utils/makeData";

import View from "../View";

function Dashboard(params) {
  const data = React.useMemo(() => getData(10), []);
  const [selectedRecord, setSelectedRecord] = useState({});

  const [showViewPage, setShowViewPage] = useState(false);
  const [width, setWidth] = useState("desktop");

  useEffect(() => {
    getCurrentWidthAndHeight();
  }, []);

  function handleShowViewPage(value) {
    setShowViewPage(value);
  }

  function handleSelectedRecord(record) {
    setSelectedRecord(record);
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

  return (
    <React.Fragment>
      <div
        id="dashboard"
        style={{
          height: "100vh",
        }}
        className=" container-fluid px-0"
      >
        <div className="row nav-bg">
          {width === "desktop" && (
            <div id="navbar-desktop" className="col-sm-2">
              <div className="row">
                <BrandLogo width={width} />
                <NavLinks />
              </div>
            </div>
          )}
          {width === "mobile" && (
            <div
              class="offcanvas offcanvas-start nav-bg px-0"
              tabindex="-1"
              id="offcanvasWithBackdrop"
              aria-labelledby="offcanvasWithBackdropLabel"
            >
              <div class="offcanvas-body ">
                <div className="row">
                  <BrandLogo width={width} />
                  <NavLinks />
                </div>
              </div>
            </div>
          )}
          <div
            className={` ${
              width === "desktop" ? "col-sm-10 " : "col-sm-12 "
            }  bg-white`}
          >
            <Header width={width} />

            {showViewPage === false && (
              <React.Fragment>
                <div className="container-fluid px-3">
                  <div className="row">
                    <div className="my-2 d-flex flex-row justify-content-between align-items-center">
                      <span>
                        <h3 className="fw-bold text-dark mb-0"> All Cases</h3>
                      </span>
                      <span className="p-2">
                        <img src={searchIcon} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <p className="text-muted ms-1">
                      Here are your stats for December 22, 2022
                    </p>
                  </div>
                  <div className="row px-1">
                    <TableView
                      data={data}
                      handleShowViewPage={handleShowViewPage}
                      width={width}
                      onSelect={handleSelectedRecord}
                    />
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
                </div>
              </React.Fragment>
            )}
            {showViewPage === true && (
              <View
                record={selectedRecord}
                handleShowViewPage={handleShowViewPage}
              />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function BrandLogo({ width }) {
  return (
    <div className="col-sm-12">
      <div className="d-flex position-relative justify-content-center">
        {width === "mobile" && (
          <div class="position-absolute top-0 end-0">
            <img
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              className="ms-auto mt-4 mb-3"
              style={{
                width: "25px",
                height: "25px",
              }}
              src={xIcon}
              alt=""
            />
          </div>
        )}
        <img
          className="mt-4 mb-3"
          style={{
            width: "100px",
            height: "100px",
          }}
          src={logo}
          alt=""
        />
      </div>
    </div>
  );
}

function NavLinks() {
  const [showNavLinkItems, setShowNavItems] = useState(false);
  const navigate = useNavigate();
  return (
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
                src={showNavLinkItems === true ? arrowUp : arrowDown}
                className="flip-img"
                style={{
                  width: "20px",
                  height: "20px",
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
              <div class="p-2 pe-0 color-white">Create new survey</div>
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
    </div>
  );
}

function TableView({ data, handleShowViewPage, width, onSelect }) {
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
        className="me-2"
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
        className="me-2"
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
      {width === "mobile" && (
        <div
          style={{
            height: "35px",
            backgroundColor: "#037ae0",
            borderRadius: "8px 8px 0px 0px",
          }}
          className="col-sm-12"
        ></div>
      )}
      <div id="main-app" className="scroll-me px-0 table-shadow">
        <Table className="table">
          <Thead className="table-header sticky-top">
            <Tr className="tr-border">
              <Th scope="col">
                <p>Case ID</p>
              </Th>
              <Th scope="col">
                <p>Student Name</p>
              </Th>
              <Th scope="col">
                <p>Date</p>
              </Th>
              <Th scope="col">
                <p>Loan Request (USD $)</p>
              </Th>
              <Th scope="col">
                <p>Credit Score &#169;</p>
              </Th>
              <Th scope="col">
                <p>Fair Rating &#169;</p>
              </Th>
              <Th scope="col">
                <p>Status</p>
              </Th>
              <Th scope="col">
                <p>Action</p>
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
                        onSelect(item);
                        setTimeout(() => {
                          handleShowViewPage(true);
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
    </React.Fragment>
  );
}

function Header({ width }) {
  return (
    <div className="row border-bottom">
      <div className="d-flex justify-content-end align-items-center">
        {width === "mobile" && (
          <div
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBackdrop"
            aria-controls="offcanvasWithBackdrop"
            className="me-auto px-3 py-2"
          >
            <img
              src={listIcon}
              style={{
                width: "25px",
                height: "25px",
              }}
              alt=""
            />
          </div>
        )}

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
        <div className="p-2 text-dark">Welcome back,</div>
        <div className="p-2 text-dark fw-semibold"> John</div>
        <div className="p-2 text-dark">
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
