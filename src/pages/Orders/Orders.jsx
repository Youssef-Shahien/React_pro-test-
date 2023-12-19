import React from "react";
import style from "./Orders.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown ,faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function Orders() {
  const arrowFont = <FontAwesomeIcon icon={faChevronDown} />;
  const checkFont = <FontAwesomeIcon icon={faSquareCheck} />

  return (
    <div>
      <h3>My Orders</h3>
      {/* Start Search Bar*/}
      <div className="d-flex align-items-center">
        <input
          className="p-1 ps-3 w-100  border-2 border-dark-subtle pb-2 me-1 rounded"
          type="text"
          placeholder="Search.."
        />
        <button className="btn button">Search</button>
      </div>
      {/* End Search Bar*/}
      {/* Start Table Titles */}
      <div className={`${style.table_titles} mt-4`}>
        <ul>
          <li className={`${style.active}`}>
            All Orders <span className={`${style.active}`}>30</span>
          </li>
          <li>
            Complete <span>30</span>
          </li>
          <li>
            New Order <span>30</span>
          </li>
          <li>
            Rejected <span>30</span>
          </li>
        </ul>
      </div>
      {/* End Table Titles*/}
      {/* Start Showing Result */}
      <div
        className={`${style.showing_result} mt-4 container d-flex justify-content-between align-items-center`}
      >
        <p>Showing result 101-120 Result</p>
        <p>
          item per page <span>10 {arrowFont}</span>
        </p>
      </div>
      {/* End Showing Result */}
      {/* Start Table */}
      <table class="table table-hover text-center mt-3">
        <thead>
          <tr className="text-secondary">
            <th scope="col">{checkFont}</th>
            <th scope="col">ID Order</th>
            <th scope="col">Product</th>
            <th scope="col">Customer</th>
            <th scope="col">Status</th>
            <th scope="col">Created Date</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th className="text-secondary" scope="row">
              <input
                className={style.my_check}
                type="checkbox"

              />
            </th>
            <td>990-123</td>
            <td className="fw-bold">Tv 14 Inche</td>
            <td>Youssef Shahien</td>
            <td>
              <span className={`${style.complete}`}>Complete</span>
            </td>
            <td>
              March 21,2020
              <br />
              00:28
            </td>
            <td className="fw-bold">19.0$</td>
          </tr>
          <tr>
            <th className="text-secondary" scope="row">
            <input
            className={style.my_check}
            type="checkbox"

          />
            </th>
            <td>990-123</td>
            <td className="fw-bold">Tv 14 Inche</td>
            <td>Youssef Shahien</td>
            <td>
              <span className={`${style.new_order}`}>New Order</span>
            </td>
            <td>
              March 21,2020
              <br />
              00:28
            </td>
            <td className="fw-bold">19.0$</td>
          </tr>
          <tr>
            <th className="text-secondary" scope="row">
            <input
            className={style.my_check}
            type="checkbox"

          />
            </th>
            <td>990-123</td>
            <td className="fw-bold">Tv 14 Inche</td>
            <td>Youssef Shahien</td>
            <td>
              <span className={`${style.rejected}`}>Rejected</span>
            </td>
            <td>
              March 21,2020
              <br />
              00:28
            </td>
            <td className="fw-bold">19.0$</td>
          </tr>
        </tbody>
      </table>
      {/* End Table */}
    </div>
  );
}

export default Orders;
