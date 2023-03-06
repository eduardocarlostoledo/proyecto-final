import { NavAdmin } from "./navAdmin";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Tag } from "antd";
import {
  getAllProducts,
  getAllProductsName,
  getAllBrands,
  getAllTypes,
  updateProduct,
} from "../redux/actions/ProductActions";
import { AiFillSetting, AiOutlineClose } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import ".././styles/AdminProducts.css";
import swal from "sweetalert";

const ProductExpanded = ({
  id,
  name,
  image,
  price,
  type,
  brand,
  stock,
  description,
  info_adicional,
  editProduct,
  setEditProduct,
}) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    id,
    name,
    image,
    price,
    type,
    brand,
    stock,
    description,
    info_adicional,
  });

  const brands = useSelector((state) => state.brands);
  const types = useSelector((state) => state.types);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);

    // Object.keys(input).forEach(key => data.append(key, input[key]));
    const data = new FormData()
    data.append("id", input.id)
    data.append("name", input.name)
    data.append("image", input.image)
    data.append("price", input.price)
    data.append("description", input.description)
    data.append("brand", input.brand)
    data.append("type", input.type)
    data.append("stock", input.stock)
    data.append("info_adicional", input.info_adicional)

    console.log(data);
    dispatch(updateProduct(data));
    setEditProduct(0);
    swal("success", "Product modified successfully", "success");
    console.log(data , "ENVIADO");
  }

  const handleChangeImage = (e) => {
    setInput({ ...input, image: e.target.files[0] });
  };

  const [typeInput, setTypeInput] = useState("");
  const [brandInput, setBrandInput] = useState("");

  return (
    <div>
      {!(editProduct === id) && (
        <div className="productExpandedDiv">
          <div className="NameImgDivInfo">
            <img className="ImgDivInfo" src={image} alt={name}></img>
            {/* {input.image && <img src={input.image} />} */}
          </div>
          <div className="DataDivInfo">
            <h3>Nombre: {name}</h3>
            <div className="BrandTypeDivInfo">
              <p className="PDivInfo">Brand: {brand}</p>

              <p className="PDivInfo">Type: {type}</p>

              <p className="PDivInfo">Price: {price}</p>

              <p className="PDivInfo">Stock: {stock}</p>
            </div>
            <p className="PDivInfo">Descripcion: {description}</p>
          </div>
        </div>
      )}

      {editProduct === id && (
        <div className="productExpandedDiv">
          <AiOutlineClose
            onClick={() => setEditProduct(0)}
            color="red"
            size="50px"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              cursor: "pointer",
            }}
          />
          <div className="NameImgDiv">
            <input
              className="InputsEdits"
              value={input.name}
              onChange={(e) => handleChange(e)}
              name="name"
              placeholder="Name"
            ></input>
            <input
              type="file"
              name="image"
              onChange={(e) => handleChangeImage(e)}
              className="InputsEdits"
            ></input>
            {input.image ? (
              <img className="imgEdit" src={input.image} alt={name}></img>
            ) : (
              <img className="imgEdit" src={image} alt={name}></img>
            )}
          </div>
          <div className="restoDePropsDiv">
            <input
              className="InputsEdits"
              value={input.price}
              onChange={(e) => handleChange(e)}
              type="number"
              name="price"
              placeholder="Price"
            ></input>

            <input
              className="InputsEdits"
              value={input.stock}
              onChange={(e) => handleChange(e)}
              type="number"
              name="stock"
              placeholder="stock"
            ></input>
            <div>
              <input
                className="inputNew"
                type="text"
                value={typeInput}
                name="type"
                placeholder="New Type"
                onChange={(e) => setTypeInput(e.target.value)}
              ></input>
              <select
                defaultValue={input.type}
                className="selectName"
                name="type"
                placeholder="Select Type"
                onChange={(e) => handleChange(e)}
                required={true}
              >
                <option value="" disabled selected>
                  Select Type
                </option>
                {types &&
                  types.map((type, index) => (
                    <option key={index} value={type.name}>
                      {type.name}
                    </option>
                  ))}
                {typeInput && <option value={typeInput}>{typeInput}</option>}
              </select>
            </div>

            <div>
              <input
                className="inputNew"
                type="text"
                value={brandInput}
                name="brand"
                placeholder="New Brand"
                onChange={(e) => setBrandInput(e.target.value)}
              ></input>
              <select
                defaultValue={input.brand}
                className="selectName"
                name="brand"
                placeholder="Select Brand"
                onChange={(e) => handleChange(e)}
                required={true}
              >
                <option value="" disabled selected>
                  Select Brand
                </option>
                {brands &&
                  brands.map((brand, index) => (
                    <option key={index} value={brand.name}>
                      {brand.name}
                    </option>
                  ))}
                {brandInput && <option value={brandInput}>{brandInput}</option>}
              </select>
            </div>

            {(input.type === "Motherboard" || input.type === "processor") && (
              <input
                className="InputsEdits"
                value={input.info_adicional}
                onChange={(e) => handleChange(e)}
                name="info_adicional"
                placeholder="Socket"
              ></input>
            )}
            <input
              className="InputsEdits"
              value={input.description}
              onChange={(e) => handleChange(e)}
              name="description"
              placeholder="Descripcion"
            ></input>
          </div>
          <div className="ButtonDiv">
            <button onClick={(e) => handleSubmit(e)} className="ButtonSubmit">
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const AdminProducts = () => {
  const dispatch = useDispatch();
  const [editProduct, setEditProduct] = useState(0);
  const handleFilter = () => {};
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllBrands());
    dispatch(getAllTypes());
  }, [dispatch]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllProductsName(name));
    console.log(name);
  };

  // Boton para traer todo de nuevo
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllProducts());
  };

  let products = useSelector((state) => state.products || []);
  const newProducts = products.map((product) => ({
    ...product,
    key: product.id,
  }));
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      key: "id",
      render: (text) => <p>{text}</p>,
    },

    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name - b.name,
      render: (text) => <p>{text}</p>,
    },

    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Infomation adicional",
      dataIndex: "info_adicional",
      key: "info_adicional",
      render: (value) => (
        <Tag color={value === true ? "green" : "red"}>
          {value === true
            ? "Additional information"
            : "No Additional information"}
        </Tag>
      ),
      filters: [
        {
          text: "Additional information",
          value: true,
        },
        {
          text: "no Additional information",
          value: false,
        },
      ],
      onFilter: (value, record) => record.admin === value,
    },
    {
      title: "actions",
      dataIndex: "",
      render: (value) => (
        <div className="ActionsDiv">
          <button
            className="ButtonsActions"
            onClick={() => setEditProduct(value.id)}
          >
            <BiEditAlt />
          </button>

          <button
            className="ButtonsActions"
            onClick={() => console.log(value.password)}
          >
            <AiFillSetting />
          </button>
        </div>
      ),
    },
    Table.EXPAND_COLUMN,
  ];

  return (
    <div>
      <NavAdmin
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
      />

      <div style={{ marginTop: "80px", padding: "20px" }}>
        <Table
          columns={columns}
          dataSource={newProducts}
          expandable={{
            expandedRowRender: (record) => (
              <ProductExpanded
                id={record.id}
                name={record.name}
                image={record.image}
                price={record.price}
                type={record.type}
                brand={record.brand}
                stock={record.stock}
                info_adicional={record.info_adicional}
                description={record.description}
                editProduct={editProduct}
                setEditProduct={setEditProduct}
                handleClick={handleClick}
              />
            ),
          }}
        />
      </div>
    </div>
  );
};
