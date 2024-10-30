import React from "react";
import Section from "../components/Section";
import ContentItem from "../components/ContentItem";
import { paradigmsData } from "../data/paradigmsData";

const Paradigms = () => (
  <div className="space-y-12">
    <Section title="Paradigms" subtitle="by Ahmed Elfarra" noPadding>
      <div className="space-y-8">
        {paradigmsData.blogPosts.map((post, index) => (
          <ContentItem key={index} {...post} />
        ))}
      </div>
    </Section>
    <Section title="Reflections" noPadding smallTitle>
      <ContentItem {...paradigmsData.reflections} />
    </Section>
    <Section title="Future" noPadding smallTitle>
      <ContentItem {...paradigmsData.future} />
    </Section>
  </div>
);

export default Paradigms;
