import type { Meta, StoryObj } from '@storybook/react';
import DataFileUploadButton from './DataFileUploadButton';

/**
 * `DataFileUploadButton`은 토탐정의 세이브파일을 업로드할 수 있도록 해 주는 버튼 컴포넌트입니다.
 */
const meta = {
  title: 'components/OptionsDataManageMenu/DataFileUploadButton',
  component: DataFileUploadButton,
  argTypes: {},
} satisfies Meta<typeof DataFileUploadButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
