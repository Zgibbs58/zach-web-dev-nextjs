export type ProjectType = {
  id: number;
  name: string;
  description: string;
  fullDescription: string[];
  image: string;
  collage: string | undefined;
  projectLink: string;
  repoLink: string;
  technologies: string[];
};

export const projectData = [
  {
    id: 1,
    name: "Solid Rock Concrete",
    description:
      "The Solid Rock Concrete website is a Next.js web app designed for optimal performance and user experience, utilizing modern web technologies and showcasing the business's capabilities through professional photography and design.",
    fullDescription: [
      "I developed a comprehensive website for Solid Rock Concrete using the StoryBrand framework to effectively market their business. This project involved creating a visually appealing and professional online presence with a focus on clarity and ease of use for potential customers.",
      "The website features a modern, easy-to-understand design that appeals to customers and highlights Solid Rock Concrete's expertise. To further enhance the site's visual appeal, I conducted a photo shoot for the business, organizing and optimizing all images for the web using Adobe tools. These efforts included creating collages and high-quality visuals that showcase the business's work effectively.",
      "The website is built with JavaScript, TypeScript, HTML, and CSS, utilizing the Next.js framework for an optimized, fast, and reliable user experience. Hosting on Vercel ensures quick load times and dependable performance.",
      "By implementing the StoryBrand framework, the website clearly communicates the value Solid Rock Concrete provides to its customers, helping to convert visitors into leads and clients.",
    ],
    image: "/images/solidRock.gif",
    collage: "/images/srcFrame.png",
    projectLink: "https://www.solidrockconcretetn.com/",
    repoLink: "private",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Figma",
      "Adobe Photoshop",
      "Vercel",
      "Nodemailer",
      "SendGrid",
      "reCAPTCHA",
    ],
  },
  {
    id: 2,
    name: "Mofield Brothers Redesign",
    description:
      "The redesigned Mofield Brothers Construction website is a Next.js web app optimized for performance and user experience, featuring modern web technologies and secure form submissions.",
    fullDescription: [
      "Back in February 2023, I built the initial Mofield Brothers Construction website using HTML, CSS, JavaScript, and some jQuery. This was my first full website for a client, and we hosted it on HostGator, purchasing the domain there as well. The project was a significant learning experience, providing me with hands-on experience in web development and client collaboration.",
      "Fast forward 15 months, I took on the challenge to completely revamp the website using modern technologies. The new site is a Next.js web app hosted on Vercel. The shift to Next.js has significantly improved load times, performance, and SEO benefits thanks to features like the Image component and Static Site Generation (SSG).",
      "One of the standout features of the revamped site is the implementation of secure form submissions. I utilized Nodemailer, SendGrid, and reCAPTCHA to handle these submissions, ensuring that all client communications via the website are secure and reliable. This setup guarantees that form data is sent and received without any issues.",
      "I also added light and dark themes based on the user's device settings, enhancing the personalized browsing experience.",
      "This project has been an awesome learning experience, allowing me to harness new technologies and improve upon my initial work.",
    ],
    image: "/images/mofieldBrothersRedesign.gif",
    collage: "/images/mofieldBrothersFrame.png",
    projectLink: "https://www.mofieldbrothers.com/",
    repoLink: "https://github.com/Zgibbs58/Mofield-Brothers-React",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Daisy UI",
      "Framer Motion",
      "Next Themes",
      "Nodemailer",
      "SendGrid",
      "reCAPTCHA",
      "React Photo Album",
      "Yet Another React Lightbox",
      "Vercel",
    ],
  },
  {
    id: 3,
    name: "KandS HVAC",
    description:
      "KandS HVAC is a dynamic WordPress website crafted with Elementor. Each element is meticulously designed to reflect the client's brand, offering a unique user experience. The interactive homepage boasts captivating features such as a striking header, informative service cards, a dynamic reviews slider, and a user-friendly contact form. With easy navigation, visitors can seamlessly explore various sections, from business details to contacting the team, or browsing through a gallery of past projects.",
    fullDescription: [
      "I was approached by this client to update their WordPress website. They had hired a developer previously who had left them with a dysfunctional website that they were not pleased with. Although I hadn't built a WordPress website before, I was eager to explore this new technology. I informed the client about my usual development process, which involves JavaScript, HTML, and CSS, but assured them I would assess whether I could fix their website with WordPress or create a new one from scratch. After researching Elementor and WordPress for a couple of days, I felt confident in my ability to build a new website in WordPress that would meet the client's expectations.",
      "The initial challenge I encountered was updating WP and Elementor to their latest versions. I needed to update the software and plugins to incorporate the most up-to-date features for creating the website. I had read that updates could potentially cause the site to crash, so I warned the client beforehand. After updating WordPress and all the plugins, the site did crash, prompting me to investigate the error logs. I made adjustments to some of the PHP config code and, after a few hours of troubleshooting, resolved the issue and restored the site's functionality. Following that, I familiarized myself with the UI of WordPress and Elementor.",
      "I began by creating an inspiration board to determine the desired appearance of the homepage. Utilizing their brand colors, I developed engaging elements to direct the user's attention to the call-to-action and other key aspects of the page. Opting to start from scratch, I reconstructed the entire homepage section by section until it met the desired specifications. Subsequently, I proceeded to design and build each page until the site fulfilled all of the client's requirements. Most of the content was derived from discussions with the client, supplemented by research on their brand through social media and Google. Additional technologies and resources I utilized for website development included Figma, Photoshop, Excel, IconFinder.com, YouTube, and Google Developers Console.",
      "Reflecting on the experience, I now recognize both the advantages and disadvantages of creating a website with WordPress and a website builder versus coding it from scratch. Websites coded from scratch tend to perform better, offer virtually unlimited customization options, and can be seamlessly integrated with various APIs. While using a website builder on WordPress enabled me to develop a website in approximately half the time it takes to design and code one from scratch, it significantly reduced the need for extensive coding and felt similar to a website design project. Although some coding was necessary for customization, having a grasp of CSS proved beneficial, as most of the styling was accomplished using CSS terms. Implementing features such as SMTP for sending form data via email, as well as integrating ReCAPTCHA and Google Places API calls, was straightforward on WordPress. Moving forward, I will consider this approach when working with future clients, although I still prefer coding websites myself.",
    ],
    image: "/images/kandsHvac.gif",
    collage: "/images/kandsFrame.png",
    projectLink: "https://www.kandshvac.com/",
    repoLink: "private",
    technologies: [
      "WordPress",
      "Elementor",
      "HTML",
      "CSS",
      "PHP",
      "Figma",
      "Photoshop",
      "Excel",
      "Google Developers Console",
      "SMTP",
      "ReCAPTCHA",
      "Google Places API",
    ],
  },
  {
    id: 4,
    name: "Trinity",
    description:
      "A website I designed and developed for a client to promote his business and the services he offers. The home page features a hero section showcasing some supplies he offers and a brief description of the owner. As the user scrolls, they will see services listed out inside of cards and a slider at the bottom with what makes Trinity stand out. The navigation bar has links to a catalog of items Trinity offers, a connect page with the business contact information, and an about section.",
    fullDescription: [
      "This website is a React web app that was developed using Vite. I utilized swiper and framer-motion packages to make the page interactive for the user. I started by designing the website on Figma, learning how to use the grid system to align items appropriately throughout the website, creating components to reuse throughout a design, and using auto layout to create proper spacing between a group of items. Having a well-planned out design to develop saved time when I got to the development stage.",
      "I did some research on photography using a phone and utilized those techniques to photograph the images used on this site. The icons were purchased on the Iconfinder.com website to use commercially.",
      "The client wanted to use their current hosting provider, which had some limitations. It did not support react router dom and since their server is not secured, I could not set up an SSL certificate and route traffic to https. I ended up using hash routing to handle routing and we are talking about switching to another provider later to enable https traffic. This project gave me the opportunity to practice my design skills and create something my client was very pleased with.",
    ],
    image: "/images/Trinity.gif",
    collage: "/images/trinityFrame.png",
    projectLink: "http://www.trinitysalesgroupinc.com/",
    repoLink: "private",
    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Swiper",
      "Vite",
      "Figma",
    ],
  },
  {
    id: 5,
    name: "AI Note App",
    description:
      "The AI Note App is a Next.js web app that integrates the ChatGPT API to provide an intelligent note-taking experience. Users can input text, and the AI generates a summary of the content. The app also includes a search feature that retrieves relevant notes based on user queries.",
    fullDescription: [
      "This AI-powered note-taking app was built using a combination of Next.js, TypeScript, TailwindCSS, and the ChatGPT API to deliver an advanced, intelligent note-taking experience. A key challenge arose when Pinecone updated its API to a cloud environment, which required refactoring the existing codebase to align with the new requirements. I addressed this by updating the pinecone.ts file and synchronizing the project with the latest dependencies, ensuring seamless compatibility and robust performance.",
      "The app highlights my ability to overcome technical challenges, particularly in adapting to evolving APIs and technologies. I demonstrated expertise in integrating AI features, such as intelligent document retrieval with vector embeddings, and implementing user-centric functionality, including a light/dark theme toggle and secure user authentication with Clerk. The result is a modern, fully mobile-responsive application that showcases my strengths as a web developer committed to delivering high-quality, adaptable solutions.",
    ],
    image: "/images/aiNotesApp.gif",
    projectLink: "https://ai-next-js-note-app.vercel.app/",
    repoLink: "https://github.com/Zgibbs58/AI-NextJS-Note-App",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "ChatGPT API",
      "Vercel",
      "Pinecone",
      "Vector Embeddings",
      "Clerk",
      "Shadcn UI",
    ],
  },
  // {
  //   id: 5,
  //   name: "Portfolio",
  //   description:
  //     "My portfolio is a React app developed with Vite, showcasing a dynamic user experience through Tailwind CSS and Framer Motion for engaging animations. The inclusion of a contact form required setting up a Node server and utilizing Nodemailer for email functionality. Overcoming challenges with Gmail's OAuth, I transitioned to AWS SES for reliable email delivery. The portfolio is hosted on an AWS EC2 instance using an Ubuntu server.",
  //   fullDescription: [
  //     "This Portfolio is a React app created using Vite. Most of the styling was done using Tailwind, with all of the universal page styling handled in a separate CSS file. To enhance the user experience (UX), I incorporated Framer Motion to animate the initial load of components, and some components animate as they are scrolled into view. Another engaging feature I wanted to add was the ability to contact me using a form. I implemented front-end validation to ensure the required fields were entered correctly, including proper email formatting checked using regex. The form's functionality required setting up a Node server and using the Nodemailer package to send collected information via email.",
  //     "The most significant challenge was dealing with Gmail's OAuth, where the refresh token would expire every seven days, causing the form to throw an authentication error and stop working. To diagnose and resolve this issue quickly, I logged errors in the server by creating a log file and writing to it using the fs API. Eventually, I moved to using AWS SES for email delivery, which worked flawlessly with Nodemailer and without any downtime.",
  //     "This site is hosted on an AWS EC2 instance using an Ubuntu server. Setting up a server using SSH was a new experience, but with documentation and patience, I found the process to be a great learning experience. I created documentation on all the server setup, updating the server, using the Vim editor, and SSL configuration on the server to make these processes more streamlined for future projects.",
  //   ],
  //   image: "/images/Portfolio.gif",
  //   projectLink: "https://zacharywgibbs.com/",
  //   repoLink: "https://github.com/Zgibbs58/Zachary-Portfolio",
  //   technologies: ["React", "Express", "Tailwind", "Framer Motion", "Nodemailer", "AWS EC2", "AWS SES", "React Router Dom", "Typed.js"],
  // },
  // {
  //   id: 5,
  //   name: "AstronoME",
  //   description:
  //     "AstronoME is a web app designed to provide users with a comprehensive dashboard of information to enhance their stargazing experiences. While many features require a valid account, the landing page offers a glimpse of Incoming Asteroid data, a Daily image from NASA, and a welcoming message prompting users to sign up or log in. Upon registering, users can access weather and moon phase data specific to their location and become part of the AstronoME community through a dedicated forum for stargazers.",
  //   fullDescription: [
  //     "AstronoME is a MERN application using GraphQL and Apollo Server to adeptly handle data retrieval and manipulation. I was part of a collaborative effort involving five developers. My primary contributions centered around orchestrating the fetching and rendering of NASA API data on the dashboard and the integration of Cloudinary to facilitate image uploads, enhancing user engagement by allowing them to share their starry nights.",
  //     "Leveraging the useEffect React hook, I orchestrated asynchronous data fetching from two APIs, employing the useState hook to manage state variables based on the API responses. The JSX code featured conditional rendering, utilizing a ternary operator to dynamically display either cards of the fetched data or user-friendly messages.",
  //     "One of our stretch goals was the integration of image uploading within the post functionality. Excited for the oppurtunity to learn something new, I dedicated myself to researching and implementing Cloudinary. This involved utilizing a client-side widget for file selection and upload. Upon receiving the Cloudinary response containing the URL string, I stored it as a property in the MongoDB database's Blog Post model. Subsequently, when rendering posts, we showcased the stored Cloudinary images using the associated URLs.",
  //     "In addition to these major tasks, I actively contributed to bug fixes, implemented smaller features, and enhanced UI/UX, collaborating closely with my teammates. Our team's iterative development process spanned 10 days, encompassing concept creation, planning, development, testing, and presentation. Through persistent teamwork, we overcame challenges and learned to navigate obstacles together, capitalizing on each other's strengths.",
  //   ],
  //   image: "/images/AstronoME1.gif",
  //   repoLink: "https://github.com/Zgibbs58/astronoME",
  //   technologies: ["React", "MongoDB", "Mongoose", "Express", "Node", "GraphQL", "Apollo Server", "Cloudinary", "Tailwind CSS", "Heroku"],
  // },
  // {
  //   id: 6,
  //   name: "Maintenance Manatee",
  //   description:
  //     "Keeping track of your car's maintenance can be a headache. So put on cruise control and let the Maintenance Manatee keep track of it for you! Create a profile for your vehicle(s) and add posts describing the work you've had done including the cost, date, and any other important details. Join the Maintenance Manatee and spend more time in the fast lane!",
  //   fullDescription: [
  //     "Maintenance Manatee is a user-friendly, full-stack web application designed to simplify the task of tracking vehicle maintenance. We worked on a team of four developers, utilizing the MVC paradigm to create a RESTful API with CRUD functionality. My primary contributions centered around the implementation of the Handlebars templating engine, the design and styling of the UI, and collaborating with teammates to ensure client side and server side code functioned in harmony.",
  //     "Leveraging the Handlebars templating engine, I created dynamic HTML pages, utilizing conditional rendering to display the user's vehicle information in forms and pages. Additionally, I implemented custom helper functions to format dates and sort maintenance post dates in ascending order.",
  //     "I was responsible for most of the design and styling of the UI, utilizing Tailwind CSS to create a clean, intuitive interface. Which included a responsive design, ensuring the application is accessible on a variety of devices.",
  //     "Throughout the development process we utilized Git branches to ensure our code was well organized and to minimize the risk of merge conflicts. We were faced with merge conflicts on a few occasions, but we were able to resolve them through effective communication and collaboration.",
  //   ],
  //   image: "/images/MaintenanceManatee2.gif",
  //   repoLink: "https://github.com/Zgibbs58/maintenance-manatee",
  //   technologies: ["Express", "Node", "MySQL2", "Sequelize", "Handlebars", "Tailwind CSS", "Heroku"],
  // },
  // {
  //   id: 7,
  //   name: "Book Search Engine",
  //   description:
  //     "The Book Search Engine is a full-stack web application that allows users to search for books and save them to their profile. Users can create an account, login, search for books, save books, view their saved books, and delete them from their profile.",
  //   fullDescription: [
  //     "This application was originally built using a RESTful API, and I refactored it to use GraphQL. I created the GraphQL queries and mutations, as well as the Apollo Server. I also implemented the Apollo Provider to connect the client-side application to the server-side API.",
  //     "I utilized the useQuery and useMutation hooks to orchestrate asynchronous data fetching from the GraphQL API. The useState hook was used to manage state variables based on the API responses. The JSX code featured conditional rendering, utilizing a ternary operator to dynamically display either cards of the fetched data or user-friendly messages.",
  //   ],
  //   image: "/images/BookSearchEngine.gif",
  //   repoLink: "https://github.com/Zgibbs58/Book-Search-Engine-Refactor",
  //   technologies: ["React", "MongoDB", "Mongoose", "Express", "Node", "GraphQL", "Apollo Server", "Bootstrap", "Heroku"],
  // },
  // {
];
