import { Button, TextInput } from "keep-react";
import { Coffee, Envelope } from "phosphor-react";
import React from "react";

const AddCoffee = () => {
  return (
    <div>
      <h1>Add a Coffee</h1>
      <p>
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form>
        <div className="bg-[#F4F3F0] grid grid-rows-4 grid-flow-col place-content-center gap-4 ">
          <div className="">
            <p>Name: </p>
            <TextInput
              id="#id-9"
              placeholder="Espresso"
              color="gray"
              sizing="md"
              addon={<Coffee size={20} color="#5E718D" />}
              addonPosition="left"
            />
          </div>
          <div>
            <p>Chef Name: </p>
            <TextInput
              id="#id-9"
              placeholder="example@gmail.com"
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
              placeholder="example@gmail.com"
              color="gray"
              sizing="md"
              addon={<Envelope size={20} color="#5E718D" />}
              addonPosition="left"
            />
          </div>
          <div>
            <p>Taste: </p>
            <TextInput
              id="#id-9"
              placeholder="example@gmail.com"
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
              placeholder="example@gmail.com"
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
              placeholder="example@gmail.com"
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
              placeholder="example@gmail.com"
              color="gray"
              sizing="md"
              addon={<Envelope size={20} color="#5E718D" />}
              addonPosition="left"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-2">
          <Button size="xl" color="success">
            Add a Coffee
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
