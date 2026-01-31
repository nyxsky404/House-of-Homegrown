const Cards = ({title, description, content}) => {

  return (
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-display-sm font-semibold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.map((item) => (
              <div
                key={item.title}
                className="bg-card p-6 rounded-xl shadow-card">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Cards