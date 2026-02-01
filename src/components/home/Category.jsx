import categoryRoti from "@/assets/category-roti.jpg";
import categoryKapda from "@/assets/category-kapda.jpg";
import categoryMakan from "@/assets/category-makan.jpg";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "roti",
    title: "Roti",
    subtitle: "Food & Wellness",
    description: "Organic honey, artisanal spices, traditional wellness essentials",
    image: categoryRoti,
    href: "/shop/roti",
  },
  {
    id: "kapda",
    title: "Kapda",
    subtitle: "Textiles & Clothing",
    description: "Handwoven fabrics, khadi clothing, block-printed textiles",
    image: categoryKapda,
    href: "/shop/kapda",
  },
  {
    id: "makan",
    title: "Makan",
    subtitle: "Home & Decor",
    description: "Terracotta art, brass decor, handcrafted home essentials",
    image: categoryMakan,
    href: "/shop/makan",
  },
];

const Category = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-body text-sm font-medium text-primary tracking-widest uppercase mb-3">
            Our Philosophy
          </p>
          <h2 className="font-heading text-3xl lg:text-display-sm font-semibold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The three pillars of life, reimagined through sustainable Indian craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <div key={category.id}>
              <Link
                to={category.href}
                className="group block relative overflow-hidden rounded-lg aspect-[3/4] bg-muted"
              >

                <img
                  src={category.image}
                  alt={`${category.title} - ${category.subtitle}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-all duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <span className="text-golden-light text-sm font-medium uppercase tracking-wider">
                      {category.subtitle}
                    </span>
                    <h3 className="font-heading text-3xl lg:text-4xl font-semibold text-linen mt-1 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-linen/80 text-sm mb-4 max-w-[280px]">
                      {category.description}
                    </p>
                    <div className="flex items-center text-linen font-medium text-sm group-hover:text-golden-light transition-colors">
                      <span>Explore Collection</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Category