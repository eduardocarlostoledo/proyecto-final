import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export const Footer = () => {
    return (
        <footer className='ContainerFooter'>
            <div className='ContainerLogo'>
                <div className='Logo'>
                    <h3 className='Computer'>Computer Store</h3>
                    <img width="60px" src="https://static.vecteezy.com/system/resources/thumbnails/009/096/946/small/monitor-screen-computer-with-colorful-rainbow-bubble-illustration-logo-design-vector.jpg" alt="" />
                    {/* logos */}
                </div>
                {/* <div>
                    <h6>Franco Chaparro</h6>
                    <p>{" "} <a href="https://www.linkedin.com/in/franco-chaparro-134743252/">LinkedIn{" "}</a>
                    </p>
                </div>
                <div>
                    <h6>Lucia Radwanski</h6>
                    <p>{" "} <a href="https://www.linkedin.com/in/lradw/">LinkedIn{" "}</a>
                    </p>
                </div>
                <div>
                    <h6>Leandro Kronsteiner</h6>
                    <p>{" "} <a href="https://www.linkedin.com/in/leankrn/">LinkedIn{" "}</a>
                    </p>
                </div>
                <div>
                    <h6>Eduardo Toledo</h6>
                    <p>{" "} <a href="https://www.linkedin.com/in/eduardo-toledo-639ab198/">LinkedIn{" "}</a>
                    </p>
                </div>
                <div>
                    <h6>Liam Perez Lupia</h6>
                    <p>{" "} <a href="https://www.linkedin.com/in/liam-perez-lupia-33a189257/">LinkedIn{" "}</a>
                    </p>
                </div>
                <div>
                    <h6>Laia Perez Lupia</h6>
                    <p>{" "} <a href="https://www.linkedin.com/in/laia-m%C3%ADa-perez-029531245/">LinkedIn{" "}</a>
                    </p>
                </div>
                <div>
                    <h6>Claudio Bernal</h6>
                    <p>{" "} <a href="https://www.linkedin.com/in/claudio-andres-bernal-denis-148283234/">LinkedIn{" "}</a>
                    </p>
                </div> */}
                <Link className='LinkMembers' to="/about">
              <h3><strong> Members </strong></h3>    
                </Link>
            </div>
                        <p className='Copyright' >Copyright ©. Computer store.</p> 
        </footer>
    
    )
}