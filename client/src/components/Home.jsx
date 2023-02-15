import Card from './Card'
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
                        <img src={asus} class="d-block w-80" alt="" />
                        </div>
                        <div class="carousel-item">
                        <img src={Ryzen} class="d-block w-80" alt="" />
                        </div>
                        <div class="carousel-item">
                        <img src={samsung} class="d-block w-80" alt="" />
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


            
            <div className="CardContainer">
                <Card/>
            </div>
        </div>
    )
}