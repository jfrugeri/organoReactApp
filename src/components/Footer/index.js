import './Footer.css';

const Footer = () => {
    return (
<footer className="footer">
    <div className="iconesContainer">
        

        <a href="https://www.facebook.com/juan.costa2013" target="_blank" rel="noopener noreferrer">
            <img src="../../assets/images/fb.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com/_juan.costa" target="_blank" rel="noopener noreferrer">
            <img src="../../assets/images/ig.png" alt="Instagram" />
        </a>
    </div>
    <div className="logoContainer">
        <img src="../../assets/images/logo.png" alt="Organo Logo" />
    </div>
    
    <p>Desenvolvido por Juan Frugeri.</p>
</footer>

    );
};

export default Footer;
