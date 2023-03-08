import '../styles/Home.css';
import asus from '../images/asusMonitor.jpg'
import Ryzen from '../images/Ryzen7mil.jpg'
import samsung from '../images/samsungMonitores.jpg'
import { Link } from 'react-router-dom';


/** Coloque un diseño de Boostrap para las Imagenes */
export const Home = () => {
    
    return(
        <div className="HomeContainer">
            <div className='ContainerImages'>
                 {/* Acá esta el Boostrap */}
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={asus} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                        <img src={Ryzen} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                        <img src={samsung} className="d-block w-100" alt="" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div> 
            <div className='ContainerGalery'>
                <div className='Galery'>
                    <div className='Card'>
                        <div className='Image'>
                            <img className='CardImg' src="https://www.venex.com.ar/products_images/1625487702_0413607bi.jpg" alt="Imagen 1" />
                        </div>
                        <div>
                            <p className='CardText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dicta cupiditate deleniti quidem eligendi velit non mollitia a impedit ad.</p>
                            <button class='CardButton'><Link to='/Products'>View More</Link></button>
                        </div>
                    </div>
                    <div className='Card'>
                        <img className='CardImg' src="https://www.deffo.com.ar/wp-content/uploads/2022/07/GV-N308TVISION-OC-12GD-1.webp" alt="Imagen 1" />
                        <div>
                            <p className='CardText'>Multiprocesadores integrados con interfaz de memoria, sistema de refrigeración, ventiladores giratorios alternos Placa trasera metálica de protección</p>
                            <button class='CardButton'><Link to='/Products'>View More</Link></button>
                        </div>
                    </div>
                    <div className='Card'>
                        <img className='CardImg' src="https://http2.mlstatic.com/D_NQ_NP_662444-MLA41254447964_032020-O.webp" alt="Imagen 1" />
                        <div>
                            <p className='CardText'>Auriculares gamer inalámbricos Corsair Virtuoso RGB Wireless SE espresso con luz rgb LED.</p>
                            <button class='CardButton'><Link to='/Products'>View More</Link></button>
                        </div>
                    </div>
                    <div className='Card'>
                        <img className='CardImg' src="https://gorilagames.com/img/Public/1019-producto-corsari-blanca-8914.jpg" alt="Imagen 1" />
                        <div>
                            <p className='CardText'>Memoria RAM Vengeance RGB Pro gamer color negro 16GB 2 Corsair CMW16GX4M2C3200C16</p>
                            <button class='CardButton'><Link to='/Products'>View More</Link></button>
                        </div>
                    </div>
                    <div className='Card'>
                        <img className='CardImg' src="https://http2.mlstatic.com/D_NQ_NP_2X_796880-MLA43468491094_092020-F.webp" alt="Imagen 1" />
                        <div>
                            <p className='CardText'>Cooler Cpu Id-cooling Se-902-sd Intel 1200 115x Y Amd Am4</p>
                            <button class='CardButton'><Link to='/Products'>View More</Link></button>
                        </div>
                    </div>
                    <div className='Card'>
                        <img className='CardImg' src="https://http2.mlstatic.com/D_NQ_NP_2X_825550-MLA51822045233_102022-F.webp" alt="Imagen 1" />
                        <div>
                            <p className='CardText'>Auriculares Gamer Redragon H220 Themis Negro Con Luz Led Roja</p>
                            <button class='CardButton'><Link to='/Products'>View More</Link></button>
                        </div>
                    </div>
                    <div className='Card'>
                        <img className='CardImg' src="https://computelweb.com/wp-content/uploads/2020/12/G903-FRENTE.png" alt="Imagen 1" />
                        <div>
                            <p className='CardText'>Tiene un sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.</p>
                            <button class='CardButton'><Link to='/Products'>View More</Link></button>
                        </div>
                    </div>
                    <div className='Card'>
                        <img className='CardImg' src="https://www.comeros.com.ar/wp-content/uploads/2022/01/Comeros-ASUS-ROG-STRIX-RTX3060TI-O8G-V2-GAMING-fcc87b-1.webp" alt="Imagen 1" />
                        <div className='CardB'>
                            <p className='CardText'>ASUS ROG Strix RTX 3060 Ti</p>
                            <button class='CardButton'><Link to='/Products'>View More</Link></button>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}