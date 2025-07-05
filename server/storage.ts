import { 
  users, projects, investments, transactions, testimonials,
  type User, type InsertUser, type Project, type InsertProject,
  type Investment, type InsertInvestment, type Transaction, type InsertTransaction,
  type Testimonial, type InsertTestimonial
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Projects
  getAllProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, updates: Partial<Project>): Promise<Project | undefined>;
  
  // Investments
  getInvestmentsByUser(userId: number): Promise<Investment[]>;
  getInvestmentsByProject(projectId: number): Promise<Investment[]>;
  createInvestment(investment: InsertInvestment): Promise<Investment>;
  
  // Transactions
  getTransactionsByUser(userId: number): Promise<Transaction[]>;
  createTransaction(transaction: InsertTransaction): Promise<Transaction>;
  
  // Testimonials
  getAllTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private investments: Map<number, Investment>;
  private transactions: Map<number, Transaction>;
  private testimonials: Map<number, Testimonial>;
  private currentUserId: number;
  private currentProjectId: number;
  private currentInvestmentId: number;
  private currentTransactionId: number;
  private currentTestimonialId: number;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.investments = new Map();
    this.transactions = new Map();
    this.testimonials = new Map();
    this.currentUserId = 1;
    this.currentProjectId = 1;
    this.currentInvestmentId = 1;
    this.currentTransactionId = 1;
    this.currentTestimonialId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed projects
    const sampleProjects: Omit<Project, 'id'>[] = [
      {
        title: "Dubai Marina Tower",
        description: "Premium residential complex in Dubai's financial district",
        location: "Dubai, UAE",
        roi: "12.5",
        minInvestment: 1000,
        targetAmount: 5000000,
        currentAmount: 4250000,
        status: "ACTIVE",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        createdAt: new Date(),
      },
      {
        title: "Singapore Business Hub",
        description: "Commercial office space in Singapore's CBD",
        location: "Singapore",
        roi: "14.2",
        minInvestment: 2500,
        targetAmount: 8000000,
        currentAmount: 4960000,
        status: "FUNDING",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        createdAt: new Date(),
      },
      {
        title: "London Tech District",
        description: "Mixed-use development in London's tech corridor",
        location: "London, UK",
        roi: "11.8",
        minInvestment: 5000,
        targetAmount: 6000000,
        currentAmount: 3500000,
        status: "FUNDING",
        imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        createdAt: new Date(),
      },
      // --- Custom Projects ---
      {
        title: "Petaro Pump",
        description: "A high-traffic petrol pump located on the main highway in Jamshoro, Pakistan. Fully operational and generating steady returns.",
        location: "Jamshoro, Pakistan",
        roi: "28.76",
        minInvestment: 100000,
        targetAmount: 20000000,
        currentAmount: 20000000,
        status: "COMPLETE",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        createdAt: new Date(),
      },
      {
        title: "120 Sq. Yd. Banglow at Gulistan-e-Noor Mohammad",
        description: "A modern 120 square yard banglow in the heart of Hyderabad, currently under construction. 70% funded, estimated ROI up to 30% on completion.",
        location: "Gulistan-e-Noor Mohammad, Hyderabad, Pakistan",
        roi: "30.00",
        minInvestment: 100000,
        targetAmount: 15000000,
        currentAmount: 10500000,
        status: "FUNDING",
        imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        createdAt: new Date(),
      },
      {
        title: "150 Sq. Yd. Banglow",
        description: "A completed 150 square yard banglow, waiting for sale. Excellent opportunity for capital appreciation.",
        location: "Hyderabad, Pakistan",
        roi: "--",
        minInvestment: 100000,
        targetAmount: 18000000,
        currentAmount: 18000000,
        status: "WAITING_FOR_SALE",
        imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        createdAt: new Date(),
      },
    ];

    sampleProjects.forEach(project => {
      const id = this.currentProjectId++;
      this.projects.set(id, { ...project, id });
    });

    // Seed testimonials
    const sampleTestimonials: Omit<Testimonial, 'id'>[] = [
      {
        name: "PERVAIZ AHMMED",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        content: "SAIR REIT has revolutionized my investment strategy. The halal approach combined with excellent returns is exactly what I was looking for.",
        rating: 5,
        verified: true,
        createdAt: new Date(),
      },
      {
        name: "ABDUL AZIZ",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        content: "The transparency and real-time tracking give me complete confidence in my investments. I've seen consistent 12%+ returns month after month.",
        rating: 5,
        verified: true,
        createdAt: new Date(),
      },
      {
        name: "MAKHDOOM NAVEED",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        content: "Finally, a platform that combines cutting-edge technology with solid fundamentals. My portfolio has grown 35% since joining SAIR REIT.",
        rating: 5,
        verified: true,
        createdAt: new Date(),
      },
    ];

    sampleTestimonials.forEach(testimonial => {
      const id = this.currentTestimonialId++;
      this.testimonials.set(id, { ...testimonial, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id, 
      createdAt: new Date() 
    };
    this.users.set(id, user);
    return user;
  }

  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { 
      ...insertProject, 
      id, 
      currentAmount: insertProject.currentAmount ?? null,
      imageUrl: insertProject.imageUrl ?? null,
      createdAt: new Date() 
    };
    this.projects.set(id, project);
    return project;
  }

  async updateProject(id: number, updates: Partial<Project>): Promise<Project | undefined> {
    const project = this.projects.get(id);
    if (!project) return undefined;
    
    const updatedProject = { ...project, ...updates };
    this.projects.set(id, updatedProject);
    return updatedProject;
  }

  async getInvestmentsByUser(userId: number): Promise<Investment[]> {
    return Array.from(this.investments.values()).filter(inv => inv.userId === userId);
  }

  async getInvestmentsByProject(projectId: number): Promise<Investment[]> {
    return Array.from(this.investments.values()).filter(inv => inv.projectId === projectId);
  }

  async createInvestment(insertInvestment: InsertInvestment): Promise<Investment> {
    const id = this.currentInvestmentId++;
    const investment: Investment = { 
      id,
      createdAt: new Date(),
      userId: insertInvestment.userId ?? null,
      projectId: insertInvestment.projectId ?? null,
      amount: insertInvestment.amount,
      returns: insertInvestment.returns ?? null
    };
    this.investments.set(id, investment);
    return investment;
  }

  async getTransactionsByUser(userId: number): Promise<Transaction[]> {
    return Array.from(this.transactions.values()).filter(tx => tx.userId === userId);
  }

  async createTransaction(insertTransaction: InsertTransaction): Promise<Transaction> {
    const id = this.currentTransactionId++;
    const transaction: Transaction = { 
      ...insertTransaction, 
      id, 
      createdAt: new Date(),
      userId: insertTransaction.userId ?? null,
      projectId: insertTransaction.projectId ?? null
    };
    this.transactions.set(id, transaction);
    return transaction;
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id, 
      createdAt: new Date(),
      avatar: insertTestimonial.avatar ?? null,
      verified: insertTestimonial.verified ?? null
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

import { DbStorage } from "./db-storage";

// Use PostgreSQL if DATABASE_URL is available, otherwise use in-memory storage
export const storage = process.env.DATABASE_URL ? new DbStorage() : new MemStorage();
