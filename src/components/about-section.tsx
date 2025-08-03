import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Cpu, Database, Globe, Server, Smartphone } from "lucide-react"

export function AboutSection() {
  const skills = [
    { category: "Languages", items: ["C/C++", "Java", "JavaScript", "HTML5", "CSS3"], icon: Code2 },
    { category: "Databases", items: ["SQL", "NoSQL", "MongoDB", "PostgreSQL", "Firebase"], icon: Database },
    { category: "Frameworks/Tools", items: ["React.js", "Node.js", "Next.js", "Recoil", "Tailwind CSS", "Prisma ORM", "Git", "VS Code"], icon: Globe },
    { category: "Core Subjects", items: ["Computer networks", "Data Structures and Algorithms", "Object-Oriented Programming", "Database Management Systems"], icon: Cpu }
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
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate software developer with a strong foundation in computer science and 
              hands-on experience in modern web technologies. I love solving complex problems 
              and building user-centric applications.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - About Text & Profile */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="glow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      SS
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Suraj Shelke</h3>
                      <p className="text-muted-foreground">Software Developer</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Currently pursuing B.Tech in Information Technology at JSPM's Rajarshi Shahu 
                      College of Engineering with a CGPA of 8.80. I have hands-on experience in 
                      full-stack development and have worked on various projects ranging from 
                      payment gateways to real-time applications.
                    </p>
                    
                    <p>
                      My technical journey includes internships where I've integrated payment systems, 
                      enhanced application security, and built scalable React applications. I'm passionate 
                      about clean code, performance optimization, and creating seamless user experiences.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Code2 className="w-3 h-3 mr-1" />
                        Full Stack
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Server className="w-3 h-3 mr-1" />
                        Backend
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Smartphone className="w-3 h-3 mr-1" />
                        Responsive Design
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              
              <div className="grid gap-6">
                {skills.map((skillGroup, index) => {
                  const IconComponent = skillGroup.icon
                  return (
                    <motion.div
                      key={skillGroup.category}
                      variants={itemVariants}
                      custom={index}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 glow-soft">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="font-semibold">{skillGroup.category}</h4>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill) => (
                              <motion.div
                                key={skill}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Badge
                                  variant="outline"
                                  className="hover:bg-primary/5 hover:border-primary/30 transition-colors duration-200 cursor-default"
                                >
                                  {skill}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}