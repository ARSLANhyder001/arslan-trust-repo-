import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertProjectSchema, insertTestimonialSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Projects endpoints
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getAllProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const project = await storage.getProject(id);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });

  app.post("/api/projects", async (req, res) => {
    try {
      const validatedData = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(validatedData);
      res.status(201).json(project);
    } catch (error) {
      res.status(400).json({ message: "Invalid project data" });
    }
  });

  // Testimonials endpoints
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  app.post("/api/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.status(201).json(testimonial);
    } catch (error) {
      res.status(400).json({ message: "Invalid testimonial data" });
    }
  });

  // Dashboard stats endpoint
  app.get("/api/dashboard/stats", async (req, res) => {
    try {
      const projects = await storage.getAllProjects();
      const totalInvested = projects.reduce((sum, p) => sum + p.currentAmount, 0);
      const activeProjects = projects.filter(p => p.status === 'ACTIVE').length;
      const avgROI = projects.reduce((sum, p) => sum + parseFloat(p.roi), 0) / projects.length;
      
      res.json({
        totalInvested,
        monthlyReturns: Math.floor(totalInvested * (avgROI / 100) / 12),
        activeProjects,
        totalProjects: projects.length,
        avgROI: avgROI.toFixed(1)
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch dashboard stats" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
