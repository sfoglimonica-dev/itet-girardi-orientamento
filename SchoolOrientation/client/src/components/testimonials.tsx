import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function Testimonials() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section id="testimonianze" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Cosa Dicono i Nostri Studenti</h2>
            <p className="text-xl text-muted-foreground">Le esperienze di chi ha scelto l'ITET Girardi</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-muted rounded-full mr-4" />
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded w-24" />
                      <div className="h-3 bg-muted rounded w-32" />
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-muted rounded" />
                    <div className="h-4 bg-muted rounded" />
                    <div className="h-4 bg-muted rounded w-3/4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const getStudentImage = (index: number) => {
    const images = [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      "https://images.unsplash.com/photo-1494790108755-2616b332-4878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    ];
    return images[index % images.length];
  };

  return (
    <section id="testimonianze" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Cosa Dicono i Nostri Studenti</h2>
          <p className="text-xl text-muted-foreground">Le esperienze di chi ha scelto l'ITET Girardi</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <Card key={testimonial.id} className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={getStudentImage(index)}
                    alt={`${testimonial.name} testimonial`} 
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                  <div>
                    <div className="font-semibold" data-testid={`testimonial-name-${index}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`testimonial-program-${index}`}>
                      {testimonial.studyProgram} {testimonial.year && `- ${testimonial.year}`}
                    </div>
                  </div>
                </div>
                <div className="text-yellow-400 mb-4 flex" data-testid={`testimonial-rating-${index}`}>
                  {[...Array(parseInt(testimonial.rating || "5"))].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed" data-testid={`testimonial-content-${index}`}>
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
