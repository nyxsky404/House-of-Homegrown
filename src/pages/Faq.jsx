import Layout from "@/components/layout/Layout"
import Header from "@/components/sections/Header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5-7 business days across India. We ship from various artisan locations, so delivery times may vary slightly based on your location. You'll receive a tracking number once your order is dispatched.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes! We offer free shipping on all orders above ₹999. For orders below this amount, a flat shipping fee of ₹99 applies.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 14 days of delivery for unused items in original packaging. Handmade items may have minor variations which are not considered defects. Custom or personalized items cannot be returned.",
  },
  {
    question: "Are your products handmade?",
    answer:
      "Yes, every product in our collection is handcrafted by skilled artisans across India. Each piece carries the unique touch of its maker, which means slight variations are natural and add to the authenticity.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards, UPI (GPay, PhonePe, Paytm), net banking, and Cash on Delivery. All transactions are secured with 256-bit SSL encryption.",
  },
];


const Faq = () => {
  return (
    <Layout >
      <Header
      title="Frequently Asked Questions"
      description="Everything you need to know about shopping with House of Homegrown. "/>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            
              <div>
                <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
                  {Faqs.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`item-${idx}`}
                      className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow"
                    >
                      <AccordionTrigger className="text-left font-heading text-lg font-medium text-foreground hover:text-primary py-5 hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

          </div>
        </div>
      </section>

    </Layout>
  )
}

export default Faq