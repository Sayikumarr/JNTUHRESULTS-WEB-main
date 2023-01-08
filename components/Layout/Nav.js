import Image from 'next/image'
import Link from 'next/link'
import Hr from '../Hr/Hr'
const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}


const Nav = ()=>
{

    return (
    <>
       <header className="py-3 mb-4 border-bottom">
			<div className="container d-flex flex-wrap justify-content-center">
			  <Link to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
				<svg className="bi me-2" width="40" height="20" ><img height="70" src="https://github.com/Sayikumarr/Sayikumarr/blob/main/logo.png?raw=true" alt="@TechBetainfo" /></svg>
			  </Link>
			  <div className="col-12 col-lg-auto mb-3 mb-lg-0 ">
	
				<a className="btn btn-primary btn-lg btn-floating" style="background-color: #3b5998;" href="https://www.facebook.com/saikumar.mudhiraj.7262" role="button"
				  ><i className="fab fa-facebook-f"></i
				></a>

				<a className="btn btn-primary btn-lg btn-floating" style="background-color: #55acee;" href="https://twitter.com/masaikumar789" role="button"
				  ><i className="fab fa-twitter"></i
				></a>

				<a className="btn btn-primary btn-lg btn-floating" style="background-color: #dd4b39;" href="mailto: masaikumar19@gmail.com" role="button"
				  ><i className="fab fa-google"></i
				></a>

				<a className="btn btn-primary btn-lg btn-floating" style="background-color: #ac2bac;" href="https://www.instagram.com/sayikumarr/" role="button"
				  ><i className="fab fa-instagram"></i
				></a>

				<a className="btn btn-primary btn-lg btn-floating" style="background-color: #0082ca;" href="https://www.linkedin.com/in/sai-kumar-mudhiraj-431446208/" role="button"
				  ><i className="fab fa-linkedin-in"></i
				></a>

				<a className="btn btn-primary btn-lg btn-floating" style="background-color: #ed302f;" href="#!" role="button"
				  ><i className="fab fa-youtube"></i
				></a>

				<a className="btn btn-primary btn-lg btn-floating" style="background-color: #333333;" href="#!" role="button"
				  ><i className="fab fa-github"></i
				></a>
				
				<a className="btn btn-primary btn-lg btn-floating" style="background-color: #0088cc;" href="https://t.me/Sayikumarr" role="button"
				  ><i className="fab fa-telegram"></i
				></a>
				
				<a className="btn btn-primary btn-lg btn-floating" style="background-color: #25d366;" href="https://wa.me/917675807262" role="button"
				  ><i className="fab fa-whatsapp"></i
				></a>
			  </div>
			</div>
		</header>
    </>
    )
}
export default Nav;
