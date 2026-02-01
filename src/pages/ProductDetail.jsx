import { useState } from "react";
import { useParams } from "react-router";
import { Minus, Plus, ShoppingBag, Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Layout from "@/components/layout/Layout";
import { mockProducts } from "@/mockProducts/data";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = mockProducts[id-1];

  const handleQuantityChange = (delta) => {
    setQuantity((prev) =>
      Math.max(1, Math.min(prev + delta, product.stockCount))
    );
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">

          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImage((prev) =>
                        prev === 0 ? product.images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 flex items-center justify-center shadow-md hover:bg-card"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() =>
                      setActiveImage((prev) =>
                        prev === product.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 flex items-center justify-center shadow-md hover:bg-card"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                  {discount}% OFF
                </div>
              )}
            </div>

            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    "w-20 h-20 rounded-lg overflow-hidden border-2",
                    activeImage === index
                      ? "border-primary"
                      : "border-transparent hover:border-border"
                  )}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mt-2">
                {product.name}
              </h1>
              <p className="text-muted-foreground mt-1">{product.subtitle}</p>
            </div>


            <div className="flex items-baseline gap-3">
              <span className="font-heading text-3xl font-semibold text-foreground">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-foreground">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity === 1}
                    className="p-2 hover:bg-muted disabled:opacity-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity === product.stockCount}
                    className="p-2 hover:bg-muted disabled:opacity-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                {product.stockCount < 20 && (
                  <span className="text-sm text-primary">
                    Only {product.stockCount} left
                  </span>
                )}
              </div>


              <div className="flex gap-3">
                <Button
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium btn-shimmer"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={cn(
                    "border-border",
                    isWishlisted && "bg-primary/10 border-primary"
                  )}
                >
                  <Heart
                    className={cn(
                      "w-5 h-5",
                      isWishlisted && "fill-primary text-primary"
                    )}
                  />
                </Button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
