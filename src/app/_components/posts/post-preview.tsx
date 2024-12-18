import Link from "next/link";
import DateFormatter from "../../../util/date-formatter";

type Props = {
  title: string;
  date: string;
  slug: string;
};

export function PostPreview({ title, date, slug }: Props) {
  return (
    <div>
      <h4 className="text-sm mb-3 leading-snug">
        <DateFormatter dateString={date} />
        <span> | </span>
        <Link href={`/posts/${slug}`} className="underline text-miami-blue">
          {title}
        </Link>
      </h4>
    </div>
  );
}
