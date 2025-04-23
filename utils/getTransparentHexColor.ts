const hexRegex = /^#([0-9a-f]{6})$/;

export const getTransparentHexColor = (
  hexColor: string,
  opacity: number,
): string => {
  if (!hexRegex.test(hexColor)) {
    throw new Error(
      '잘못된 색상 코드입니다. 색상 코드는 6자리의 HEX 형식의 코드여야 하며, 숫자 및 영소문자로만 구성되어야 합니다.',
    );
  }

  if (isNaN(opacity) || opacity < 0 || opacity > 1) {
    throw new Error('투명도는 반드시 0 이상 1 이하의 수여야 합니다.');
  }

  const red = parseInt(hexColor.slice(1, 3), 16);
  const green = parseInt(hexColor.slice(3, 5), 16);
  const blue = parseInt(hexColor.slice(5, 7), 16);

  const opacityHex = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0');

  return `#${[red, green, blue].map((hex) => hex.toString(16).padStart(2, '0')).join('')}${opacityHex}`;
};
