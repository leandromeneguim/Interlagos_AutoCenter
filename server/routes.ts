import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(data);
      res.json(message);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: "Dados inválidos",
          errors: error.errors,
        });
      } else {
        res.status(500).json({
          message: "Erro ao processar mensagem",
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
