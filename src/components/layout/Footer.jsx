import { Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router";

const footerLinks = {
  shop: [
    { label: "New Arrivals", href: "/shop/new" },
    { label: "Roti (Food & Wellness)", href: "/shop/roti" },
    { label: "Kapda (Textiles & Clothing)", href: "/shop/kapda" },
    { label: "Makan (Home & Decor)", href: "/shop/makan" }
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Artisan Partners", href: "/artisans" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "Returns & Refunds", href: "/returns" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer>
        <div>
            {/* Top */}
            <div>
                <div>
                    <Link to="/">
                        <span>House of Homegrown</span>
                    </Link>
                    <p>Rooted in India. Crafted with purpose. Built for tomorrow.</p>
                    <div>
                        {socialLinks.map((item)=>(
                            <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            >
                                <item.icon/>
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <p>Shop</p>
                    <ul>
                        {footerLinks.shop.map((item)=>(
                            <li key={item.label}>
                                <Link to={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p>Company</p>
                    <ul>
                        {footerLinks.company.map((item)=>(
                            <li key={item.label}>
                                <Link to={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p>Legal</p>
                    <ul>
                        {footerLinks.legal.map((item)=>(
                            <li key={item.label}>
                                <Link to={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            
            {/* Bottom */}
            <div>
                <p>© {new Date().getFullYear()} House of Homegrown. Made with ♥ in India.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer