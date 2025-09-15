import { Link } from "wouter";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">ITET Giacinto Girardi</div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Istituto Tecnico Economico Tecnologico<br/>
              Via Kennedy, 29 - Cittadella (PD)<br/>
              Da oltre 40 anni formiamo i professionisti del futuro con competenza e passione.
            </p>
            <div className="flex space-x-4">
              <div className="bg-primary p-3 rounded-lg hover:bg-primary/80 cursor-pointer transition-colors">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="bg-primary p-3 rounded-lg hover:bg-primary/80 cursor-pointer transition-colors">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="bg-primary p-3 rounded-lg hover:bg-primary/80 cursor-pointer transition-colors">
                <Youtube className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Indirizzi</h4>
            <div className="space-y-2 text-background/80">
              <div><Link href="/afm" className="hover:text-background transition-colors">AFM</Link></div>
              <div><Link href="/rim" className="hover:text-background transition-colors">RIM</Link></div>
              <div><Link href="/sia" className="hover:text-background transition-colors">SIA</Link></div>
              <div><Link href="/cat" className="hover:text-background transition-colors">CAT</Link></div>
              <div><Link href="/turismo" className="hover:text-background transition-colors">Turismo</Link></div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Utili</h4>
            <div className="space-y-2 text-background/80">
              <div>
                <button 
                  onClick={() => handleScrollTo("#eventi")} 
                  className="hover:text-background transition-colors text-left"
                >
                  Open Day e Mini-Stage
                </button>
              </div>
              <div>
                <button 
                  onClick={() => handleScrollTo("#contatti")} 
                  className="hover:text-background transition-colors text-left"
                >
                  Contatti
                </button>
              </div>
              <div>
                <button 
                  onClick={() => handleScrollTo("#testimonianze")} 
                  className="hover:text-background transition-colors text-left"
                >
                  Testimonianze
                </button>
              </div>
              <div>
                <button 
                  onClick={() => handleScrollTo("#faq")} 
                  className="hover:text-background transition-colors text-left"
                >
                  Domande Frequenti
                </button>
              </div>
              <div><Link href="/" className="hover:text-background transition-colors">Home</Link></div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2025 ITET Giacinto Girardi. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
