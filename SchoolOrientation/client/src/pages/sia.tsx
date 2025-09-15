import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Network, Cpu, Globe, GraduationCap, Briefcase, ArrowRight } from "lucide-react";

export default function SIA() {
  const skills = [
    {
      icon: Code,
      title: "Programmazione",
      description: "Java, Python, C++, JavaScript, HTML/CSS",
      color: "primary"
    },
    {
      icon: Database,
      title: "Database",
      description: "MySQL, Oracle, PostgreSQL, NoSQL",
      color: "accent"
    },
    {
      icon: Network,
      title: "Reti e Sicurezza",
      description: "TCP/IP, Firewall, Crittografia, VPN",
      color: "primary"
    },
    {
      icon: Cpu,
      title: "Sistemi",
      description: "Windows Server, Linux, Virtualizzazione",
      color: "accent"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "React, Angular, Node.js, PHP",
      color: "primary"
    },
    {
      icon: GraduationCap,
      title: "Certificazioni",
      description: "CISCO, Microsoft, Oracle, CompTIA",
      color: "accent"
    }
  ];

  const careerPaths = [
    {
      title: "Sviluppatore Software",
      description: "Creazione di applicazioni web, mobile e desktop",
      companies: "Google, Microsoft, IBM, startup innovative"
    },
    {
      title: "Amministratore di Sistema",
      description: "Gestione infrastrutture IT aziendali",
      companies: "Banche, ospedali, pubblica amministrazione"
    },
    {
      title: "Analista Programmatore",
      description: "Analisi requisiti e sviluppo soluzioni software",
      companies: "Società di consulenza, software house"
    },
    {
      title: "Specialista Cybersecurity",
      description: "Protezione sistemi informatici da minacce",
      companies: "Aziende di sicurezza, enti governativi"
    }
  ];

  const handleScrollToContact = () => {
    const element = document.querySelector("#contatti");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="sia-special text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full inline-block p-6 mb-8">
              <Code className="w-16 h-16" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Sistemi Informativi Aziendali
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-4xl mx-auto">
              Diventa il professionista IT del futuro. Impara programmazione, gestione database, 
              amministrazione reti e sviluppa le competenze più richieste dal mercato del lavoro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleScrollToContact}
                className="bg-white text-primary px-8 py-4 h-auto text-lg font-semibold hover:bg-white/90"
                data-testid="button-contact-sia"
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

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Cosa Imparerai</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un percorso completo che ti prepara alle professioni IT più richieste
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              const isAccent = skill.color === "accent";
              
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all animate-scale-on-hover">
                  <CardHeader>
                    <div className={`${isAccent ? 'bg-accent/10' : 'bg-primary/10'} p-4 rounded-xl w-fit mb-4`}>
                      <IconComponent className={`w-8 h-8 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                    </div>
                    <CardTitle className="text-xl">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Piano di Studi</h2>
            <p className="text-xl text-muted-foreground">Materie specifiche dell'indirizzo SIA</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Materie Tecniche</h3>
              <div className="space-y-4">
                {[
                  { subject: "Informatica", hours: "8 ore/settimana" },
                  { subject: "Sistemi e Reti", hours: "4 ore/settimana" },
                  { subject: "Tecnologie e Progettazione", hours: "4 ore/settimana" },
                  { subject: "Gestione Progetto", hours: "3 ore/settimana" },
                  { subject: "Economia Aziendale", hours: "5 ore/settimana" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <span className="font-medium">{item.subject}</span>
                    <Badge variant="secondary">{item.hours}</Badge>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Laboratori</h3>
              <div className="space-y-4">
                {[
                  "Laboratorio di Programmazione",
                  "Laboratorio di Reti",
                  "Laboratorio di Database",
                  "Laboratorio di Sistemi",
                  "Laboratorio Multimediale"
                ].map((lab, index) => (
                  <div key={index} className="p-4 bg-accent/10 rounded-lg">
                    <span className="font-medium text-accent">{lab}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Sbocchi Professionali</h2>
            <p className="text-xl text-muted-foreground">Le carriere che ti aspettano dopo il diploma</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-primary" />
                    {career.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{career.description}</p>
                  <div className="text-sm">
                    <span className="font-semibold">Opportunità presso: </span>
                    <span className="text-muted-foreground">{career.companies}</span>
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
            Pronto a Diventare un Professionista IT?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Unisciti ai nostri studenti e costruisci il tuo futuro nel mondo della tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleScrollToContact}
              className="bg-white text-primary px-8 py-4 h-auto text-lg font-semibold hover:bg-white/90"
              data-testid="button-cta-contact"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Contattaci Ora
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = "/#indirizzi"}
              className="border-2 border-white text-white px-8 py-4 h-auto text-lg font-semibold hover:bg-white hover:text-primary bg-transparent"
            >
              Vedi Altri Indirizzi
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
