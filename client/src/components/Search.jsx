import '../styles/Search.css'
import { HiMagnifyingGlass } from 'react-icons/hi2';

export const Search = () => {

    /*
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value); // ver el tema del currentPage
        console.log(name)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getNameProduct(name))
        
    }

    */
    return (
        <div className='SearchButton'>
            <div>
                <input className='InputBuscar' type='text' placeholder="Search..." /> 
                {/* <ion-icon name="home-outline"></ion-icon> */}
                <button className='SubmitBuscar' type="submit"> < HiMagnifyingGlass className="icon"/></button>
            </div>
            <div>
                
            </div>
        </div>
    )
}

/* En input--> onChange={(e) => handleInputChange(e)} */
/* En button --> onClick={(e) => handleSubmit(e)} */