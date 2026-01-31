import { Instagram, Github } from "lucide-react";
import { Link } from "react-router";

const footerLinks = {
  shop: [
    { label: "Roti (Wellness)", href: "/shop/roti" },
    { label: "Kapda (Textiles)", href: "/shop/kapda" },
    { label: "Makan (Home)", href: "/shop/makan" },
    { label: "Shop All", href: "/shop/all" },
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
  { icon: Github, href: "https://github.com/nyxsky404/House-of-Homegrown", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
            {/* Top */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                <div className="col-span-2 md:col-span-1">
                    <Link to="/" className="inline-block mb-4">
                        <span className="font-heading text-xl font-semibold">
                            House of <span className="text-primary/60">Homegrown</span>
                        </span>
                    </Link>
                    <p className="text-primary-foreground/70 text-sm mb-6">Rooted in India. Crafted with purpose. Built for tomorrow.</p>
                    <div className="flex space-x-4">
                        {socialLinks.map((item)=>(
                            <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                            >
                                <item.icon className="w-4 h-4"/>
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="font-heading text-lg font-semibold mb-4">Shop</p>
                    <ul className="space-y-3">
                        {footerLinks.shop.map((item)=>(
                            <li key={item.label}>
                                <Link 
                                to={item.href}
                                className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                                    {item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="font-heading text-lg font-semibold mb-4">Company</p>
                    <ul className="space-y-3">
                        {footerLinks.company.map((item)=>(
                            <li key={item.label}>
                                <Link 
                                to={item.href}
                                className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                                    {item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="font-heading text-lg font-semibold mb-4">Legal</p>
                    <ul className="space-y-3">
                        {footerLinks.legal.map((item)=>(
                            <li key={item.label}>
                                <Link 
                                to={item.href}
                                className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                                    {item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>





            </div>
            
            {/* Bottom */}
            <div className="mt-12 pt-8 border-t border-muted-foreground/20">
                <p className="text-primary-foreground/60 text-sm">© {new Date().getFullYear()} House of Homegrown. Made with ❤️ in India.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer