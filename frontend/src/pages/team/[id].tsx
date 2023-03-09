import React from "react";
import { base, fetchQuery } from "../../lib/util";
import Layout from "../../layouts/Layout";
import { TeamMembersProps, Props } from "../../lib/types";
import Image from "next/image";

export default function ItemPage({ member }: any) {
  // console.log(member);
  return (
    <section className="pt-24">
      <div className="max-w-4xl m-auto card lg:card-side bg-base-100 shadow-xl rounded-2xl">
        <Image
          src={`${base}${member.data.attributes.image.data.attributes.url}`}
          alt="dadfadfa dfa"
          width={350}
          height={350}
          placeholder="blur"
          blurDataURL={`${base}${member.data.attributes.image.data.attributes.url}`}
          className="rounded-tl-2xl rounded-bl-2xl"
        />
        <div className="card-body">
          <h2 className="card-title">{member.data.attributes.name}</h2>
          <p>{member.data.attributes.hometown}</p>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps({ params }: any) {
  const member = await fetchQuery("team-members", `${params.id}?populate=*`);

  return {
    props: {
      member,
    },
  };
}

export async function getStaticPaths() {
  const members = await fetchQuery("team-members", "?populate=*");
  const paths = members.data.map((member: any) => {
    return {
      params: { id: String(member.id) },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
