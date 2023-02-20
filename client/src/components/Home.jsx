import '../styles/Home.css';
import asus from '../images/asusMonitor.jpg'
import Ryzen from '../images/Ryzen7mil.jpg'
import samsung from '../images/samsungMonitores.jpg'


/** Coloque un diseño de Boostrap para las Imagenes */
export const Home = () => {
    
    return(
        <div className="HomeContainer">
            <div className='ContainerImages'>
                 {/* Acá esta el Boostrap */}
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={asus} class="d-block w-100" alt="" />
                        </div>
                        <div class="carousel-item">
                        <img src={Ryzen} class="d-block w-100" alt="" />
                        </div>
                        <div class="carousel-item">
                        <img src={samsung} class="d-block w-100" alt="" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div> 
            <section className="post" id="post">
                <div className="title">
                    <h2>Products</h2>
                </div>
                <div className="contentBx">
                    <div className="postColumn">
                        <div className="postBox extraHeight">
                            <div className="img">
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_664916-MLA52913909469_122022-F.webp" alt="" className='cover'/>
                            </div>
                            <div className="textBox">
                                <h3>Auriculares gamer inalámbricos Corsair Virtuoso RGB Wireless SE espresso con luz rgb LED</h3>
                                <a href="/products" class="btnHome">Read more</a>
                            </div>
                        </div>
                        <div className="postBox">
                            <div class="img">
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_912771-MLA48049398762_102021-F.webp" alt="" className='cover'/>
                            </div>
                            <div className="textBox">
                                <h3>Memoria RAM Vengeance RGB Pro gamer color negro 16GB 2 Corsair CMW16GX4M2C3200C16</h3>
                                <a href="/products" class="btnHome">Read more</a>
                            </div>
                        </div>
                        <div class="postBox">
                            <div className="img">
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_601095-MLA53751174902_022023-F.webp" alt="" className='cover'/>
                            </div>
                            <div class="textBox">
                                <h3>Funda Libro Para Tablet Samsung A7 Lite T220 Cover</h3>
                                <a href="/products" class="btnHome">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="postColumn ">
                        <div className="postBox">
                            <div className="img">
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_796880-MLA43468491094_092020-F.webp" alt="" className='cover'/>
                            </div>
                            <div class="textBox">
                                <h3>Cooler Cpu Id-cooling Se-902-sd Intel 1200 115x Y Amd Am4</h3>
                                <a href="/products" class="btnHome">Read more</a>
                            </div>
                        </div>
                        <div className="postBox extraHeight">
                            <div class="img">
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_657637-MLA51822045232_102022-F.webp" alt="" className='cover'/>
                            </div>
                            <div className="textBox">
                                <h3>Auriculares Gamer Redragon H220 Themis Negro Con Luz Led Roja</h3>
                                <a href="/products" class="btnHome">Read more</a>
                            </div>
                        </div>
                        <div className="postBox">
                            <div class="img">
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_884180-MLA42143887390_062020-F.webp" alt="" className='cover'/>
                            </div>
                            <div className="textBox">
                                <h3>Notebook Acer Aspire 3 Dual Core 8gb/ssd 240 L14.01 W10</h3>
                                <a href="/products" class="btnHome">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="postColumn">
                        <div className="postBox">
                            <div class="img">
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_676450-MLA46168520744_052021-F.webp" alt="" className='cover'/>
                            </div>
                            <div className="textBox">
                                <h3>Notebook Asus Vivo Ideal Diseño Ssd 256 Teclado Ilum Win 10</h3>
                                <a href="/products" class="btnHome">Read more</a>
                            </div>
                        </div>
                        <div className="postBox">
                            <div className="img">
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_711390-MLA52684067237_122022-F.webp" alt="" className='cover'/>
                            </div>
                            <div className="textBox">
                                <h3>Placa de video AMD PowerColor  Red Devil Radeon RX 6700 Series RX 6700 XT AXRX 6700XT 12GBD6-3DHE/OC 12GB</h3>
                                <a href="/products" class="btnHome">Read more</a>
                            </div>
                        </div>
                        <div className="postBox extraHeight">
                            <div class="img">
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_627990-MLA41919075615_052020-F.webp" alt="" className='cover'/>
                            </div>
                            <div className="textBox">
                                <h3>Mother Gigabyte Amd Ga-a320m-h Am4 Gamer Ddr4</h3>
                                <a href="/products" class="btnHome">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="title">
                    <a href="#" className="btnHome mgt60">Load More</a>
                </div>
            </section>
        </div>
    )
}


