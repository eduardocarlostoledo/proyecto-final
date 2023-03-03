import Steps from "./BuildPc-steps";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/BuildPc.css";
import Card from "./Card";
import AMD_img from '../images/AMD_Logo.png'
import Intel_img from '../images/Intel_Logo.png'

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
    setPrice(Price + item.price)
  }

  const filterProcess = (marca) => {
    setbutton(true)
    setData(data.filter(e => e.brand === marca))
  }

  return (
    <div className="DivBuild">
      <Steps 
      input={input}
      price={Price}
      ></Steps>
      <div className="ButtonsAndCards">
        <button className={button ? "displaynone" : "button"} onClick={() => filterProcess("Amd")}><img src={AMD_img} className='build_logo'/></button>
        <button className={button ? "displaynone" : "button"} onClick={() => filterProcess("Intel")}><img src={Intel_img} className='build_logo'/></button>

        <div className={Complete ? "displaynone" : "AllCards" }>
        {data ? ( data.map((item) => (
                <button onClick={(e) => handleSelect(e,item)} className='card_button'>
                {/* {item.name}
                {item.price}
                <img src={item.image}></img>
                {item.description} */}
                <Card name={item.name} image={item.image} price={item.price} isForBuildPC={true}/>
                </button>
            ))
        ) : (
          <p>Loading...</p>
          )}
          </div>
          <div className={Complete ? "CompleteCards" : "displaynone" }>
            <Card {...input.Processor} isForBuildPC={true}></Card>
            <Card {...input.Motherboard} isForBuildPC={true}></Card>
            <Card {...input.RAM} isForBuildPC={true}></Card>
            <Card {...input.GraphicsCard} isForBuildPC={true}></Card>
            <Card {...input.storage} isForBuildPC={true}></Card>
            <Card {...input.PowerSupply} isForBuildPC={true}></Card>
            <Card {...input.case} isForBuildPC={true}></Card>

          </div>
          <div className={Complete ? "Priceh2" : "displaynone" }>
              <h2>Total price of assembly: $USD {Price}</h2>

          </div>

      </div>
    </div>
  );
};
