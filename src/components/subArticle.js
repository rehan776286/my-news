// src/components/ArticleSubCard.js
import Image from "next/image"; // Import Image component

const ArticleSubCard = ({
  title,
  category,
  createdAt,
  name,
  slug,
  ogImage,
}) => {
  // Add slug prop
  return (
    <section className="w-full px-1 border-t border-b border-slate-100 bg-white shadow py-1 mt-2">
      <div className="flex justify-between items-start gap-1">
        {" "}
        {/* Wrap with Link */}
        <div className="max-w-lg w-full px-1">
          <h1 className="text-lg font-bold line-clamp-4 text-slate-950 py-1">
            {title}
          </h1>
          <p className="text-xs text-neutralText-light dark:text-gray-400">
            <span className="text-xs font-bold text-blue-900 md:pr-2 pr-1">
              {name || "rehan"}
            </span>
            {/* <time dateTime={new Date(createdAt).toISOString()} className="ml-1">
              {" "}
              {/* Use ISO string for dateTime */}
            {/* {new Date(createdAt).toLocaleDateString()}{" "} */}
            {/* Format date for display */}
            {/* </time> */}
          </p>
        </div>
        <div className="max-w-full md:w-80 w-60 h-26 md:h-32 py-2 rounded-lg relative">
          <Image
            src={ogImage?.url}
            alt={title}
            width={700}
            height={400}
            priority
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ArticleSubCard;

// const ArticleSubCard = ({ title, category, createdAt, coverImage }) => {
//   return (
//     <section className="w-full px-1 border-t border-b border-slate-100 bg-white shadow py-1 mt-2">
//       <div className="flex justify-between items-start gap-1">
//         <div className="max-w-lg w-full px-1">
//           <h1 className="text-lg  font-bold line-clamp-4  text-slate-950 py-1">
//             {title}
//           </h1>
//           <p className="text-xs text-neutralText-light dark:text-gray-400">
//             <span className="text-xs font-bold text-blue-900 md:pr-2 pr-1">
//               {category.name}
//             </span>
//             {/* By <span className="font-medium">John Doe</span> · */}
//             <time dateTime="2025-06-25" className="ml-1">
//               {createdAt}
//             </time>
//           </p>
//         </div>

//         <div className="max-w-full md:w-80 w-60 h-26  md:h-32 py-2  rounded-lg">
//           <img
//             src={coverImage?.url || "/testimage.jpg"}
//             alt={coverImage?.alt || "News image"}
//             className="w-full h-full object-cover  rounded-lg  "
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ArticleSubCard;
