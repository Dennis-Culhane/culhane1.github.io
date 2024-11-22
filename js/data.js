const GITHUB_REPO_URL = 'https://dennis-culhane.github.io/Culhane.github.io';

const researchAreas = [
    "Homelessness",
    "Housing Policy",
    "Social Policy",
    "Integrated Data Systems",
    "Policy Analysis"
];

const shortBio = "Dennis P. Culhane is the Dana and Andrew Stone Professor of Social Policy at the University of Pennsylvania School of Social Policy and Practice. He is a Co-Principal Investigator for Actionable Intelligence for Social Policy (AISP), an initiative that promotes the development, use, and integration of integrated data systems...";

const fullBio = `
    <p>Dennis P. Culhane is the Dana and Andrew Stone Professor of Social Policy at the University of Pennsylvania School of Social Policy and Practice. He is a Co-Principal Investigator for Actionable Intelligence for Social Policy (AISP), an initiative that promotes the development, use, and integration of integrated data systems by states and localities for policy analysis and systems reform.</p>
    <p>Culhane's primary area of research is homelessness and housing policy. His work has contributed to efforts to address the housing and support needs of people experiencing housing emergencies and long-term homelessness.</p>
    <p>His recent research includes studies of vulnerable youth and young adults, including those transitioning from foster care, juvenile justice, and residential treatment services.</p>
`;

const articles = [
    {
        id: 1,
        title: "Understanding Homelessness Prevention",
        authors: "Dennis P. Culhane, Dan Treglia, Randall Kuhn",
        date: "2023",
        categories: ["Homelessness", "Policy Analysis"],
        abstract: "This paper examines the effectiveness of homelessness prevention programs and their impact on reducing housing instability among vulnerable populations...",
        pdfUrl: `${GITHUB_REPO_URL}/papers/homelessness-prevention-2023.pdf`
    },
    {
        id: 2,
        title: "Integrated Data Systems in Policy Research",
        authors: "Dennis P. Culhane, John Fantuzzo",
        date: "2022",
        categories: ["Integrated Data Systems", "Policy Analysis"],
        abstract: "A comprehensive review of integrated data systems and their role in informing social policy decisions...",
        pdfUrl: `${GITHUB_REPO_URL}/papers/integrated-data-2022.pdf`
    }
    // 你可以继续添加更多文章...
]; 