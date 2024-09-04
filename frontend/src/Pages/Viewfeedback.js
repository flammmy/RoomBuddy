import { useState } from "react";
import Adminheader from "../Common/Adminheader";
import { useEffect } from "react";
import "./Viewfeedback.css";
import Sidebar from "../Common/Sidebar";

const headerText = "Feedback"; // Set the desired header text

const Viewfeedback = () => {
  let [data, setData] = useState([]);
  let feedbackdata = async () => {
    let result = await fetch(`http://localhost:4500/viewfeedback`);
    result = await result.json();
    setData(result);
    console.log(result);
  };
  useEffect(() => {
    feedbackdata();
  }, []);

  let delfeedback = async (id) => {
    let result = await fetch(`http://localhost:4500/deletefeedback/${id}`, {
      method: "delete",
    });
    result = result.json();
    if (result) {
      feedbackdata();
    }
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ padding: "2rem" }}>
          <div className="main-heading">
            <h2>Feedback</h2>
          </div>
          <div className="row m-auto justify-content-center viewfeedback-base">
            <div className="col-md-10 viewfeedback-main">
              <table className="table table-bordered">
                <tr align="center">
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Feedback</th>
                  <th>Action</th>
                </tr>
                {data.map((item, index) => (
                  <tr align="center">
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>{item.feedback}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => delfeedback(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Viewfeedback;
