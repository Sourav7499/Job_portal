import mongoose from "mongoose";
// seed.js inside backend/models
import { Company } from "./company.model.js";
import { Job } from "./job.model.js";


// Replace with your actual MongoDB connection string
const MONGO_URI = "mongodb://127.0.0.1:27017/jobportal";

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");


    // Insert 5 Companies
    const companies = await Company.insertMany([
      {
        name: "TechNova Solutions",
        description: "AI and Cloud services provider",
        website: "https://technova.com",
        location: "Bangalore",
        logo: "https://example.com/logo1.png",
        userId: "64ffacb2a8b8e0b5e1a34c22", // replace with real userId
      },
      {
        name: "DataMind Labs",
        description: "Big Data and ML startup",
        website: "https://datamind.com",
        location: "Hyderabad",
        logo: "https://example.com/logo2.png",
        userId: "64ffacb2a8b8e0b5e1a34c22",
      },
      {
        name: "GreenTech Systems",
        description: "IoT and embedded solutions",
        website: "https://greentech.com",
        location: "Pune",
        logo: "https://example.com/logo3.png",
        userId: "64ffacb2a8b8e0b5e1a34c22",
      },
      {
        name: "FinCore Technologies",
        description: "Fintech SaaS company",
        website: "https://fincore.com",
        location: "Mumbai",
        logo: "https://example.com/logo4.png",
        userId: "64ffacb2a8b8e0b5e1a34c22",
      },
      {
        name: "CyberSphere Security",
        description: "Cybersecurity and cloud security solutions",
        website: "https://cybersphere.com",
        location: "Delhi",
        logo: "https://example.com/logo5.png",
        userId: "64ffacb2a8b8e0b5e1a34c22",
      },
    ]);

    console.log("✅ Companies inserted");

    // Insert 5 Jobs (linked to above companies)
    const jobs = await Job.insertMany([
      {
        title: "Full Stack Developer",
        description: "Develop scalable web apps",
        requirements: ["React", "Node.js", "MongoDB"],
        salary: "10-14",
        experienceLevel: 2,
        location: "Bangalore",
        jobType: "Full-time",
        position: 3,
        company: companies[0]._id,
        created_by: companies[0].userId,
      },
      {
        title: "Data Scientist",
        description: "Work on ML models and analytics",
        requirements: ["Python", "TensorFlow", "SQL"],
        salary: "12-16",
        experienceLevel: 3,
        location: "Hyderabad",
        jobType: "Full-time",
        position: 2,
        company: companies[1]._id,
        created_by: companies[1].userId,
      },
      {
        title: "Embedded Systems Engineer",
        description: "Design IoT devices and embedded solutions",
        requirements: ["C", "C++", "IoT", "Microcontrollers"],
        salary: "8-12",
        experienceLevel: 2,
        location: "Pune",
        jobType: "Full-time",
        position: 4,
        company: companies[2]._id,
        created_by: companies[2].userId,
      },
      {
        title: "Backend Developer",
        description: "Develop APIs for fintech apps",
        requirements: ["Node.js", "Express", "PostgreSQL"],
        salary: "11-15",
        experienceLevel: 3,
        location: "Mumbai",
        jobType: "Full-time",
        position: 2,
        company: companies[3]._id,
        created_by: companies[3].userId,
      },
      {
        title: "Cybersecurity Analyst",
        description: "Monitor and secure cloud infrastructure",
        requirements: ["Cybersecurity", "AWS", "Networking"],
        salary: "9-13",
        experienceLevel: 2,
        location: "Delhi",
        jobType: "Full-time",
        position: 3,
        company: companies[4]._id,
        created_by: companies[4].userId,
      },
    ]);

    console.log("✅ Jobs inserted");

    process.exit();
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
