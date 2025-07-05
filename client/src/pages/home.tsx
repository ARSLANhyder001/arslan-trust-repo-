import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { DollarSign, TrendingUp, Shield, Eye } from "lucide-react";
import GlowingButton from "@/components/common/glowing-button";
import FeatureIconCard from "@/components/common/feature-icon-card";
import ProjectCard from "@/components/common/project-card";
import { customProjects } from "@/lib/custom-projects";
import TestimonialSlider from "@/components/common/testimonial-slider";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { Project, Testimonial } from "@shared/schema";

export default function Home() {
  const { data: projects = [] } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const features = [
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Halal Income",
      description: "Sharia-compliant investments ensuring your wealth grows through ethical means.",
      iconColor: "cyan" as const,
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Asset-Backed ROI",
      description: "Real estate assets providing tangible value and consistent returns.",
      iconColor: "violet" as const,
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Transparent Sharing",
      description: "Complete transparency in profit distribution and investment allocation.",
      iconColor: "mint" as const,
    },
    {
      icon: <Eye className="w-8 h-8 text-white" />,
      title: "Real-Time Tracking",
      description: "Monitor your investments with live updates and detailed analytics.",
      iconColor: "cyan" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center px-6">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="font-orbitron font-black text-5xl md:text-7xl mb-6 glow-text"
            variants={fadeInUp}
          >
            Invest in Real Assets.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-violet">
              Level Up Your Wealth.
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Next-gen REIT for halal, asset-backed growth. Experience the future of digital real estate investment.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={fadeInUp}
          >
            <GlowingButton variant="primary" size="lg">
              Explore Projects
            </GlowingButton>
            <GlowingButton variant="outline" size="lg">
              Create Account
            </GlowingButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-orbitron font-bold text-4xl md:text-5xl text-center mb-16 glow-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose SAIR REIT?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureIconCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconColor={feature.iconColor}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Live Projects Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-navy/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-orbitron font-bold text-4xl md:text-5xl text-center mb-16 glow-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Live Investment Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Custom Projects Section */}
          <motion.h2
            className="font-orbitron font-bold text-3xl md:text-4xl text-center mt-20 mb-10 glow-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Local Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-orbitron font-bold text-4xl md:text-5xl text-center mb-16 glow-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Our Investors Say
          </motion.h2>
          
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-neon-cyan/10 via-electric-violet/10 to-light-mint/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-orbitron font-black text-4xl md:text-6xl mb-6 glow-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your Future is One Halal Investment Away.
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of investors who are building wealth through ethical, transparent, and profitable real estate investments.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlowingButton
              variant="secondary"
              size="lg"
              className="font-orbitron font-bold text-xl animate-glow"
            >
              Join Now - Start with $1,000
            </GlowingButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
