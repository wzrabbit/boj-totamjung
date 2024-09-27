import{Q as s}from"./QuickSlotMenu-DTT9SHU6.js";import"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import"./styled-components.browser.esm-CkAH7aAm.js";import"./NamedFrame-DSWSgEem.js";import"./SlotPagination-CpKL9-g0.js";import"./SlotInfo-BAX3IAWo.js";import"./Text-DG2UbxfS.js";import"./HotkeySwitcher-DHUzdrvr.js";import"./IconButton-D0rtTRsA.js";import"./SlotEditModal-Dx2OUjGY.js";import"./theme-C4yZJZ7X.js";import"./Modal-D8EuTlZI.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";import"./Textarea-Bp2AThqy.js";import"./Input-_gr1WRmd.js";import"./ErrorText-CAj_MRej.js";import"./close-circle-Z95a0wyf.js";import"./check-circle-c0jdaR34.js";import"./Loading-BB2Ju6ka.js";import"./useModal-CV8qRtLl.js";import"./trash-CO6QCs-j.js";import"./copy-CpUHLpuP.js";import"./SimpleModal-ClNHGUid.js";const I={title:"components/QuickSlotMenu",component:s,argTypes:{},parameters:{docs:{description:{component:"`QuickSlotMenu`는 추첨 생성 폼을 통해 생성된 연습 쿼리들을 관리할 수 있는 메뉴 형태의 컴포넌트입니다."}}}},l={selectedSlotNo:2,hotkey:"Alt",slots:{1:{isEmpty:!0},2:{isEmpty:!1,title:"골드 랜덤 디펜스",query:"*11..15 s#3000.. solvable:true"},3:{isEmpty:!0},4:{isEmpty:!1,title:"외국어 문제 풀어보기",query:"*5..20 !lang:ko solvable:true"},5:{isEmpty:!0},6:{isEmpty:!0},7:{isEmpty:!0},8:{isEmpty:!1,title:"이추첨의이름은정확히삼십글자이며이렇게하는이유는테스트를위함",query:"*1..30 (-#rope-#bayes-#knuth-#dancing_links-#differential_cryptanalysis-#discrete_sqrt-#lgv-#green-#stoer_wagner-#multipoint_evaluation-#lte-#geometric_boolean_operations-#a_star-#discrete_kth_root)"},9:{isEmpty:!0},0:{isEmpty:!0}}},e={args:{quickSlotsInfo:l,isLoaded:!0,onHotkeyChange:t=>{alert(`onHotkeyChange('${t}')`)},onSlotChange:(t,i)=>{alert(`onSlotChange('${t}', '${i}')`)},onSlotDelete:()=>{alert("onSlotDelete()")},onSlotNoChange:t=>{alert(`onSlotNoChange(${t})`)}}};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    quickSlotsInfo: quickSlotsResponse,
    isLoaded: true,
    onHotkeyChange: hotkey => {
      alert(\`onHotkeyChange('\${hotkey}')\`);
    },
    onSlotChange: (title: string, query: string) => {
      alert(\`onSlotChange('\${title}', '\${query}')\`);
    },
    onSlotDelete: () => {
      alert(\`onSlotDelete()\`);
    },
    onSlotNoChange: slotNo => {
      alert(\`onSlotNoChange(\${slotNo})\`);
    }
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const L=["Default"];export{e as Default,L as __namedExportsOrder,I as default};
