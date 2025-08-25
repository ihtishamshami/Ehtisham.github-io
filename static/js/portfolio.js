document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up")
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all elements with animate-on-scroll class
  const animateElements = document.querySelectorAll(".animate-on-scroll")
  animateElements.forEach((el) => observer.observe(el))

  // Smooth scrolling for navigation links
  function smoothScroll(targetId) {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Button event handlers
  const downloadResumeBtn = document.getElementById("download-resume")
  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener("click", () => {
      window.location.href = "/download-resume/"
    })
  }

  const viewProjectsBtn = document.getElementById("view-projects")
  if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener("click", () => {
      smoothScroll("projects")
    })
  }

  // Social media buttons
  const whatsappBtn = document.getElementById("whatsapp-btn")
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function () {
      window.open(this.dataset.url, "_blank")
    })
  }

  const linkedinBtn = document.getElementById("linkedin-btn")
  if (linkedinBtn) {
    linkedinBtn.addEventListener("click", function () {
      window.open(this.dataset.url, "_blank")
    })
  }

  const githubBtn = document.getElementById("github-btn")
  if (githubBtn) {
    githubBtn.addEventListener("click", function () {
      window.open(this.dataset.url, "_blank")
    })
  }

  // Project demo and code buttons
  const projectDemoButtons = document.querySelectorAll(".project-demo-btn")
  projectDemoButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      window.open(this.dataset.url, "_blank")
    })
  })

  const projectCodeButtons = document.querySelectorAll(".project-code-btn")
  projectCodeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      window.open(this.dataset.url, "_blank")
    })
  })

  // Add hover effects to cards
  const cards = document.querySelectorAll(".card")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Add pulse glow effect to avatar
  const avatar = document.querySelector(".avatar")
  if (avatar) {
    avatar.classList.add("animate-pulse-glow")
  }
})
