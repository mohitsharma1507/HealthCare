import { FaUserDoctor } from "react-icons/fa6";

function HealthName() {
  return (
    <>
      <h1
        style={{
          fontWeight: "700",
          fontSize: "45px",
          margin: "10px",
          backgroundColor: "violet",
          color: "black",
          padding: "15px",
        }}
      >
        HealthCare
        <span
          style={{
            fontSize: "37px",
            position: "absolute",
            marginLeft: "6px",
          }}
        >
          <FaUserDoctor />
        </span>
      </h1>
    </>
  );
}

export default HealthName;
