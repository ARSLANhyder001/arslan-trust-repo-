import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProjectCard from "@/components/common/project-card";
import { staggerContainer } from "@/lib/animations";
import type { Project } from "@shared/schema";

export default function Projects() {
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-neon-cyan"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl mb-6 glow-text">
            Investment Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover premium real estate opportunities across global markets. 
            Each project is carefully vetted and Sharia-compliant.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search projects..."
              className="pl-10 glass-card border-gray-600 focus:border-neon-cyan"
            />
          </div>
          
          <Select>
            <SelectTrigger className="w-full md:w-48 glass-card border-gray-600">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="funding">Funding</SelectItem>
              <SelectItem value="complete">Complete</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full md:w-48 glass-card border-gray-600">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="dubai">Dubai</SelectItem>
              <SelectItem value="singapore">Singapore</SelectItem>
              <SelectItem value="london">London</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full md:w-48 glass-card border-gray-600">
              <SelectValue placeholder="ROI Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All ROI</SelectItem>
              <SelectItem value="10-12">10-12%</SelectItem>
              <SelectItem value="12-15">12-15%</SelectItem>
              <SelectItem value="15+">15%+</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="glass-card px-8 py-4 rounded-xl font-semibold border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-navy transition-all duration-300">
            Load More Projects
          </button>
        </motion.div>
      </div>
    </div>
  );
}
