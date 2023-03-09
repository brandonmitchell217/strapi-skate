import Layout from "@/layouts/Layout";
import { fetchQuery } from "@/lib/util";
import { base } from "@/lib/util";
import { TeamMembersProps } from "@/lib/types";
import React from "react";
import Image from "next/image";
import MemberCard from "@/components/MemberCard";
import ProductInterstitialLayout from "@/layouts/ProductInterstitial";

export default function Team({ teamMembers }: TeamMembersProps) {
  //   const data = teamMembers.data.map((member) => {
  //     return member.attributes;
  //   });

  // console.log(teamMembers);
  return (
    // <section className="py-24">
    //   <h1 className="font-bold text-5xl">Team</h1>
    //   <div className="flex flex-col md:flex-row justify-center items-center gap-6">
    //     {teamMembers.data.map((member) => (
    //       <MemberCard
    //         id={member.id}
    //         image={member.attributes.image?.data.attributes.url}
    //         name={member.attributes.name}
    //         age={member.attributes.age}
    //         hometown={member.attributes.hometown}
    //       />
    //     ))}
    //   </div>
    // </section>
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
