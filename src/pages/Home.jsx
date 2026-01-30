import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Category from "@/components/sections/Category";
import WhyChoose from "@/components/sections/WhyChoose";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

const Home = () => {
  return (
    <Layout>
        <Hero/>
        <Category/>
        <WhyChoose/>
        <FAQ/>
        <CTA/>
    </Layout>
  )
}

export default Home