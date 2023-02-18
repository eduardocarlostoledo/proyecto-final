import '../styles/Search.css'
import { HiMagnifyingGlass } from 'react-icons/hi2';

export const Search = () => {
    return (
        <div className='SearchButton'>
            <div>
                <input className='InputBuscar' type='text' placeholder="Search..." /> 
                <button className='SubmitBuscar' type="submit"> < HiMagnifyingGlass className="icon"/></button>
            </div>
            <div>
                
            </div>
        </div>
    )
}
