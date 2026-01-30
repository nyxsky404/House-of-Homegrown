import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";

const navLinks = [
  {label: "Shop",href: "/shop",},
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <header>
        <nav>
            <div>
                <Link to="/">
                    <span>House of Homegrown</span>
                </Link>

                <div>
                    {navLinks.map((item)=> (
                        <div key={item.label}>
                            <Link to={item.href}>
                                {item.label}
                            </Link>
                        </div>
                    ))}
                </div>

                <div>
                    <Link to="/cart">
                        <ShoppingBag/>
                    </Link> 
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar