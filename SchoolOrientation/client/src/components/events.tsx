import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { insertEventRegistrationSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Users, MapPin, Send, GraduationCap } from "lucide-react";
import type { Event } from "@shared/schema";

const eventRegistrationSchema = insertEventRegistrationSchema.extend({
  email: z.string().email("Email non valida"),
}).omit({ eventId: true });

type EventRegistrationData = z.infer<typeof eventRegistrationSchema>;

interface EventCardProps {
  event: Event;
  onRegister: (eventId: string, data: EventRegistrationData) => void;
  isRegistering: boolean;
}

function EventCard({ event, onRegister, isRegistering }: EventCardProps) {
  const [showForm, setShowForm] = useState(false);
  
  const form = useForm<EventRegistrationData>({
    resolver: zodResolver(eventRegistrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      studentName: "",
      studentSchool: "",
      notes: "",
    },
  });

  const currentCount = parseInt(event.currentParticipants || "0");
  const maxCount = parseInt(event.maxParticipants);
  const availableSpots = maxCount - currentCount;
  const isFull = availableSpots <= 0;

  const handleSubmit = (data: EventRegistrationData) => {
    onRegister(event.id, data);
    setShowForm(false);
    form.reset();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('it-IT', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isOpenDay = event.eventType === 'open-day';

  return (
    <Card className="shadow-lg hover:shadow-xl transition-all">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            {isOpenDay ? (
              <Calendar className="w-6 h-6 text-primary" />
            ) : (
              <GraduationCap className="w-6 h-6 text-accent" />
            )}
            <CardTitle className={`text-xl ${!isOpenDay ? 'text-accent' : ''}`}>
              {event.title}
            </CardTitle>
          </div>
          <Badge variant={isOpenDay ? "default" : "secondary"} className={!isOpenDay ? "bg-accent/10 text-accent" : ""}>
            {isOpenDay ? "Open Day" : "Mini-Stage"}
          </Badge>
        </div>
        <p className="text-muted-foreground">{event.description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">
                {currentCount}/{maxCount} partecipanti
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Via Kennedy, 29 - Cittadella</span>
            </div>
          </div>

          {availableSpots > 0 && (
            <div className="text-sm text-accent font-medium">
              {availableSpots} posti ancora disponibili
            </div>
          )}

          {!showForm && !isFull && (
            <Button 
              onClick={() => setShowForm(true)}
              className={`w-full ${!isOpenDay ? 'bg-accent hover:bg-accent/90' : ''}`}
              data-testid={`button-register-${event.id}`}
            >
              <Send className="w-4 h-4 mr-2" />
              {isOpenDay ? "Prenota Open Day" : "Prenota Mini-Stage"}
            </Button>
          )}

          {isFull && (
            <Button disabled className="w-full">
              Evento al Completo
            </Button>
          )}

          {showForm && (
            <div className="border-t pt-4 mt-4">
              <h4 className="font-semibold mb-4">Registrazione {isOpenDay ? "Open Day" : "Mini-Stage"}</h4>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo *</FormLabel>
                          <FormControl>
                            <Input {...field} data-testid={`input-${event.id}-name`} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefono *</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} data-testid={`input-${event.id}-phone`} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} data-testid={`input-${event.id}-email`} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {!isOpenDay && (
                    <>
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="studentName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome Studente</FormLabel>
                              <FormControl>
                                <Input {...field} value={field.value || ""} data-testid={`input-${event.id}-student-name`} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="studentSchool"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Scuola di Provenienza</FormLabel>
                              <FormControl>
                                <Input {...field} value={field.value || ""} data-testid={`input-${event.id}-student-school`} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </>
                  )}

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Note</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={3}
                            placeholder="Note aggiuntive..."
                            className="resize-none"
                            {...field}
                            value={field.value || ""}
                            data-testid={`textarea-${event.id}-notes`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-2">
                    <Button 
                      type="submit" 
                      disabled={isRegistering}
                      className={!isOpenDay ? 'bg-accent hover:bg-accent/90' : ''}
                      data-testid={`button-submit-${event.id}`}
                    >
                      {isRegistering ? "Registrazione..." : "Conferma Registrazione"}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowForm(false)}
                      data-testid={`button-cancel-${event.id}`}
                    >
                      Annulla
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Events() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  const registrationMutation = useMutation({
    mutationFn: ({ eventId, data }: { eventId: string; data: EventRegistrationData }) => 
      apiRequest("POST", `/api/events/${eventId}/register`, data),
    onSuccess: (response) => {
      toast({
        title: "Registrazione Confermata!",
        description: (response as any).message || "Registrazione completata con successo!",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/events"] });
    },
    onError: (error: any) => {
      toast({
        title: "Errore nella Registrazione",
        description: error.error || "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    },
  });

  const handleRegister = (eventId: string, data: EventRegistrationData) => {
    registrationMutation.mutate({ eventId, data });
  };

  if (isLoading) {
    return (
      <section id="eventi" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Open Day e Mini-Stage
            </h2>
            <p className="text-xl text-muted-foreground">
              Prenota la tua visita alla scuola
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-4 bg-muted rounded w-full" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-1/2" />
                    <div className="h-4 bg-muted rounded w-1/3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const openDays = events?.filter(event => event.eventType === 'open-day') || [];
  const miniStages = events?.filter(event => event.eventType === 'mini-stage') || [];

  return (
    <section id="eventi" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Open Day e Mini-Stage
          </h2>
          <p className="text-xl text-muted-foreground">
            Prenota la tua visita alla scuola e scopri i nostri indirizzi
          </p>
        </div>

        {/* Open Days */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold">Open Day</h3>
            <Badge>Max 50 partecipanti</Badge>
          </div>
          <p className="text-muted-foreground mb-6">
            Visite guidata completa della scuola con presentazione di tutti gli indirizzi, 
            incontri con docenti e studenti, visita dei laboratori.
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            {openDays.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onRegister={handleRegister}
                isRegistering={registrationMutation.isPending}
              />
            ))}
          </div>
        </div>

        {/* Mini-Stages */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-bold">Mini-Stage</h3>
            <Badge variant="secondary" className="bg-accent/10 text-accent">Max 20 studenti</Badge>
          </div>
          <p className="text-muted-foreground mb-6">
            Pomeriggi di 2 ore dedicati agli studenti di terza media per provare 
            le lezioni pratiche nei laboratori specializzati.
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            {miniStages.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onRegister={handleRegister}
                isRegistering={registrationMutation.isPending}
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-card rounded-2xl p-8 text-center">
          <h4 className="text-2xl font-bold mb-4">Informazioni Importanti</h4>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-semibold">Prenotazione Obbligatoria</div>
              <div className="text-muted-foreground">I posti sono limitati</div>
            </div>
            <div>
              <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-semibold">Sede</div>
              <div className="text-muted-foreground">Via Kennedy, 29 - Cittadella (PD)</div>
            </div>
            <div>
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-semibold">Accompagnatori</div>
              <div className="text-muted-foreground">Genitori e familiari benvenuti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}