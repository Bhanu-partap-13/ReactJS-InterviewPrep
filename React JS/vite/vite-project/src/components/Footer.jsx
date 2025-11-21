function Footer() {
     var home = "Home";
     var about = "About Us";
     var contactUs = "Contact Us";

     return(
        <footer>
        <nav>
                <ul>
               <li>{home}</li>
               <li>{about}</li>
               <li>{contactUs}</li>     
            </ul>
        </nav>
        </footer>
     )
}

export default Footer;