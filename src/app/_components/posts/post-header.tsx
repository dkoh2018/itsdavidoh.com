import DateFormatter from "../../../util/date-formatter";
import { PostTitle } from "./post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function PostHeader({ title, coverImage, date }: Props) {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <PostTitle>{title}</PostTitle>
        <div className="mb-6 text-lg font-bold">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
