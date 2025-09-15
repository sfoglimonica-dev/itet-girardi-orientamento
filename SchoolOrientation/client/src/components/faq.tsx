import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Quando si svolgono gli Open Day?",
    answer: "Gli Open Day si svolgono nei mesi di dicembre e gennaio. Le date precise vengono pubblicate sul sito web e comunicate tramite i canali social della scuola."
  },
  {
    question: "Quali sono i requisiti per l'iscrizione?",
    answer: "È necessario aver conseguito il diploma di scuola media inferiore. Le iscrizioni si effettuano online tramite il portale del MIUR nei mesi di gennaio-febbraio."
  },
  {
    question: "È possibile visitare la scuola durante l'anno?",
    answer: "Sì, è possibile prenotare visite individuali contattando la segreteria. Organizziamo anche mini-stage per far provare le lezioni agli studenti interessati."
  },
  {
    question: "Quale indirizzo scegliere?",
    answer: "La scelta dipende dai tuoi interessi e dai tuoi progetti futuri. Il nostro servizio di orientamento ti aiuterà a individuare l'indirizzo più adatto alle tue attitudini e aspirazioni."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Domande Frequenti</h2>
          <p className="text-xl text-muted-foreground">Risposte alle domande più comuni sull'orientamento</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                  data-testid={`faq-question-${index}`}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                {openIndex === index && (
                  <div className="mt-4 text-muted-foreground leading-relaxed" data-testid={`faq-answer-${index}`}>
                    {faq.answer}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
