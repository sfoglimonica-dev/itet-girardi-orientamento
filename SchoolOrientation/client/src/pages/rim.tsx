import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Languages, Plane, TrendingUp, MapPin, Users, ArrowRight } from "lucide-react";

export default function RIM() {
  const languages = [
    { name: "Inglese", flag: "🇬🇧", hours: "4 ore/settimana", level: "C1" },
    { name: "Francese", flag: "🇫🇷", hours: "3 ore/settimana", level: "B2" },
    { name: "Spagnolo", flag: "🇪🇸", hours: "3 ore/settimana", level: "B2" },
    { name: "Tedesco", flag: "🇩🇪", hours: "3 ore/settimana", level: "B2" },
  ];

  const subjects = [
    {
      icon: Globe,
      title: "Relazioni Internazionali",
      description: "Commercio internazionale, organizzazioni globali"
    },
    {
      icon: TrendingUp,
      title: "Economia Aziendale",
      description: "Import/export, marketing internazionale"
    },
    {
      icon: Languages,
      title: "Comunicazione",
      description: "Business communication, negoziazione"
    },
    {
      icon: MapPin,
      title: "Geografia Economica",
      description: "Mercati mondiali, geopolitica economica"
    }
  ];

  const careerPaths = [
    {
      title: "Export Manager",
      description: "Gestione vendite internazionali e sviluppo mercati esteri",
      workplace: "Aziende export, multinazionali"
    },
    {
      title: "Interprete/Traduttore",
      description: "Traduzione commerciale e interpretariato",
      workplace: "Agenzie di traduzione, enti internazionali"
    },
    {
      title: "Consulente Commercio Estero",
      description: "Assistenza per internazionalizzazione aziende",
      workplace: "Camere di commercio, studi specializzati"
    },
    {
      title: "Tour Operator Internazionale",
      description: "Organizzazione viaggi e turismo internazionale",
      workplace: "Agenzie viaggi, compagnie turistiche"
    }
  ];

  const handleScrollToContact = () => {
    window.location.href = "/#contatti";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-accent/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full inline-block p-6 mb-8">
              <Globe className="w-16 h-16" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Relazioni Internazionali per il Marketing
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-4xl mx-auto">
              Apri le porte del mondo con tre lingue straniere. Specializzati in commercio internazionale 
              e marketing globale per lavorare in aziende che operano sui mercati internazionali.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleScrollToContact}
                className="bg-white text-accent px-8 py-4 h-auto text-lg font-semibold hover:bg-white/90"
                data-testid="button-contact-rim"
              >
                Iscriviti Ora
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open("tel:049 5971565", "_self")}
                className="border-2 border-white text-white px-8 py-4 h-auto text-lg font-semibold hover:bg-white hover:text-accent bg-transparent"
              >
                049 5971565
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Le Tue Lingue</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Studia 3 lingue straniere con docenti madrelingua e raggiungi livelli certificati
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {languages.map((language, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all animate-scale-on-hover text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">{language.flag}</div>
                  <CardTitle className="text-xl">{language.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">{language.hours}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    Livello {language.level}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Materie Caratterizzanti</h2>
            <p className="text-xl text-muted-foreground">
              Oltre alle lingue, competenze specifiche per il commercio internazionale
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
            {subjects.map((subject, index) => {
              const IconComponent = subject.icon;
              
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all animate-scale-on-hover">
                  <CardHeader>
                    <div className="bg-accent/10 p-4 rounded-xl w-fit mb-4">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{subject.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{subject.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="International business meeting" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Competenze Internazionali</h2>
              <div className="space-y-4">
                {[
                  "Comunicazione business in 3 lingue",
                  "Contrattualistica internazionale", 
                  "Logistica e trasporti internazionali",
                  "Marketing digitale globale",
                  "Normative doganali e fiscali",
                  "Negoziazione interculturale",
                  "E-commerce internazionale",
                  "Analisi mercati esteri"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exchanges Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Esperienze all'Estero</h2>
            <p className="text-xl text-muted-foreground">
              Stage linguistici e progetti Erasmus per vivere la dimensione internazionale
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <Plane className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-center">Stage Linguistici</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Soggiorni studio in UK, Francia, Spagna e Germania per perfezionare le lingue
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-center">Progetti Erasmus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Scambi culturali e progetti di mobilità con scuole europee
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-center">Certificazioni</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Cambridge, DELF, DELE e Goethe per certificare il tuo livello linguistico
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Sbocchi Professionali</h2>
            <p className="text-xl text-muted-foreground">Le tue opportunità nel mondo globalizzato</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-accent" />
                    {career.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{career.description}</p>
                  <div className="text-sm">
                    <span className="font-semibold">Dove: </span>
                    <span className="text-muted-foreground">{career.workplace}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Il Mondo ti Aspetta
          </h2>
          <p className="text-xl mb-8 text-accent-foreground/90">
            RIM è la chiave per lavorare in aziende internazionali e vivere esperienze globali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleScrollToContact}
              className="bg-white text-accent px-8 py-4 h-auto text-lg font-semibold hover:bg-white/90"
              data-testid="button-cta-contact-rim"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Scopri di Più
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = "/#indirizzi"}
              className="border-2 border-white text-white px-8 py-4 h-auto text-lg font-semibold hover:bg-white hover:text-accent bg-transparent"
            >
              Altri Indirizzi
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
