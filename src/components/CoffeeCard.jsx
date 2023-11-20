const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  console.log(coffee);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} />
      </figure>
      <div className="flex justify-between content-center w-full pr-4">
        <div className="ps-4 pt-4">
          <h2 className="card-title">{name}</h2>
          <p>Quantity: {quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
            <button className="btn join-item">Edit</button>
            <button className="btn join-item">X</button>
          </div>
        </div>
        {/* {console.log(coffee)} */}
      </div>
    </div>
  );
};

export default CoffeeCard;
