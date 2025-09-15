import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Languages, Plane, Camera, Users, Heart, ArrowRight } from "lucide-react";

export default function Turismo() {
  const languages = [
    { name: "Inglese", flag: "🇬🇧", hours: "4 ore/settimana", level: "C1" },
    { name: "Francese", flag: "🇫🇷", hours: "3 ore/settimana", level: "B2" },
    { name: "Spagnolo", flag: "🇪🇸", hours: "3 ore/settimana", level: "B2" },
    { name: "Tedesco", flag: "🇩🇪", hours: "3 ore/settimana", level: "B1" },
  ];

  const subjects = [
    {
      icon: MapPin,
      title: "Geografia Turistica",
      description: "Destinazioni mondiali, patrimonio culturale"
    },
    {
      icon: Users,
      title: "Discipline Turistiche",
      description: "Management alberghiero, tour operating"
    },
    {
      icon: Heart,
      title: "Arte e Territorio",
      description: "Storia dell'arte, beni culturali"
    },
    {
      icon: Plane,
      title: "Diritto Turistico",
      description: "Normative settore, contrattualistica"
    }
  ];

  const skills = [
    "Organizzazione viaggi e soggiorni",
    "Gestione strutture ricettive",
    "Marketing turistico digitale", 
    "Comunicazione multilingue",
    "Valorizzazione beni culturali",
    "Sostenibilità turistica",
    "Revenue management",
    "Customer relationship management",
    "Event management",
    "Turismo esperienziale"
  ];

  const careerPaths = [
    {
      title: "Tour Operator",
      description: "Progettazione e vendita pacchetti turistici",
      workplace: "Agenzie viaggi, tour operator internazionali"
    },
    {
      title: "Hotel Manager",
      description: "Gestione strutture alberghiere e resort",
      workplace: "Hotel, resort, catene alberghiere"
    },
    {
      title: "Guida Turistica",
      description: "Accompagnamento e animazione gruppi turistici",
      workplace: "Agenzie, enti turistici, freelance"
    },
    {
      title: "Event Manager",
      description: "Organizzazione eventi e congressi",
      workplace: "Agenzie eventi, hotel, centri congressi"
    },
    {
      title: "Consulente Turistico",
      description: "Sviluppo progetti turistici territoriali",
      workplace: "Enti pubblici, consulenza privata"
    },
    {
      title: "Social Media Manager Turistico",
      description: "Promozione destinazioni e strutture online",
      workplace: "DMO, hotel, agenzie comunicazione"
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
              <MapPin className="w-16 h-16" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Turismo
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-4xl mx-auto">
              Trasforma la tua passione per i viaggi in una professione. Studia lingue, geografia turistica 
              e management per lavorare nel settore turistico più dinamico e internazionale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleScrollToContact}
                className="bg-white text-accent px-8 py-4 h-auto text-lg font-semibold hover:bg-white/90"
                data-testid="button-contact-turismo"
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
              Comunica con turisti da tutto il mondo studiando 3 lingue straniere
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
              Competenze specifiche per il settore turistico e dell'accoglienza
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
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Beautiful tourist destination with travelers" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Competenze Turistiche</h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
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

      {/* Experiences Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Esperienze Formative</h2>
            <p className="text-xl text-muted-foreground">
              Stage e viaggi di istruzione per vivere il turismo da protagonista
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <Plane className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-center">Viaggi di Istruzione</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Destinazioni europee e internazionali per studiare il turismo sul campo
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-center">Stage in Hotel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Esperienza pratica in strutture alberghiere e agenzie del territorio
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                <Camera className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-center">Progetti Territoriali</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Valorizzazione del patrimonio locale attraverso progetti innovativi
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
            <p className="text-xl text-muted-foreground">Le tue opportunità nel mondo del turismo</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-accent" />
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

      {/* Tourism Trends Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Tendenze del Turismo</h2>
            <p className="text-xl text-muted-foreground">
              Preparati per il futuro del turismo sostenibile e digitale
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 p-6 rounded-2xl mb-6 inline-block">
                <Heart className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Turismo Sostenibile</h3>
              <p className="text-muted-foreground">
                Impara a promuovere un turismo rispettoso dell'ambiente e delle comunità locali
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 p-6 rounded-2xl mb-6 inline-block">
                <Camera className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Tourism</h3>
              <p className="text-muted-foreground">
                Social media, influencer marketing e tecnologie per il turismo del futuro
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 p-6 rounded-2xl mb-6 inline-block">
                <Users className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Turismo Esperienziale</h3>
              <p className="text-muted-foreground">
                Crea esperienze uniche e memorabili per i viaggiatori moderni
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Il Turismo è la Tua Passione?
          </h2>
          <p className="text-xl mb-8 text-accent-foreground/90">
            Trasforma la tua passione per i viaggi in una carriera di successo nel settore turistico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleScrollToContact}
              className="bg-white text-accent px-8 py-4 h-auto text-lg font-semibold hover:bg-white/90"
              data-testid="button-cta-contact-turismo"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Inizia il Tuo Viaggio
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
