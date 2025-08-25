"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Github,
  Linkedin,
  MessageCircle,
  Download,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  Brain,
  Rocket,
} from "lucide-react"

export default function Portfolio() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const handleDownloadResume = () => {
    // Create a dummy resume download - replace with actual resume file
    const link = document.createElement("a")
    link.href = "/resume-sheikh-ehtisham.pdf" // Replace with actual resume path
    link.download = "Sheikh_Ehtisham_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/+923001234567", "_blank") // Replace with actual WhatsApp number
  }

  const handleLinkedIn = () => {
    window.open("https://linkedin.com/in/sheikh-ehtisham", "_blank") // Replace with actual LinkedIn profile
  }

  const handleGitHub = () => {
    window.open("https://github.com/sheikh-ehtisham", "_blank") // Replace with actual GitHub profile
  }

  const handleProjectDemo = (projectIndex: number) => {
    // Replace with actual project URLs
    const projectUrls = [
      "https://ai-dashboard-demo.vercel.app",
      "https://smart-home-demo.vercel.app",
      "https://cv-security-demo.vercel.app",
    ]
    window.open(projectUrls[projectIndex] || "#", "_blank")
  }

  const handleProjectCode = (projectIndex: number) => {
    // Replace with actual GitHub repository URLs
    const githubUrls = [
      "https://github.com/sheikh-ehtisham/ai-analytics-dashboard",
      "https://github.com/sheikh-ehtisham/smart-iot-home",
      "https://github.com/sheikh-ehtisham/cv-security-system",
    ]
    window.open(githubUrls[projectIndex] || "#", "_blank")
  }

  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with machine learning insights and predictive analytics.",
      tech: ["React", "Python", "TensorFlow", "PostgreSQL"],
      link: "#",
      github: "#",
    },
    {
      title: "Smart IoT Home Automation",
      description: "Complete home automation system with voice control, mobile app, and energy optimization.",
      tech: ["Arduino", "React Native", "Node.js", "MQTT"],
      link: "#",
      github: "#",
    },
    {
      title: "Computer Vision Security System",
      description: "Advanced security system using facial recognition and anomaly detection algorithms.",
      tech: ["OpenCV", "PyTorch", "FastAPI", "Docker"],
      link: "#",
      github: "#",
    },
  ]

  const achievements = [
    {
      title: "AI Innovation Award",
      description: "Recognized for outstanding contribution to AI research and development",
      year: "2024",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Best Engineering Project",
      description: "University-wide recognition for innovative IoT solution",
      year: "2023",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      title: "Machine Learning Certification",
      description: "Advanced certification in Deep Learning and Neural Networks",
      year: "2023",
      icon: <Brain className="w-6 h-6" />,
    },
  ]

  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "TechCorp Solutions",
      period: "2023 - Present",
      location: "Remote",
      description: "Leading AI initiatives and developing machine learning models for enterprise clients.",
    },
    {
      title: "Software Developer",
      company: "InnovateTech",
      period: "2022 - 2023",
      location: "Karachi, Pakistan",
      description: "Developed full-stack applications and implemented AI-powered features.",
    },
    {
      title: "Junior Developer",
      company: "StartupHub",
      period: "2021 - 2022",
      location: "Lahore, Pakistan",
      description: "Built responsive web applications and contributed to mobile app development.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <Avatar className="w-32 h-32 mx-auto mb-8 animate-pulse-glow">
              <AvatarImage
                src="/professional-headshot-of-sheikh-ehtisham-ur-rehman.png"
                alt="Sheikh Ehtisham Ur Rehman"
              />
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">SE</AvatarFallback>
            </Avatar>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
              Sheikh Ehtisham Ur Rehman
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">Computer Engineer & AI Specialist</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Passionate about creating innovative solutions that bridge the gap between cutting-edge technology and
              real-world applications. Specializing in AI, machine learning, and full-stack development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleDownloadResume}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                onClick={handleViewProjects}
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 text-primary">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work in AI, machine learning, and software development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="animate-on-scroll hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-border/50 hover:border-primary/50"
              >
                <CardHeader>
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-accent/20 text-accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      onClick={() => handleProjectDemo(index)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-muted-foreground hover:text-foreground"
                      onClick={() => handleProjectCode(index)}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 text-primary">Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition and milestones in my professional journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="animate-on-scroll text-center hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 border-border/50 hover:border-accent/50"
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-foreground">{achievement.title}</CardTitle>
                  <Badge variant="outline" className="border-accent text-accent">
                    {achievement.year}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 text-primary">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey through various roles and responsibilities
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="animate-on-scroll mb-8 last:mb-0">
                <Card className="border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-foreground">{exp.title}</CardTitle>
                        <CardDescription className="text-accent font-medium">{exp.company}</CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 text-primary">Let's Connect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
              Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to
              life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" onClick={handleWhatsApp}>
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleLinkedIn}>
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                onClick={handleGitHub}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 Sheikh Ehtisham Ur Rehman. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
