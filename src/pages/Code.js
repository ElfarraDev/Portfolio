import React from "react";
import Section from "../components/Section";
import ProjectItem from "../components/ProjectItem";
import { codeData } from "../data/codeData";

const Code = () => (
  <div className="space-y-12">
    <Section title="Code" noPadding>
      <ul className="space-y-6">
        {codeData.projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </ul>
    </Section>
    <Section title="Open-Source Contributions" noPadding smallTitle>
      <ul className="space-y-6">
        {codeData.openSource.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </ul>
    </Section>
  </div>
);

export default Code;
