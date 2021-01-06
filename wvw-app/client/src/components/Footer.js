import logo from '../style/Assets/logo.png';

export default function Footer() {
    let currentYear = new Date().getFullYear();
    return (

        <footer>
            <img src={logo} alt="Logo" />
    <p>©<span className="currentYear">{currentYear}</span></p>
        </footer>

    )
}