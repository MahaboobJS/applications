export function createUrlFromPattern(
  patternUrl: string,
  params: Record<string, string | undefined | null>
) {
  const urlString = patternUrl.replace(/:\w+/g, (match) => {
    const replaced = params[match.slice(1)];
    if (!replaced) {
      throw new Error(`Parameter '${match.slice(1)}' is missing for the pattern: ${patternUrl}`);
    }
    return replaced;
  });

  return urlString;
}
