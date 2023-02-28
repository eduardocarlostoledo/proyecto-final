import Steps from "./BuildPc-steps";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/BuildPc.css";
import swal from "sweetalert";
import Card from "./Card";


function Component({ name, price, image }) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{price}</h2>
      <img src={image} alt={name}></img>
    </div>
  );
}

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

  console.log(data,"lo que hay en el estado");
  // console.log(input,"lo que hay en el input");
  // console.log(socket,"lo que hay en el socket");
  console.log(type,"lo que hay en el TYPE");


  const getDataFiltrado = (type) => {
    axios
      .get(`http://localhost:3001/products`)
      .then((response) => {
        setData([...response.data.filter((e) => e.type === type)])
        // console.log(response.data, "LA DATAAAA");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDataBySocket = (socket) => {
    // console.log(socket, "ESTOY EN GET BY SOCKET");
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
    if(type=== "Complete") {setComplete(true)}
    if (type === "Processor") {
      getDataFiltrado("Processor");
    } else if (type === "Motherboard") {
      setbutton(true)
      getDataBySocket(socket);
    } else {
      getDataFiltrado(type);
    }
  }, [input, type, socket]);



  const handleSelect = (e,item) => {
    e.preventDefault(); 
    if(item.type === "Processor"){
       setSocket(item.info_adicional.socket)
       setType("Motherboard")
       }
    if(item.type === "Motherboard"){setType("RAM")}
    if(item.type === "RAM"){setType("GraphicsCard")}
    if(item.type === "GraphicsCard"){setType("storage")}
    if(item.type === "storage"){setType("PowerSupply")}
    if(item.type === "PowerSupply"){setType("case")}
    if(item.type === "case"){setType("Complete")}
    setInput({
      ...input,
      [item.type]:item
    })
    let valor = Math.floor(Price + item.price)
    console.log(valor);
    setPrice(valor)
  }

  const handleStep = (property) => {
    if(property === "Processor") setbutton(false)
    setComplete(false)
    setType(property)
    let shouldChange = false;
    for (const key in input) {
      if (key === property) {
        shouldChange = true;
      }
      if (shouldChange) {
        input[key] = '';
      }
    }
  }

  const addMapCart = () => {
    console.log("add map cart");
    for (const key in input) {
      console.log(key, "ESTA ES LA LLAVE");
      handleAddCart(input[key])
    }
  }

  const handleAddCart = (item) => {
    const newItem = { name: item.name, image: item.image, price: item.price };
    fetch('http://localhost:3001/cart', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newItem)
    })
    .then(response => response.json())
    .then(data => swal('Success', "Cart Added!", 'success'));
};

  const filterProcess = (marca) => {
    setbutton(true)
    setData(data.filter(e => e.brand === marca))
  }

  return (
    <div className="DivBuild">
      <Steps 
      input={input}
      price={Price}
      handleStep={handleStep}
      ></Steps>
      <div className="ButtonsAndCards">
        <button className={button ? "displaynone" : "button"} onClick={() => filterProcess("Amd")}>Amd</button>
        <button className={button ? "displaynone" : "button"} onClick={() => filterProcess("Intel")}>Intel</button>

        <div className={Complete ? "displaynone" : "AllCards" }>
        {data ? ( data.map((item) => (

          <div onClick={(e) => handleSelect(e,item)} className="Card"> 
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
          <div className={Complete ? "" : "displaynone" }>
            <Card {...input.Processor} isForBuildPc={true} />
            <Card {...input.Motherboard} isForBuildPc={true} />
            <Card {...input.RAM} isForBuildPc={true} />
            <Card {...input.GraphicsCard} isForBuildPc={true} />
            <Card {...input.storage} isForBuildPc={true} />
            <Card {...input.PowerSupply} isForBuildPc={true} />
            <Card {...input.case} isForBuildPc={true} />

          </div>
          <div className={Complete ? "Priceh2" : "displaynone" }>
              <h2>Total price of assembly: $USD {Price}</h2>
              <button onClick={() => addMapCart()}>Add to cart</button>
          </div>

      </div>
    </div>
  );
};
