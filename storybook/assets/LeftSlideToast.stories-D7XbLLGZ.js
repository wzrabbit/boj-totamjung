import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{d as t}from"./styled-components.browser.esm-CIS6JKSM.js";import{t as e}from"./theme-DB0vf-rZ.js";import{r as S}from"./index--qcDGAq6.js";import{g as xe}from"./getTransparentHexColor-DN69VCBw.js";import{S as ve}from"./close-BziWfrbF.js";import{S as fe}from"./check-BIa-lIjI.js";import{C as je}from"./CircleProgressBar-DbK9OCO6.js";import{S as Ae}from"./copy-BcJBRJXh.js";import{f as a}from"./index-BAc7KiQ7.js";import"./index-yBjzXJbu.js";const be={none:e.colors.BOJ_BLUE,totamjung:e.colors.BROWN_900,bojExtendedDark:e.bojExtendedColors.GRAY_900,bojExtendedRigel:e.bojExtendedColors.SKY_BLUE,solvedAcLight:e.solvedAcColors.OFF_WHITE,solvedAcDark:e.solvedAcColors.INDIGO,solvedAcBlack:e.solvedAcColors.DARK_INDIGO},Ce={none:e.colors.BOJ_BLUE,totamjung:e.colors.BROWN_500,bojExtendedDark:e.bojExtendedColors.GRAY_600,bojExtendedRigel:e.bojExtendedColors.DARK_SKY_BLUE,solvedAcLight:e.solvedAcColors.GRAY_200,solvedAcDark:e.solvedAcColors.GRAY_400,solvedAcBlack:e.solvedAcColors.GRAY_400},Ee={none:"transparent",totamjung:e.colors.BROWN_500,bojExtendedDark:e.bojExtendedColors.GRAY_800,bojExtendedRigel:"transparent",solvedAcLight:e.solvedAcColors.OFF_WHITE,solvedAcDark:e.solvedAcColors.DARK_INDIGO,solvedAcBlack:e.colors.BLACK},ae={none:e.colors.OFF_WHITE,totamjung:e.colors.BEIGE,bojExtendedDark:e.bojExtendedColors.GRAY_300,bojExtendedRigel:e.colors.OFF_WHITE,solvedAcLight:e.colors.BLACK,solvedAcDark:e.solvedAcColors.OFF_WHITE,solvedAcBlack:e.solvedAcColors.OFF_WHITE},Se={...ae,totamjung:e.colors.OFF_WHITE,bojExtendedDark:e.colors.OFF_WHITE},b={none:e.colors.OFF_WHITE,totamjung:e.colors.BROWN_300,bojExtendedDark:e.bojExtendedColors.GRAY_300,bojExtendedRigel:e.colors.OFF_WHITE,solvedAcLight:e.solvedAcColors.GRAY_400,solvedAcDark:e.solvedAcColors.GRAY_200,solvedAcBlack:e.solvedAcColors.GRAY_200},De={none:e.filters.WHITE,totamjung:e.filters.BROWN_300,bojExtendedDark:e.bojExtendedFilters.GRAY_300,bojExtendedRigel:e.filters.WHITE,solvedAcLight:e.solvedAcFilters.GRAY_200,solvedAcDark:e.solvedAcFilters.GRAY_200,solvedAcBlack:e.solvedAcFilters.GRAY_200},D={none:e.colors.OFF_WHITE,totamjung:e.colors.BROWN_300,bojExtendedDark:e.bojExtendedColors.GRAY_300,bojExtendedRigel:e.colors.OFF_WHITE,solvedAcLight:e.solvedAcColors.GRAY_400,solvedAcDark:e.solvedAcColors.GRAY_200,solvedAcBlack:e.solvedAcColors.GRAY_200},_e=t.div`
  display: flex;
  visibility: ${({$visible:o})=>o?"visible":"hidden"};
  column-gap: 10px;
  position: fixed;
  left: 30px;
  bottom: 30px;

  width: 380px;
  min-height: 120px;
  padding: 10px;

  border-radius: 10px;
  border: 2px solid
    ${({$totamjungTheme:o})=>Ce[o]};
  background-color: ${({$totamjungTheme:o})=>be[o]};
  box-shadow: 0 0 20px
    ${({$totamjungTheme:o})=>Ee[o]};

  transform: ${({$open:o})=>o?"translateX(0)":"translateX(-450px)"};
  transition: transform cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
`,ye=t.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 66px;
`,Re=t.img`
  width: 40px;

  filter: ${({$totamjungTheme:o})=>De[o]};
  user-select: none;
`,ke=t.div`
  &,
  & > svg {
    width: 48px;
    height: 48px;

    color: ${({$totamjungTheme:o})=>b[o]};
  }
