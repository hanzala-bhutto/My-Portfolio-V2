export type EducationEntry = {
	date: string;
	title: string;
	institution: string;
	summary?: string;
};

export const education: EducationEntry[] = [
	{
		date: "2024 - 2026",
		title: "MS In Distributed Systems Engineering",
		institution: "Technische Universität Dresden",
		summary: "Transaction Systems, Distributed Systems, System Design, Confidential Computing",
	},
	{
		date: "2020 - 2024",
		title: "BS in Software Engineering",
		institution: "FAST NUCES",
		summary: "Object Oriented Programming, Database Systems, Web Engineering, Applied DevOps",
	},
];
