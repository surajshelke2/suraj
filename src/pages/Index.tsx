import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { useActiveSection } from "@/hooks/use-active-section"
import { motion, AnimatePresence } from "framer-motion"

const Index = () => {
  const activeSection = useActiveSection()

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navigation activeSection={activeSection} />
        
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key="portfolio-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <ExperienceSection />
              <ContactSection />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Index