`,Ie=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  width: 240px;
`,Te=t.p`
  font-size: 16px;
  font-weight: 700;
  word-break: break-all;
  color: ${({$totamjungTheme:o})=>ae[o]};
`,Be=t.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`,ce=t.p`
  font-size: 14px;
  word-break: break-all;
`,Le=t.li`
  display: flex;
  column-gap: 3px;

  min-height: 17px;

  line-height: 17px;

  & > ${ce} {
    color: ${({$totamjungTheme:o})=>Se[o]};
  }

  & > svg {
    flex-shrink: 0;

    width: 17px;
    height: 17px;
    color: ${({$totamjungTheme:o})=>b[o]};
  }
`,Fe=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 30px;
`,Ge=t.button`
  width: 30px;
  height: 30px;

  background: none;

  & > svg {
    width: 30px;
    height: 30px;
    color: ${({$totamjungTheme:o})=>b[o]};
  }
`,A=o=>{const{mainIconSrc:c,theme:n,progress:le,title:de,descriptions:l,open:d,onClose:pe}=o,[me,C]=S.useState(!1),ue=Array.isArray(l)?l:[l];S.useEffect(()=>{d&&C(!0)},[d]);const ge=()=>{d||C(!1)};return r.jsxs(_e,{$open:d,$totamjungTheme:n,$visible:me,onTransitionEnd:ge,children:[r.jsx(ye,{children:c&&(typeof c=="string"?r.jsx(Re,{src:c,$totamjungTheme:n,alt:""}):r.jsx(ke,{$totamjungTheme:n,children:c}))}),r.jsxs(Ie,{children:[r.jsx(Te,{"aria-live":"assertive",$totamjungTheme:n,children:de}),l&&r.jsx(Be,{children:ue.map((he,E)=>r.jsxs(Le,{$totamjungTheme:n,children:[r.jsx(fe,{}),r.jsx(ce,{children:he},E)]},E))})]}),r.jsxs(Fe,{children:[r.jsx(Ge,{type:"button","aria-label":"토스트 닫기",$totamjungTheme:n,onClick:pe,children:r.jsx(ve,{})}),r.jsx(je,{size:28,strokeWidth:4,progress:le,color:D[n],trackColor:xe(D[n],.3)})]})]})};try{A.displayName="LeftSlideToast",A.__docgenInfo={description:"",displayName:"LeftSlideToast",props:{mainIconSrc:{defaultValue:null,description:"",name:"mainIconSrc",required:!0,type:{name:"string | ReactElement<SVGProps<SVGSVGElement>, string | JSXElementConstructor<any>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"totamjung"'},{value:'"bojExtendedDark"'},{value:'"bojExtendedRigel"'},{value:'"solvedAcLight"'},{value:'"solvedAcDark"'},{value:'"solvedAcBlack"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},descriptions:{defaultValue:null,description:"",name:"descriptions",required:!1,type:{name:"string | string[]"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const ze={title:"components/LeftSlideToast",component:A,argTypes:{mainIconSrc:{description:"토스트의 좌측에 표시할 큰 아이콘의 파일 경로입니다."},theme:{description:"본 컴포넌트에 적용할 테마를 의미합니다.",control:"radio",options:["none","totamjung"]},progress:{description:"토스트의 프로그레스 바가 얼마나 차 있는지를 의미합니다. 이 값은 **0 이상 100 이하의 수**여야 합니다.",control:{type:"range",min:0,max:100}},title:{description:"토스트의 제목입니다."},descriptions:{description:"토스트의 제목을 뒷받침할 설명입니다."},open:{description:"토스트가 열려 있는지(=사용자에게 보이는 상태인지)를 의미합니다."},onClose:{description:"토스트를 닫아야 할 때 실행시킬 콜백 함수입니다."}},parameters:{docs:{description:{component:"`LeftSlideToast`는 사용자에게 특정 내용을 알리기 위한, 좌측에서 등장하는 토스트입니다."}}}},s={decorators:[o=>r.jsx("div",{style:{height:"160px"},children:r.jsx(o,{})})],args:{mainIconSrc:browser.runtime.getURL("/dice.png"),theme:"none",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:a()}},p={decorators:[o=>r.jsx("div",{style:{height:"160px"},children:r.jsx(o,{})})],args:{mainIconSrc:r.jsx(Ae,{}),theme:"none",progress:65,title:"테스트 제목입니다.",descriptions:"그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.",open:!0,onClose:a()}},m={decorators:[o=>r.jsx("div",{style:{height:"160px"},children:r.jsx(o,{})})],args:{mainIconSrc:browser.runtime.getURL("/dice.png"),theme:"none",progress:65,title:"필요할 경우 여러 개의 설명을 사용할 수도 있습니다.",descriptions:["이건 첫 번째 설명이고요,","이건 두 번째 설명입니다. 설명을 여러 개 사용할 경우에는 배열을 사용해 주세요."],open:!0,onClose:a()}},u={decorators:[o=>r.jsx("div",{style:{height:"150px"},children:r.jsx(o,{})})],args:{mainIconSrc:browser.runtime.getURL("/dice.png"),theme:"none",progress:65,title:"설명이 필요 없다고요? 그럼 메시지만 간결하게 전달해도 문제 없죠.",open:!0,onClose:a()}},i={decorators:[o=>r.jsx("div",{style:{height:"300px"},children:r.jsx(o,{})})],args:{mainIconSrc:browser.runtime.getURL("/dice.png"),theme:"none",progress:65,title:"매우 긴 설명",descriptions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Curabitur facilisis, libero a pretium auctor, sapien erat tincidunt nulla, vitae vestibulum elit leo at odio. Donec vehicula mauris ut nisi hendrerit, ac dictum libero consequat. Integer euismod neque eu magna facilisis, in suscipit sem sagittis.",open:!0,onClose:a()}},g={...s,args:{...s.args,theme:"totamjung"}},h={...s,args:{...s.args,theme:"solvedAcLight"}},x={...s,args:{...s.args,theme:"solvedAcDark"}},v={...s,args:{...s.args,theme:"solvedAcBlack"}},f={...s,args:{...s.args,theme:"bojExtendedDark"}},j={...s,args:{...s.args,theme:"bojExtendedRigel"}};var _,y,R;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '160px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: browser.runtime.getURL('/dice.png'),
    theme: 'none',
    progress: 65,
    title: '테스트 제목입니다.',
    descriptions: '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',
    open: true,
    onClose: fn()
  }
}`,...(R=(y=s.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var k,I,T;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '160px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: <CopyIcon />,
    theme: 'none',
    progress: 65,
    title: '테스트 제목입니다.',
    descriptions: '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',
    open: true,
    onClose: fn()
  }
}`,...(T=(I=p.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var B,L,F;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '160px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: browser.runtime.getURL('/dice.png'),
    theme: 'none',
    progress: 65,
    title: '필요할 경우 여러 개의 설명을 사용할 수도 있습니다.',
    descriptions: ['이건 첫 번째 설명이고요,', '이건 두 번째 설명입니다. 설명을 여러 개 사용할 경우에는 배열을 사용해 주세요.'],
    open: true,
    onClose: fn()
  }
}`,...(F=(L=m.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var G,w,O;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '150px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: browser.runtime.getURL('/dice.png'),
    theme: 'none',
    progress: 65,
    title: '설명이 필요 없다고요? 그럼 메시지만 간결하게 전달해도 문제 없죠.',
    open: true,
    onClose: fn()
  }
}`,...(O=(w=u.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var W,Y,$,V,H;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '300px'
  }}>
        <Story />
      </div>],
  args: {
    mainIconSrc: browser.runtime.getURL('/dice.png'),
    theme: 'none',
    progress: 65,
    title: '매우 긴 설명',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Curabitur facilisis, libero a pretium auctor, sapien erat tincidunt nulla, vitae vestibulum elit leo at odio. Donec vehicula mauris ut nisi hendrerit, ac dictum libero consequat. Integer euismod neque eu magna facilisis, in suscipit sem sagittis.',
    open: true,
    onClose: fn()
  }
}`,...($=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:$.source},description:{story:"설명이 너무 길어 Toast의 크기를 벗어나는 경우에는, Toast가 위쪽으로 자동 조정됩니다.",...(H=(V=i.parameters)==null?void 0:V.docs)==null?void 0:H.description}}};var N,U,q;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    theme: 'totamjung'
  }
}`,...(q=(U=g.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var K,z,P;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    theme: 'solvedAcLight'
  }
}`,...(P=(z=h.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var J,X,M;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    theme: 'solvedAcDark'
  }
}`,...(M=(X=x.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};var Q,Z,ee;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    theme: 'solvedAcBlack'
  }
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,re,se;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    theme: 'bojExtendedDark'
  }
}`,...(se=(re=f.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,ne,ie;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    theme: 'bojExtendedRigel'
  }
}`,...(ie=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const Pe=["Default","SvgIcon","MultipleDescriptions","NoDescription","VeryLongDescription","TotamjungTheme","SolvedAcLightTheme","SolvedAcDarkTheme","SolvedAcBlackTheme","BojExtendedDarkTheme","BojExtendedRigelTheme"];export{f as BojExtendedDarkTheme,j as BojExtendedRigelTheme,s as Default,m as MultipleDescriptions,u as NoDescription,v as SolvedAcBlackTheme,x as SolvedAcDarkTheme,h as SolvedAcLightTheme,p as SvgIcon,g as TotamjungTheme,i as VeryLongDescription,Pe as __namedExportsOrder,ze as default};
