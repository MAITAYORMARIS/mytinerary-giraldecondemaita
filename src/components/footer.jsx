import '../styles/footer.css';
function Footer() {
    return (
        <footer>

            <div className="footer">

                <div className="others">
                    <h3>OTHER LINKS:</h3>
                    <p>LEGAL WARNING</p>
                    <p>PRIVACY POLICY</p>
                    <p>TERMS AND CONDITIONS</p>
                </div>
                <div className="contact">
                    <h3>CONTACT:</h3>
                    <p>+54 11-5555-8888</p>
                    <p>MYTINERARY@GMAIL.COM</p>
                    <p>AUTONOMOUS CITY OF BUENOS AIRES, ARGENTINA</p>
                </div>
            </div>
            <div className="icons-rrss">
                <button><i className="fa-brands fa-twitter"></i></button>
                <button><i className="fa-brands fa-facebook-f"></i></button>
                <button><i className="fa-brands fa-instagram"></i></button>
                <button><i className="fa-brands fa-youtube"></i></button>
            </div>
        </footer>
    )
}

export default Footer;