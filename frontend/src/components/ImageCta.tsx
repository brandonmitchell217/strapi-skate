import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ImageCtaProps {
  image: string;
  alt: string;
  title?: string;
  subtitle?: string;
  link?: string;
  linkText?: string;
  className?: string;
  contentClassName?: string;
}

export default function ImageCta({
  image,
  alt,
  title,
  subtitle,
  link,
  linkText,
  className,
  contentClassName,
}: ImageCtaProps) {
  return (
    <div
      className={`relative h-[260px] sm:h-[300px] md:h-[375px] lg:h-[405px] xl:h-[450px] w-full ${className}`}
    >
      <Image
        src={image}
        alt={alt}
        fill={true}
        blurDataURL={image}
        placeholder="blur"
        priority
        className="-z-10 object-fill"
      />
      <div className={`${contentClassName}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {title}
        </h2>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-light text-white">
          {subtitle}
        </p>
        {link && (
          <Link href={link} className="btn btn-secondary rounded-lg">
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
}
