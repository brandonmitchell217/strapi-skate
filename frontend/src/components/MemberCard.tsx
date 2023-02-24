import React from "react";
import Image from "next/image";
import { base } from "@/lib/util";
import Link from "next/link";

interface MemberCardProps {
  id: number;
  image: string | any;
  alt?: string;
  name: string | any;
  age?: number;
  hometown?: string;
}

export default function MemberCard({
  id,
  image,
  alt,
  name,
  age,
  hometown,
}: MemberCardProps) {
  return (
    <div
      key={id}
      className="max-w-xs w-1/4 card card-compact bg-base-100 shadow-xl"
    >
      <Link href={`/team/${id}`}>
        <Image
          src={`${base}${image}`}
          alt={alt ?? "image of skater"}
          width={300}
          height={300}
        />
        <div className="card-body">
          <h1 className="card-title">
            {name}
            <span className="ml-6 text-sm font-normal">{age}</span>
          </h1>
          <p>{hometown}</p>
        </div>
      </Link>
    </div>
    // <div key={id} className="max-w-xs w-1/4">
    //   <Link href={`/team/${id}`}>
    //     <div className="h-80 w-full relative">
    //       <Image
    //         src={`${base}${image}`}
    //         alt={alt ?? "image of skater"}
    //         fill={true}
    //       />
    //     </div>
    //     <h1 className="font-semibold">
    //       {name}
    //       <span className="ml-6 text-sm font-normal">{age}</span>
    //     </h1>
    //     <p>{hometown}</p>
    //   </Link>
    // </div>
  );
}
