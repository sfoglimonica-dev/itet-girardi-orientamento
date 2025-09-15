import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, insertOrientationRequestSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send, CalendarCheck } from "lucide-react";

const contactFormSchema = insertContactSchema;
const orientationFormSchema = insertOrientationRequestSchema.extend({
  email: z.string().email("Email non valida"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type OrientationFormData = z.infer<typeof orientationFormSchema>;

export default function ContactForms() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      studyProgram: "",
      message: "",
    },
  });

  const orientationForm = useForm<OrientationFormData>({
    resolver: zodResolver(orientationFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      preferredDate: "",
      notes: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Richiesta inviata!",
        description: "Ti contatteremo al più presto.",
      });
      contactForm.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    },
  });

  const orientationMutation = useMutation({
    mutationFn: (data: OrientationFormData) => apiRequest("POST", "/api/orientation", data),
    onSuccess: () => {
      toast({
        title: "Richiesta di orientamento inviata!",
        description: "Ti contatteremo per fissare un appuntamento.",
      });
      orientationForm.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/orientation-requests"] });
    },
    onError: () => {
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    },
  });

  const onContactSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const onOrientationSubmit = (data: OrientationFormData) => {
    orientationMutation.mutate(data);
  };

  return (
    <section id="contatti" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Contattaci</h2>
          <p className="text-xl text-muted-foreground">Siamo qui per rispondere alle tue domande</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Informazioni di Contatto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefono</div>
                    <div className="text-muted-foreground" data-testid="contact-phone">049 5971565</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Orientamento</div>
                    <div className="text-muted-foreground" data-testid="contact-email">orientamento@itetgirardi.edu.it</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Indirizzo</div>
                    <div className="text-muted-foreground" data-testid="contact-address">Via Kennedy, 29 - Cittadella (PD)</div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Orari di Apertura</h4>
                  <div className="text-muted-foreground space-y-2">
                    <div>Lunedì - Venerdì: 8:00 - 16:00</div>
                    <div>Sabato: 8:00 - 12:00</div>
                    <div>Domenica: Chiuso</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Map placeholder */}
            <div className="bg-muted rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <div className="text-muted-foreground">Mappa della Scuola</div>
              </div>
            </div>
          </div>
          
          {/* Contact Forms */}
          <div className="space-y-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Richiedi Informazioni</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...contactForm}>
                  <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={contactForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome *</FormLabel>
                            <FormControl>
                              <Input placeholder="Il tuo nome" {...field} data-testid="input-first-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={contactForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cognome *</FormLabel>
                            <FormControl>
                              <Input placeholder="Il tuo cognome" {...field} data-testid="input-last-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={contactForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="tua.email@esempio.com" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={contactForm.control}
                      name="studyProgram"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Indirizzo di Interesse</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value || ""} data-testid="select-study-program">
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Seleziona un indirizzo" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="sia">Sistemi Informativi Aziendali (SIA)</SelectItem>
                              <SelectItem value="afm">Amministrazione Finanza e Marketing (AFM)</SelectItem>
                              <SelectItem value="rim">Relazioni Internazionali per il Marketing (RIM)</SelectItem>
                              <SelectItem value="cat">Costruzioni, Ambiente e Territorio (CAT)</SelectItem>
                              <SelectItem value="turismo">Turismo</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={contactForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Messaggio</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={4}
                              placeholder="Scrivi qui le tue domande..."
                              className="resize-none"
                              {...field}
                              value={field.value || ""}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {contactMutation.isPending ? "Invio in corso..." : "Invia Richiesta"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            {/* Orientation Request Form */}
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Orientamento Personalizzato</CardTitle>
                <p className="text-muted-foreground">Prenota un colloquio individuale con i nostri orientatori</p>
              </CardHeader>
              <CardContent>
                <Form {...orientationForm}>
                  <form onSubmit={orientationForm.handleSubmit(onOrientationSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={orientationForm.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome Completo *</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-orientation-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={orientationForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefono *</FormLabel>
                            <FormControl>
                              <Input type="tel" {...field} data-testid="input-orientation-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={orientationForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} data-testid="input-orientation-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={orientationForm.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data Preferita</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} value={field.value || ""} data-testid="input-orientation-date" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90" 
                      disabled={orientationMutation.isPending}
                      data-testid="button-submit-orientation"
                    >
                      <CalendarCheck className="w-4 h-4 mr-2" />
                      {orientationMutation.isPending ? "Invio in corso..." : "Prenota Orientamento"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
