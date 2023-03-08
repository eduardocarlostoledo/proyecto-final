import "../styles/About.css"
import linkedin_logo from "../images/Linkedin_Logo.png"
import github_logo from "../images/Github_Logo.png"
import portfolio_logo from "../images/Portfolio_Logo.png"

export default function AboutCard ({image,name,linkedin,github,portfolio}) {
    console.log(linkedin)
    return (
        <div className="integrant_card">
            {image}
            <h5 className="integrant_name">{name}</h5>
            <div>
               <a href={linkedin}><img className="link" src={linkedin_logo} target="_blank"/></a>
                {github ? <a href={github}><img className="link" src={github_logo} href={github} target="_blank"/></a> : null}
                {portfolio ? <a href={portfolio}><img className="link" src={portfolio_logo} href={portfolio} target="_blank"/></a> : null} 
            </div>
        </div>
    )
}