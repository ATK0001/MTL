const CONFIG = {
  // profile setting (required)
  profile: {
    name: "ATK0001",
    image: "/Avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Many Things",
    bio: "Sleuthing around the internet",
    email: "edward@namewastaken.com.au",
    linkedin: "",
    github: "",
    instagram: "https://www.instagram.com/esatk.public/",
  },
  projects: [
    {
      name: `Photography`,
      href: "https://www.instagram.com/esatk.public/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Name Was Taken",
    description: "Blog Was Taken",
  },

  // CONFIG configration (required)
  link: "https://namewastaken.com.au",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
