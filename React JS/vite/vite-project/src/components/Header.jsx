function Header() {
    var home = "Home";
    var about = "About Us";
    var contact = "Contact Us";

    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
            <nav className="container mx-auto px-6 py-4"> 
                <ul className="flex justify-center space-x-8">
                    <li className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300 cursor-pointer text-lg">
                        {home}
                    </li>
                    <li className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300 cursor-pointer text-lg">
                        {about}
                    </li>
                    <li className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300 cursor-pointer text-lg">
                        {contact}
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;