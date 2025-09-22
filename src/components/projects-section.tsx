import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "PaySplit Next.js",
      description: "A comprehensive payment splitting application built with Next.js, supporting seamless user withdrawals and merchant payments. Features secure authentication and real-time transaction processing.",
      technologies: ["Next.js", "Node.js", "React", "PostgreSQL", "Monorepo"],
      github: "https://github.com/surajshelke2/PayNow",
      demo: "#",
      featured: true
    },
    {
      title: "Medium Blog Website",
      description: "A full-featured blogging platform similar to Medium with user authentication, rich text editor, and responsive design. Built with modern web technologies for optimal performance.",
      technologies: ["React", "Hono", "RESTful APIs", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/surajshelke2/Medium-blog",
      demo: "#",
      featured: true
    },
    {
      title: "Video Calling Application",
      description: "Real-time video calling application with features like Stream.io integration, Clerk Authentication, and Shadcn UI components. Supports multiple participants and screen sharing.",
      technologies: ["Next.js", "Stream.io", "Clerk Authentication", "Shadcn UI"],
      github: "https://github.com/surajshelke2/we-chat",
      demo: "https://github.com/surajshelke2/we-chat",
      featured: false
    },
    {
      title: "Spotify",
      description: "A Spotify clone application featuring user authentication, music playback, and playlist management",
      technologies: ["React", "JWT", "Shadcn UI"],
      github: "https://spotify-clone-psi-ashy.vercel.app/",
      demo: "#",
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, demonstrating expertise in full-stack development, 
              modern frameworks, and scalable architecture.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Card 
                  className={`h-full group hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
                    project.featured ? "glow-violet border-primary/20" : "glow-soft"
                  }`}
                >
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}
                  
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                    </div>
                    
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary/90 flex items-center justify-center gap-4"
                    >
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </motion.div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs hover:bg-primary/5 hover:border-primary/30 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  {/* Project Links - Mobile Visible */}
                  <CardContent className="pt-0 md:hidden">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View More Projects */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/5"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}