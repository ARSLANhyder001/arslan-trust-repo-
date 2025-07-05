import { db } from './db';
import { users, projects, testimonials } from '@shared/schema';

async function seedDatabase() {
  console.log('Seeding database...');
  
  try {
    // Create tables if they don't exist
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await db.execute(`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        location TEXT NOT NULL,
        roi DECIMAL(5,2) NOT NULL,
        min_investment INTEGER NOT NULL,
        target_amount INTEGER NOT NULL,
        current_amount INTEGER DEFAULT 0,
        status TEXT NOT NULL,
        image_url TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await db.execute(`
      CREATE TABLE IF NOT EXISTS investments (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        project_id INTEGER REFERENCES projects(id),
        amount INTEGER NOT NULL,
        returns DECIMAL(10,2) DEFAULT 0,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await db.execute(`
      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        project_id INTEGER REFERENCES projects(id),
        amount INTEGER NOT NULL,
        type TEXT NOT NULL,
        status TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await db.execute(`
      CREATE TABLE IF NOT EXISTS testimonials (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        avatar TEXT,
        content TEXT NOT NULL,
        rating INTEGER NOT NULL,
        verified BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Seed projects
    await db.insert(projects).values([
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
      },
      {
        title: "London Tech District",
        description: "Mixed-use development in London's tech corridor",
        location: "London, UK",
        roi: "11.8",
        minInvestment: 5000,
        targetAmount: 12000000,
        currentAmount: 12000000,
        status: "COMPLETE",
        imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      },
    ]).onConflictDoNothing();

    // Seed testimonials
    await db.insert(testimonials).values([
      {
        name: "Ahmed Al-Rashid",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        content: "SAIR REIT has revolutionized my investment strategy. The halal approach combined with excellent returns is exactly what I was looking for.",
        rating: 5,
        verified: true,
      },
      {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        content: "The transparency and real-time tracking give me complete confidence in my investments. I've seen consistent 12%+ returns month after month.",
        rating: 5,
        verified: true,
      },
      {
        name: "Marcus Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        content: "Finally, a platform that combines cutting-edge technology with solid fundamentals. My portfolio has grown 35% since joining SAIR REIT.",
        rating: 5,
        verified: true,
      },
    ]).onConflictDoNothing();

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seedDatabase();