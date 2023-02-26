import '../styles/Steps.css'

export default function Steps ({input,price}) {
    console.log(input,"xd");
    return (
        <div className='steps_wrapper'>
            <h2 className='steps_title'>BUILD YOUR PC</h2>
            <h3>$ {price}</h3>
            <div className='type_wrapper'>
                
                <div className='icons'>
                <img src='https://cdn-icons-png.flaticon.com/512/8651/8651122.png' alt='CPU' className={input.Processor ? "type_img_select" :'type_img'}></img>
                <label>{input.Processor.name}</label>

                </div>

                <div className='icons'>
                <img src="https://cdn-icons-png.flaticon.com/512/7967/7967562.png" alt="Motherboard" className={input.Motherboard ? "type_img_select" :'type_img'}/>
                <label>{input.Motherboard.name}</label>

                </div>
                
                <div className='icons'>
                <img src="https://cdn-icons-png.flaticon.com/512/7020/7020252.png" alt="RAM" className={input.RAM ? "type_img_select" :'type_img'}/>
                <label>{input.RAM.name}</label>

                </div >
                
                <div className='icons'>
                <img src="https://cdn-icons-png.flaticon.com/512/6016/6016567.png" alt="GPU" className={input.GraphicsCard ? "type_img_select" :'type_img'}/>
                <label>{input.GraphicsCard.name}</label>

                </div>
                
                <div className='icons'>
                <img src="https://cdn-icons-png.flaticon.com/512/3274/3274574.png" alt="Hard_Drive" className={input.storage ? "type_img_select" :'type_img'}/>
                <label>{input.storage.name}</label>

                </div>

                <div className='icons'>
                <img src="https://cdn-icons-png.flaticon.com/512/4617/4617548.png" alt="PSU" className={input.PowerSupply ? "type_img_select" :'type_img'}/>
                <label>{input.PowerSupply.name}</label>

                </div>
                
                <div className='icons'>
                <img src="https://cdn-icons-png.flaticon.com/512/6016/6016532.png" alt="case" className={input.case ? "type_img_select" :'type_img'}/>
                <label>{input.case.name}</label>

                </div>
                
                
                <img src="" alt="" />
            </div>
        </div>
    )
}