import { useMemo } from "react";
import Image from "next/image";
const getOptimizedImageUrl = (url) => {
  const cloudUrl = new URL(url);
  cloudUrl.searchParams.set("w", "700");
  cloudUrl.searchParams.set("h", "400");
  cloudUrl.searchParams.set("c", "fill");
  cloudUrl.searchParams.set("f_auto", "");
  cloudUrl.searchParams.set("q_auto", "");
  return cloudUrl.toString();
};

const OptimizedImage = ({ ogImage, title }) => {
  const optimizedUrl = useMemo(
    () => getOptimizedImageUrl(ogImage.url),
    [ogImage]
  );

  return (
    <Image
      src={optimizedUrl}
      alt={title}
      width={700}
      height={400}
      priority
      className="w-full h-full object-cover rounded-lg"
    />
  );
};
export default OptimizedImage;
