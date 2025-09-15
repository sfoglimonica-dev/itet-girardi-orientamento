import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Ruler, TreePine, Map, Calculator, Zap, ArrowRight } from "lucide-react";

export default function CAT() {
  const subjects = [
    {
      icon: Building,
      title: "Progettazione Costruzioni",
      description: "Progettazione edilizia, calcolo strutturale, materiali",
      hours: "6 ore/settimana"
    },
    {
      icon: Map,
      title: "Topografia",
      description: "Rilievi topografici, cartografia, GPS",
      hours: "4 ore/settimana"
    },
    {
      icon: TreePine,
      title: "Gestione Territorio",
      description: "Urbanistica, ambiente, sostenibilità",
      hours: "3 ore/settimana"
    },
    {
      icon: Calculator,
      title: "Estimo",
      description: "Valutazioni immobiliari, catasto",
      hours: "4 ore/settimana"
    },
    {
      icon: Zap,
      title: "Impianti",
      description: "Impianti elettrici, termici, idraulici",
      hours: "3 ore/settimana"
    },
    {
      icon: Ruler,
      title: "Disegno CAD",
      description: "AutoCAD, progettazione tecnica",
      hours: "4 ore/settimana"
    }
  ];

  const skills = [
    "Progettazione architettonica e strutturale",
    "Rilievi topografici e cartografici",
    "Calcolo strutturale e dimensionamento",
    "Uso di software CAD (AutoCAD, Revit)",
    "Valutazioni immobiliari e catastali",
    "Sicurezza nei cantieri",
    "Normative edilizie e urbanistiche",
    "Sostenibilità ambientale",
    "Gestione del territorio",
    "Energie rinnovabili"
  ];

  const careerPaths = [
    {
      title: "Geometra",
      description: "Progettazione, direzione lavori, pratiche edilizie",
      workplace: "Studi tecnici, enti pubblici, imprese edili"
    },
    {
      title: "Tecnico Comunale",
      description: "Gestione pratiche edilizie e urbanistiche",
      workplace: "Comuni, provincie, regioni"
    },
    {
      title: "Tecnico Catastale",
      description: "Gestione catasto e valutazioni immobiliari",
      workplace: "Agenzia delle Entrate, studi tecnici"
    },
    {
      title: "Responsabile Sicurezza",
      description: "Coordinamento sicurezza nei cantieri",
      workplace: "Imprese edili, società di ingegneria"
    },
    {
      title: "Consulente Ambientale",
      description: "Valutazioni di impatto ambientale",
      workplace: "Studi ambientali, enti pubblici"
    },
    {
      title: "Tecnico Impianti",
      description: "Progettazione e gestione impianti tecnologici",
      workplace: "Aziende impiantistiche, studi tecnici"
    }
  ];

  const handleScrollToContact = () => {
    window.location.href = "/#contatti";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full inline-block p-6 mb-8">
              <Building className="w-16 h-16" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Costruzioni, Ambiente e Territorio
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-4xl mx-auto">
              Diventa un geometra moderno. Progetta, costruisci e gestisci il territorio con competenze 
              in edilizia, topografia, ambiente e sostenibilità per un futuro più verde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleScrollToContact}
                className="bg-white text-primary px-8 py-4 h-auto text-lg font-semibold hover:bg-white/90"
                data-testid="button-contact-cat"
              >
                Iscriviti Ora
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open("tel:049 5971565", "_self")}
                className="border-2 border-white text-white px-8 py-4 h-auto text-lg font-semibold hover:bg-white hover:text-primary bg-transparent"
              >
                049 5971565
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Materie di Studio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un curriculum tecnico completo per formare i geometri del futuro
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {subjects.map((subject, index) => {
              const IconComponent = subject.icon;
              
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all animate-scale-on-hover">
                  <CardHeader>
                    <div className="bg-primary/10 p-4 rounded-xl w-fit mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{subject.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit">{subject.hours}</Badge>
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
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Competenze che Svilupperai</h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Construction site with modern buildings" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Laboratories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Laboratori Specializzati</h2>
            <p className="text-xl text-muted-foreground">
              Impara con strumentazioni professionali e software all'avanguardia
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <Ruler className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-center">Lab. CAD</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  AutoCAD, Revit, SketchUp per progettazione 2D e 3D
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                <Map className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-center">Lab. Topografia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Strumenti di rilevamento GPS, stazioni totali, droni
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-center">Lab. Materiali</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Test su materiali da costruzione, prove di resistenza
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Sbocchi Professionali</h2>
            <p className="text-xl text-muted-foreground">Le tue opportunità dopo il diploma</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Building className="w-6 h-6 text-primary" />
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Costruisci il Futuro
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            CAT è la scelta ideale per chi vuole lavorare nel settore delle costruzioni e della gestione del territorio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleScrollToContact}
              className="bg-white text-primary px-8 py-4 h-auto text-lg font-semibold hover:bg-white/90"
              data-testid="button-cta-contact-cat"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Richiedi Informazioni
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = "/#indirizzi"}
              className="border-2 border-white text-white px-8 py-4 h-auto text-lg font-semibold hover:bg-white hover:text-primary bg-transparent"
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
