import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertOrientationRequestSchema, insertEventRegistrationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Here you would typically send an email notification
      console.log('New contact form submission:', contact);
      
      res.json({ success: true, message: "Richiesta inviata con successo!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Dati non validi", details: error.errors });
      } else {
        res.status(500).json({ error: "Errore interno del server" });
      }
    }
  });

  // Orientation request submission
  app.post("/api/orientation", async (req, res) => {
    try {
      const validatedData = insertOrientationRequestSchema.parse(req.body);
      const request = await storage.createOrientationRequest(validatedData);
      
      // Here you would typically send an email notification and calendar invite
      console.log('New orientation request:', request);
      
      res.json({ success: true, message: "Richiesta di orientamento inviata con successo!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Dati non validi", details: error.errors });
      } else {
        res.status(500).json({ error: "Errore interno del server" });
      }
    }
  });

  // Get all testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ error: "Errore nel recupero delle testimonianze" });
    }
  });

  // Get all contacts (admin only - for demo purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Errore nel recupero dei contatti" });
    }
  });

  // Get all orientation requests (admin only - for demo purposes)
  app.get("/api/orientation-requests", async (req, res) => {
    try {
      const requests = await storage.getAllOrientationRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ error: "Errore nel recupero delle richieste di orientamento" });
    }
  });

  // Get all events
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getAllEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: "Errore nel recupero degli eventi" });
    }
  });

  // Register for an event
  app.post("/api/events/:eventId/register", async (req, res) => {
    try {
      const { eventId } = req.params;
      const validatedData = insertEventRegistrationSchema.parse({ ...req.body, eventId });
      
      // Check if event exists and has available spots
      const event = await storage.getEvent(eventId);
      if (!event) {
        return res.status(404).json({ error: "Evento non trovato" });
      }
      
      if (!event.isActive) {
        return res.status(400).json({ error: "L'evento non è più attivo" });
      }
      
      const currentCount = parseInt(event.currentParticipants || "0");
      const maxCount = parseInt(event.maxParticipants);
      
      if (currentCount >= maxCount) {
        return res.status(400).json({ error: "Evento al completo, posti esauriti" });
      }
      
      // Create registration
      const registration = await storage.createEventRegistration(validatedData);
      
      // Update participant count
      await storage.updateEventParticipants(eventId, (currentCount + 1).toString());
      
      console.log('New event registration:', registration);
      
      res.json({ 
        success: true, 
        message: event.eventType === 'open-day' ? 
          "Iscrizione all'Open Day confermata!" : 
          "Iscrizione al Mini-Stage confermata!",
        registration
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Dati non validi", details: error.errors });
      } else {
        console.error('Event registration error:', error);
        res.status(500).json({ error: "Errore nella registrazione" });
      }
    }
  });

  // Get event registrations (admin only)
  app.get("/api/events/:eventId/registrations", async (req, res) => {
    try {
      const { eventId } = req.params;
      const registrations = await storage.getEventRegistrations(eventId);
      res.json(registrations);
    } catch (error) {
      res.status(500).json({ error: "Errore nel recupero delle registrazioni" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
