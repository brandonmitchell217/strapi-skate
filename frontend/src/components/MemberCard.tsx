import React from "react";
import Image from "next/image";
import { base } from "@/lib/util";
import Link from "next/link";

interface MemberCardProps {
  id?: number;
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
    <div className="card card-compact bg-base-100 shadow-xl">
      <Link href={`/team/${id}`}>
        <Image
          src={`${base}${image}`}
          alt={alt ?? "image of skater"}
          width={300}
          height={300}
          placeholder="blur"
          blurDataURL={`${base}${image}`}
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
  );
}
