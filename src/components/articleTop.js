import Image from "next/image";
const ArticleTop = ({ title, summary, ogImage, createdAt, slug }) => {
  return (
    <article className="w-full px-1 bg-white py-1">
      <h1 className="text-xl px-1 font-bold text-black  mb-2 font-serif line-clamp-3 leading-tight">
        {title}
      </h1>

      <p className="text-sm px-1 text-neutral-600 dark:text-gray-400 mb-2">
        <span className="text-blue-900 font-bold pr-2">Politics</span>
        {/* <time dateTime={date}>{date}</time> */}
      </p>
      <p className="text-slate-600 px-1 font-samibold text-sm">
        <span>Publish by sports desk</span>
        <time dateTime="2025-07-13T20:45:00+05:30" className="px-1">
          {createdAt}
        </time>
      </p>
      <div className="flex justify-between items-center px-1">
        <span>Read Time 2 min</span>
        <div className="flex  space-x-3 py-3 px-2">
          <div>
            <img src="/shereIcon/whatsapp.svg" className="w-6" />
          </div>{" "}
          <div>
            <img src="/shereIcon/facebook.svg" className="w-6" />
          </div>{" "}
          <div>
            <img src="/shereIcon/x.svg" className="w-6" />
          </div>{" "}
          <div>
            <img src="/shereIcon/instagram.svg" className="w-6" />
          </div>
          <div>
            <img src="/shereIcon/telegram.svg" className="w-6" />
          </div>
        </div>
      </div>

      <div className="w-full  md:max-w-2xl h-48 md:h-72 rounded-lg overflow-hidden">
        <Image
          src={ogImage?.url || "/testimage.jpg"}
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
