import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { TrendingUp, Globe, Building, MapPin, ArrowRight } from "lucide-react";

const programs = [
  {
    id: "afm",
    title: "Amministrazione Finanza e Marketing",
    description: "Il corso base per chi vuole lavorare in azienda: contabilità, marketing, economia aziendale e diritto.",
    icon: TrendingUp,
    color: "primary",
    tags: ["Contabilità", "Marketing", "Economia"],
    href: "/afm"
  },
  {
    id: "rim",
    title: "Relazioni Internazionali per il Marketing",
    description: "L'apertura al mondo: tre lingue straniere, commercio internazionale e marketing globale.",
    icon: Globe,
    color: "accent",
    tags: ["3 Lingue", "Export", "Marketing"],
    href: "/rim"
  },
  {
    id: "cat",
    title: "Costruzioni, Ambiente e Territorio",
    description: "Per chi ama progettare e costruire: geometra, ambiente, territorio e sostenibilità.",
    icon: Building,
    color: "primary",
    tags: ["CAD", "Topografia", "Ambiente"],
    href: "/cat"
  },
  {
    id: "turismo",
    title: "Turismo",
    description: "La passione per viaggi e culture: tre lingue, geografia turistica e management alberghiero.",
    icon: MapPin,
    color: "accent",
    tags: ["Lingue", "Geografia", "Management"],
    href: "/turismo"
  }
];

export default function StudyPrograms() {
  return (
    <section id="indirizzi" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">I Nostri Indirizzi</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scegli tra i 5 indirizzi di studio che preparano i professionisti del domani
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program) => {
            const IconComponent = program.icon;
            const isAccent = program.color === "accent";
            
            return (
              <div 
                key={program.id}
                className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 animate-scale-on-hover"
                data-testid={`card-program-${program.id}`}
              >
                <div className="flex items-start gap-6">
                  <div className={`${isAccent ? 'bg-accent/10' : 'bg-primary/10'} p-4 rounded-xl`}>
                    <IconComponent className={`w-8 h-8 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {program.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {program.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className={`${isAccent ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'} hover:${isAccent ? 'bg-accent/20' : 'bg-primary/20'}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={program.href}>
                      <Button 
                        variant="link" 
                        className={`p-0 h-auto ${isAccent ? 'text-accent hover:text-accent/80' : 'text-primary hover:text-primary/80'} font-semibold`}
                        data-testid={`button-discover-${program.id}`}
                      >
                        Scopri di più <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
