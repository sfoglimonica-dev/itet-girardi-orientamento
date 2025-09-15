import { type User, type InsertUser, type Contact, type InsertContact, type OrientationRequest, type InsertOrientationRequest, type Testimonial, type InsertTestimonial, type Event, type InsertEvent, type EventRegistration, type InsertEventRegistration } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  
  createOrientationRequest(request: InsertOrientationRequest): Promise<OrientationRequest>;
  getAllOrientationRequests(): Promise<OrientationRequest[]>;
  updateOrientationRequestStatus(id: string, status: string): Promise<OrientationRequest | undefined>;
  
  getAllTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  getAllEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  updateEventParticipants(id: string, count: string): Promise<Event | undefined>;
  
  createEventRegistration(registration: InsertEventRegistration): Promise<EventRegistration>;
  getEventRegistrations(eventId: string): Promise<EventRegistration[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private orientationRequests: Map<string, OrientationRequest>;
  private testimonials: Map<string, Testimonial>;
  private events: Map<string, Event>;
  private eventRegistrations: Map<string, EventRegistration>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.orientationRequests = new Map();
    this.testimonials = new Map();
    this.events = new Map();
    this.eventRegistrations = new Map();
    
    // Initialize with some sample testimonials and events
    this.initializeTestimonials();
    this.initializeEvents();
  }

  private initializeTestimonials() {
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Marco R.",
        studyProgram: "SIA",
        year: "V anno",
        content: "Grazie al corso SIA ho imparato a programmare e ora lavoro già part-time come sviluppatore. I professori sono preparati e ti seguono sempre!",
        rating: "5",
        isActive: true
      },
      {
        name: "Sofia L.",
        studyProgram: "RIM",
        year: "Ex-studentessa",
        content: "Il corso RIM mi ha aperto le porte del commercio internazionale. Ora lavoro per un'azienda di export e parlo fluentemente tre lingue!",
        rating: "5",
        isActive: true
      },
      {
        name: "Alessandro M.",
        studyProgram: "AFM",
        year: "Ex-studente",
        content: "La formazione ricevuta in AFM mi ha permesso di aprire la mia attività. Le competenze in contabilità e marketing sono state fondamentali!",
        rating: "5",
        isActive: true
      }
    ];

    sampleTestimonials.forEach(testimonial => {
      const id = randomUUID();
      const fullTestimonial: Testimonial = { 
        ...testimonial, 
        id,
        year: testimonial.year || null,
        rating: testimonial.rating || null,
        isActive: testimonial.isActive ?? null
      };
      this.testimonials.set(id, fullTestimonial);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      studyProgram: insertContact.studyProgram || null,
      message: insertContact.message || null,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async createOrientationRequest(insertRequest: InsertOrientationRequest): Promise<OrientationRequest> {
    const id = randomUUID();
    const request: OrientationRequest = { 
      ...insertRequest, 
      id,
      status: "pending",
      preferredDate: insertRequest.preferredDate || null,
      notes: insertRequest.notes || null,
      createdAt: new Date()
    };
    this.orientationRequests.set(id, request);
    return request;
  }

  async getAllOrientationRequests(): Promise<OrientationRequest[]> {
    return Array.from(this.orientationRequests.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async updateOrientationRequestStatus(id: string, status: string): Promise<OrientationRequest | undefined> {
    const request = this.orientationRequests.get(id);
    if (request) {
      const updated = { ...request, status };
      this.orientationRequests.set(id, updated);
      return updated;
    }
    return undefined;
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(t => t.isActive);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id,
      year: insertTestimonial.year || null,
      rating: insertTestimonial.rating || null,
      isActive: insertTestimonial.isActive ?? null
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
  
  private initializeEvents() {
    const sampleEvents: InsertEvent[] = [
      {
        title: "Open Day - Scopri l'ITET Girardi",
        description: "Visita guidata della scuola, presentazione degli indirizzi e incontro con docenti e studenti",
        eventType: "open-day",
        date: "2025-01-25",
        time: "09:00-12:00",
        maxParticipants: "50",
        currentParticipants: "0",
        isActive: true
      },
      {
        title: "Open Day - Gennaio",
        description: "Seconda data dell'Open Day con laboratori pratici e simulazioni",
        eventType: "open-day",
        date: "2025-02-01",
        time: "09:00-12:00",
        maxParticipants: "50",
        currentParticipants: "0",
        isActive: true
      },
      {
        title: "Open Day - Febbraio",
        description: "Ultima data dell'Open Day con focus sui progetti e stage",
        eventType: "open-day",
        date: "2025-02-08",
        time: "09:00-12:00",
        maxParticipants: "50",
        currentParticipants: "0",
        isActive: true
      },
      {
        title: "Mini-Stage SIA",
        description: "Pomeriggio di laboratorio per studenti di terza media - Indirizzo SIA",
        eventType: "mini-stage",
        date: "2025-01-28",
        time: "14:30-16:30",
        maxParticipants: "20",
        currentParticipants: "0",
        isActive: true
      },
      {
        title: "Mini-Stage Tutti gli Indirizzi",
        description: "Pomeriggio di orientamento pratico per tutti i nostri indirizzi",
        eventType: "mini-stage",
        date: "2025-02-04",
        time: "14:30-16:30",
        maxParticipants: "20",
        currentParticipants: "0",
        isActive: true
      }
    ];

    sampleEvents.forEach(event => {
      const id = randomUUID();
      const fullEvent: Event = { 
        ...event, 
        id,
        description: event.description || null,
        currentParticipants: event.currentParticipants || null,
        isActive: event.isActive ?? null,
        createdAt: new Date()
      };
      this.events.set(id, fullEvent);
    });
  }

  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values())
      .filter(event => event.isActive)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  async getEvent(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = { 
      ...insertEvent, 
      id,
      description: insertEvent.description || null,
      currentParticipants: insertEvent.currentParticipants || null,
      isActive: insertEvent.isActive ?? null,
      createdAt: new Date()
    };
    this.events.set(id, event);
    return event;
  }

  async updateEventParticipants(id: string, count: string): Promise<Event | undefined> {
    const event = this.events.get(id);
    if (event) {
      const updated = { ...event, currentParticipants: count };
      this.events.set(id, updated);
      return updated;
    }
    return undefined;
  }

  async createEventRegistration(insertRegistration: InsertEventRegistration): Promise<EventRegistration> {
    const id = randomUUID();
    const registration: EventRegistration = { 
      ...insertRegistration, 
      id,
      studentName: insertRegistration.studentName || null,
      studentSchool: insertRegistration.studentSchool || null,
      notes: insertRegistration.notes || null,
      status: "confirmed",
      createdAt: new Date()
    };
    this.eventRegistrations.set(id, registration);
    return registration;
  }

  async getEventRegistrations(eventId: string): Promise<EventRegistration[]> {
    return Array.from(this.eventRegistrations.values())
      .filter(reg => reg.eventId === eventId)
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }
}

export const storage = new MemStorage();
