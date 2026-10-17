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
      "I help brands grow on Instagram and Facebook by combining content planning, post design, and targeted Meta ad campaigns.",
    availability: "Open to new clients", // delete this line to hide the badge
  },

  // Pages you have handled. Add a link and its button appears automatically.
  // current: true  -> also listed in the "Currently managing" card on the hero.
  clients: [
    {
      id: "aimens-dental-care",
      name: "Aimen's Dental Care",
      initials: "AD",
      image: "/assets/portfolio/aimens-icon.jpg",
      niche: "Dental clinic",
      status: "Current client",
      current: true,
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
    {
      id: "sunways-solar",
      name: "Sunways Solar",
      initials: "SS",
      image: "/assets/portfolio/sunways-logo.jpg",
      niche: "Solar energy",
      status: "Current client",
      current: true,
      summary: "Run the company's Instagram and Facebook pages and design the content that goes out on both.",
      tags: ["Instagram", "Facebook", "Post design"],
      links: {
        instagram: "https://www.instagram.com/sunwayzenergy/",
        facebook: "", // add the Sunways Facebook page URL here and its button appears
      },
      handle: "@sunwayzenergy",
    },
    // {
    //   id: "next-client", name: "Client name", initials: "CN", niche: "Niche", status: "Previous client",
    //   summary: "What you did for them.", tags: ["Facebook"], links: { facebook: "https://..." },
    // },
  ],

  // The four cards in the "Post design" section — one per client, each with its own popup.
  // Every design in `posts` below points at one of these through its `client` id.
  designClients: [
    { id: "aimens-dental-care", name: "Aimen's Dental Care", logo: "/assets/portfolio/aimens-icon.jpg" },
    { id: "sunways-solar", name: "Sunways Solar", logo: "/assets/portfolio/sunways-logo.jpg" },
    { id: "ledgers-line", name: "Ledgers Line", logo: "/assets/portfolio/ledgers-line-logo.jpg" },
    { id: "assignment-experts-hub", name: "Assignment Experts Hub", logo: "/assets/portfolio/assignment-experts-hub-logo.jpg" },
  ],

  // The designs themselves.
  //   client:   id of one of the designClients above
  //   type:     "post" | "story" | "reel-cover" | "print"  (shown as a label in the full view)
  //   ratio:    width / height of the image (optional; measured automatically if left out)
  //   featured: true to show it in its client's card preview (the first 4 featured ones are used)
  posts: [
    // Aimen's Dental Care
    { id: "aimens-pamphlet", client: "aimens-dental-care", type: "print", title: "Clinic Pamphlet", image: "/assets/portfolio/aimens-pamphlet.jpg", ratio: 0.47, featured: true, tint: ["#dbe8ff", "#eef4ff"] },
    { id: "smooth-experience", client: "aimens-dental-care", type: "post", title: "A Smooth, Comfortable Experience", image: "/assets/portfolio/smooth-comfortable-experience.jpg", ratio: 1, featured: true, tint: ["#dbe8ff", "#eef4ff"] },
    { id: "nervous-first-visit", client: "aimens-dental-care", type: "post", title: "Nervous About Your First Visit?", image: "/assets/portfolio/nervous-first-visit.jpg", ratio: 1, featured: true, tint: ["#dbe8ff", "#eef4ff"] },
    { id: "step1-discussion", client: "aimens-dental-care", type: "post", title: "Step 1: Discussion & Medical History", image: "/assets/portfolio/step1-discussion.jpg", ratio: 1, tint: ["#dbe8ff", "#eef4ff"] },
    { id: "first-visit-easier", client: "aimens-dental-care", type: "post", title: "Your First Visit Made Easy", image: "/assets/portfolio/first-visit-easier.jpg", ratio: 1, tint: ["#dbe8ff", "#eef4ff"] },
    { id: "scaling", client: "aimens-dental-care", type: "post", title: "Professional Dental Scaling", image: "/assets/portfolio/scaling-before-after.jpg", ratio: 0.717, tint: ["#dbe8ff", "#eef4ff"] },
    { id: "six-signs", client: "aimens-dental-care", type: "post", title: "6 Signs You Need a Checkup", image: "/assets/portfolio/six-signs-checkup.jpg", ratio: 0.8, tint: ["#dbe8ff", "#eef4ff"] },
    { id: "services-list", client: "aimens-dental-care", type: "post", title: "Our Dental Services", image: "/assets/portfolio/dental-services-list.jpg", ratio: 0.801, tint: ["#dbe8ff", "#eef4ff"] },
    { id: "braces", client: "aimens-dental-care", type: "post", title: "Braces: Day 1 to 2 Months", image: "/assets/portfolio/braces-progress.jpg", ratio: 0.8, tint: ["#dbe8ff", "#eef4ff"] },
    { id: "saliva-fact", client: "aimens-dental-care", type: "post", title: "Fact of the Day: Saliva", image: "/assets/portfolio/saliva-fact.jpg", ratio: 1, tint: ["#dbe8ff", "#eef4ff"] },
    { id: "checkup-walkthrough", client: "aimens-dental-care", type: "reel-cover", title: "A Walkthrough of Your Checkup", image: "/assets/portfolio/checkup-walkthrough.jpg", ratio: 0.666, tint: ["#cfe0ff", "#eaf1ff"] },
    { id: "dental-talks", client: "aimens-dental-care", type: "reel-cover", title: "Dental Talks with Dr. Aimen", image: "/assets/portfolio/dental-talks-cover.jpg", ratio: 0.666, featured: true, tint: ["#cfe0ff", "#eaf1ff"] },

    // Sunways Solar
    { id: "sunways-solis", client: "sunways-solar", type: "post", title: "Reliable Power With Solis Inverters", image: "/assets/portfolio/sunways-solis-inverters.jpg", ratio: 1, featured: true, tint: ["#e1efff", "#fff3dc"] },
    { id: "sunways-auxsol", client: "sunways-solar", type: "post", title: "Auxsol Inverters", image: "/assets/portfolio/sunways-auxsol-inverters.jpg", ratio: 1, tint: ["#e1efff", "#fff3dc"] },
    { id: "sunways-why-solar", client: "sunways-solar", type: "post", title: "Why Choose Solar Energy?", image: "/assets/portfolio/sunways-why-solar.jpg", ratio: 1, featured: true, tint: ["#e1efff", "#fff3dc"] },
    { id: "sunways-know-before", client: "sunways-solar", type: "post", title: "Know Before You Go Solar", image: "/assets/portfolio/sunways-know-before-solar.jpg", ratio: 1, tint: ["#e1efff", "#fff3dc"] },
    { id: "sunways-power-future", client: "sunways-solar", type: "post", title: "Power Your Future With Solar", image: "/assets/portfolio/sunways-power-your-future.jpg", ratio: 1, featured: true, tint: ["#e1efff", "#fff3dc"] },

    // Ledgers Line
    { id: "bookkeeping-myths", client: "ledgers-line", type: "post", title: "Bookkeeping Myths, Busted", image: "/assets/portfolio/bookkeeping-myths.jpg", ratio: 1, featured: true, tint: ["#e3e8f5", "#eef1fa"] },
    { id: "tax-labyrinth", client: "ledgers-line", type: "post", title: "Tax Forms Like a Labyrinth", image: "/assets/portfolio/tax-forms-labyrinth.jpg", ratio: 1, tint: ["#e3e8f5", "#eef1fa"] },
    { id: "decode-secrets", client: "ledgers-line", type: "post", title: "Decode Business Secrets", image: "/assets/portfolio/decode-business-secrets.jpg", ratio: 1, tint: ["#e3e8f5", "#eef1fa"] },
    { id: "secure-future", client: "ledgers-line", type: "post", title: "Building a Secure Financial Future", image: "/assets/portfolio/secure-financial-future.jpg", ratio: 1, tint: ["#e3e8f5", "#eef1fa"] },
    { id: "we-see-you", client: "ledgers-line", type: "post", title: "We See You", image: "/assets/portfolio/we-see-you.jpg", ratio: 1, tint: ["#e3e8f5", "#eef1fa"] },
    { id: "ledger-quote", client: "ledgers-line", type: "post", title: "The Ledger's Story", image: "/assets/portfolio/ledger-pages-quote.jpg", ratio: 1, featured: true, tint: ["#e3e8f5", "#eef1fa"] },
    { id: "excel-basics", client: "ledgers-line", type: "post", title: "Excel Basics Training", image: "/assets/portfolio/excel-basics-training.jpg", ratio: 1, tint: ["#e3e8f5", "#eef1fa"] },
    { id: "financial-goals", client: "ledgers-line", type: "post", title: "Set Your Financial Goals", image: "/assets/portfolio/set-financial-goals.jpg", ratio: 1, tint: ["#e3e8f5", "#eef1fa"] },
    { id: "faq-cover", client: "ledgers-line", type: "post", title: "Bookkeeping FAQs", image: "/assets/portfolio/faq-cover.jpg", ratio: 1, featured: true, tint: ["#e3e8f5", "#eef1fa"] },
    { id: "faq-q1", client: "ledgers-line", type: "post", title: "Bookkeeping vs Accounting", image: "/assets/portfolio/faq-bookkeeping-vs-accounting.jpg", ratio: 1, tint: ["#e3e8f5", "#eef1fa"] },
    { id: "contact-cta", client: "ledgers-line", type: "post", title: "Ready to Take Action?", image: "/assets/portfolio/contact-us-cta.jpg", ratio: 1, tint: ["#e3e8f5", "#eef1fa"] },

    // Assignment Experts Hub
    { id: "struggling", client: "assignment-experts-hub", type: "post", title: "Struggling With an Assignment?", image: "/assets/portfolio/struggling-with-assignment.jpg", ratio: 1, featured: true, tint: ["#dce6f5", "#e9eef7"] },
    { id: "why-risk-it", client: "assignment-experts-hub", type: "post", title: "Why Risk It?", image: "/assets/portfolio/why-risk-it.jpg", ratio: 1, tint: ["#dce6f5", "#e9eef7"] },
    { id: "double-grades", client: "assignment-experts-hub", type: "post", title: "Double Your Grades", image: "/assets/portfolio/double-your-grades.jpg", ratio: 1, tint: ["#dce6f5", "#e9eef7"] },
    { id: "dream-big", client: "assignment-experts-hub", type: "post", title: "Dream Big, Work Hard", image: "/assets/portfolio/dream-big-quote.jpg", ratio: 1, tint: ["#dce6f5", "#e9eef7"] },
    { id: "quality-guaranteed", client: "assignment-experts-hub", type: "post", title: "Quality Guaranteed", image: "/assets/portfolio/quality-guaranteed.jpg", ratio: 1, tint: ["#dce6f5", "#e9eef7"] },
    { id: "why-choose-us", client: "assignment-experts-hub", type: "post", title: "Why Choose Us", image: "/assets/portfolio/why-choose-us.jpg", ratio: 1, featured: true, tint: ["#dce6f5", "#e9eef7"] },
    { id: "services-menu", client: "assignment-experts-hub", type: "story", title: "Our Services", image: "/assets/portfolio/our-services-menu.jpg", ratio: 0.562, featured: true, tint: ["#cfe0ff", "#eaf1ff"] },
    { id: "three-steps", client: "assignment-experts-hub", type: "story", title: "3 Simple Steps", image: "/assets/portfolio/three-simple-steps.jpg", ratio: 0.562, featured: true, tint: ["#cfe0ff", "#eaf1ff"] },
    { id: "book-services", client: "assignment-experts-hub", type: "story", title: "Book Our Services", image: "/assets/portfolio/book-services-contact.jpg", ratio: 0.562, tint: ["#cfe0ff", "#eaf1ff"] },
  ],

  // Most recent first — matches the order on your resume.
  experience: [
    {
      role: "Social Media Manager",
      org: "Sunways Solar",
      period: "Oct 2026 – Present",
      points: [
        "Manage the brand's Instagram and Facebook pages.",
        "Design the content that goes out across both platforms.",
      ],
    },
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
