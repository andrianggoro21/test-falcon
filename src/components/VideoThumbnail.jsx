import Link from "next/link";
import Image from "next/image";

export default function VideoThumbnail({ id, title }) {
  return (
    <div className="flex-shrink-0 w-48">
      <Link href={`/video/${id}`}>
          <Image
            src="/images/thumbnail.jpg"
            alt={title}
            width={192}
            height={288}
            layout="responsive"
            className="object-cover"
          />
          <p className="text-center mt-2">{title}</p>
      </Link>
    </div>
  );
}
