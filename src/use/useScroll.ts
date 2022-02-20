export default function useScroll(): any {
  const scrollToBottom = (el: HTMLTextAreaElement | null): void => {
    el?.scrollBy(0, el.scrollHeight);
  };

  return {
    scrollToBottom,
  };
}
