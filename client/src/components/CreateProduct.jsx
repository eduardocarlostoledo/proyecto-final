// import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { createProduct, getAllBrands, getAllTypes } from "../redux/actions/ProductActions";
// // import { createProduct } from "../redux/actions/ProductActions";
// // import JsonMarcas from "./Marcas.json";
// // import JsonTypes from "./Componentes.json";

// import "../styles/CreateProduct.css";

// export default function CreateProduct() {

//     const brands = useSelector((state) => state.brands)
//     const type = useSelector((state) => state.types)
//     const history = useNavigate()

//   const dispatch = useDispatch();
//     useEffect(() => {
//       dispatch(getAllBrands())
//       dispatch(getAllTypes())
//     },[dispatch])

//   const [product, setProduct] = useState({
//     name: "",
//     image: "",
//     price: "",
//     description: "",
//     brand: [],
//     type: [],
//   });
//   const [errores, setErrores] = useState({});


//   function handleChange(event) {
//     const { name, value, type, checked } = event.target;
//     console.log("tipo", name, "id", value);
//     console.log(product.brand);
//     const errores = validarFormulario(product);
//     setErrores(errores);
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]:
//         type === "checkbox"
//           ? checked
//             ? [...prevProduct[name], value]
//             : prevProduct[name].filter((item) => item !== value)
//           : value,
//     }));
//   }

//   function handleChangeCheck(event) {
//     event.preventDefault();
//     const {id,Check} = event.target;
//     console.log(event.target);
//     if (!product.brand.includes(id)) return setProduct({...product,"brand":[...product.brand,id]});
//     console.log(product);
//     setProduct({
//       ...product,
//       "brand": !product.brand.filter((element) => element !== id)
//     })

//   }

//   const handleSelect = (e) => {
//     setErrores(validarFormulario({...product, type: [...product.type, e.target.value]}))
//     setProduct({...product, type: [...product.type, e.target.value]})
//     console.log(product)
    
// }
// const handleSelectBrand = (e) => {
//   setErrores(validarFormulario({...product, brand: [...product.type, e.target.value]}))
//     setProduct({ ...product, brand: [...product.brand, e.target.value]})
//     console.log(product)
     
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   const errores = validarFormulario(product);
//   setErrores(errores);
//   console.log(product);
//   dispatch(createProduct(product))
//   console.log('Envio de producto!', product)
//   alert('Producto creado')
      
//   setProduct({
//     name: "",
//         image: "",
//         price: "",
//         description: "",
//         brand: [],
//         type: [],
//       });
//   console.log(errores);
//   // if (Object.keys(errores).length === 0) {
//   //   console.log("Datos del formulario:", product);
//   // }
// }

//   // function handleSubmit(e) {
//   //   if(!product.name || !product.image || !product.price || !product.description || !product.brand.length || !product.type.length){
//   //     alert('No se puede crear')
//   //   } else {

//   //     e.preventDefault();
//   //     console.log(product)
      
//   //     setErrores(errores);
//   //     console.log(product)
//   //     alert('Producto creado')
      
//   //     setProduct({
//   //       name: "",
//   //       image: "",
//   //       price: "",
//   //       description: "",
//   //       brand: [],
//   //       type: [],
//   //     });
//   //     if (Object.keys(errores).length === 0) {
//   //       console.log("Datos del formulario:", product);
//   //     }
       
//   //   }
//   // }

//   

//   return (
//     <div className="FormDiv">
//       <h1>Form</h1>
//       <div>
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <label>
//             Product:
//             <input
//               type="text"
//               name="name"
//               placeholder="..."
//               value={product.name}
//               onChange={handleChange}
//             />
//             {errores.name && <p>{errores.name}</p>}
//           </label>
//           <label>
//             Image:
//             <input
//               type="text"
//               name="image"
//               placeholder="..."
//               value={product.image}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Price:
//             <input
//               type="number"
//               name="price"
//               placeholder="..."
//               value={product.price}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Description:
//             <input
//               type="text"
//               name="description"
//               placeholder="..."
//               value={product.description}
//               onChange={handleChange}
//             />
//           </label>

//           <div className="SelectsDiv"> 
//             <label>Brand</label>
//             <select name="brand" onChange={(e) => handleSelectBrand(e)}>
//               {/* <option value="" disabled selected> Select a brand product</option> */}
//               {brands.map((marca, index) => (
//                 <option key={index} value={marca.id}>{marca.name}</option>
//               ))}
//             </select>
//           </div>
//           <div className="SelectsDiv">  
//             <label>Type</label>
//               <select name="type" onChange={(e) => handleSelect(e)}>
//                 {/* <option value="" disabled selected>Select a hardware product</option> */}
//                 {type.map((type, index) => (
//                   <option key={index} value={type.id}>{type.name}</option>
//                 ))}
//               </select>
            

//           </div>
//           <button type="submit"> Comprar </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useDispatch} from "react-redux";

import "../styles/CreateProduct.css";


export default function CreateProduct() {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    brand: "",
    type: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    console.log(product)
  };

  //falta validar si existe
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(CreateProduct(product));
    console.log(product)
  };

  return (
    <div className="FormDiv">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Product:
          <input type="text" name="name" placeholder="..." value={product.name} onChange={handleChange}/>
        </label>
        <label>Price:
          <input type="text" name="price" placeholder="..." value={product.price} onChange={handleChange}/>
        </label>
        <label>Description:
          <input type="text" name="description" placeholder="..." value={product.description} onChange={handleChange}/>
        </label>

        <label> Image:
          <input type="url://" name="image" placeholder="..." value={product.image} onChange={handleChange}/>
        </label>

        <label>
          Brand:
          <input type="text" name="brand" placeholder="..." value={product.brand} onChange={handleChange}/>
        </label>
        <label>
          Type:
          <input type="text" name="type" placeholder="..." value={product.type} onChange={handleChange} />
        </label>
        <button type="submit"> Agree </button>
      </form>
    </div>
  );
}