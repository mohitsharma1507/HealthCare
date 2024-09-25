import { useState, useEffect } from "react";
import { BiMessageAdd } from "react-icons/bi";

function NewService({ onNewItem, editService }) {
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editService) {
      setServiceName(editService.name);
      setServiceDescription(editService.description);
      setServicePrice(editService.price);
    }
  }, [editService]);

  const handleNameChange = (event) => {
    setServiceName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setServiceDescription(event.target.value);
  };
  const handlePriceChange = (event) => {
    setServicePrice(event.target.value);
  };

  const handleAddButtonClicked = () => {
    // Validation to ensure all fields are filled
    if (!serviceName || !serviceDescription || !servicePrice) {
      setError("All fields are required!");
      return;
    }
    setError("");
    onNewItem(serviceName, serviceDescription, servicePrice);
    setServiceName("");
    setServiceDescription("");
    setServicePrice("");
  };
  return (
    <div
      className="container text-center"
      style={{ marginTop: "3rem", marginLeft: "10rem" }}
    >
      <div className="row">
        <div className="col-3">
          <input
            type="text"
            placeholder="Enter Treatment Name here"
            value={serviceName}
            onChange={handleNameChange}
            style={{ border: "2px solid black", width: "42vh" }}
          />
        </div>
        <div className="col-3">
          <input
            type="text"
            placeholder="Enter Description here"
            value={serviceDescription}
            onChange={handleDescriptionChange}
            style={{ border: "2px solid black", width: "62vh" }}
          />
        </div>

        <div className="col-3">
          <input
            type="Number"
            placeholder="Enter Charges"
            value={servicePrice}
            onChange={handlePriceChange}
            style={{
              border: "2px solid black",
              width: "42vh",
              marginLeft: "10rem",
            }}
          />
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-success "
            style={{ marginLeft: "7.5em", marginBottom: "9px" }}
            onClick={handleAddButtonClicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <h1>{error}</h1>
        </div>
      )}
    </div>
  );
}
export default NewService;
