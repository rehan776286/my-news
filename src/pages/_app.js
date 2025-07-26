import "@/styles/globals.css";
import "@/styles/articleContent.css";
import { Inter, Lora } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${inter.variable} ${lora.variable} font-sans`}>
        {/* Optional: pass toggleDark to your navbar or settings */}
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

// import "@/styles/globals.css";
// import "@/styles/articleContent.css"; // ✅ Put it here
// import { Inter, Lora } from "next/font/google"; // ✅ Correct import
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// const queryClient = new QueryClient();

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap", // ✅ Best for SEO and performance
// });

// const lora = Lora({
//   subsets: ["latin"],
//   variable: "--font-lora",
//   display: "swap",
// });

// export default function App({ Component, pageProps }) {
//    const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const saved = localStorage.getItem('theme');
//     if (saved === 'dark') {
//       setDarkMode(true);
//     }
//   }, []);

//   const toggleDark = () => {
//     setDarkMode((prev) => {
//       const newVal = !prev;
//       localStorage.setItem('theme', newVal ? 'dark' : 'light');
//       return newVal;
//     });
//   };

//   return (
//     <QueryClientProvider client={queryClient}>
//       <div
//         className={`bg-gray-100  ${inter.variable} ${lora.variable} font-sans`}
//       >
//         <Component {...pageProps} />
//       </div>
//     </QueryClientProvider>
//   );
// }
