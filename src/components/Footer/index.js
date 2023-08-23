import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="iconesContainer">
                <img src="../../assets/images/fb.png" alt="Facebook"/>
                <img src="../../assets/images/tw.png" alt="Twitter"/>
                <img src="../../assets/images/ig.png" alt="Instagram"/>
            </div>
            <div className="logoContainer">
                <img src="../../assets/images/logo.png" alt="Organo Logo"/>
            </div>
            
            <p>Desenvolvido por Juan.</p>
        </footer>
    );
};

export default Footer;
