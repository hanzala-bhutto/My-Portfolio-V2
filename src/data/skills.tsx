import { FaReact, FaDocker, FaPython, FaJs, FaJava, FaHtml5, FaCss3, FaBootstrap, FaAngular, FaNode, FaFlask, FaGit, FaGithub, FaBitbucket, FaAws, FaToolbox, FaStream } from 'react-icons/fa';
import { SiCplusplus, SiExpress, SiFastapi, SiJest, SiKubernetes, SiLangchain, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiOpenai, SiOracle, SiPostgresql, SiRootsbedrock, SiStreamlit, SiTailwindcss } from "react-icons/si";
import { PiFileCSharp, PiFileSql } from "react-icons/pi";
import { BsDatabaseFillDash } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";


export const skills = [
    {
        title: "Programming Languages",
        description: "",
        labels: [
            { name: "JavaScript", icon: <FaJs /> },
            { name: "TypeScript", icon: <FaReact /> },
            { name: "Java", icon: <FaJava /> },
            { name: "C++", icon: <SiCplusplus /> },
            { name: "C#", icon: <PiFileCSharp /> },
            { name: "Python", icon: <FaPython /> }
        ]
    },
    {
        title: "Frontend",
        description: "",
        labels: [
            { name: "HTML5", icon: <FaHtml5 /> },
            { name: "CSS3", icon: <FaCss3 /> },
            { name: "Bootstrap", icon: <FaBootstrap /> },
            { name: "TailwindCSS", icon: <SiTailwindcss /> },
            { name: "React.js", icon: <FaReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Angular", icon: <FaAngular /> }
        ]
    },
    {
        title: "Backend",
        description: "",
        labels: [
            { name: "Node", icon: <FaNode /> },
            { name: "Express", icon: <SiExpress /> },
            { name: "Nest", icon: <SiNestjs /> },
            { name: "Flask", icon: <FaFlask /> },
            { name: "FastAPI", icon: <SiFastapi /> }
        ]
    },
    {
        title: "Databases & Scripting",
        description: "",
        labels: [
            { name: "SQL", icon: <PiFileSql /> },
            { name: "No SQL", icon: <BsDatabaseFillDash /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "Oracle", icon: <SiOracle /> },
            { name: "MongoDB", icon: <SiMongodb /> }
        ]
    },
    {
        title: "DevOps & Automation",
        description: "",
        labels: [
            { name: "Git", icon: <FaGit /> },
            { name: "GitHub", icon: <FaGithub /> },
            { name: "Bitbucket", icon: <FaBitbucket /> },
            { name: "Docker", icon: <FaDocker /> },
            { name: "Kubernetes", icon: <SiKubernetes /> },
            { name: "Zookeeper", icon: <SiKubernetes /> },
            { name: "AWS", icon: <FaAws /> },
            { name: "Azure", icon: <VscAzure /> },
            { name: "Jest", icon: <SiJest /> }
        ]
    },
    {
        title: "GenAI & LLM",
        description: "",
        labels: [
            { name: "OpenAI", icon: <SiOpenai /> },
            { name: "LangChain", icon: <SiLangchain /> },
            { name: "AWS Bedrock", icon: <SiRootsbedrock /> },
            { name: "Tool Calling", icon: <FaToolbox /> },
            { name: "Streaming", icon: <FaStream /> },
            { name: "Streamlit", icon: <SiStreamlit /> }
        ]
    }
];