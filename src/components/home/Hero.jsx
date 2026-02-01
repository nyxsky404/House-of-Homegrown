import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-artisan-workshop.jpg";

const Hero = () => {
  return (
  <section className="relative min-h-[90vh] lg:min-h-screen flex items-center">

      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Indian artisan workshop with handloom textiles and traditional crafts"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, hsl(16 65% 55% / 0.85), hsl(30 10% 20% / 0.7))' }}
        />
        <div className="absolute inset-0 texture-overlay" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <div>
            <span className="inline-block font-body text-sm lg:text-base font-medium text-golden-light tracking-widest uppercase mb-4">
              Roti • Kapda • Makan
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-display font-semibold text-linen leading-tight mb-6">
            Rooted in India
          </h1>

          <p className="text-linen/90 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
            Discover handcrafted treasures that honour India's artisanal heritage. 
            Sustainable. Authentic. Timeless.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-linen text-foreground hover:bg-linen/90 font-medium px-8 btn-shimmer"
            >
              <Link to="/shop">
                Shop the Collection
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-linen/50 text-linen bg-linen/10 hover:bg-linen/10 font-medium px-8"
            >
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero