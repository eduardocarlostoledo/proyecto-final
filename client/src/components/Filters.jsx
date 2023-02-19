import "../styles/Filters.css";

export const Filters = () => {

    

    return (
        <div>

            <div className="ContainerFilters">
                
                <select className="Filter">
                    <option value="All">Por Brands</option>
                    <option value="Corsair">Corsair</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Acer">Acer</option>
                    <option value="EVGA">EVGA</option>
                    <option value="ASUS">ASUS</option>
                    <option value="Cooler Master">Cooler Master</option>
                    <option value="HyperX">HyperX</option>
                    <option value="Gigabyte">Gigabyte</option>
                    <option value="Logitech">Logitech</option>
                    <option value="Audio-Technica">Audio-Technica</option>
                    <option value="Razer">Razer</option>
                </select>
                <select className="Filter">
                    <option value="All">Por tipo</option>
                    <option value="Cooler">Cooler</option>
                    <option value="Power Supply">Power Supply</option>
                    <option value="Graphics Card">Graphics Card</option>
                    <option value="SSD">SSD</option>
                    <option value="HDD">HDD</option>
                    <option value="Processor">Processor</option>
                    <option value="Motherboard">Motherboard</option>
                    <option value="Mouse">Mouse</option>
                    <option value="RAM">RAM</option>
                    <option value="Headset">Headset</option>
                    <option value="Monitor">Monitor</option>
                    <option value="PC Case">PC Case</option>
                    <option value="Keyboard">Keyboard</option>
                </select>
                <select className="Filter">
                    <option value="All">Por Ventas</option>
                    <option value="ASC">Mayor venta</option>
                    <option value="DES">Menor venta</option>
                </select>
                <select className="Filter">
                    <option value="All">Por Precio</option>
                    <option value="ASC">Mayor precio</option>
                    <option value="DES">Menor precio</option>
                </select>
                
            
            </div>
        </div>
    )
}
