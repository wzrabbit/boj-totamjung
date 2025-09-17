import Text from '@/components/common/Text';
import * as S from './FallbackWithImage.styled';

interface FallbackWithImageProps {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  description?: string;
}

const FallbackWithImage = (props: FallbackWithImageProps) => {
  const { imageSrc, imageWidth, imageHeight, title, description } = props;

  return (
    <S.Fallback>
      <S.Image
        width={imageWidth}
        height={imageHeight}
        src={imageSrc}
        alt=""
        draggable={false}
      />
      <S.Title>{title}</S.Title>
      {description && (
        <Text type="normal" fontSize="14px">
          {description}
        </Text>
      )}
    </S.Fallback>
  );
};

export default FallbackWithImage;
