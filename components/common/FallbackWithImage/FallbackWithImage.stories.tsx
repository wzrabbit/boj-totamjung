import type { Meta, StoryObj } from '@storybook/react';

import FallbackWithImage from './FallbackWithImage';
import { noSearchResult } from '@/assets/png';

/**
 * `FallbackWithImage`는 이미지가 있는 공용 Fallback 컴포넌트입니다. 이 컴포넌트는 항상 영역을 가득 채우며, 이미지 및 텍스트는 정중앙에 배치됩니다.
 */
const meta = {
  title: 'components/common/FallbackWithImage',
  component: FallbackWithImage,
  argTypes: {
    imageSrc: { description: '화면에 표시할 이미지의 경로를 의미합니다.' },
    imageWidth: { description: '화면에 표시할 이미지의 너비입니다.' },
    imageHeight: { description: '화면에 표시할 이미지의 높이입니다.' },
    title: { description: '화면에 표시할 제목을 의미합니다.' },
    description: { description: '부가적으로 적을 수 있는 설명을 의미합니다.' },
  },
} satisfies Meta<typeof FallbackWithImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: noSearchResult,
    imageWidth: 136,
    imageHeight: 125,
    title: '검색 결과가 없어요',
    description: '검색어에 오탈자가 있는지 확인해주세요.',
  },
};
