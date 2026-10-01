// Everything on the site is driven from this file.
// Images live in public/assets/portfolio/ and are referenced as "/assets/portfolio/your-file.jpg".

export const portfolioData = {
  profile: {
    name: "Faraj Arshad",
    role: "Certified Social Media Manager",
    location: "Gujranwala, Pakistan",
    avatar: "/assets/portfolio/profile.jpg",
    headline: "I turn quiet pages into busy ones.",
    intro:
      "I help brands grow on Instagram and Facebook by combining content planning, post design, and targeted Meta ad campaigns—most recently setting up and managing end-to-end digital operations for Aimen's Dental Care.",
    availability: "Open to new clients", // delete this line to hide the badge
  },

  // Pages you have handled. Add a link and its button appears automatically.
  clients: [
    {
      id: "aimens-dental-care",
      name: "Aimen's Dental Care",
      initials: "AD",
      image: "/assets/portfolio/aimens-icon.jpg",
      niche: "Dental clinic",
      status: "Most recent client",
      summary:
        "Set up and manage the clinic's digital presence end to end — social pages, Google Business Profile — and design the content that runs on them.",
      tags: ["Instagram", "Post design", "Google Business Profile"],
      links: {
        instagram: "https://www.instagram.com/aimensdentalcare/",
        facebook: "", // add the real Facebook page URL here once you have it — the button appears automatically
        tiktok: "", // same for TikTok
      },
      handle: "@aimensdentalcare",
    },
    // {
    //   id: "next-client", name: "Client name", initials: "CN", niche: "Niche", status: "Previous client",
    //   summary: "What you did for them.", tags: ["Facebook"], links: { facebook: "https://..." },
    // },
  ],

  // Post design gallery, pulled from your design portfolio PDFs.
  // type: "post" (feed post), "story" (vertical story), or "reel-cover" (video/reel thumbnail).
  // The Showcase section groups these into three rows automatically — just add items here.
  posts: [
    // Aimen's Dental Care
    { id: "nervous-first-visit", type: "post", title: "Nervous About Your First Visit?", image: "/assets/portfolio/nervous-first-visit.jpg", tint: ["#dbe8ff", "#eef4ff"] },
    { id: "step1-discussion", type: "post", title: "Step 1: Discussion & Medical History", image: "/assets/portfolio/step1-discussion.jpg", tint: ["#dbe8ff", "#eef4ff"] },
    { id: "first-visit-easier", type: "post", title: "Your First Visit Made Easy", image: "/assets/portfolio/first-visit-easier.jpg", tint: ["#dbe8ff", "#eef4ff"] },
    { id: "scaling", type: "post", title: "Professional Dental Scaling", image: "/assets/portfolio/scaling-before-after.jpg", tint: ["#dbe8ff", "#eef4ff"] },
    { id: "six-signs", type: "post", title: "6 Signs You Need a Checkup", image: "/assets/portfolio/six-signs-checkup.jpg", tint: ["#dbe8ff", "#eef4ff"] },
    { id: "services-list", type: "post", title: "Our Dental Services", image: "/assets/portfolio/dental-services-list.jpg", tint: ["#dbe8ff", "#eef4ff"] },
    { id: "braces", type: "post", title: "Braces: Day 1 to 2 Months", image: "/assets/portfolio/braces-progress.jpg", tint: ["#dbe8ff", "#eef4ff"] },
    { id: "saliva-fact", type: "post", title: "Fact of the Day: Saliva", image: "/assets/portfolio/saliva-fact.jpg", tint: ["#dbe8ff", "#eef4ff"] },

    // Ledgers Line
    { id: "bookkeeping-myths", type: "post", title: "Bookkeeping Myths, Busted", image: "/assets/portfolio/bookkeeping-myths.jpg", tint: ["#e3e8f5", "#eef1fa"] },
    { id: "tax-labyrinth", type: "post", title: "Tax Forms Like a Labyrinth", image: "/assets/portfolio/tax-forms-labyrinth.jpg", tint: ["#e3e8f5", "#eef1fa"] },
    { id: "decode-secrets", type: "post", title: "Decode Business Secrets", image: "/assets/portfolio/decode-business-secrets.jpg", tint: ["#e3e8f5", "#eef1fa"] },
    { id: "secure-future", type: "post", title: "Building a Secure Financial Future", image: "/assets/portfolio/secure-financial-future.jpg", tint: ["#e3e8f5", "#eef1fa"] },
    { id: "we-see-you", type: "post", title: "We See You", image: "/assets/portfolio/we-see-you.jpg", tint: ["#e3e8f5", "#eef1fa"] },
    { id: "ledger-quote", type: "post", title: "The Ledger's Story", image: "/assets/portfolio/ledger-pages-quote.jpg", tint: ["#e3e8f5", "#eef1fa"] },
    { id: "excel-basics", type: "post", title: "Excel Basics Training", image: "/assets/portfolio/excel-basics-training.jpg", tint: ["#e3e8f5", "#eef1fa"] },
    { id: "financial-goals", type: "post", title: "Set Your Financial Goals", image: "/assets/portfolio/set-financial-goals.jpg", tint: ["#e3e8f5", "#eef1fa"] },
    { id: "faq-cover", type: "post", title: "Bookkeeping FAQs", image: "/assets/portfolio/faq-cover.jpg", tint: ["#e3e8f5", "#eef1fa"] },
    { id: "faq-q1", type: "post", title: "Bookkeeping vs Accounting", image: "/assets/portfolio/faq-bookkeeping-vs-accounting.jpg", tint: ["#e3e8f5", "#eef1fa"] },
    { id: "contact-cta", type: "post", title: "Ready to Take Action?", image: "/assets/portfolio/contact-us-cta.jpg", tint: ["#e3e8f5", "#eef1fa"] },

    // Assignment Experts Hub
    { id: "struggling", type: "post", title: "Struggling With an Assignment?", image: "/assets/portfolio/struggling-with-assignment.jpg", tint: ["#dce6f5", "#e9eef7"] },
    { id: "why-risk-it", type: "post", title: "Why Risk It?", image: "/assets/portfolio/why-risk-it.jpg", tint: ["#dce6f5", "#e9eef7"] },
    { id: "double-grades", type: "post", title: "Double Your Grades", image: "/assets/portfolio/double-your-grades.jpg", tint: ["#dce6f5", "#e9eef7"] },
    { id: "dream-big", type: "post", title: "Dream Big, Work Hard", image: "/assets/portfolio/dream-big-quote.jpg", tint: ["#dce6f5", "#e9eef7"] },
    { id: "quality-guaranteed", type: "post", title: "Quality Guaranteed", image: "/assets/portfolio/quality-guaranteed.jpg", tint: ["#dce6f5", "#e9eef7"] },
    { id: "why-choose-us", type: "post", title: "Why Choose Us", image: "/assets/portfolio/why-choose-us.jpg", tint: ["#dce6f5", "#e9eef7"] },

    // Reel covers
    { id: "checkup-walkthrough", type: "reel-cover", title: "A Walkthrough of Your Checkup", image: "/assets/portfolio/checkup-walkthrough.jpg", tint: ["#cfe0ff", "#eaf1ff"] },
    { id: "dental-talks", type: "reel-cover", title: "Dental Talks with Dr. Aimen", image: "/assets/portfolio/dental-talks-cover.jpg", tint: ["#cfe0ff", "#eaf1ff"] },

    // Stories
    { id: "services-menu", type: "story", title: "Our Services", image: "/assets/portfolio/our-services-menu.jpg", tint: ["#cfe0ff", "#eaf1ff"] },
    { id: "three-steps", type: "story", title: "3 Simple Steps", image: "/assets/portfolio/three-simple-steps.jpg", tint: ["#cfe0ff", "#eaf1ff"] },
    { id: "book-services", type: "story", title: "Book Our Services", image: "/assets/portfolio/book-services-contact.jpg", tint: ["#cfe0ff", "#eaf1ff"] },
  ],

  // Most recent first — matches the order on your resume.
  experience: [
    {
      role: "Social Media Manager",
      org: "Aimen's Dental Care",
      period: "May 2026 – Present",
      points: [
        "Set up and managed the brand's digital presence by creating and optimizing social media pages and the Google Business Profile.",
        "Developed social media content and designed engaging posts that aligned with the clinic's branding and audience needs.",
      ],
    },
    {
      role: "Meta Ads Expert",
      org: "Assignment Experts Hub",
      period: "Nov 2024 – Jan 2025",
      points: ["Ran successful ad campaigns.", "Designed and managed post content."],
    },
    {
      role: "Digital Marketer",
      org: "Ledgers Line",
      period: "Oct 2023 – Dec 2023",
      points: [
        "Managed competing deadlines with efficiency.",
        "Customized brand messaging to reach and capture target audience interest and drive engagement.",
      ],
    },
    {
      role: "Social Media Marketing Manager",
      org: "Crypto Embassy",
      period: "Mar 2023 – Aug 2023",
      points: [
        "Completed thorough research into assigned topics.",
        "Directly reached out to potential clients regarding business deals.",
        "Monitored competitor content to identify areas for improvement in client campaigns.",
      ],
    },
  ],

  services: [
    { icon: "palette", title: "Post design", text: "Feed posts, carousels and stories designed in Canva to match your brand." },
    { icon: "layout", title: "Content planning", text: "A monthly calendar so every post has a purpose and a date." },
    { icon: "message", title: "Page management", text: "Posting, comments and messages handled every day on Instagram and Facebook." },
    { icon: "megaphone", title: "Meta ads", text: "Ad campaigns for Instagram and Facebook, from creative to targeting." },
    { icon: "film", title: "Reels and stories", text: "Short video and story formats that keep people watching." },
    { icon: "trend", title: "Reporting", text: "Plain monthly reports on what worked and what to do next." },
  ],

  // Real client feedback, shown as plain quotes with no name attached.
  testimonials: [
    { quote: "Yes indeed, I am satisfied with your services." },
    { quote: "Faraj, thank you so much for such a lovely video and caption." },
    { quote: "I'll catch up in a while, the concept is awesome, go ahead and post it." },
    // PLACEHOLDER — swap this for another real quote whenever you have one on hand.
    { quote: "This is exactly what I had in mind, please go ahead and schedule it." },
  ],

  contact: {
    email: "faraj.arshad01@gmail.com",
    phone: "+92 305 8748258", // set to "" to hide the phone button
    socials: [
      // Add your LinkedIn once you have the URL handy, e.g.:
      // { type: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/..." },
      // { type: "instagram", label: "Instagram", url: "https://www.instagram.com/yourhandle/" },
    ],
  },
};
