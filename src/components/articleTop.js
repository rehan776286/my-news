import Image from "next/image";
import ShareIcons from "./ShareLink";
const ArticleTop = ({ title, ogImage, createdAt, slug, category }) => {
  return (
    <article className="w-full px-1  py-1  bg-white  ">
      <h1 className="text-xl px-1 font-bold text-black   mb-2 font-serif line-clamp-3 leading-tight">
        {title}
      </h1>

      <p className="text-sm px-1 text-neutral-600 dark:text-gray-400 mb-2">
        <span className="text-blue-900 font-bold pr-2">Politics</span>
        {/* <time dateTime={createdAt}>{createdAt}</time> */}
      </p>
      <p className="text-slate-600 px-1 font-samibold text-sm">
        <span>{`Publish by ${category.name} desk`}</span>
        <time dateTime={createdAt} className="px-1">
          {new Date(createdAt).toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </time>
      </p>
      <div className="flex justify-between items-center px-1">
        <span>Read Time 2 min</span>
        <div className="flex  space-x-3 py-3 px-2">
          <ShareIcons slug={slug} title={title} />
        </div>
      </div>

      <div className="w-full  md:max-w-2xl h-48 md:h-72 rounded-lg overflow-hidden">
        <Image
          src={ogImage?.url}
          alt={title}
          width={700}
          height={400}
          priority
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </article>
  );
};

export default ArticleTop;
