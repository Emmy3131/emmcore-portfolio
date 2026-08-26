export const projects = [
  {
    id: 1,
    slug: "emmcore-shops",

    title: "EmmCoreShops",

    category: "E-Commerce",

    shortDescription:
      "A modern full-stack e-commerce platform for online shopping and business management.",

    description:
      "EmmCoreShops is a full-stack e-commerce platform designed to provide customers with a smooth shopping experience while giving administrators powerful tools to manage products, orders and users.",

    overview:
      "The goal was to build a complete e-commerce experience rather than a simple storefront. The platform combines a responsive customer interface with backend APIs, authentication, cart management, checkout, payments, orders and administration.",

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "Paystack",
    ],

    features: [
      "Product browsing",
      "Product search",
      "Shopping cart",
      "Wishlist",
      "User authentication",
      "Saved addresses",
      "Checkout",
      "Paystack payments",
      "Order management",
      "Admin dashboard",
      "Product management",
      "Responsive design",
    ],

    challenges: [
      "Designing a complete shopping experience",
      "Connecting the React frontend to REST APIs",
      "Managing authentication and protected routes",
      "Building cart and checkout workflows",
      "Handling payment verification",
      "Creating responsive interfaces",
    ],

    outcome:
      "The result is a complete e-commerce application with a customer-facing storefront and backend business logic capable of supporting products, users, carts, orders and payments.",

    status: "Live",

    featured: true,

    liveUrl: "https://emm-core-shops.vercel.app",

    githubUrl: "#",

    screenshots: [
      {
        title: "Storefront",
        description:
          "Customer-facing shopping experience.",
        image: "/projects/emmcore-shops/home.png",
      },
      {
        title: "Products",
        description:
          "Product browsing and discovery.",
        image: "/projects/emmcore-shops/products.png",
      },
      {
        title: "Checkout",
        description:
          "Customer checkout experience.",
        image: "/projects/emmcore-shops/checkout.png",
      },
      {
        title: "Admin Dashboard",
        description:
          "Business and order management.",
        image: "/projects/emmcore-shops/admin.png",
      },
    ],
  },

  {
    id: 2,

    slug: "emmcore-api",

    title: "EmmCore Global Networks API",

    category: "Backend",

    shortDescription:
      "A REST API powering authentication, products, orders and business operations.",

    description:
      "A Node.js and Express backend providing structured APIs and business logic for modern web applications.",

    overview:
      "This backend was developed to support modern applications through structured REST endpoints, authentication, database operations and business logic.",

    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "REST API",
    ],

    features: [
      "User authentication",
      "Protected routes",
      "User management",
      "Product management",
      "Cart management",
      "Order management",
      "Payment processing",
      "Database integration",
    ],

    challenges: [
      "Designing reusable API architecture",
      "Building protected API routes",
      "Connecting application logic with MongoDB",
      "Handling authentication",
      "Managing production deployment",
    ],

    outcome:
      "A structured backend API capable of supporting multiple frontend applications and business workflows.",

    status: "Production",

    featured: true,

    liveUrl: "#",

    githubUrl: "#",

    screenshots: [],
  },

  {
    id: 3,

    slug: "admin-management-system",

    title: "Admin Management System",

    category: "Dashboard",

    shortDescription:
      "A responsive administrative dashboard for managing business operations.",

    description:
      "A modern administration interface for managing products, orders, users and other business operations.",

    overview:
      "The dashboard provides administrators with a centralized interface for managing important areas of an online business.",

    technologies: [
      "React",
      "Tailwind CSS",
      "REST API",
    ],

    features: [
      "Dashboard statistics",
      "Product management",
      "Order management",
      "User management",
      "Withdrawal management",
      "Responsive interface",
    ],

    challenges: [
      "Designing information-dense interfaces",
      "Creating reusable dashboard components",
      "Connecting frontend views to APIs",
      "Handling different management workflows",
    ],

    outcome:
      "A responsive administration interface that centralizes important business operations.",

    status: "In Development",

    featured: true,

    liveUrl: "#",

    githubUrl: "#",

    screenshots: [],
  },
];