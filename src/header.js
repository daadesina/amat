import advans from './advans.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Header = () => {
    return ( 
        <body style={{display: 'flex', justifyContent:'center'}}>
            <section className="homeHeader">                
                <ul className='homeLogo'>
                    <li>
                        <img src={advans} alt='Advans' className='homeLogoImage'/>
                    </li>
                    <li>
                        <div style={{fontWeight: "bolder"}}>Advans Medical And Trendy<br/>Health Consultancy </div>
                    </li>
                </ul>
                <ul className='homeNav'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                </ul>
                <ul className='homeLogin'>
                    <li className='text-blue-700'>Log In</li>
                    <li className='border-1 border-solid border-blue-700 rounded'><Link to='./signup'>Sign Up</Link></li>
                </ul> 
            </section>
        </body>
     );
}
 
export default Header;