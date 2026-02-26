export type CareerHighlight =
	| string
	| {
			text: string;
			subpoints?: string[];
		};

export type CareerEntry = {
	date: string;
	title: string;
	company: string;
	location?: string;
	workMode?: string;
	employmentType?: string;
	summary?: string;
	highlights?: CareerHighlight[];
};

export const career: CareerEntry[] = [
	{
		date: "Mar 2025 - Present",
		title: "Werkstudent: Software Engineer",
		company: "Infineon Technologies",
		location: "Dresden, Saxony, Germany",
		workMode: "Hybrid",
		employmentType: "Part-time",
		highlights: [
            {
                text: "Built a data-driven full-stack delivery management solution in OutSystems, applying Design Thinking from user research to deployment.",
                subpoints: [
			"Integrated Azure DevOps REST APIs to ingest 100k+ work items into an indexed SQL schema and implemented automated daily syncs between Azure DevOps and a local cache.",
			"Delivered an interactive Gantt chart UI with advanced filtering to explore dependencies and timelines.",
                ]
            },
			{
				text: "Developed an AI-powered repository intelligence platform for Azure DevOps + GitLab that maps tech stacks, extracts dependencies, and cross-references against OSV to surface CVEs/GHSAs via a natural-language interface.",
				subpoints: [
					"Designed a feature-based FastAPI backend with clear domain boundaries (projects, repositories, scanning, insights, agents).",
					"Built a React (Vite-style) dashboard with filters and graph/summary visualizations.",
					"Implemented analyzers to traverse repos, detect software projects, and extract languages/frameworks across ecosystems.",
					"Modeled relationships in Neo4j (projects, repos, branches, technologies, dependencies) and linked library → vulnerability post-scan via OSV.",
					"Implemented a hybrid RAG assistant: template-matched Cypher first (<100ms, no LLM cost), then LLM-generated Cypher; improved over time with a Qdrant vector store.",
					"Deployed with Docker on OpenShift using GitLab CI/CD.",
				],
			},
		],
	},
	{
		date: "Jul 2024 - Nov 2024",
		title: "Software Engineer",
		company: "GoodCore",
		highlights: [
			"Built an AI-powered agent for natural-language querying of SQL databases using OpenAI (GPT-3.5-turbo) and LangChain utilities.",
			"Implemented tool calling to let LLMs invoke internal functions for grounded, source-backed answers.",
			"Streamed model responses (Claude Sonnet) for responsive, two-way UI interactions.",
			"Reduced API latency via SQL stored procedures/functions supporting tool-calling workflows.",
			"Added caching (e.g., Redis / Flask-Caching) to improve response time and stability.",
			"Dockerized the AI service for consistent deployments; actively reviewed PRs and delivered internal/cross-team/client demos.",
		],
	},
	{
		date: "Jun 2024 - Jul 2024",
		title: "Junior Software Engineer",
		company: "Trafix",
		highlights: [
			"Implemented a multi-client server application in core C++ using Asio (low-level API design).",
			"Managed a dedicated session per client; supported concurrent messaging and file transfers (up to GBs).",
			"Handled packet ingestion on both client/server via queued pipelines; used mutex locks to keep queue operations consistent.",
		],
	},
	{
		date: "Jun 2023 - Sep 2023",
		title: "Software Engineer Intern",
		company: "One Technology Services",
		highlights: [
			"Worked on two products using Angular and .NET: an ERP system and an e-commerce website.",
			"ERP: built dashboard views with real-time charts/metrics, detailed listing tables, and an HTTP request loader; used Ant Design and fixed UI bugs.",
			"E-commerce: developed dynamic product listings, category slider, breadcrumb navigation, menu routing, and search with filters; resolved responsiveness/UI issues.",
		],
	},
	{
		date: "Sep 2022 - Jun 2023",
		title: "University Teaching Assistant",
		company: "FAST NUCES",
		summary: "Assisted Programming Fundamentals & Object-Oriented Programming courses.",
	},
];