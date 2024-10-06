import * as S from './Tooltip.styled';
import SpeechBubble from '@/components/common/SpeechBubble';
import { HelpIcon } from '@/assets/svg';
import { useState } from 'react';

interface TooltipProps {
  direction: 'up' | 'left' | 'right' | 'down';
  content: string;
}

const Tooltip = (props: TooltipProps) => {
  const { direction, content } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container
      onMouseOver={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <S.Tooltip type="button">
        <HelpIcon />
      </S.Tooltip>
      <S.SpeechBubbleWrapper $direction={direction}>
        <SpeechBubble
          open={isOpen}
          direction={direction}
          totamjungTheme="none"
          content={content}
        />
      </S.SpeechBubbleWrapper>
    </S.Container>
  );
};

export default Tooltip;
