import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          {/* Logo/Name */}
          <div className="text-xl font-bold text-gradient">
            Suraj Shelke
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-accent transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-accent transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="mailto:surajshelke1359@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-accent transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Quick Links */}
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase())
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                whileHover={{ scale: 1.05 }}
                className="hover:text-foreground transition-colors duration-200"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Suraj Shelke. Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              using React & Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}