import { 
  type ContactSubmission,
  type InsertContactSubmission,
  type Service,
  type InsertService,
  type TeamMember,
  type InsertTeamMember,
  type Booking,
  type InsertBooking,
  contactSubmissions,
  services,
  teamMembers,
  bookings
} from "@shared/schema";
import { db } from "./db";
import { desc, eq } from "drizzle-orm";

export interface IStorage {
  // Contact Submissions
  createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;

  // Services
  createService(data: InsertService): Promise<Service>;
  getServices(): Promise<Service[]>;
  getServiceById(id: number): Promise<Service | undefined>;

  // Team Members
  createTeamMember(data: InsertTeamMember): Promise<TeamMember>;
  getTeamMembers(): Promise<TeamMember[]>;
  getTeamMemberById(id: number): Promise<TeamMember | undefined>;

  // Bookings
  createBooking(data: InsertBooking): Promise<Booking>;
  getBookings(): Promise<Booking[]>;
  getBookingsByDate(date: Date): Promise<Booking[]>;
}

export class DatabaseStorage implements IStorage {
  // Contact Submissions
  async createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db.insert(contactSubmissions).values(data).returning();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }

  // Services
  async createService(data: InsertService): Promise<Service> {
    const [service] = await db.insert(services).values(data).returning();
    return service;
  }

  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getServiceById(id: number): Promise<Service | undefined> {
    const [service] = await db.select().from(services).where(eq(services.id, id));
    return service;
  }

  // Team Members
  async createTeamMember(data: InsertTeamMember): Promise<TeamMember> {
    const [member] = await db.insert(teamMembers).values(data).returning();
    return member;
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return await db.select().from(teamMembers);
  }

  async getTeamMemberById(id: number): Promise<TeamMember | undefined> {
    const [member] = await db.select().from(teamMembers).where(eq(teamMembers.id, id));
    return member;
  }

  // Bookings
  async createBooking(data: InsertBooking): Promise<Booking> {
    const [booking] = await db.insert(bookings).values(data).returning();
    return booking;
  }

  async getBookings(): Promise<Booking[]> {
    return await db.select().from(bookings).orderBy(desc(bookings.date));
  }

  async getBookingsByDate(date: Date): Promise<Booking[]> {
    return await db
      .select()
      .from(bookings)
      .where(eq(bookings.date, date))
      .orderBy(bookings.time);
  }
}

export const storage = new DatabaseStorage();