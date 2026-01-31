import Cards from "../sections/Cards"
import { Leaf, HandMetal, Flag } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Eco-friendly materials and processes that respect our planet",
  },
  {
    icon: HandMetal,
    title: "Handmade",
    description: "Crafted by skilled artisans preserving traditional techniques",
  },
  {
    icon: Flag,
    title: "100% Indian",
    description: "Supporting local communities and Swadeshi manufacturing",
  },
];

const WhyChoose = () => {
  return (
    <Cards 
    title="Why Choose Us"
    description="Every purchase supports India's artisan communities and sustainable practices"
    content={features}/>
  )
}

export default WhyChoose