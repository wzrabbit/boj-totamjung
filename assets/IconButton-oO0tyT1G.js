import{j as r}from"./jsx-runtime-DEdD30eg.js";import{d as i}from"./styled-components.browser.esm-CkAH7aAm.js";const p=i.button`
  display: flex;
  overflow: hidden;
  column-gap: 4px;
  align-items: center;
  justify-content: space-between;

  width: ${({$width:e})=>e||"auto"};
  height: ${({$size:e})=>e==="large"?"40px":"32px"};
  padding: ${({$size:e})=>e==="large"?"4px 6px":"2px 4px"};

  border: ${({$size:e,$color:t})=>e==="large"?`3px solid ${t}`:`2px solid ${t}`};
  border-radius: ${({$size:e})=>e==="large"?"6px":"4px"};
  background-color: transparent;

  color: ${({$color:e})=>e};

  &:disabled {
    opacity: 0.6;
  }

  &:not([disabled]):hover {
    box-shadow: 0 0 10px ${({$color:e})=>e};
  }

  transition: 0.2s;
`,c=i.span`
  font-size: ${({$size:e})=>e==="large"?"20px":"16px"};
  font-weight: 600;
  text-align: center;
  flex-grow: 1;
  white-space: nowrap;
`,m=i.img`
  width: ${({$size:e})=>e==="large"?"30px":"24px"};
  height: ${({$size:e})=>e==="large"?"30px":"24px"};

  object-fit: contain;
`,x=i.div`
  flex-shrink: 0;

  width: ${({$size:e})=>e==="large"?"30px":"24px"};
  height: ${({$size:e})=>e==="large"?"30px":"24px"};

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({$color:e})=>e};
  }
`,o=e=>{const{name:t,size:a,width:u,color:l,iconSrc:n,ariaLabel:s,...d}=e;return r.jsxs(p,{$size:a,$width:u,$color:l,"aria-label":s,...d,children:[n&&(typeof n=="string"?r.jsx(m,{src:n,alt:t,$size:a}):r.jsx(x,{$size:a,$color:l,children:n})),r.jsx(c,{$size:a,children:t})]})};try{o.displayName="IconButton",o.__docgenInfo={description:"",displayName:"IconButton",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},iconSrc:{defaultValue:null,description:"",name:"iconSrc",required:!1,type:{name:"string | SVGProps<SVGSVGElement>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"submit"'},{value:'"button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}export{o as I};
