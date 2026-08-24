export const appName = "Docs Template";
export const siteUrl = "https://fumadocs-template.pages.dev";
export const docsRoute = "/";

export const ogImagePath = "/og.png";
export const ogImageWidth = 1200;
export const ogImageHeight = 630;
export const ogLocale = "en_US";

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: "adriablancafort",
  repo: "docs-template",
  branch: "main",
};

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).href;
}

export function encodeMarkdownUrl(slugs: string[], locale?: string) {
  const segments = [...slugs];
  if (segments.length === 0) {
    segments.push("index.md");
  } else {
    segments[segments.length - 1] += ".md";
  }

  return (
    "/" +
    [locale, ...docsRoute.split("/"), ...segments].filter(Boolean).join("/")
  );
}

/** @returns page slugs */
export function decodeMarkdownUrl(segments: string[]) {
  if (segments.length === 0) return [];

  const out = [...segments];
  out[out.length - 1] = out[out.length - 1].replace(/\.md$/, "");
  if (out.length === 1 && out[0] === "index") out.pop();
  return out;
}
