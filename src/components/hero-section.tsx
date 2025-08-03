import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleDownloadResume = () => {
    // This would typically download a PDF file
    const link = document.createElement("a");
    link.href = "/lovable-uploads/b9a7a7ab-4af6-485d-9cac-dc16a27d7b36.png";
    link.download = "Suraj_Shelke_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" />
      </div>
      {/* Animated gradient orbs */}
      {/* Subtle Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-xl opacity-30"
        style={{
          background:
            "linear-gradient(45deg, rgba(59,130,246,0.4), rgba(139,92,246,0.4), rgba(6,182,212,0.3))",
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-xl opacity-25"
        style={{
          background:
            "linear-gradient(135deg, rgba(236,72,153,0.35), rgba(245,158,11,0.35), rgba(16,185,129,0.3))",
        }}
        animate={{
          scale: [1.05, 1, 1.05],
          rotate: [180, 90, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-56 h-56 rounded-full blur-lg opacity-20"
        style={{
          background:
            "linear-gradient(90deg, rgba(99,102,241,0.3), rgba(168,85,247,0.3), rgba(236,72,153,0.25))",
        }}
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              <MapPin className="w-3 h-3 mr-1" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm <span className="text-gradient">Suraj Shelke</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl text-muted-foreground h-16"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React.js Developer",
                2000,
                "Next.js Enthusiast",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            B.Tech in Information Technology with expertise in full-stack
            development. Passionate about creating efficient, scalable solutions
            with modern technologies like React, Node.js, and cloud platforms.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button
              size="lg"
              className="hero-gradient text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadResume}
              className="border-primary/30 hover:bg-primary/5"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors duration-300 glow-soft"
            >
              <Github className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors duration-300 glow-soft"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="mailto:surajshelke1359@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors duration-300 glow-soft"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
