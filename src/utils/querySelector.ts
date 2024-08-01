export const $ = (queryName: string, element?: HTMLElement) => {
  const loadedElement = element
    ? element.querySelector(queryName)
    : document.querySelector(queryName);

  if (!(loadedElement instanceof HTMLElement)) {
    return null;
  }

  return loadedElement;
};

export const $$ = (queryName: string, element?: HTMLElement) => {
  const loadedElements = element
    ? Array.from(element.querySelectorAll(queryName))
    : Array.from(document.querySelectorAll(queryName));

  const htmlElements: HTMLElement[] = [];

  loadedElements.forEach((loadedElement) => {
    if (loadedElement instanceof HTMLElement) {
      htmlElements.push(loadedElement);
    }
  });

  return htmlElements;
};
