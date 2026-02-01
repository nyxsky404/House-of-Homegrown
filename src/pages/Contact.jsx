import Layout from "@/components/layout/Layout"
import Header from "@/components/sections/Header"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@houseofhomegrown.in", "support@houseofhomegrown.in"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "Mon-Sat, 10am-6pm IST"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Artisan Lane, Jaipur", "Rajasthan, India 302001"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Saturday: 10am - 6pm", "Sunday: Closed"],
  },
];

const Contact = () => {
  return (
    <Layout>
      <Header 
      title="Get in Touch"
      description="Have a question about our products, artisan partnerships, or just want to say hello? We'd love to hear from you."/>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center">
            <div>
                {/* <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
                  Contact Information
                </h2> */}
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4 ">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-medium text-foreground text-2xl">
                          {item.title}
                        </h2>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-xl">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div></div>
              </div>
              </div>
      </section>

    </Layout>
  )
}

export default Contact