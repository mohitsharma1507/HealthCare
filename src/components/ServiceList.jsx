import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

function ServiceList({
  serviceName,
  serviceDescription,
  servicePrice,
  onEditClick,
  onDeleteClick,
}) {
  return (
    <>
      <table
        className="container"
        style={{
          tableLayout: "fixed",
          width: "100%",
          marginLeft: "9rem",
          marginTop: "2rem",
          border: "2px solid black",
        }}
      >
        <thead>
          <tr>
            <th style={{ width: "50px", border: "2px solid black" }}>
              Treatment
            </th>
            <th style={{ width: "50px", border: "2px solid black" }}>
              Description
            </th>
            <th style={{ width: "50px", border: "2px solid black" }}>Price</th>
            <th style={{ width: "50px", border: "2px solid black" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "50px", border: "2px solid black" }}>
              {serviceName}
            </td>
            <td style={{ width: "50px", border: "2px solid black" }}>
              {serviceDescription}
            </td>

            <td style={{ width: "50px", border: "2px solid black" }}>
              &#8377;{servicePrice}
            </td>
            <td>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => onEditClick(serviceName)}
                style={{ marginLeft: "4rem" }}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => onDeleteClick(serviceName)}
                style={{ marginLeft: "5rem" }}
              >
                <AiFillDelete />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ServiceList;
