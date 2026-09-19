export const formatDate = (date: Date, options?: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  }).format(date);

export const readingTime = (body: string) => {
  const chineseCharacters = body.match(/[\u3400-\u9fff]/g)?.length ?? 0;
  const latinWords = body
    .replace(/[\u3400-\u9fff]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(chineseCharacters / 350 + latinWords / 220));
};
