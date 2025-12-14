/**
 * 현재 포커스가 되어 있는 요소를 반환합니다. Shadow Root 내부에 있는 요소도 찾을 수 있습니다.
 *
 * @returns {Element | null} 포커스가 되어 있는 요소
 */
export const getDeepActiveElement = (): Element | null => {
  let currentElement = document.activeElement;

  while (currentElement?.shadowRoot?.activeElement) {
    currentElement = currentElement.shadowRoot.activeElement;
  }

  return currentElement;
};
