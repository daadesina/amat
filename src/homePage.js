import advans from './advans.png';
import amat from './amat.png';
const HomePage = () => {
    return ( 
        <body className="homeContainer font-serif">
            <section className="homeHeader">
                <ul className='homeLogo' style={{width: "23vw"}}>
                    <li>
                        <img src={advans} alt='Advans' className='homeLogoImage'/>
                    </li>
                    <li>
                        <div style={{fontSize:'1vw', fontWeight: "bolder"}}>Advans Medical And Trendy Health Consultancy </div>
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
                    <li className='border-1 border-solid border-blue-700 rounded'>Sign Up</li>
                </ul>
                
                
            </section>
            <section className="homeContact">
                <div className='contact font-bold'>
                    <div style={{fontSize: "5vw"}}>Get our service</div>
                    <div style={{fontSize: "2vw"}}>Contact us to make a deal</div>
                    <button className='contactButton'>Contact us</button>
                </div>
            </section>
            <section className="homeDots">
                <i class="fa-solid fa-circle fa-2xs pr-6" style={{color: "#c0b6d8", fontSize: "1vw"}}></i>
                <i class="fa-solid fa-circle fa-2xs pr-6" style={{color: "#c0b6d8", fontSize: "1vw"}}></i>
                <i class="fa-solid fa-circle fa-2xs" style={{color: "#c0b6d8", fontSize: "1vw"}}></i>
            </section>
            <section className="homeCards">
                <div className='myCardContainer'>
                    <div className='myCard'>
                        <p style={{paddingBottom: "30px", fontWeight:'bold'}}>Committed To People <br/> Commited to the Future</p>
                        <p>At AMaT-HCL<i class="fa-regular fa-registered fa-2xs" style={{color: "#000000"}}></i> we provide 24/7 Medical and Health advisory and resources; and expertise advisory. We understand the challenges of manageing a busy healthcare facility. That's why we offer customized workflow automation solutions to streamline processes and impove efficiency, ultimately leading to better patient care.</p>
                    </div>
                </div>
                <div className='myCardContainer'>
                    <div className='myCard'>
                        <p style={{paddingBottom: "30px", fontWeight:'bold'}}>Affordable, accessible and <br/> quality healthcare</p>
                        <p>Empowering healthcare professionals with seamless consultation, Emergency Ambulance service, equipment supply, and workflow automation services.</p>
                    </div>
                </div>
                <div className='myCardContainer'>
                    <div className='myCard'>
                        <p style={{paddingBottom: "10px", fontWeight:'bold'}}>Live Right, Live Well <br/>A message from the heart of <br/> Advans</p>
                        <p>Our team of experienced doctors and specialists provide thorough and accurate medical consultation, ensuring the best treatment for our patients. With our advanced technology, we offer virtual consultation for the convenience of our clients.</p>
                    </div>
                </div>
            </section>
            <section className="homePrice font-sans font-bold">
                <p style={{fontSize: '2.5vw'}}>Our Pricing</p>
                <p>Our simple straightforward pricing that suits you!</p>
                <div className='price text-white'>   
                    <div>
                        <p>Free</p>
                        <p>$0</p>
                        <p><i class="fa-solid fa-check border-1 border-white rounded-5 p-0.5"></i> Email Support</p>
                        <p><i class="fa-solid fa-check border-1 border-white rounded-5 p-0.5"></i> Help center access</p>
                        <p><i class="fa-solid fa-check border-1 border-white rounded-5 p-0.5"></i> 24/7 support</p>
                    </div>
                    <div>
                        <p>Basic</p>
                        <p>$99/month</p>
                        <p><i class="fa-solid fa-check border-1 border-white rounded-5 p-0.5"></i> Consultation Services</p>
                        <p><i class="fa-solid fa-check border-1 border-white rounded-5 p-0.5"></i> Basic equipment supply</p>
                        <p><i class="fa-solid fa-check border-1 border-white rounded-5 p-0.5"></i> Basic workflow automation</p>
                    </div>
                    <div>
                        <p>Premium</p>
                        <p>$199/month</p>
                        <p><i class="fa-solid fa-check border-1 border-white rounded-5 p-0.5"></i> Consultation Services</p>
                        <p><i class="fa-solid fa-check border-1 border-white rounded-5 p-0.5"></i> Advanced equipment supply</p>
                        <p><i class="fa-solid fa-check border-1 border-white rounded-5 p-0.5"></i> Customizable workflow automation</p>
                        <p><i class="fa-solid fa-check border-1 border-white rounded-5 p-0.5"></i> Training and education programs</p>                    
                    </div>
                </div> 
            </section>
            <section className="homeFooter">
                <div>
                    <div className='footerLogo'>
                        <img src={amat} alt='amat' className='homeLogoImage' style={{width: '10vw'}}></img>
                        <span style={{width: "23vw", fontWeight: "bolder"}}>Advans Medical And Trendy Health Consultancy Limited</span>
                    </div>
                    <p>At AMaT-HCL<i class="fa-regular fa-registered fa-2xs" style={{color: "#000000"}}></i> we provide 24/7 Medical and <br/> Health advisory and resources and expertise<br/> advisory.</p>
                </div>
                <div>
                    <p style={{fontWeight: "bolder"}}>Our Services</p>
                    <p>Quality Healthcare</p>
                    <p>Telemedicine</p>
                    <p>Medical equipment sales</p>
                </div>
                <div>
                    <p style={{fontWeight: "bolder"}}>Contact Us</p>
                    <p><i className="fa-solid fa-phone fa-2xs footerPhone"></i> 055 577 8254</p>
                    <p><i class="fa-solid fa-location-dot"></i> Global, Accra-Ghana</p>
                    <p><i class="fa-regular fa-envelope"></i> amathcl2021@gmail.com</p>
                </div>
                <div>
                    <p style={{fontWeight: "bolder"}}>Other Links</p>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Services</p>
                </div>
            </section>
            <section className="homeTerms bg-secondary">
                <p>Terms and Conditions</p>
                <p><i class="fa-regular fa-copyright"></i> All Right reserved, 2024</p>
            </section>
        </body>
     );
}
 
export default HomePage;