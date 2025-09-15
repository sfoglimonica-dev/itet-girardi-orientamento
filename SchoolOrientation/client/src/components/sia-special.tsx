import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code, Database, Network, ArrowRight } from "lucide-react";

export default function SIASpecial() {
  return (
    <section id="sia" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sia-special rounded-3xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-full inline-block p-4 mb-6">
              <Code className="w-12 h-12" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Sistemi Informativi Aziendali
            </h2>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              L'indirizzo più richiesto: impara a gestire i sistemi informatici aziendali, 
              sviluppa competenze in programmazione e database per diventare il professionista IT del futuro.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <Code className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Programmazione</h3>
                <p className="text-white/80">Java, Python, Web Development</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <Database className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Database</h3>
                <p className="text-white/80">MySQL, Oracle, Data Management</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <Network className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Reti</h3>
                <p className="text-white/80">Amministrazione, Sicurezza IT</p>
              </div>
            </div>
            <Link href="/sia">
              <Button 
                className="bg-white text-primary px-10 py-4 h-auto text-lg font-semibold hover:bg-white/90 animate-scale-on-hover"
                data-testid="button-discover-sia"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Scopri il Corso SIA
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
