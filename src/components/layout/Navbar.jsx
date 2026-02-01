import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const navLinks = [
  {label: "Shop",href: "/shop",},
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
    // Todo: Mobile Responsiveness
    // todo: cart item count

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <nav  className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
                <Link to="/" className="flex items-center space-x-2">
                    <span className="font-heading text-xl lg:text-2xl font-semibold text-foreground tracking-tight">
                        House of <span className="text-primary">Homegrown</span>
                    </span>
                </Link>

                <div className="hidden sm:flex items-center space-x-8">
                    {navLinks.map((item)=> (
                        <div key={item.label}>
                            <Link 
                            to={item.href} 
                            className="font-body text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
                                {item.label}
                            </Link>
                        </div>
                    ))}
                </div>


                <div className="flex justify-center items-center gap-6">
                <div className="sm:hidden">
                    <Link 
                    to="/shop"
                    className="font-body text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
                        Shop
                    </Link>
                </div>

                    <Link to="/cart" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                        <ShoppingBag className="w-5 h-5"/>
                    </Link> 
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar