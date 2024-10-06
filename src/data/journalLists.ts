export interface Journal {
  name: string;
}

export interface JournalCategory {
  name: string;
  journals: Journal[];
}

export const utd24Journals: JournalCategory[] = [
  {
    name: "Accounting",
    journals: [
      { name: "The Accounting Review" },
      { name: "Journal of Accounting and Economics" },
      { name: "Journal of Accounting Research" }
    ]
  },
  {
    name: "Finance",
    journals: [
      { name: "Journal of Finance" },
      { name: "Journal of Financial Economics" },
      { name: "Review of Financial Studies" }
    ]
  },
  {
    name: "Information Systems",
    journals: [
      { name: "Information Systems Research" },
      { name: "MIS Quarterly" },
      { name: "Journal of Management Information Systems" }
    ]
  },
  {
    name: "Management",
    journals: [
      { name: "Academy of Management Journal" },
      { name: "Academy of Management Review" },
      { name: "Administrative Science Quarterly" },
      { name: "Journal of International Business Studies" },
      { name: "Management Science" },
      { name: "Organization Science" },
      { name: "Strategic Management Journal" }
    ]
  },
  {
    name: "Marketing",
    journals: [
      { name: "Journal of Consumer Research" },
      { name: "Journal of Marketing" },
      { name: "Journal of Marketing Research" },
      { name: "Marketing Science" }
    ]
  },
  {
    name: "Operations Management",
    journals: [
      { name: "Journal of Operations Management" },
      { name: "Manufacturing and Service Operations Management" },
      { name: "Production and Operations Management" }
    ]
  }
];

export const ft50Journals: JournalCategory[] = [
  {
    name: "Accounting",
    journals: [
      { name: "Accounting, Organizations and Society" },
      { name: "Journal of Accounting and Economics" },
      { name: "Journal of Accounting Research" },
      { name: "The Accounting Review" }
    ]
  },
  {
    name: "Finance",
    journals: [
      { name: "Journal of Finance" },
      { name: "Journal of Financial Economics" },
      { name: "Review of Financial Studies" },
      { name: "Journal of Financial and Quantitative Analysis" }
    ]
  },
  {
    name: "Information Systems",
    journals: [
      { name: "Information Systems Research" },
      { name: "Journal of Management Information Systems" },
      { name: "MIS Quarterly" }
    ]
  },
  {
    name: "Management",
    journals: [
      { name: "Academy of Management Journal" },
      { name: "Academy of Management Review" },
      { name: "Administrative Science Quarterly" },
      { name: "Journal of International Business Studies" },
      { name: "Journal of Management" },
      { name: "Journal of Management Studies" },
      { name: "Management Science" },
      { name: "Organization Science" },
      { name: "Organization Studies" },
      { name: "Strategic Management Journal" }
    ]
  },
  {
    name: "Marketing",
    journals: [
      { name: "Journal of Consumer Psychology" },
      { name: "Journal of Consumer Research" },
      { name: "Journal of Marketing" },
      { name: "Journal of Marketing Research" },
      { name: "Marketing Science" }
    ]
  },
  {
    name: "Operations Management",
    journals: [
      { name: "Journal of Operations Management" },
      { name: "Manufacturing and Service Operations Management" },
      { name: "Production and Operations Management" }
    ]
  },
  {
    name: "Other",
    journals: [
      { name: "Harvard Business Review" },
      { name: "Human Resource Management" },
      { name: "Journal of Applied Psychology" },
      { name: "Journal of Business Ethics" },
      { name: "Journal of Business Venturing" },
      { name: "Journal of Economic Literature" },
      { name: "Journal of Economic Perspectives" },
      { name: "Journal of Economics and Management Strategy" },
      { name: "Journal of Political Economy" },
      { name: "MIT Sloan Management Review" },
      { name: "Organizational Behavior and Human Decision Processes" },
      { name: "Quarterly Journal of Economics" },
      { name: "RAND Journal of Economics" },
      { name: "Research Policy" }
    ]
  }
];