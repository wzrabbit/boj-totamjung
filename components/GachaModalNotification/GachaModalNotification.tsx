import { CheckIcon } from '@/assets/svg';
import * as S from './GachaModalNotification.styled';

interface GachaModalNotificationProps {
  children: string;
  shouldFadeOut: boolean;
}

const GachaModalNotification = (props: GachaModalNotificationProps) => {
  const { children, shouldFadeOut } = props;

  return (
    <S.Container className={shouldFadeOut ? 'fading' : ''}>
      {children !== '' && (
        <S.NotificationIconWrapper>
          <CheckIcon />
        </S.NotificationIconWrapper>
      )}
      <S.NotificationText>{children}</S.NotificationText>
    </S.Container>
  );
};

export default GachaModalNotification;
