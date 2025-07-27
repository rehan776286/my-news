import Image from "next/image";
import { useRouter } from "next/router";

export default function ShareIcons({ slug, title }) {
  const router = useRouter();
  const currentLang = router.asPath.startsWith("/hi") ? "hi" : ""; // no "en"
  const url = `https://trendmode.in/${
    currentLang ? `${currentLang}/` : ""
  }${slug}`;

  const encodedURL = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex gap-4 items-center mt-4">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/shereIcon/whatsapp.svg"
          alt="WhatsApp"
          width={24}
          height={24}
          priority
        />
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/shereIcon/facebook.svg"
          alt="Facebook"
          width={24}
          height={24}
          priority
        />
      </a>

      {/* Twitter (X) */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/shereIcon/x.svg"
          alt="X (Twitter)"
          width={24}
          height={24}
          priority
        />
      </a>

      {/* Telegram */}
      <a
        href={`https://t.me/share/url?url=${encodedURL}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/shereIcon/telegram.svg"
          alt="Telegram"
          width={24}
          height={24}
          priority
        />
      </a>

      {/* Instagram (Not supported for direct share) */}
      <div title="Instagram does not support direct sharing via web">
        <Image
          src="/shereIcon/instagram.svg"
          alt="Instagram"
          width={24}
          height={24}
          priority
        />
      </div>
    </div>
  );
}
