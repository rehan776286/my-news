"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react"; // Import useEffect
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { mainNewsCategoriesEN, mainNewsCategoriesHI } from "@/utility/category";

const Navbar = () => {
  const router = useRouter();
  const scrollRef = useRef(null);

  const path = router.asPath; // e.g., /hi/category/politics
  console.log(path);
  const isHindi = path.startsWith("/hi");
  console.log(isHindi);

  const categories = isHindi ? mainNewsCategoriesHI : mainNewsCategoriesEN;

  // Function to scroll categories
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -250 : 250; // Slightly adjusted scroll amount for smoother feel
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Effect to scroll active category into view on load
  useEffect(() => {
    if (scrollRef.current) {
      const activeLink = scrollRef.current.querySelector(".text-blue-600");
      if (activeLink) {
        // Calculate the center position of the active link
        const scrollContainerWidth = scrollRef.current.offsetWidth;
        const activeLinkWidth = activeLink.offsetWidth;
        const activeLinkLeft = activeLink.offsetLeft;

        const scrollTo =
          activeLinkLeft - scrollContainerWidth / 2 + activeLinkWidth / 2;
        scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      }
    }
  }, [router.asPath]); // Re-run when the route changes

  return (
    <nav className="relative w-full border-t border-b border-gray-100 bg-white font-semibold font-sans shadow-sm">
      {" "}
      {/* Added subtle shadow */}
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/90 hover:bg-white border-r border-gray-100 shadow-md rounded-r-lg transition-all duration-200 ease-in-out hidden sm:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" // Improved styling and focus
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>
      {/* Scrollable Categories */}
      <ul
        ref={scrollRef}
        className="flex items-center gap-4 overflow-x-auto no-scrollbar px-4 sm:px-12 py-3 scroll-smooth" // Increased gap, refined padding
      >
        {/* Home Icon */}
        <li className="flex-shrink-0">
          <Link
            href={isHindi ? "/hi" : "/"}
            className={`group relative flex items-center gap-1 text-sm font-medium whitespace-nowrap transition-colors duration-200 ease-in-out
              ${
                router.pathname === "/"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }
            `}
          >
            <Home className="w-6 h-6" />
            <span className="hidden sm:inline">Home</span>
            <span
              className={`absolute -bottom-1 left-0 h-[3px] bg-blue-600 rounded-full transition-all duration-300 ease-out
                ${
                  router.pathname === "/"
                    ? "w-full opacity-100"
                    : "w-0 group-hover:w-full group-hover:opacity-100 opacity-0"
                }
              `}
            />
          </Link>
        </li>

        {/* Category Links */}
        {categories.map(({ slug, name }) => {
          const href = `${isHindi ? "/hi" : ""}/categories/${slug}`;
          const isActive = router.asPath === href;

          return (
            <li key={slug} className="flex-shrink-0">
              <Link
                href={href}
                className={`group relative block text-sm whitespace-nowrap transition-colors duration-200 ease-in-out ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {name}
                <span
                  className={`absolute -bottom-1 left-0 h-[3px] bg-blue-600 rounded-full transition-all duration-300 ease-out ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 group-hover:w-full group-hover:opacity-100 opacity-0"
                  }`}
                />
              </Link>
            </li>
          );
        })}
        {/* {categories.map(({ slug, name }) => {
          const isActive = `/categories/${slug}` === router.asPath;
          return (
            <li key={slug} className="flex-shrink-0">
              <Link
                href={`/categories/${slug}`}
                className={`group relative block text-sm   whitespace-nowrap transition-colors duration-200 ease-in-out
                  ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }
                `}
              >
                {name}
                <span
                  className={`absolute -bottom-1 left-0 h-[3px] bg-blue-600 rounded-full transition-all duration-300 ease-out
                    ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 group-hover:w-full group-hover:opacity-100 opacity-0"
                    }
                  `}
                />
              </Link>
            </li>
          );
        })} */}
      </ul>
      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/90 hover:bg-white border-l border-gray-100 shadow-md rounded-l-lg transition-all duration-200 ease-in-out hidden sm:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" // Improved styling and focus
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </nav>
  );
};

export default Navbar;
// "use client";

// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useRef } from "react";
// import { ChevronLeft, ChevronRight, Home } from "lucide-react";
// import { newsCategories } from "@/utility/category";

// const Navbar = () => {
//   const router = useRouter();
//   const activeSlug = router.query.slug;
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = direction === "left" ? -300 : 300;
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <nav className="relative w-full border-t border-b border-gray-100 bg-white">
//       {/* Left Scroll */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-0 top-1/2 -translate-y-1/2 z-10 px-2 py-1 bg-white/80 hover:bg-white shadow-md rounded-full hidden sm:block"
//       >
//         <ChevronLeft className="w-5 h-5 text-gray-700" />
//       </button>

//       {/* Scrollable Categories */}
//       <ul
//         ref={scrollRef}
//         className="flex items-center gap-3 overflow-x-auto no-scrollbar px-12 py-2 scroll-smooth"
//       >
//         {/* Home Icon */}
//         <li className="flex-shrink-0">
//           <Link
//             href="/"
//             className={`group relative flex items-center gap-1 text-sm font-medium whitespace-nowrap transition-colors
//               ${
//                 router.pathname === "/"
//                   ? "text-blue-600"
//                   : "text-gray-800 hover:text-blue-600"
//               }
//             `}
//           >
//             <Home className="w-5 h-5" />
//             <span className="hidden sm:inline">Home</span>
//             <span
//               className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300
//                 ${router.pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}
//               `}
//             />
//           </Link>
//         </li>

//         {/* Category Links */}
//         {newsCategories.map(({ slug, name }) => {
//           const isActive = `/categories/${slug}` === router.asPath;
//           return (
//             <li key={slug} className="flex-shrink-0">
//               <Link
//                 href={`/categories/${slug}`}
//                 className={`group relative block text-sm font-medium whitespace-nowrap transition-colors
//                   ${
//                     isActive
//                       ? "text-blue-600"
//                       : "text-gray-800 hover:text-blue-600"
//                   }
//                 `}
//               >
//                 {name}
//                 <span
//                   className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300
//                     ${isActive ? "w-full" : "w-0 group-hover:w-full"}
//                   `}
//                 />
//               </Link>
//             </li>
//           );
//         })}
//       </ul>

//       {/* Right Scroll */}
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-0 top-1/2 -translate-y-1/2 z-10 px-2 py-1 bg-white/80 hover:bg-white shadow-md rounded-full hidden sm:block"
//       >
//         <ChevronRight className="w-5 h-5 text-gray-700" />
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";

// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useRef } from "react";
// import { ChevronLeft, ChevronRight, Home } from "lucide-react"; // or use any icons
// import { newsCategories } from "@/utility/category";

// const Navbar = () => {
//   const router = useRouter();
//   const activeSlug = router.query.slug;
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = direction === "left" ? -300 : 300;
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <nav
//       aria-label="News categories"
//       className="relative w-full border-t border-b border-gray-100 bg-white"
//     >
//       {/* Scroll Buttons */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-0 top-1/2 -translate-y-1/2 z-10 px-2 py-1 bg-white/80 hover:bg-white shadow-md rounded-full hidden sm:block"
//       >
//         <ChevronLeft className="w-5 h-5 text-gray-700" />
//       </button>

//       <ul
//         ref={scrollRef}
//         className="flex items-center gap-2 overflow-x-auto no-scrollbar px-12 py-2 scroll-smooth"
//       >
//         {/* Home Icon Link */}
//         <li className="flex-shrink-0">
//           <Link
//             href="/"
//             className={`flex items-center gap-1 px-4 py-2 text-sm font-bold rounded-full transition relative
//               ${
//                 router.pathname === "/"
//                   ? "text-blue-600"
//                   : "text-gray-800 hover:text-blue-600"
//               }
//             `}
//           >
//             <Home className="w-5 h-5" />
//             <span className="hidden sm:inline">Home</span>
//             {router.pathname === "/" && (
//               <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-blue-600 rounded-full animate-pulse" />
//             )}
//           </Link>
//         </li>

//         {/* Category Links */}
//         {newsCategories.map(({ slug, name }) => {
//           const isActive = `/categories/${slug}` === router.asPath;
//           return (
//             <li key={slug} className="flex-shrink-0">
//               <Link
//                 href={`/categories/${slug}`}
//                 className={`relative block px-4 py-2 text-sm font-semibold rounded-full transition-all
//                   ${
//                     isActive
//                       ? "text-blue-600"
//                       : "text-gray-800 hover:text-blue-600"
//                   }
//                 `}
//               >
//                 {name}
//                 {isActive && (
//                   <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-blue-600 rounded-full animate-pulse" />
//                 )}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>

//       {/* Right Scroll Button */}
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-0 top-1/2 -translate-y-1/2 z-10 px-2 py-1 bg-white/80 hover:bg-white shadow-md rounded-full hidden sm:block"
//       >
//         <ChevronRight className="w-5 h-5 text-gray-700" />
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";
// import { useRef } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { newsCategories } from "@/utility/category";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// const Navbar = () => {
//   const router = useRouter();
//   const activeSlug = router.query.slug;
//   const scrollRef = useRef(null);

//   const scroll = (dir) => {
//     if (!scrollRef.current) return;
//     const container = scrollRef.current;
//     container.scrollBy({
//       left: dir === "left" ? -200 : 200,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <nav className="relative border-t border-b border-gray-200 bg-white py-2">
//       {/* Scroll Buttons - only shown on small to md */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-0 top-1/2 -translate-y-1/2 px-2 z-10 hidden sm:flex items-center bg-white shadow-md"
//       >
//         {/* <ChevronLeft className="h-5 w-5 text-gray-600" /> */} left
//       </button>

//       <div
//         ref={scrollRef}
//         className="overflow-x-auto no-scrollbar px-2 sm:px-10"
//       >
//         <ul className="flex gap-2 w-max">
//           {newsCategories.map(({ slug, name }) => {
//             const isActive = `/categories/${slug}` === router.asPath;

//             return (
//               <li key={slug} className="flex-shrink-0">
//                 <Link
//                   href={`/categories/${slug}`}
//                   className={`block text-sm sm:text-base font-semibold px-4 py-2 rounded-full transition duration-200
//                     ${
//                       isActive
//                         ? "bg-blue-600 text-white shadow"
//                         : "text-gray-800 hover:bg-blue-100 hover:text-blue-600"
//                     }
//                   `}
//                 >
//                   {name}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-0 top-1/2 -translate-y-1/2 px-2 z-10 hidden sm:flex items-center bg-white shadow-md"
//       >
//         {/* <ChevronRight className="h-5 w-5 text-gray-600" /> */}right
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";
// import Link from "next/link";
// import { useRef } from "react";
// import { useRouter } from "next/router";
// import { newsCategories } from "@/utility/category";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// const Navbar = () => {
//   const router = useRouter();
//   const containerRef = useRef(null);
//   const activeSlug = router.query.slug;

//   const scrollByAmount = 150;

//   const scrollLeft = () => {
//     containerRef.current?.scrollBy({
//       left: -scrollByAmount,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     containerRef.current?.scrollBy({
//       left: scrollByAmount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="relative w-full border-y border-gray-200 bg-white">
//       {/* Left Scroll Button - shown on lg+ screens */}
//       <button
//         onClick={scrollLeft}
//         className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white z-10 h-full items-center px-2"
//         aria-label="Scroll Left"
//       >
//         {/* <ChevronLeft className="w-5 h-5 text-gray-500 hover:text-blue-600 transition" /> */}
//         ||
//       </button>

//       <nav
//         aria-label="News categories"
//         className="overflow-x-auto scroll-smooth px-2 sm:px-4 lg:px-10"
//         ref={containerRef}
//       >
//         <ul className="flex gap-2 py-2 w-max no-scrollbar">
//           {newsCategories.map(({ slug, name }) => {
//             const isActive = `/categories/${slug}` === router.asPath;
//             return (
//               <li key={slug} className="flex-shrink-0">
//                 <Link
//                   href={`/categories/${slug}`}
//                   className={`block text-sm font-semibold px-4 py-2 rounded-full transition
//                     ${
//                       isActive
//                         ? "bg-blue-600 text-white shadow"
//                         : "text-gray-800 hover:bg-blue-100 hover:text-blue-600"
//                     }
//                   `}
//                 >
//                   {name}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       {/* Right Scroll Button - shown on lg+ screens */}
//       <button
//         onClick={scrollRight}
//         className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white z-10 h-full items-center px-2"
//         aria-label="Scroll Right"
//       >
//         {/* <ChevronRight className="w-5 h-5 text-gray-500 hover:text-blue-600 transition" /> */}
//         ||
//       </button>
//     </div>
//   );
// };

// export default Navbar;

// import Link from "next/link";
// import { useRouter } from "next/router";
// import { newsCategories } from "@/utility/category";

// const Navbar = () => {
//   const router = useRouter();
//   const activePath = router.asPath;

//   return (
//     <nav
//       aria-label="News categories"
//       className="w-full border-t border-b border-gray-200 bg-white overflow-x-auto md:overflow-x-visible no-scrollbar md:no-scrollbar-md"
//     >
//       <ul className="flex gap-2 px-4 py-2 w-max md:w-full md:justify-center">
//         {newsCategories.map(({ slug, name }) => {
//           const isActive = activePath === `/categories/${slug}`;

//           return (
//             <li key={slug} className="flex-shrink-0">
//               <Link
//                 href={`/categories/${slug}`}
//                 className={`block whitespace-nowrap text-sm md:text-base font-semibold px-4 py-2 rounded-full transition duration-200
//                   ${
//                     isActive
//                       ? "bg-blue-600 text-white shadow-md"
//                       : "text-gray-800 hover:bg-blue-100 hover:text-blue-600"
//                   }
//                 `}
//               >
//                 {name}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import Link from "next/link";
// import { newsCategories } from "@/utility/category";
// const Navbar = () => {
//   return (
//     <nav
//       aria-label="News categories"
//       className="w-full border-t border-b border-gray-100 py-1 overflow-x-scroll  "
//     >
//       <ul
//         className="
//           flex gap-1 w-full"
//       >
//         {newsCategories.map(({ slug, name }) => (
//           <li
//             key={slug}
//             className="text-blue-950  w-full max-w-28 text-center flex-shrink-0 font-sans font-semibold  "
//           >
//             <Link href={`/categories/${slug}`} className="w-full block">
//               {name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
