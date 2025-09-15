import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calculator, FileText, Users, BarChart, PieChart, ArrowRight } from "lucide-react";

export default function AFM() {
  const subjects = [
    {
      icon: Calculator,
      title: "Economia Aziendale",
      description: "Contabilità generale, bilancio, analisi economica",
      hours: "8 ore/settimana"
    },
    {
      icon: TrendingUp,
      title: "Economia Politica",
      description: "Microeconomia, macroeconomia, mercati finanziari",
      hours: "3 ore/settimana"
    },
    {
      icon: FileText,
      title: "Diritto",
      description: "Diritto commerciale, tributario, del lavoro",
      hours: "3 ore/settimana"
    },
    {
      icon: Users,
      title: "Relazioni Internazionali",
      description: "Marketing internazionale, commercio estero",
      hours: "2 ore/settimana"
    },
    {
      icon: BarChart,
      title: "Informatica",
      description: "Excel avanzato, software gestionale, database",
      hours: "2 ore/settimana"
    },
    {
      icon: PieChart,
      title: "Matematica Applicata",
      description: "Matematica finanziaria, statistica",
      hours: "3 ore/settimana"
    }
  ];

  const careerPaths = [
    {
      title: "Ragioniere",
      description: "Gestione contabilità aziendale e adempimenti fiscali",
      workplace: "Studi commerciali, aziende private"
    },
    {
      title: "Impiegato Bancario",
      description: "Consulenza finanziaria e gestione clientela",
      workplace: "Banche, istituti di credito"
    },
    {
      title: "Controller Aziendale",
      description: "Controllo di gestione e analisi economiche",
      workplace: "Aziende medie e grandi"
    },
    {
      title: "Consulente Fiscale",
      description: "Assistenza tributaria per aziende e privati",
      workplace: "Studi professionali, CAF"
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
              <TrendingUp className="w-16 h-16" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Amministrazione, Finanza e Marketing
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-4xl mx-auto">
              Il percorso classico per chi vuole lavorare nel mondo dell'economia e della finanza. 
              Competenze solide in contabilità, marketing ed economia aziendale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleScrollToContact}
                className="bg-white text-primary px-8 py-4 h-auto text-lg font-semibold hover:bg-white/90"
                data-testid="button-contact-afm"
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
              Un curriculum completo per formare professionisti dell'economia
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
                {[
                  "Redazione e analisi del bilancio",
                  "Gestione contabilità generale e analitica", 
                  "Pianificazione strategica aziendale",
                  "Marketing e comunicazione d'impresa",
                  "Normativa fiscale e tributaria",
                  "Controllo di gestione",
                  "Software gestionali e Excel avanzato",
                  "Analisi dei mercati finanziari"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Business meeting and financial analysis" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Sbocchi Professionali</h2>
            <p className="text-xl text-muted-foreground">Dove potrai lavorare dopo il diploma</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
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
            Inizia la Tua Carriera in Economia
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            AFM è la scelta ideale per chi vuole lavorare nel mondo delle aziende e della finanza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleScrollToContact}
              className="bg-white text-primary px-8 py-4 h-auto text-lg font-semibold hover:bg-white/90"
              data-testid="button-cta-contact-afm"
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
