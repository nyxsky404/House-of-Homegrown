import Layout from "@/components/layout/Layout";
import { useParams } from "react-router";
import NotFound from "./NotFound";

const legalContent = {
  privacy: {
    title: "Privacy Policy",
    description: [
      "At House of Homegrown, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.",
      "INFORMATION WE COLLECT",
      "We may collect information about you in a variety of ways including personal data you provide (name, email, shipping address, payment information) and automatically collected data (IP address, browser type, device information).",
      "HOW WE USE YOUR INFORMATION",
      "We use the information we collect to process your orders, communicate with you about orders and promotions, improve our website and services, and comply with legal obligations.",
      "DATA SECURITY",
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      "YOUR RIGHTS",
      "You have the right to access, correct, or delete your personal information. Contact us at privacy@houseofhomegrown.in for any requests.",
    ],
  },
  terms: {
    title: "Terms of Service",
    description: [
      "Welcome to House of Homegrown. By accessing and using our website, you accept and agree to be bound by these Terms of Service.",
      "PRODUCTS AND PRICING",
      "All products are handmade and may have slight variations. Prices are in Indian Rupees (INR) and include applicable taxes unless otherwise stated.",
      "ORDERS AND PAYMENT",
      "We accept major credit/debit cards and UPI payments. Order confirmation will be sent via email. We reserve the right to refuse or cancel orders.",
      "INTELLECTUAL PROPERTY",
      "All description on this website including images, text, and designs are the property of House of Homegrown and protected by copyright laws.",
      "LIMITATION OF LIABILITY",
      "House of Homegrown shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.",
    ],
  },
  shipping: {
    title: "Shipping Policy",
    description: [
      "FREE SHIPPING",
      "We offer free shipping on all orders above ₹999 within India. Orders below ₹999 incur a flat shipping fee of ₹99.",
      "PROCESSING TIME",
      "Orders are processed within 2-3 business days. Handmade items may take up to 5-7 business days to prepare.",
      "DELIVERY TIME",
      "Standard delivery takes 5-7 business days for metro cities and 7-10 business days for other areas. Express shipping is available at checkout.",
      "TRACKING",
      "You will receive a tracking number via email once your order ships. Track your package through our website or the courier's tracking page.",
      "INTERNATIONAL SHIPPING",
      "We currently ship only within India. International shipping will be available soon.",
    ],
  },
  returns: {
    title: "Returns & Refunds",
    description: [
      "RETURN POLICY",
      "We accept returns within 7 days of delivery for unused items in original packaging. Contact support@houseofhomegrown.in to initiate a return.",
      "NON-RETURNABLE ITEMS",
      "Food and wellness products, personalized items, and sale items are non-returnable for hygiene and safety reasons.",
      "REFUND PROCESS",
      "Once we receive and inspect the returned item, refunds will be processed within 5-7 business days to your original payment method.",
      "EXCHANGES",
      "For exchanges, please return the original item and place a new order. We'll prioritize processing your exchange.",
      "DAMAGED ITEMS",
      "If you receive a damaged item, contact us within 48 hours with photos. We'll arrange a replacement or full refund.",
    ],
  },
    artisans: {
    title: "Artisan Partners",
    description: [
      "At House of Homegrown, our artisans are at the heart of everything we create. We collaborate with skilled craftspeople from across India, celebrating their heritage while bringing their timeless artistry to modern homes.",
      "OUR COMMITMENT TO ARTISANS",
      "We work directly with artisan communities to ensure fair wages, safe working conditions, and long-term opportunities. By eliminating unnecessary middlemen, we help artisans receive the recognition and compensation they truly deserve.",
      "PRESERVING TRADITIONAL CRAFTS",
      "India’s craft traditions are rich yet vulnerable. Through thoughtful partnerships, we help preserve techniques passed down through generations while supporting innovation that keeps these crafts relevant in today’s world.",
      "EMPOWERING COMMUNITIES",
      "Every purchase contributes to sustainable livelihoods for artisan families. We focus on building lasting relationships that promote financial independence, skill development, and community growth.",
      "HANDMADE WITH PURPOSE",
      "Our products carry the story of the hands that made them. Slight variations are a mark of authenticity, reflecting the care, patience, and craftsmanship behind each piece.",
    ],
  },
  sustainability: {
    title: "Sustainability",
    description: [
      "Sustainability is not a trend for us — it is a responsibility. At House of Homegrown, we design every product with respect for the planet, ensuring that beauty and functionality never come at the cost of the environment.",
      "RESPONSIBLE MATERIALS",
      "We prioritize natural, recycled, and ethically sourced materials wherever possible. From eco-friendly fabrics to low-impact dyes, our choices are guided by reducing environmental harm.",
      "LOW-IMPACT PRODUCTION",
      "Our production processes focus on minimizing waste, conserving water, and lowering carbon footprint. Small-batch manufacturing helps prevent overproduction while maintaining high quality.",
      "PLASTIC-FREE PACKAGING",
      "We are committed to reducing plastic use through recyclable, biodegradable, and minimal packaging solutions that protect both your products and the planet.",
      "A GREENER FUTURE",
      "Sustainability is a continuous journey. We actively seek better materials, smarter processes, and responsible partnerships to create a future where conscious consumption becomes the norm.",
    ],
  },
};

const Legal = () => {
    const {page} = useParams()
    const content = legalContent[page || "privacy"]

    if (!content){
        return <NotFound/>
    }

  return (
    <Layout>
        <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
                <h1 className="font-heading text-3xl lg:text-display-sm font-semibold text-foreground mb-6">{content.title}</h1>
                {content.description.map((item, idx)=>{
                    const isHeading = item === item.toUpperCase()
                    return isHeading? (
                    <h2 
                      key={idx} 
                      className=" font-heading text-2xl font-semibold text-foreground mt-8 mb-4">{item}</h2>)
                      : 
                      (<p 
                        key={idx}
                        className="text-muted-foreground mb-4 leading-relaxed"
                        >{item}</p>)
                    })}
            </div>
        </section>
    </Layout>
  )
}

export default Legal