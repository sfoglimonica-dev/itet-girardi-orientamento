import { Button } from "@/components/ui/button";
import { Info, Phone } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Il tuo futuro inizia qui
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Scopri i nostri indirizzi di studio tecnico-economici e costruisci il tuo percorso professionale all'ITET Giacinto Girardi di Cittadella.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => handleScrollTo("#indirizzi")}
                className="bg-white text-primary px-8 py-4 h-auto text-lg font-semibold hover:bg-white/90 animate-scale-on-hover"
                data-testid="button-discover-more"
              >
                <Info className="w-5 h-5 mr-2" />
                Scopri di più
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("tel:049 5971565", "_self")}
                className="border-2 border-white text-white px-8 py-4 h-auto text-lg font-semibold hover:bg-white hover:text-primary bg-transparent"
                data-testid="button-phone"
              >
                <Phone className="w-5 h-5 mr-2" />
                049 5971565
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Students collaborating in modern classroom" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold" data-testid="stat-programs">5</div>
              <div className="text-sm">Indirizzi di Studio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
