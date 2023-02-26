import { useState, useEffect } from "react";
import axios from "axios";

const BuildModules = () => {
  const [data, setData] = useState([]);
  const [socket, setSocket] = useState("");
  const [input, setInput] = useState({
    processor: null,
    motherboard: null,
    memory: null,
    graphicsCard: null,
    storage: null,
    powerSupply: null,
    case: null,
  });
  const [type, setType] = useState("processor");

  const getData = () => {
    axios
      .get(`http://localhost:3001/products`)
      .then((response) => {
        setData(response.data.filter(e => e.type === "processor"));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getDataBySocket = () => {
    axios
      .get(`http://localhost:3001/products/BuildSearch?type=${socket}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDataFiltrado = (type) => {
    axios
      .get(`http://localhost:3001/products`)
      .then((response) => {
        setData(response.data.filter((e) => e[type] === type));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if(type === "processor"){ 
        getData();
    }else if (type === "motherboard") {
      getDataBySocket();
    } else {
      getDataFiltrado(type);
    }
  }, [type, socket]);

  const handleSelect = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.getAttribute("data-name"),
    });
  };

  const components = {
    processor: () => (
        <div>
        <h1>
          {data ? (
            <ul>
              {data.map((item) => (
                <div
                  key={item.id}
                  data-name={item.name}
                  data-price={item.price}
                  data-socket={item.info_adicional.socket}
                  onClick={(e) => handleSelect(e)}
                  className="Card"
                >
                  <li>
                    <button className="Buttons">
                      {item.name}
                      {item.price}
                      <img src={item.image} alt={item.name} />
                      {item.description}
                      {item.info_adicional.socket}
                    </button>
                  </li>
                </div>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </h1>
      </div>
    ),
    motherboard: () => (
      <div>
        <h1>
          {data ? (
            <ul>
              {data.map((item) => (
                <div
                  key={item.id}
                  data-name={item.name}
                  data-price={item.price}
                  data-socket={item.info_adicional.socket}
                  onClick={(e) => handleSelect(e)}
                  className="Card"
                >
                  <li>
                    <button className="Buttons">
                      {item.name}
                      {item.price}
                      <img src={item.image} alt={item.name} />
                      {item.description}
                      {item.info_adicional.socket}
                    </button>
                  </li>
                </div>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </h1>
      </div>
    ),
    memory: () => <div><h1>{data}</h1></div>,
    graphicsCard: () => <div><h1>{data}</h1></div>,
    storage: () => <div><h1>{data}</h1></div>,
    powerSupply: () => <div><h1>{data}</h1></div>,
    case: () => <div><h1>{data}</h1></div>,
  };

  const Component = components[type];

  return( <Component />);
};

export default BuildModules;
