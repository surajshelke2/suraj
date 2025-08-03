"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Software Development Intern",
    company: "Javan",
    location: "Remote",
    period: "October 2024 - Present",
    description:
      "Integrated Razorpay payment gateway in Next.js application with features like SSR and SSG. Enhanced application security by implementing role-based authentication using Google OAuth, improving authentication efficiency and user trust by 30%.",
    skills: ["Next.js", "Razorpay", "OAuth", "SSR", "SSG"],
  },
  {
    type: "work",
    title: "React Developer Intern",
    company: "Codial Technologies",
    location: "Remote",
    period: "May 2024 - July 2024",
    description:
      "Built responsive React applications with reusable components, leveraging Git for version control. Designed and implemented efficient state management using React Hooks and Context API to manage application-wide data, ensuring scalability and clean architecture.",
    skills: ["React.js", "JavaScript", "Git", "Context API", "React Hooks"],
  },
]

const education = [
  {
    type: "education",
    title: "B.Tech in Information Technology",
    company: "JSPM's Rajarshi Shahu College of Engineering",
    location: "Tathawade, Pune",
    period: "2022 - Present",
    description:
      "Currently pursuing Bachelor of Technology in Information Technology with a CGPA of 8.89. Focusing on software development, data structures, algorithms, and modern web technologies.",
    skills: ["Data Structures", "Algorithms", "OOP", "Database Management", "Computer Networks"],
  },
  {
    type: "education",
    title: "Diploma in Computer Engineering",
    company: "Marathwada Mitra Mandal's Polytechnic",
    location: "Thergaon, Pune",
    period: "2019 - 2022",
    description:
      "Completed Diploma in Computer Engineering with 91.09% marks. Built strong foundation in programming fundamentals, web development, and software engineering principles.",
    skills: ["C/C++", "Java", "Web Development", "Software Engineering", "Database Systems"],
  },
]

const allItems = [...experiences, ...education].sort((a, b) => {
  const dateA = new Date(a.period.split(" - ")[0])
  const dateB = new Date(b.period.split(" - ")[0])
  return dateB.getTime() - dateA.getTime()
})

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-violet-600 to-violet-300" />

          <div className="space-y-12">
            {allItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-violet-600 rounded-full border-4 border-background shadow-lg z-10" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        {item.type === "work" ? (
                          <Briefcase className="h-5 w-5 text-violet-600" />
                        ) : (
                          <GraduationCap className="h-5 w-5 text-violet-600" />
                        )}
                        <Badge variant={item.type === "work" ? "default" : "secondary"}>
                          {item.type === "work" ? "Experience" : "Education"}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                      <CardDescription className="space-y-1">
                        <div className="font-semibold text-foreground">{item.company}</div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
