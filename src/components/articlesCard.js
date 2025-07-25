// src/components/ArticleCard.js

import Image from "next/image"; // Import Image component

const ArticleCard = ({ title, subTitle, name, date, slug, ogImage }) => {
  return (
    <article className="w-full px-1 bg-white py-1">
      {/* Use Link for navigation */}
      <h1 className="text-xl px-1 font-bold text-black mb-2 font-serif line-clamp-3 leading-tight">
        {title || "rehan"}
      </h1>
      <p className="text-sm px-1 text-neutral-600 dark:text-gray-400 mb-2">
        <span className="text-blue-900 font-bold pr-2">{name}</span>
      </p>
      <div className="w-full md:max-w-2xl h-48 md:h-72 rounded-lg overflow-hidden">
        {/* <img
          src={ogImage?.url || "/testimage.jpg"}
          alt={ogImage?.alt || "News image"}
          className="w-full h-full object-cover  rounded-lg  "
        /> */}
        {/* <Image
          src={ogImage?.url}
          alt={title}
          width={700} // Approximate width, adjust based on your design max-width
          height={400} // Approximate height, adjust based on aspect ratio
          priority={true} // This is likely your LCP image, load it eagerly
          className="w-full h-full object-cover rounded-lg"
        /> */}
        {/* <Image
          src={`${ogImage?.url}?w=700&h=400&c_fill&f_auto&q_auto`}
          alt={title}
          width={700}
          height={400}
          priority
          placeholder="empty" // or "blur" with blurDataURL
          className="w-full h-full object-cover rounded-lg"
        /> */}
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

export default ArticleCard;

// src/components/ArticleCard.js
// import Link from "next/link";

// const ArticleCard = ({ title, subTitle, category, date, slug, coverImage }) => {
//   return (
//     <article className="w-full px-1 bg-white py-1">
//       <a className="block">
//         <h1 className="text-xl px-1 font-bold text-black  mb-2 font-serif line-clamp-3 leading-tight">
//           {title}
//         </h1>
//         {/* <h2 className="text-slate-800 font-semibold mb-2 line-clamp-2">
//           {subTitle}
//         </h2> */}
//         <p className="text-sm px-1 text-neutral-600 dark:text-gray-400 mb-2">
//           <span className="text-blue-900 font-bold pr-2">{category.name}</span>
//           {/* <time dateTime={date}>{date}</time> */}
//         </p>

//         <div className="w-full md:max-w-2xl h-48 md:h-72 rounded-lg overflow-hidden">
//           <img
//             src={coverImage?.url}
//             alt={title}
//             loading="lazy"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//       </a>
//     </article>
//   );
// };

// export default ArticleCard;

// import testImage from "../../public/testimage.jpg";
// const ArticleCard = ({ title, subTitle, catagory, date, img }) => {
//   return (
//     <main className="">
//       <section className="w-full px-1">
//         <div>
//           <h1 className="text-3xl  font-bold line-clamp-5 text-black dark:text-white mb-2 leading-tight">
//             Exclusive: Navy Was On Standby To Hit Pak, Order To Launch Missiles
//             Never Came
//           </h1>
//           <div>
//             <h2 className="line-clamp-3 text-slate-800 font-semibold">
//               NDTV has learnt that many of these warships could have been sunk
//               at port if the order to fire had come to the Navy.
//             </h2>
//           </div>

//           <p className="text-base text-neutralText-light dark:text-gray-400">
//             {" "}
//             <span className="text-lg font-bold text-blue-900 pr-2">
//               World news
//             </span>
//             <time dateTime="2025-06-25" className="ml-1">
//               June 25, 2025
//             </time>
//           </p>
//         </div>
//         <div className="w-full md:max-w-2xl md:h-96 h-56 py-2  rounded-lg">
//           <img
//             // src={testImage}
//             alt=""
//             className="w-full h-full object-cover  rounded-lg  "
//           />
//           s
//         </div>
//       </section>
//     </main>
//   );
// };
// export default ArticleCard;
