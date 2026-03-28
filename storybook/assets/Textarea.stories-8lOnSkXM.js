import{j as x}from"./jsx-runtime-Cf8x2fCZ.js";import{r as E}from"./index--qcDGAq6.js";import{d as b}from"./styled-components.browser.esm-CIS6JKSM.js";import{f as u}from"./index-BAc7KiQ7.js";import"./index-yBjzXJbu.js";const L=b.textarea`
  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};
  padding: 6px;

  border: 1.5px solid ${({theme:e})=>e.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.color.DARK_BROWN};

  color: ${({theme:e})=>e.color.WHITE};
  font-size: 13px;

  resize: none;

  &:focus,
  &:active {
    border-color: ${({theme:e,$hasError:r})=>r?e.color.RED:e.color.LEMON};
    outline: 3px solid
      ${({theme:e,$hasError:r})=>r?e.color.RED:e.color.LEMON}70;
  }

  transition: outline 0.05s;
`,t=E.forwardRef((e,r)=>{const{width:c,height:h,hasError:m,ariaLabel:g,...f}=e;return x.jsx(L,{$width:c,$height:h,$hasError:m,spellCheck:!1,"aria-label":g,ref:r,...f})});try{t.displayName="Textarea",t.__docgenInfo={description:"",displayName:"Textarea",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<number | (string & {})> | undefined"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<number | (string & {})> | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLTextAreaElement>) => void"}}}}}catch{}const $={title:"components/common/Textarea",component:t,argTypes:{width:{description:"컴포넌트의 가로 길이입니다."},height:{description:"컴포넌트의 세로 길이입니다."},value:{description:"현재 입력되어 있는 값입니다."},placeholder:{description:"컴포넌트의 `placeholder`입니다. 입력을 시작하기 전 보여지는 힌트 문구를 의미합니다."},hasError:{description:"에러 발생 여부입니다. 에러가 발생한 경우에는 컴포넌트의 윤곽선이 붉은색이 됩니다."},ariaLabel:{description:"컴포넌트의 `aria-label`입니다."},onChange:{description:"컴포넌트의 값이 변경될 경우 실행시킬 콜백 함수입니다."},name:{description:"컴포넌트의 `name`입니다."},minLength:{description:"컴포넌트에 적을 수 있는 최소 문자 수입니다."},maxLength:{description:"컴포넌트에 적을 수 있는 최대 문자 수입니다."}},parameters:{docs:{description:{component:"`Textarea`는 사용자가 여러 줄의 내용을 작성할 수 있는 텍스트 입력 영역 컴포넌트입니다."}}}},a={args:{width:"560px",height:"140px",value:"",placeholder:"마음가는 대로 입력해 보세요",hasError:!1,ariaLabel:"아무 값이든 입력해 보세요",onChange:u()}},n={args:{width:"560px",height:"140px",value:"",placeholder:"사람은 누구나 실수를 하죠",hasError:!0,ariaLabel:"아무 값이든 입력해 보세요",onChange:u()}};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    width: '560px',
    height: '140px',
    value: '',
    placeholder: '마음가는 대로 입력해 보세요',
    hasError: false,
    ariaLabel: '아무 값이든 입력해 보세요',
    onChange: fn()
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var s,d,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    width: '560px',
    height: '140px',
    value: '',
    placeholder: '사람은 누구나 실수를 하죠',
    hasError: true,
    ariaLabel: '아무 값이든 입력해 보세요',
    onChange: fn()
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const q=["Default","Error"];export{a as Default,n as Error,q as __namedExportsOrder,$ as default};
