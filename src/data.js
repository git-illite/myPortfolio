export const projects = [
  {
    title: "ProShop eCommerce App",
    subtitle: "MERN Stack + Redux",
    description:
      "Built a full-stack eCommerce app with user auth, Redux state management, cart, checkout, and admin product controls. Includes an admin dashboard, order tracking, and PayPal integration, deployed via Render and Netlify.",
    image: "./project-3.gif",
    link: "https://adenproshop.netlify.app/",
    sourceCodeLink:"https://github.com/git-illite/proShop"
  },
  {
    title: "React CitiBike Trips",
    subtitle: "MERN Stack",
    description:
      "Obtained sample data loaded in MongoDB Atlas for this project and used it to create (and publish) a simple Web API.  I used React-Bootstrap for the client-side and created a rich user interface for accessing the data. There is also an interactive map to add/change routes.",
    image: "./project-1.gif",
    link: "https://elaborate-peony-6b2d1c.netlify.app/",
    sourceCodeLink:"https://github.com/git-illite/reactTrips"
  }, 
  {
    title: "Spotify API",
    subtitle: "MEAN Stack",
    description:
      "This site is working with fetched data from Spotify to create a User Interface (UI) with Angular also Angular Material that enables users to explore and discover new music. Users may register and have the benefit of having their favourites list saved.",
    image: "./project-2.gif",
    link: "https://stellar-pudding-3ef9f8.netlify.app/",
    sourceCodeLink:"https://github.com/git-illite/SpotifyAngularAAden"
  },
  {
    title: "Fragments App",
    subtitle: "Amazon Web Services (AWS)",
    description:
      "This is a highly scalable service for working with fragments of text and images. It is fully deployed to AWS and leveraged several amazon services: Cognito, ECR, ECS, S3, DynamoDB. It employed continuous integration (CI) and continuous deployment (CD) as a software development methodology to ensure software quality and enable automation (Github Actions). The app also used unit testing, integration testing as well as Docker.",
    image: "./project-4.gif",
    link: "https://www.youtube.com/watch?v=bEDtSuAfgRQ",
    sourceCodeLink:"https://github.com/AbdallaAden/fragments"
  },
  {
    title: "Assembly line App",
    subtitle: "C++",
    description:
      "The purpose of this project is to put my C++ Object Oriented skills to practice by developing a simulation of an assembly line with any number of stations.",
    image: "./project-5.gif",
    link: "https://github.com/git-illite/ms03#readme",
    sourceCodeLink:"https://github.com/git-illite/ms03"
  },
  {
    title: "HTML & CSS",
    subtitle: "Dom Manipulation HTML/CSS",
    description:
      "A dynamic web application for exploring iNaturalist (https://www.inaturalist.org/) wildlife observation data. Used the data on an interactive map and modified table layout to 'cards'. Implemented a search form, data entry form and custom validation.",
    image: "./project-6.gif",
    link: "https://git-illite.github.io/FinalAssignment/",
    sourceCodeLink:"https://github.com/git-illite/FinalAssignment"
  },
  {
    title: "Electron & Javascript",
    subtitle: "JavaScript HTML/CSS",
    description:
      "A desktop application using Electron.js which allows us to build desktop apps using only JavaScript. We will build a minimal shopping list app with a custom menu and multiple windows and implement Materialize CSS for styling. I also published the app to a Windows .exe file using the Electron Packager.",
    image: "./project-7.gif",
    link: "https://github.com/git-illite/ShoppingListApp#readme",
    sourceCodeLink:"https://github.com/git-illite/ShoppingListApp"
  },
  {
    title: "Aden Career site",
    subtitle: "Vue Vuex Typescript Jest",
    description:
      "The 'Aden Career Site' project mimics Google's career site while showcasing my Vue.js and TypeScript skills. It involves migrating the JavaScript codebase to TypeScript, using Vuex for state management, and the Composition API for efficient component logic. Demonstrating my expertise in building powerful and scalable front-end projects.",
    image: "./project-8.gif",
    link: "https://github.com/git-illite/JobSearch#readme",
    sourceCodeLink:"https://github.com/git-illite/JobSearch"
  },
   {
    title: "Loop Studios",
    subtitle: "HTML Tailwind JavaScript",
    description:
      "This site uses the Tailwind CSS framework, ensuring responsiveness and appealing visuals. The repository includes the necessary code, files, and assets used to build the website. The project is hosted on Vercel, making it accessible to anyone who wants to explore the code and see the live version of the website.",
    image: "./project-9.png",
    link: "https://loopstudios-lemon.vercel.app/",
    sourceCodeLink:"https://github.com/git-illite/TailwindWebsiteProjects/tree/main/LoopStudios"
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Jesse Hicks",
    company: "Zoozle",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Ruben Alvarez",
    company: "Dooble.io",
  },
];

export const skills = [
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiAngular />, name: "Angular" },
  { icon: <SiMongodb />, name: "MongoDB/Mongoose" },
  { icon: <FaDatabase />, name: "SQL" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiC />, name: "C" },
  { icon: <SiCsharp />, name: "C#" },
  { icon: <SiDotnet />, name: "ASP.net" },
  { icon: <SiJava />, name: "Java" },
  { icon: <SiMicrosoftazure />, name: "Azure" },
  { icon: <SiAmazonaws />, name: "AWS, Cognito, ECS, etc." },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <FaCloud />, name: "Unreal Blueprints" }, // placeholder
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiGithubactions />, name: "GitHub Actions" },
  { icon: <SiVuedotjs />, name: "Vue" },
  { icon: <SiVuex />, name: "Vuex" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiJest />, name: "Jest" },
  { icon: <FaCloud />, name: "Hurl" }, // placeholder
  { icon: <SiRedux />, name: "Redux Toolkit" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <FaCloud />, name: "REST API Development" }, // placeholder
  { icon: <SiNetlify />, name: "Netlify" },
  { icon: <FaCloud />, name: "Render" }, // placeholder
  { icon: <FaLock />, name: "JWT Authentication" },
  { icon: <SiPaypal />, name: "PayPal Integration" }
];
