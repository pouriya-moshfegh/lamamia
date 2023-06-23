import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-12 flex items-center justify-between ">
      <div className="text-sm"> © 2023 lamamia. Made by pouriyams</div>
      <div className="flex gap-x-3">
        <Image src="/image/facebook.png" width={25} height={25} alt="picture" />
        <Image src="/image/instagram.png" width={25} height={25} alt="picture" />
        <Image src="/image/twitter.png" width={25} height={25} alt="picture" />
        <Image src="/image/youtube.png" width={25} height={25} alt="picture" />
      </div>
    </div>
  );
}
