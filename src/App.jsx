import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ServiceList from "./components/ServiceList";
import { useState } from "react";
import ServiceLists from "./components/ServiceLists";
import NewService from "./components/NewService";
import HealthName from "./components/HealthName";

function App() {
  const [serviceLists, setServiceLists] = useState([]);
  const [editService, setEditService] = useState(null);

  const handleNewItem = (itemName, itemDescription, itemPrice) => {
    if (editService) {
      const updatedServices = serviceLists.map((service) =>
        service.name === editService.name
          ? { name: itemName, description: itemDescription, price: itemPrice }
          : service
      );
      setServiceLists(updatedServices);
      setEditService(null);
    } else {
      const newServiceList = [
        ...serviceLists,
        { name: itemName, description: itemDescription, price: itemPrice },
      ];
      setServiceLists(newServiceList);
    }
  };

  const handleEditItem = (serviceName) => {
    const serviceToEdit = serviceLists.find(
      (service) => service.name === serviceName
    );
    setEditService(serviceToEdit);
  };
  const handleDeleteItem = (serviceListName) => {
    const newServiceList = serviceLists.filter(
      (item) => item.name !== serviceListName
    );
    setServiceLists(newServiceList);
    console.log(`item deleted :${serviceListName}`);
  };
  return (
    <>
      <center className="container-box">
        <HealthName />
        <NewService onNewItem={handleNewItem} editService={editService} />
        <ServiceLists
          serviceLists={serviceLists}
          onEditClick={handleEditItem}
          onDeleteClick={handleDeleteItem}
        ></ServiceLists>
      </center>
    </>
  );
}

export default App;
