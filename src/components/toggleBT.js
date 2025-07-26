import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LanguageToggleSmall() {
  const router = useRouter();
  const isHindi = router.asPath.startsWith("/hi");

  const toggleLanguage = () => {
    localStorage.setItem("preferredLanguage", isHindi ? "en" : "hi");
    router.push(isHindi ? "/" : "/hi");
  };

  useEffect(() => {
    const preferredLang = localStorage.getItem("preferredLanguage");
    if (!preferredLang) return;

    const currentIsHindi = router.asPath.startsWith("/hi");
    if (preferredLang === "hi" && !currentIsHindi) {
      router.replace("/hi");
    } else if (preferredLang === "en" && currentIsHindi) {
      router.replace("/");
    }
  }, []);
  return (
    <div className="flex items-center space-x-1">
      <span className={`text-xs ${!isHindi ? "text-white" : "text-blue-600"}`}>
        EN
      </span>
      <button
        onClick={toggleLanguage}
        aria-label="Switch language to Hindi"
        className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
          isHindi ? "bg-blue-900" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-[2px] left-[2px] w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 transform ${
            isHindi ? "translate-x-5" : ""
          }`}
        ></span>
      </button>
      <span className={`text-xs ${isHindi ? "text-white" : "text-blue-600"}`}>
        हि
      </span>
    </div>
  );
}
