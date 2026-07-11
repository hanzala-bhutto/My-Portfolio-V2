export type EducationEntry = {
	date: string;
	title: string;
	institution: string;
	grade?: string;
	summary?: string;
	highlights?: string[];
};

export const education: EducationEntry[] = [
	{
		date: "Oct 2024 – Sep 2026",
		title: "Master's degree, Distributed Systems Engineering",
		institution: "Technische Universität Dresden",
		summary: "Focus Areas: Distributed Systems, System Design, Ubiquitous Systems, Systems Engineering, Confidential Computing, Transactional Information Systems",
	},
	{
		date: "Sep 2020 – Jun 2024",
		title: "Bachelor's degree, Software Engineering",
		institution: "National University of Computer and Emerging Sciences",
		grade: "3.78/4.0 CGPA (1.3/1.0 German Grade)",
		highlights: [
			"Achievements: Magna Cum Laude | Silver Medalist | 7x Dean's List | 1x Rector's List",
			"Procom 2023 Pseudo Wars Competition Winner",
			"Participation in speed programming, system design, pseudo Wars competitions in coders cup, Dev day, and Procom",
			"Societies: Fast Data Science Society Core Team Member",
		],
	},
];
