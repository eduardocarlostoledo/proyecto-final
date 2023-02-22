import "../styles/Filters.css";
import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { getPage } from "../redux/actions/ProductActions";

export const Filters = () => {
    const dispatch = useDispatch()

    const types = useSelector(store => store.types)
    const brands = useSelector(store => store.brands)

    const [filter, setFilter] = useState({
        page:1,
        type:'',
        brand:'',
        price:''  //puede ser a o d
    })
    
    const paginatedHandler = (action,value) => {
        console.log('me ejecute :)')
        setFilter({...filter, [action]:value})
        console.log(filter)
        // dispatch(getPage(filter.page,filter.brand,filter.type,filter.price))
    }


    return (
        <div>
            <div className="ContainerFilters">
                
                <select className="Filter">
                    <option value=''>Any brand</option>
                    {brands.map(b => <option name='brand' onSelect={(e) => paginatedHandler(e.target.name, e.target.value)}>{b.name}</option>)}
                </select>
                <select className="Filter">
                    <option value=''>Any type</option>
                    {types.map(t => <option name='type' onSelect={(e) => paginatedHandler(e.target.name, e.target.value)}>{t.name}</option>)}
                </select>
                {/* <select className="Filter">
                    <option value="All">Por Ventas</option>
                    <option value="ASC">Mayor venta</option>
                    <option value="DES">Menor venta</option>
                </select> */}
                <select className="Filter">
                    <option name='price'>Por Precio</option>
                    <option value="a" name='price'>Mayor precio</option>
                    <option value="d" name='price'>Menor precio</option>
                </select>
            </div>
        </div>
    )
}
