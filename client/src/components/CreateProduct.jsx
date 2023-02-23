import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import styles from "../styles/Register.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBrands,
  getAllTypes,
  createProduct,
} from "../redux/actions/ProductActions";


function validate(input) {
  let errors = {};
  const regexName = /^([a-zA-Z ]+)$/i;
  const regexEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (input.name && !regexName.test(input.name)) {
    errors.name = "can't include special characters or numbers";
  }
  if (!input.name) {
    errors.name = "Name is required";
  }
  if (input.name.length > 15) {
    errors.name = "Max 12 caracteres";
  }
  if (input.name.length < 2) {
    errors.name = "Min 2 caracteres";
  }
  if (input.lastname && !regexName.test(input.lastname)) {
    errors.lastname = "can't include special characters";
  }
  if (!input.lastname) {
    errors.lastname = "lastname is required";
  }
  if (input.lastname.length > 15) {
    errors.lastname = "Max 12 caracteres";
  }
  if (input.lastname.length < 2) {
    errors.lastname = "Min 2 caracteres";
  }
  if (!input.password) {
    errors.password = "password is required";
  }
  if (input.password.length > 12) {
    errors.password = "Max 12 caracteres";
  }
  if (input.password.length < 5) {
    errors.password = "Min 5 caracteres";
  }
  if (input.passwordConfirm !== input.password) {
    errors.passwordConfirm = "passwords must match";
  }
  if (input.email && !regexEmail.test(input.email)) {
    errors.email = "insert email valid";
  }
  if (!input.email) {
    errors.email = "email is required";
  }
  return errors;
}

export const CreateProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getAllTypes());
  }, [dispatch]);
  const brands = useSelector((state) => state.brands);
  const types = useSelector((state) => state.types);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    brand: 0,
    type: 0,
  });

  function handleChange(e) {
    console.log(e.target.name ,e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  const handleChangeImage =(e) => {
    console.log(e.target.files[0]);
    setInput({ ...input, image: e.target.files[0]})
  }

  // function handleSelectBrand(e) {
  //   console.log("perfecto", input.brand);
  //   input.brand.includes(e.target.value)
  //     ? alert("equal temperaments cannot be added")
  //     : setInput({
  //         ...input,
  //         brand: [...input.brand, e.target.value], 
  //       });
  // }
  // function handleSelectType(e) {
  //   console.log("perfecto", input.type);
  //   input.type.includes(e.target.value)
  //     ? alert("equal temperaments cannot be added")
  //     : setInput({
  //         ...input,
  //         type: [...input.type, e.target.value],
  //       });
  // }

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData()
    data.append("name", input.name)
    data.append("image", input.image)
    data.append("price", input.price)
    data.append("description", input.description)
    data.append("brand", input.brand)
    data.append("type", input.type)
    
    dispatch(createProduct(data));

    alert("Product created successfully");
    setInput({
      name: "",
      image: "",
      price: "",
      description: "",
      brand: 0,
      type: 0,
    });

  }

  return (
    <div className={styles.ContainerAllForm}>
      <Form className={styles.ContainerAll} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.register}>
          <h2>Create product</h2>
        </div>

        <Form.Group className={styles.pack} controlId="formBasicEmail">
          <Form.Label>Name Product</Form.Label>
          <Form.Control
            name="name"
            onChange={(e) => handleChange(e)}
            value={input.name}
            className={styles.inputs}
            type="text"
            placeholder="Name Product"
          />
          {/* {errors.email && input.email.length > 0 && (
            <p className={styles.spanError}>{errors.email}</p>
          )} */}
        </Form.Group>

        <Form.Group className={styles.pack} controlId="formBasicEmail">
          <Form.Label>image Product</Form.Label>
          <Form.Control
            name="image"
            onChange={(e) =>handleChangeImage(e)}
            className={styles.inputs}
            type="file"
            placeholder="image Product"
          />
          {/* {errors.email && input.email.length > 0 && (
            <p className={styles.spanError}>{errors.email}</p>
          )} */}
        </Form.Group>

        <Form.Group className={styles.pack} controlId="formBasicEmail">
          <Form.Label>price</Form.Label>
          <Form.Control
            name="price"
            onChange={(e) => handleChange(e)}
            value={input.price}
            className={styles.inputs}
            type="text"
            placeholder="price"
          />
          {/* {errors.email && input.email.length > 0 && (
            <p className={styles.spanError}>{errors.email}</p>
          )} */}
        </Form.Group>

        <Form.Group className={styles.pack} controlId="formBasicEmail">
          <Form.Label>description</Form.Label>
          <Form.Control
            name="description"
            onChange={(e) => handleChange(e)}
            value={input.description}
            className={styles.inputs}
            type="text"
            placeholder="description"
          />
          {/* {errors.email && input.email.length > 0 && (
            <p className={styles.spanError}>{errors.email}</p>
          )} */}
        </Form.Group>

        <div className={styles.hola}>
          <Form.Select
            name="type"
            onChange={(e) => handleChange(e)}
            aria-label="Default select example"
          >
            <option>Types select menu</option>
            {types &&
              types.map((types, index) => (
                <option key={index} value={types.name}>
                  {types.name}
                </option>
              ))}
          </Form.Select>

          <Form.Select
            name="brand"
            onChange={(e) => handleChange(e)}
            aria-label="Default select example"
          >
            <option>Brands select menu</option>
            {brands &&
              brands.map((brand, index) => (
                <option key={index} value={brand.name}>
                  {brand.name}
                </option>
              ))}
          </Form.Select>
          {/* {input.brand.length !== 0 && (
              <div >
                <ul >
                  <li >
                    {input.brand.map((el) => el + " ,")}
                  </li>
                </ul>
              </div>
            )} */}
        </div>

        <div className={styles.containerBtn}>
          <Button className={styles.btnR} type="submit">
            Create Product
          </Button>
        </div>
      </Form>
    </div>
  );
};

