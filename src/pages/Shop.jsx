import Layout from "@/components/layout/Layout"
import Header from "@/components/sections/Header"
import { categories, mockProducts } from "@/mockProducts/data"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Link } from "react-router";

//Todo: add pagination
// Todo: add price filter

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const [priceRange, setPriceRange] = useState({
        min : 0,
        max : 0
    })

    useEffect(()=>{
        const prices = mockProducts.map((item)=>item.price)

        setPriceRange({
            min: Math.min(...prices),
            max: Math.max(...prices)
        })
    }, [mockProducts])

    const categoryFiltered = activeCategory === "all" ? mockProducts : mockProducts.filter((item)=> (
        item.category === activeCategory
    ))

    const priceFiltered = mockProducts.filter((item)=> item.price >= priceRange.min && item.price <= priceRange.max)

      const formatPrice = (price) => {
        return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
        }).format(price);
    };

  return (
    <Layout>
        <Header 
            title="Shop the Collection" 
            description="Discover handcrafted treasures that celebrate India's rich artisanal heritage"/>

        <section className="py-8 lg:py-12">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((item)=> (
                            <Button 
                            key={item.id} 
                            onClick={() => setActiveCategory(item.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                activeCategory === item.id
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                            >
                                {item.label}
                            </Button>
                        ))}

                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                        <Filter className="w-4 h-4" />
                        Filter
                    </Button>
                </div>

                {/* Product */}
                <div className="grid gap-6 grid-cols-2 md:gird-cols-3 lg:grid-cols-4">

                    {categoryFiltered.map((item, idx)=> (
                        <div key={item.id}>
                            <Link 
                            to={`/product/${item.id}`} 
                            className={`group block`}>
                                <div className={`relative overflow-hidden rounded-lg bg-muted aspect-square`}>
                                    <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>

                                    {item.originalPrice && (
                                        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                                            Sale
                                        </span>
                                    )}
                                </div >
                                
                                <div className="mt-4">
                                    <p className="text-xs text-primary uppercase tracking-wider mb-1">
                                        {item.category === "roti" ? "Wellness" : item.category === "kapda" ? "Textiles" : "Home"}
                                    </p>
                                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                                    <div className="flex items-baseline gap-2 mt-2">
                                        <span className="font-semibold text-foreground">
                                            {formatPrice(item.price)}
                                        </span>
                                        <span className="text-sm text-muted-foreground line-through">
                                            {formatPrice(item.price)}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    </Layout>
  )
}

export default Shop