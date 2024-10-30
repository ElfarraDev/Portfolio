// src/data/paradigmsData.js
import beyondSyntax from "./posts/beyond-syntax";
import scalingLaws from "./posts/scaling-laws";
import futureVision from "./posts/future-vision";
import reflections from "./posts/reflections";
import futureTools from "./posts/future-tools";
import reflectionsTools from "./posts/reflections-tools";

export const paradigmsData = {
  blogPosts: [
    {
      title: futureVision.title,
      subtitle: futureVision.date,
      description:
        "Exploring the next frontier of software development with language models and human-AI collaboration.",
      linkText: "Read post",
      content: futureVision.content,
    },
    {
      title: scalingLaws.title,
      subtitle: scalingLaws.date,
      description:
        "An exploration of how language models scale with size, examining the fascinating patterns and implications of AI's exponential growth.",
      linkText: "Read post",
      content: scalingLaws.content,
    },
    {
      title: reflections.title,
      subtitle: reflections.date,
      description:
        "Thoughts on the evolving landscape of software development and AI integration.",
      linkText: "Read post",
      content: reflections.content,
    },
    {
      title: beyondSyntax.title,
      subtitle: beyondSyntax.date,
      description:
        "A deep dive into crafting elegant C++ code that reads like poetry, transforming complex algorithms into clear narratives.",
      linkText: "Read post",
      content: beyondSyntax.content,
    },
  ],
  reflections: {
    title: "Reflections on Building Development Tools in the AI Era",
    subtitle: "October 30, 2024",
    description:
      "Insights and lessons learned from building development tools in the age of artificial intelligence, exploring the intersection of AI, system design, and developer experience.",
    linkText: "Read reflections",
    content: reflectionsTools.content,
  },
  future: {
    title: "Building the Future: AI-Powered Development Tools",
    subtitle: "October 31, 2024",
    description:
      "A vision for the next generation of development tools, combining AI capabilities with traditional development paradigms to transform how we build software.",
    linkText: "View roadmap",
    content: futureTools.content,
  },
};

export default paradigmsData;
