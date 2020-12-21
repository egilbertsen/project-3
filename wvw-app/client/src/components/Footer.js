

export default function Footer() {
    let currentYear = new Date().getFullYear();
    return (

        <footer>
            <h1>WvW</h1>
    <p>©<span className="currentYear">{currentYear}</span></p>
        </footer>

    )
}