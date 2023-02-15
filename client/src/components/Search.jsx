import '../styles/Search.css'

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
                <input className='InputBuscar' type='text' placeholder="Buscar..."/> 
                <ion-icon name="search-outline"></ion-icon>
               
                <button className='SubmitBuscar' type="submit">Buscar</button>
            </div>
            <div>
                
            </div>
        </div>
    )
}

/* En input--> onChange={(e) => handleInputChange(e)} */
/* En button --> onClick={(e) => handleSubmit(e)} */