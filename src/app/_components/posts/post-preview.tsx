import Link from "next/link";
import DateFormatter from "../../../util/date-formatter";

type Props = {
  title: string;
  date: string;
  slug: string;
};

export function PostPreview({
  title,
  date,
  slug,
}: Props) {
  return (
    <div>
      <h4 className="text-1xl mb-3 leading-snug">
        <DateFormatter dateString={date} />
        <span> | </span>
        <Link href={`/posts/${slug}`} className="underline text-blue-500">
          {title}
        </Link>
      </h4>
    </div>
  );
}