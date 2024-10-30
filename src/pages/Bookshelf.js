import React from "react";
import Section from "../components/Section";
import ContentItem from "../components/ContentItem";
import { bookshelfData } from "../data/bookshelfData";

const Bookshelf = () => (
  <Section title="Bookshelf" noPadding>
    <ul className="space-y-8">
      {bookshelfData.map((book, index) => (
        <ContentItem key={index} {...book} isBook={true} />
      ))}
    </ul>
  </Section>
);

export default Bookshelf;
