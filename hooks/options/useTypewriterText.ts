import { useState, useEffect } from 'react';

interface useTypewriterText {
  textList: string[];
  typingTime: number;
  idleTime: number;
  erasingTime: number;
}

const TYPING_TIME_CHECK_INTERVAL = 20;

const useTypewriterText = (params: useTypewriterText) => {
  const { textList, typingTime, idleTime, erasingTime } = params;
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingStartTime, setTypingStartTime] = useState(Date.now());
  const [isTyping, setIsTyping] = useState(false);

  const idleStartDuration = typingTime;
  const erasingStartDuration = typingTime + idleTime;
  const replacingStartDuration = typingTime + idleTime + erasingTime;

  useEffect(() => {
    if (!isTyping || textList.length === 0) {
      return;
    }

    if (currentIndex >= textList.length) {
      setCurrentIndex((prev) => Math.min(textList.length - 1, prev));
    }

    const typingTimer = setInterval(() => {
      const now = Date.now();
      const currentTextTypingDuration = now - typingStartTime;

      if (currentTextTypingDuration >= replacingStartDuration) {
        setTypingStartTime(now);
        setCurrentIndex((prev) => (prev + 1) % textList.length);
        return;
      }

      if (currentTextTypingDuration >= erasingStartDuration) {
        const displayTextLength =
          textList[currentIndex].length -
          Math.ceil(
            ((currentTextTypingDuration - erasingStartDuration) / erasingTime) *
              textList[currentIndex].length,
          );

        setCurrentText(textList[currentIndex].slice(0, displayTextLength));
        return;
      }

      if (currentTextTypingDuration >= idleStartDuration) {
        setCurrentText(textList[currentIndex]);
        return;
      }

      const displayTextLength = Math.ceil(
        (currentTextTypingDuration / typingTime) *
          textList[currentIndex].length,
      );

      setCurrentText(textList[currentIndex].slice(0, displayTextLength));
    }, TYPING_TIME_CHECK_INTERVAL);

    return () => {
      clearInterval(typingTimer);
    };
  }, [
    isTyping,
    currentIndex,
    typingStartTime,
    textList,
    typingTime,
    idleTime,
    erasingTime,
  ]);

  const startTyping = () => {
    setTypingStartTime(Date.now());
    setCurrentText('');
    setCurrentIndex(0);
    setIsTyping(true);
  };

  const stopTyping = () => {
    setCurrentText('');
    setCurrentIndex(0);
    setIsTyping(false);
  };

  return {
    currentText,
    startTyping,
    stopTyping,
  };
};

export default useTypewriterText;
