import { TextInput } from "keep-react";
import { Coffee, Envelope } from "phosphor-react";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
  };
  return (
    <>
      <div>
        <h1 className="text-3xl text-black hover:uppercase">Add a Coffee</h1>

        <form onSubmit={handleAddCoffee}>
          <div className="bg-[#F4F3F0] grid lg:grid-cols-3 gap-4 rounded p-4 m-4">
            <div className="">
              <p>Name: </p>
              <TextInput
                id="#id-9"
                name="name"
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
                placeholder="Forkan Hossen"
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
                placeholder="https://www.imageurl.com"
                color="gray"
                sizing="md"
                addon={<Envelope size={20} color="#5E718D" />}
                addonPosition="left"
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-2 p-4 m-4">
            <button className="btn btn-block">Add Coffee</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCoffee;
//changes notingh here
