import ServiceList from "./ServiceList";

const ServiceLists = ({ serviceLists, onDeleteClick, onEditClick }) => {
  return (
    <div className="item-container">
      {serviceLists.map((item, index) => (
        <ServiceList
          key={index}
          serviceName={item.name}
          serviceDescription={item.description}
          servicePrice={item.price}
          onEditClick={() => onEditClick(item.name)}
          onDeleteClick={() => onDeleteClick(item.name)}
        />
      ))}
    </div>
  );
};

export default ServiceLists;
