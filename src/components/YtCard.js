import Image from "next/image"; // ✅ make sure this is correct

const YtCard = ({ title, createdAt, ogImage }) => {
  return (
    <article className="w-full px-1 bg-white py-1">
      <div className="w-full md:h-30 h-48 rounded-lg overflow-hidden">
        <Image
          src={ogImage?.url || "/testimage.jpg"}
          alt={title}
          width={396} // or whatever max desktop size needed
          height={223}
          sizes="(max-width: 768px) 100vw, 396px" // <-- This is key
          priority // for above-the-fold images
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h1 className="text-lg px-1 font-bold text-black mt-2 mb-2 font-sans line-clamp-3 leading-tight">
        {title}
      </h1>
      <p className="text-sm px-1 text-neutral-600 dark:text-gray-400 mb-2">
        <span className="text-blue-900 font-bold pr-2">Politics</span>
        <span>{createdAt}</span>
      </p>
    </article>
  );
};

export default YtCard;

// const YtCard = ({ title, createdAt, ogImage }) => {
//   return (
//     <article className="w-full px-1 bg-white py-1">
//       <div className="w-full  md:h-30 h-48  rounded-lg overflow-hidden">
//         <Image
//           src={ogImage?.url || "/testimage.jpg"}
//           alt={title}
//           width={700}
//           height={400}
//           priority
//           className="w-full h-full object-cover rounded-lg"
//         />
//       </div>
//       <h1 className="text-lg px-1 font-bold text-black mt-2  mb-2 font-sans line-clamp-3 leading-tight">
//         {title}
//       </h1>
//       {/* <h2 className="text-slate-800 font-semibold mb-2 line-clamp-2">
//           {subTitle}
//         </h2> */}
//       <p className="text-sm px-1 text-neutral-600 dark:text-gray-400 mb-2">
//         <span className="text-blue-900 font-bold pr-2">Politics</span>
//         {/* <time dateTime={date}>{date}</time> */}
//         <span>{createdAt}</span>
//       </p>
//     </article>
//   );
// };

// export default YtCard;
