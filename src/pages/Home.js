import React, { useState } from "react";
import Section from "../components/Section";
import SocialIcon from "../components/SocialIcon";
import ExperienceEducationItem from "../components/ExperienceEducationItem";
import { summary } from "../data/homeData";
import { educationData } from "../data/educationData";
import { experienceData } from "../data/experienceData";
import profileImage from "../assets/IMG_0819.jpeg";
const updatedSummary = {
  ...summary,
  introduction: [
    "<strong>Welcome!</strong> I'm Ahmed Elfarra, a software engineer passionate about AI and distributed systems. I've had the amazing opportunity to optimize AAA games at EA Sports, where I worked on low-level systems on the Frostbite engine. Previously I worked on AI genomics research at Western University.",
    "Feel free to reach out to me at <a href='mailto:aelfarradev@gmail.com' class='text-blue-600 hover:underline'>aelfarradev@gmail.com</a> for collaborations, opportunities, or just to chat about the latest in tech!",
  ],
};

const Home = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="space-y-12">
      <Section noPadding>
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-shrink-0 self-start flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {updatedSummary.name}
            </h1>
            <div className="relative w-48 h-48 overflow-hidden rounded-lg border-2 border-gray-200 shadow-md">
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
                  Image not found
                </div>
              ) : (
                <img
                  src={profileImage}
                  alt="Ahmed Elfarra"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error("Image failed to load");
                    setImageError(true);
                  }}
                />
              )}
            </div>
            <div className="flex space-x-6">
              {updatedSummary.socialLinks.map((link, index) => (
                <SocialIcon
                  key={index}
                  href={link.href}
                  icon={<link.icon className="w-5 h-5" />}
                />
              ))}
            </div>
          </div>
          <div className="flex-grow space-y-4">
            {updatedSummary.introduction.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </div>
      </Section>
      <Section title="Experience" noPadding smallTitle>
        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <ExperienceEducationItem
              key={index}
              {...item}
              icon={<item.icon size={20} />}
            />
          ))}
        </div>
      </Section>
      <Section title="Education" noPadding smallTitle>
        <div className="space-y-6">
          {educationData.map((item, index) => (
            <ExperienceEducationItem
              key={index}
              {...item}
              icon={<item.icon size={20} />}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;
