import Layout from "@/layouts/Layout";
import { fetchQuery } from "@/lib/util";
import { base } from "@/lib/util";
import { TeamMembersProps } from "@/lib/types";
import React from "react";
import Image from "next/image";
import MemberCard from "@/components/MemberCard";

export default function Team({ teamMembers }: TeamMembersProps) {
  //   const data = teamMembers.data.map((member) => {
  //     return member.attributes;
  //   });

  console.log(teamMembers);
  return (
    <>
      <h1 className="font-bold text-5xl">Team</h1>
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {teamMembers.data.map((member) => (
          <MemberCard
            id={member.id}
            image={member.attributes.image?.data.attributes.url}
            name={member.attributes.name}
            age={member.attributes.age}
            hometown={member.attributes.hometown}
          />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const teamMembers = await fetchQuery("team-members", "?populate=*");

  return {
    props: {
      teamMembers,
    },
  };
}
