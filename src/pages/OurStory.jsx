import Layout from "@/components/layout/Layout"
import Header from "@/components/sections/Header"
import { Leaf, Heart, Users, Globe } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description:
      "Sustainability is at the heart of everything we create. From responsibly sourced natural materials to low-impact production methods, every detail is thoughtfully designed to reduce environmental harm. We prioritize eco-friendly dyes, eliminate plastic wherever possible, and choose packaging that is recyclable or biodegradable — ensuring your purchase supports a healthier planet for generations to come.",
  },
  {
    icon: Heart,
    title: "Preserving Heritage",
    description:
      "India’s craft traditions carry stories that span centuries, and we are committed to keeping them alive. By collaborating directly with skilled artisan families, we help protect rare techniques from fading away in a fast-paced world. Each product reflects patience, cultural richness, and human touch — allowing you to own something truly meaningful while supporting the continuation of timeless craftsmanship.",
  },
  {
    icon: Users,
    title: "Fair Trade Always",
    description:
      "Behind every product is a community of talented artisans who deserve respect, stability, and opportunity. We follow fair trade practices that ensure transparent partnerships, ethical working conditions, and wages that empower families to thrive. When you choose us, you contribute to sustainable livelihoods and help create a future where craftsmanship is valued and rewarded.",
  },
  {
    icon: Globe,
    title: "Made in India",
    description:
      "Rooted in the spirit of Swadeshi, our products celebrate the diversity and ingenuity of Indian craftsmanship. Every fabric woven, every piece handcrafted, and every ingredient prepared reflects local expertise and pride. By producing entirely within India, we strengthen local economies, reduce transportation impact, and deliver authenticity you can see and feel in every creation.",
  },
];



const timeline = [
  {
    year: "2020",
    title: "The Seed Was Planted",
    description:
      "During the pandemic, we witnessed artisans losing their livelihoods. We knew we had to act.",
  },
  {
    year: "2021",
    title: "First Artisan Partnerships",
    description:
      "Connected with 15 artisan families across Rajasthan, Gujarat, and West Bengal.",
  },
  {
    year: "2022",
    title: "House of Homegrown Launches",
    description:
      "Our platform went live with 50 products spanning Roti, Kapda, and Makan.",
  },
  {
    year: "2024",
    title: "Growing Together",
    description:
      "Now partnered with 100+ artisans, impacting 500+ families across 8 states.",
  },
];

const About = () => {
  return (
    <Layout>
      <Header
      title="Our Story"
      description="We believe the things that fill our homes and lives should tell a story of the hands that made them, the earth they came from, and the culture they carry."/>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
              <p className="font-body text-sm font-medium text-primary tracking-widest uppercase mb-3">
                Our Philosophy
              </p>
              <h2 className="font-heading text-3xl lg:text-display-sm font-semibold text-foreground mb-6">
                Roti, Kapda aur Makan
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  These three words — Food, Clothing, and Shelter — represent the fundamental needs of human life. In India, they also represent centuries of craft, wisdom, and sustainable living.
                </p>
                <p>
                  At House of Homegrown, we've reimagined these essentials for the modern conscious consumer. We source directly from artisan communities who have perfected their craft over generations, bringing you products that are not just beautiful, but meaningful.
                </p>
                <p>
                  Every purchase you make is a vote for sustainability, fair trade, and the preservation of India's incredible artisanal heritage.
                </p>
              </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">

            <h2 className="font-heading text-3xl lg:text-display-sm font-semibold text-foreground mb-12">
              What We Stand For
            </h2>

          <div>
            {values.map((item, idx)=>
              <div key={idx} >
                  <h2 className=" font-heading text-2xl font-semibold text-foreground mt-8 mb-4">{item.title}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
              </div>
                )}
          </div>
        </div>
        </div>
      </section>



    </Layout>
  )
}

export default About