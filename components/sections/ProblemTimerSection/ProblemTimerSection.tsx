import * as S from './ProblemTimerSection.styled';
import MenuTitle from '@/components/MenuTitle';
import NamedFrame from '@/components/common/NamedFrame';
import Fieldset from '@/components/common/Fieldset';
import type { OptionsSectionProps } from '@/types/options';
import { ClockIcon } from '@/assets/svg';

const ProblemTimerSection = (props: OptionsSectionProps) => {
  const { show } = props;

  return show ? (
    <S.Container>
      <MenuTitle title="문제 타이머 설정" iconSrc={<ClockIcon />} />
      <S.Menu>
        <NamedFrame
          width="419px"
          height="550px"
          padding="20px"
          title="타이머 설정"
        >
          <Fieldset
            legend="타이머 사용 방법"
            name="problemTimerMode"
            options={[
              { label: '문제별로 독립된 타이머 사용', value: 'problem' },
              {
                label: '사이트 내에서 자유롭게 수동으로 사용',
                value: 'manual',
              },
              { label: '사용하지 않음', value: 'none' },
            ]}
            checkedValue={''}
            isVertical={true}
            onChange={() => {}}
          />
          <Fieldset
            legend="타이머 시간 설정"
            name="problemTimerMode"
            options={[
              { label: '난이도와 상관없이 같은 시간을 사용', value: 'same' },
              {
                label: '난이도별로 다른 시간을 사용',
                value: 'different',
              },
            ]}
            checkedValue={''}
            isVertical={true}
            onChange={() => {}}
          />
          <Fieldset
            legend="시간 만료 시 타이머 삭제 여부"
            name="problemTimerMode"
            options={[
              { label: '삭제', value: 'delete' },
              {
                label: '삭제하지 않음',
                value: 'keep',
              },
            ]}
            checkedValue={''}
            isVertical={true}
            onChange={() => {}}
          />
        </NamedFrame>
        <NamedFrame
          width="628px"
          height="550px"
          padding="10px"
          title="타이머 관리"
        ></NamedFrame>
      </S.Menu>
    </S.Container>
  ) : null;
};

export default ProblemTimerSection;
