import Layout from "@/layouts/Layout";
import { fetchQuery } from "@/lib/util";
import { base } from "@/lib/util";
import { TeamMembersProps } from "@/lib/types";
import React from "react";
import Image from "next/image";
import MemberCard from "@/components/MemberCard";
import ProductInterstitialLayout from "@/layouts/ProductInterstitial";
import VideoCarousel from "@/components/Carousel-video";

export default function Team({ teamMembers, teamVideos }: TeamMembersProps) {
  const videos = teamVideos.data.map((video) => {
    const attributes = video.attributes;

    return {
      link: attributes.link,
      title: attributes.title,
    };
  });

  console.log(videos);
  return (
    <>
      <ProductInterstitialLayout title="Team">
        {teamMembers.data.map((member) => (
          <MemberCard
            key={member.id}
            id={member.id}
            image={member.attributes.image?.data.attributes.url}
            name={member.attributes.name}
            age={member.attributes.age}
            hometown={member.attributes.hometown}
          />
        ))}
      </ProductInterstitialLayout>
      <VideoCarousel {...{ videos }} />
    </>
  );
}

export async function getStaticProps() {
  const teamMembers = await fetchQuery("team-members", "?populate=*");
  const teamVideos = await fetchQuery("team-videos", "?populate=*");

  return {
    props: {
      teamMembers,
      teamVideos,
    },
  };
}
