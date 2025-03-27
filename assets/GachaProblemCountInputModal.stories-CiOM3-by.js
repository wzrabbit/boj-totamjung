import{j as o}from"./jsx-runtime-DEdD30eg.js";import{M as h,a as I}from"./Modal-CnAp5z9P.js";import{I as b}from"./IconButton-DB9afjvp.js";import{T as i}from"./Text-CP7DmBU9.js";import{d as x}from"./styled-components.browser.esm-CkAH7aAm.js";import{r as f}from"./index-RYns6xqu.js";import{S as g}from"./check-circle-c0jdaR34.js";import{t as S}from"./theme-CEW-JCn2.js";import{b as p}from"./randomDefense-BMDfqqJr.js";import"./close-R_Y1ANk3.js";import"./index-DAfSkmQi.js";const O=x.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 350px;
  max-width: 100%;
`,_=x.input`
  width: 100%;
  height: 40px;
  padding: 0 8px;

  border: 2px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 5.666px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 18px;

  &:focus,
  &:active {
    border-color: ${({theme:e})=>e.color.LEMON};
    outline: 3px solid ${({theme:e})=>e.color.LEMON}70;
  }

  transition: outline 0.05s;
`,y=/^\d+$/,P=()=>{const[e,t]=f.useState("5"),l=n=>{const r=n.target.value;r.length>=3||t(r)},u=y.test(e)&&Number(e)>=1&&Number(e)<=p;return{inputValue:e,updateInputValue:l,isInputValueValid:u}},s=e=>{const{open:t,onClose:l,onSubmitProblemCount:u}=e,{inputValue:n,updateInputValue:r,isInputValueValid:C}=P();return o.jsxs(h,{title:"즉석 추첨",open:t,onClose:l,children:[o.jsxs(O,{children:[o.jsx(i,{type:"normal",fontSize:"16px",children:"추첨을 진행할 문제 수를 입력해 주세요."}),o.jsx(_,{type:"number",min:1,max:p,value:n,onChange:r,autoFocus:!0}),o.jsx(i,{type:"normal",textAlign:"right",fontSize:"14px",children:`1문제 이상, ${p}문제 이하`}),o.jsx(i,{type:"gray",textAlign:"left",fontSize:"16px",children:"TIP: 즉석 추첨은 백준 사이트 내에서 슬롯 번호에 대응하는 단축키를 길게 누르는 것으로도 진행할 수 있습니다."})]}),o.jsx(I,{children:o.jsx(b,{type:"button",name:"확인",size:"medium",iconSrc:o.jsx(g,{}),color:S.color.GOLD,disabled:!C,ariaLabel:"확인",onClick:()=>u(Number(n))})})]})};try{s.displayName="GachaProblemCountInputModal",s.__docgenInfo={description:"",displayName:"GachaProblemCountInputModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onSubmitProblemCount:{defaultValue:null,description:"",name:"onSubmitProblemCount",required:!0,type:{name:"(problemCount: number) => void"}}}}}catch{}const A={component:s},a={render:()=>{const[e,t]=f.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(b,{type:"button",name:"모달 열기",size:"large",color:"#d1b072",disabled:!1,ariaLabel:"모달 열기",onClick:()=>t(!0)}),o.jsx(s,{open:e,onClose:()=>t(!1),onSubmitProblemCount:()=>t(!1)})]})},args:{open:!1,onClose:()=>{},onSubmitProblemCount:()=>{}}};var m,c,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <IconButton type="button" name="모달 열기" size="large" color="#d1b072" disabled={false} ariaLabel="모달 열기" onClick={() => setIsOpen(true)} />
        <GachaProblemCountInputModal open={isOpen} onClose={() => setIsOpen(false)} onSubmitProblemCount={() => setIsOpen(false)} />
      </>;
  },
  args: {
    open: false,
    onClose: () => {},
    onSubmitProblemCount: () => {}
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const B=["Default"];export{a as Default,B as __namedExportsOrder,A as default};
