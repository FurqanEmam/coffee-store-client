// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  // const [count, setCount] = useState(0);
  const coffees = useLoaderData();

  return (
    <div className="m-4">
      <h1 className="text-6xl text-center text-purple-600">
        Coffee Menu: {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4 m-6 p-2">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
