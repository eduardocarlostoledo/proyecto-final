import Steps from "./BuildPc-steps";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/BuildPc.css";
import swal from "sweetalert";
import Card from "./Card";

const UpdatePrice = (setPrice, input) => {
  let suma = 0;
  for (let obj in input) {
    if (!isNaN(input[obj].price)) {
      suma += input[obj].price;
    }
  }
  return setPrice(suma);
};

export const BuildPc = () => {
  const [data, setData] = useState([]);
  const [button, setbutton] = useState(false);
  const [Complete, setComplete] = useState(false);
  const [socket, setSocket] = useState("");
  const [type, setType] = useState("Processor");
  const [input, setInput] = useState({
    Processor: "",
    Motherboard: "",
    RAM: "",
    GraphicsCard: "",
    storage: "",
    PowerSupply: "",
    case: "",
  });
  const [Price, setPrice] = useState(0);

  const getDataFiltrado = (type) => {
    axios
      .get(`http://localhost:3001/products`)
      .then((response) => {
        setData([...response.data.filter((e) => e.type === type)]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDataBySocket = (socket) => {
    axios
      .get(`http://localhost:3001/products/BuildSearch?socket=${socket}`)
      .then((response) => {
        setData([...response.data.filter((e) => e.type === type)]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    UpdatePrice(setPrice, input);
    if (type === "Complete") {
      setComplete(true);
    }
    if (type === "Processor") {
      getDataFiltrado("Processor");
      setPrice(0);
    } else if (type === "Motherboard") {
      setPrice(input.Processor.price);
      setbutton(true);
      getDataBySocket(socket);
    } else {
      getDataFiltrado(type);
    }
  }, [input, type, socket]);

  const handleSelect = (e, item) => {
    e.preventDefault();
    if (item.type === "Processor") {
      setSocket(item.info_adicional);
      setType("Motherboard");
    }
    if (item.type === "Motherboard") {
      setType("RAM");
    }
    if (item.type === "RAM") {
      setType("GraphicsCard");
    }
    if (item.type === "GraphicsCard") {
      setType("storage");
    }
    if (item.type === "storage") {
      setType("PowerSupply");
    }
    if (item.type === "PowerSupply") {
      setType("case");
    }
    if (item.type === "case") {
      setType("Complete");
    }
    setInput({
      ...input,
      [item.type]: item,
    });
  };

  const handleStep = (property) => {
    if (property === "Processor") setbutton(false);
    setComplete(false);
    setType(property);
    let shouldChange = false;
    for (const key in input) {
      if (key === property) {
        shouldChange = true;
      }
      if (shouldChange) {
        input[key] = "";
      }
    }
  };

  const addMapCart = () => {
    for (const key in input) {
      handleAddCart(input[key]);
    }
  };

  const handleAddCart = (item) => {
    const newItem = { name: item.name, image: item.image, price: item.price };
    fetch("http://localhost:3001/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => swal("Success", "Cart Added!", "success"));
  };

  const filterProcess = (marca) => {
    setbutton(true);
    setData(data.filter((e) => e.brand === marca));
  };

  return (
    <div className="DivBuild">
      <Steps input={input} price={Price} handleStep={handleStep}></Steps>
      <div className="ButtonsAndCards">
        <button
          className={button ? "displaynone" : "button"}
          onClick={() => filterProcess("Amd")}
        >
          Amd
        </button>
        <button
          className={button ? "displaynone" : "button"}
          onClick={() => filterProcess("Intel")}
        >
          Intel
        </button>

        <div className={Complete ? "displaynone" : "AllCards"}>
          {data ? (
            data.map((item) => (
              <div onClick={(e) => handleSelect(e, item)} className="Card">
                <Card
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  isForBuildPc={true}
                  key={item.id}
                />
              </div>
              // {/* //   <button  className="Buttons">
              // //   {item.name}
              // //   {item.price}
              // //   <img src={item.image}></img>
              // //   {item.description}
              // //   </button> */}
              // {/* // </div> */}
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className={Complete ? "CardFinish" : "displaynone"}>
          <Card {...input.Processor} isForBuildPc={true} />
          <Card {...input.Motherboard} isForBuildPc={true} />
          <Card {...input.RAM} isForBuildPc={true} />
          <Card {...input.GraphicsCard} isForBuildPc={true} />
          <Card {...input.storage} isForBuildPc={true} />
          <Card {...input.PowerSupply} isForBuildPc={true} />
          <Card {...input.case} isForBuildPc={true} />
        </div>
        <div className={Complete ? "Priceh2" : "displaynone"}>
          <h2>Total price of assembly: $USD {Price}</h2>
          <button onClick={() => addMapCart()}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};
