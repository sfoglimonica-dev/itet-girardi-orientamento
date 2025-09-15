import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import SIASpecial from "@/components/sia-special";
import StudyPrograms from "@/components/study-programs";
import Testimonials from "@/components/testimonials";
import Gallery from "@/components/gallery";
import Events from "@/components/events";
import ContactForms from "@/components/contact-forms";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <Hero />
      
      {/* Quick Stats */}
      <section className="bg-card py-16 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">Indirizzi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                <div className="text-muted-foreground">Studenti</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Docenti</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">40</div>
                <div className="text-muted-foreground">Anni di Storia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SIASpecial />
      <StudyPrograms />
      <Testimonials />
      <Gallery />
      <Events />
      <ContactForms />
      <FAQ />
      <Footer />
    </div>
  );
}
