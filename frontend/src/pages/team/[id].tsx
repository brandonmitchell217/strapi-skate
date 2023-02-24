import React from "react";
import { fetchQuery } from "../../lib/util";
import Layout from "../../layouts/Layout";
import { TeamMembersProps, Props } from "../../lib/types";

export default function ItemPage({ member }: any) {
  console.log(member);
  return (
    <Layout>
      <div>
        <h1>{member.data.attributes.name}</h1>
        <p>{member.data.attributes.hometown}</p>
      </div>
    </Layout>
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
