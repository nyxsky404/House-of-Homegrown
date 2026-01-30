import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Category from "@/components/home/Category";
import WhyChoose from "@/components/home/WhyChoose";
import CTA from "@/components/home/CTA";

const Home = () => {
  return (
    <Layout>
        <Hero/>
        <Category/>
        <WhyChoose/>
        <CTA/>
    </Layout>
  )
}

export default Home