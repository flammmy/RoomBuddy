import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p className="footer-content">
                        Room Buddy: Your go-to platform for hassle-free hotel listings and seamless booking experiences.
                        </p>
                    </div>
                    <div className="col-md-5 mr-4">
                        <h2 className="footer-heading">Get In Touch</h2>
                        <p className="footer-address">
                            <i className="fa-solid fa-location-dot footer-icon"></i> Silver line , Ayodhya road<br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Lucknow - 226010<br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Uttar Pradesh, INDIA
                        </p>
                        <p className="footer-contact">
                            <i className="fa-solid fa-square-phone-flip footer-icon"></i> (+91)919971149, (+91)8299507908<br />
                            <i className="fa-solid fa-at footer-icon"></i> roombuddy@gmail.com
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h2 className="footer-heading">Social Media</h2>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/analyzelko/" className="footer-icon"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://api.whatsapp.com/send?phone=+919453193268" className="footer-icon"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="https://twitter.com/analyzeinfotech" className="footer-icon"><i className="fa-brands fa-twitter"></i></a>
                            <a href="tel:+919453193268" className="footer-icon"><i className="fa-solid fa-phone-volume"></i></a>
                            <a href="https://www.youtube.com/@analyzeinfotech/about" className="footer-icon"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent: 'space-between'}} >
                   <div>Designed by Ashutosh Dubey And Abhishek </div> 
                   <div>Made with ❤</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
