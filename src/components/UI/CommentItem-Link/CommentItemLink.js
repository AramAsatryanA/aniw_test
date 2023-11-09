import Link from "next/link";
import Image from "next/image";

function CommentItemLink({ theme, commentsNumber, pathName }) {
  return (
    <Link
      href={pathName}
      className="button-card-type flex items-center gap-2 rounded-3xl px-2 py-1"
    >
      <span className="inline-block h-6 w-6">
        <Image
          src={theme === "dark" ? "/comment-dark.svg" : "/comment-light.svg"}
          alt="Comment Icon"
          width={50}
          height={50}
        />
      </span>
      <span className="text-sm">{commentsNumber}</span>
    </Link>
  );
}

export default CommentItemLink;
