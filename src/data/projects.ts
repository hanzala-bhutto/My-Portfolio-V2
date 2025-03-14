import mock06 from '../assets/images/mock06.png';
import mock10 from '../assets/images/mock10.png';

import multi_disease from '../assets/images/project_photos/multi_disease.png';
import chat_to_your_database from '../assets/images/project_photos/chat_to_your_database.png';
import proctowise from '../assets/images/project_photos/proctowise.png';
import travfood from '../assets/images/project_photos/travfood.png';

export const projects = [
    {
        title: "Multi Client Server Application",
        description: "Designed an asynchronous server-client framework using Boost.Asio in C++ to enable scalable, non-blocking communication between a server and multiple clients with modular code.",
        image: mock10,
        skills: ["C++", "Boost.Asio", "Networking", "Multi-Client Server", "Asynchronous Programming"],
        github: "https://github.com/hanzala-bhutto/Multi-Client-Server-ASIO",
        website: ""
    },
    {
        title: "Proctowise",
        description: "Developed a custom evaluation and proctoring platform for online coding competitions using Judge0, Firebase, and Face API for seamless code and image processing.",
        image: proctowise,
        skills: ["React", "Node.js", "Firebase", "Judge0", "Face API"],
        github: "https://github.com/hanzala-bhutto/ProctoWise-Frontend",
        website: "https://procto-wise-frontend.vercel.app/",
    },
    {
        title: "Chat to Your Database",
        description: "Created an NLP-based application for database interaction via natural language, utilizing LangChain, SQL Agents, and LLMs for intuitive read/write operations.",
        image: chat_to_your_database,
        skills: ["React", "Node.js", "SQL", "NLP", "LangChain"],
        github: "https://github.com/Syed007Hassan/Chat-To-Your-Database",
        website: "",
    },
    {
        title: "Multi-Disease Prediction System",
        description: "Designed a web-based model for diagnosing diseases using user symptoms, implementing machine learning algorithms for accurate probability predictions.",
        image: multi_disease,
        skills: ["React", "Express", "Node.js", "Machine Learning", "Disease Prediction"],
        github: "https://github.com/hanzala-bhutto/React-Express-MultiDiseasePrediction",
        website: "",
    },
    {
        title: "TravFood",
        description: "Developed a React Native mobile app that helps users discover travel destinations and local food spots, offering a seamless browsing experience for travel and dining.",
        image: travfood,
        skills: ["React Native", "Expo", "Firebase", "Travel App", "Food App"],
        github: "https://github.com/hanzala-bhutto/PMD-React-Native-Travel-Food-App",
        website: "",
    },
    {
        title: "Space Tourism Website",
        description: "Designed and developed a responsive Space Tourism website using Next.js and TailwindCSS. This project provides an engaging UI and seamless user experience for exploring space tourism opportunities.",
        image: mock06,
        skills: ["Next.js", "TailwindCSS", "Web Development", "Responsive Design"],
        github: "https://github.com/hanzala-bhutto/Next-TailwindCSS-Space-Tourism-Website",
        website: "https://next-tailwind-css-space-tourism-website.vercel.app/home",
    },    
    {
        title: "Face Recognition Brain",
        description: "Built a full-stack web application that detects faces in images using the Clarifai API. Developed with React for the front end and Express.js for the back end, providing users with a responsive and interactive experience.",
        image: mock10,
        skills: ["React", "Express.js", "Node.js", "Clarifai API", "Full-Stack Development"],
        github: "https://github.com/hanzala-bhutto/React-Express-FaceRecognitionBrain",
        website: "",
    },
];