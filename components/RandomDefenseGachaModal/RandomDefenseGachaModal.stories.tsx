import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '@/components/common/IconButton';
import RandomDefenseGachaModal from './RandomDefenseGachaModal';
import { useState } from 'react';
import type { Tier } from '@/types/randomDefense';

/**
 * `RandomDefenseGachaModal`는 즉석 추첨 기능을 전체적으로 제공하는 모달 컴포넌트입니다.
 */
const meta = {
  title: 'components/RandomDefenseGachaModal',
  component: RandomDefenseGachaModal,
} satisfies Meta<typeof RandomDefenseGachaModal>;

export default meta;

type Story = StoryObj<typeof meta>;

interface ProblemInfo {
  problemId: number;
  title: string;
  tier: Tier;
}

const getSampleProblemInfos = (problemCount: number): ProblemInfo[] => {
  return Array.from({ length: problemCount }).map((_, index) => ({
    problemId: 40000 + index,
    title: `${40000 + index}번 문제`,
    tier: 0,
  }));
};

export const ProblemCount5: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <IconButton
          type="button"
          name="모달 열기"
          size="large"
          color="#d1b072"
          disabled={false}
          ariaLabel="모달 열기"
          onClick={() => {
            setIsOpen(() => true);
          }}
        />
        <RandomDefenseGachaModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          problemInfos={getSampleProblemInfos(5)}
        />
      </>
    );
  },
  args: {
    open: false,
    onClose: () => {},
    problemInfos: [],
  },
};

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <IconButton
          type="button"
          name="모달 열기"
          size="large"
          color="#d1b072"
          disabled={false}
          ariaLabel="모달 열기"
          onClick={() => {
            setIsOpen(() => true);
          }}
        />
        <RandomDefenseGachaModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          problemInfos={getSampleProblemInfos(1)}
        />
      </>
    );
  },
  args: {
    open: false,
    onClose: () => {},
    problemInfos: [],
  },
};
