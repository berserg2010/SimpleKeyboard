export default function useScroll() {

  const scrollToBottom = (el: HTMLTextAreaElement | null) => {
    el?.scrollBy(0, el.scrollHeight);
  };

  return {
    scrollToBottom,
  };
}
