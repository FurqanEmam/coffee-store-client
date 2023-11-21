import { TextInput } from "keep-react";
import { Coffee, Envelope } from "phosphor-react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // server connection and send data
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Coffee updated to the server",
            icon: "success",
          });
        }
      });
  };
  console.log(coffee);
  return (
    <div>
      <h1 className="text-3xl text-black hover:uppercase">Update Coffee</h1>

      <form onSubmit={handleUpdateCoffee}>
        <div className="bg-[#F4F3F0] grid lg:grid-cols-3 gap-4 rounded p-4 m-4">
          <div className="">
            <p>Name: </p>
            <TextInput
              id="#id-9"
              name="name"
              defaultValue={name}
              placeholder="Espresso"
              color="gray"
              sizing="md"
              addon={<Coffee size={20} color="#5E718D" />}
              addonPosition="left"
            />
          </div>

          <div>
            <p>Quantity: </p>
            <TextInput
              id="#id-9"
              name="quantity"
              defaultValue={quantity}
              placeholder="1000"
              color="gray"
              sizing="md"
              addon={<Envelope size={20} color="#5E718D" />}
              addonPosition="left"
            />
          </div>
          <div>
            <p>Supplier: </p>
            <TextInput
              id="#id-9"
              name="supplier"
              defaultValue={supplier}
              placeholder="BD kehwa ltd"
              color="gray"
              sizing="md"
              addon={<Envelope size={20} color="#5E718D" />}
              addonPosition="left"
            />
          </div>
          <div>
            <p>Taste: </p>
            <TextInput
              className="w-full"
              id="#id-9"
              name="taste"
              defaultValue={taste}
              placeholder="sweet"
              color="gray"
              sizing="md"
              addon={<Envelope size={20} color="#5E718D" />}
              addonPosition="left"
            />
          </div>
          <div>
            <p>Category: </p>
            <TextInput
              id="#id-9"
              name="category"
              defaultValue={category}
              placeholder="Dark Coffee"
              color="gray"
              sizing="md"
              addon={<Envelope size={20} color="#5E718D" />}
              addonPosition="left"
            />
          </div>
          <div>
            <p>Details: </p>
            <TextInput
              id="#id-9"
              name="details"
              defaultValue={details}
              placeholder="Best coffee in italy, taste sweet and good"
              color="gray"
              sizing="md"
              addon={<Envelope size={20} color="#5E718D" />}
              addonPosition="left"
            />
          </div>
          <div>
            <p>Photo Url: </p>
            <TextInput
              className="w-full"
              id="#id-9"
              name="photo"
              defaultValue={photo}
              placeholder="https://www.imageurl.com"
              color="gray"
              sizing="md"
              addon={<Envelope size={20} color="#5E718D" />}
              addonPosition="left"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-2 p-4 m-4">
          <button className="btn btn-block">Update Coffee</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
