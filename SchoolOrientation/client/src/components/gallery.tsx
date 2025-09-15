export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Modern computer classroom"
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Students collaborating in classroom"
    },
    {
      src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Modern school building facade"
    },
    {
      src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Students working in computer laboratory"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">La Nostra Scuola</h2>
          <p className="text-xl text-muted-foreground">Scopri i nostri spazi e le nostre attività</p>
        </div>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <img 
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-xl shadow-lg w-full h-48 object-cover animate-scale-on-hover cursor-pointer"
              data-testid={`gallery-image-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
