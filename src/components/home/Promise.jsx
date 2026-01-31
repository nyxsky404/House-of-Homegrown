import { Truck, RefreshCcw, Shield } from "lucide-react";

const promises = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders above ₹999",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "7-day hassle-free returns",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "100% protected transactions",
  },
];

const Promise = () => {
  return (
    <section className="bg-card p-8 lg:p-12">
    <div className="container mx-auto px-4 lg:px-8">
      <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-8">
        Our Promise
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {promises.map((item, idx) => (
          <div
            key={item.title}
            className={`flex items-center gap-4 ${idx !== promises.length - 1 ? "md:border-r md:border-border md:pr-8" : ""}`}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
        </div>

        </section>
  )
}

export default Promise