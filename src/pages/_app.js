import "@/styles/globals.css";
import "@/styles/articleContent.css"; // ✅ Put it here
import { Inter, Lora } from "next/font/google"; // ✅ Correct import
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // ✅ Best for SEO and performance
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={`bg-gray-100  ${inter.variable} ${lora.variable} font-sans`}
      >
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
