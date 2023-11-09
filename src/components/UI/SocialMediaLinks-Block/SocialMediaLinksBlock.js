"use client";

import { useState } from "react";
import Image from "next/image";

import googleIcon from "@@@/social_media_icons/google.svg";
import telegramIcon from "@@@/social_media_icons/telegram.svg";
import vkIcon from "@@@/social_media_icons/vk.svg";
import facebookIcon from "@@@/social_media_icons/facebook.svg";
import discordIcon from "@@@/social_media_icons/discord.svg";
import redditIcon from "@@@/social_media_icons/reddit.svg";
import gitHubIcon from "@@@/social_media_icons/gitHub.svg";

const socialMediaIcons = [
  googleIcon,
  telegramIcon,
  vkIcon,
  facebookIcon,
  discordIcon,
];
const socialMediaIconsMore = [redditIcon, gitHubIcon];

function SocialMediaLinksBlock() {
  const [showMoreIcons, setShowMoreIcons] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-4">
        {socialMediaIcons.map((icon, i) => (
          <span
            key={i + 1}
            className="inline-block h-10 w-10 cursor-pointer transition-all hover:scale-110 xl:h-12 xl:w-12"
          >
            <Image src={icon} alt={icon} width={100} height={100} />
          </span>
        ))}
      </div>
      {showMoreIcons ? (
        <div className="flex items-center justify-center gap-4">
          {socialMediaIconsMore.map((icon, i) => (
            <span
              key={i + 1}
              className="inline-block h-10 w-10 cursor-pointer transition-all hover:scale-110 xl:h-12 xl:w-12"
            >
              <Image src={icon} alt={icon} width={100} height={100} />
            </span>
          ))}
        </div>
      ) : (
        <button
          className="text-sm text-custom-gray-700 transition-all hover:font-medium hover:text-custom-gray-900"
          onClick={() => setShowMoreIcons(true)}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default SocialMediaLinksBlock;
