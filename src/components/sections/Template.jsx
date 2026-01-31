const Template = ({title, content}) => {
  return (
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">

            <h2 className="font-heading text-3xl lg:text-display-sm font-semibold text-foreground mb-12">
              {title}
            </h2>

          <div>
            {content.map((item, idx)=>
              <div key={idx} >
                  <h2 className=" font-heading text-2xl font-semibold text-foreground mt-8 mb-4">{item.title}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
              </div>
                )}
          </div>
        </div>
        </div>
  )
}

export default Template