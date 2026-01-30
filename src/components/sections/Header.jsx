const Header = ({title, description}) => {
  return (
      <section className="bg-muted py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
            <h1 className="font-heading text-3xl lg:text-display-sm font-semibold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
            </div>
        </div>
      </section>
  )
}

export default Header