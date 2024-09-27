import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d as o}from"./styled-components.browser.esm-CkAH7aAm.js";const d=o.button`
  display: flex;
  overflow: hidden;
  column-gap: 4px;
  align-items: center;
  justify-content: space-between;

  width: ${({$width:e})=>e||"auto"};
  height: ${({$size:e})=>e==="large"?"40px":"32px"};
  padding: ${({$size:e})=>e==="large"?"4px 6px":"2px 4px"};

  border: ${({$size:e,$color:r})=>e==="large"?`3px solid ${r}`:`2px solid ${r}`};
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
`,c=o.span`
  font-size: ${({$size:e})=>e==="large"?"20px":"16px"};
  font-weight: 600;
  text-align: center;
  flex-grow: 1;
  white-space: nowrap;
`,m=o.img`
  width: ${({$size:e})=>e==="large"?"30px":"24px"};
  height: ${({$size:e})=>e==="large"?"30px":"24px"};

  object-fit: contain;
`,x=o.div`
  flex-shrink: 0;

  width: ${({$size:e})=>e==="large"?"30px":"24px"};
  height: ${({$size:e})=>e==="large"?"30px":"24px"};

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({$color:e})=>e};
  }
`,g=e=>{const{name:r,size:t,width:a,color:s,iconSrc:i,ariaLabel:p,...l}=e;return n.jsxs(d,{$size:t,$width:a,$color:s,"aria-label":p,...l,children:[i&&(typeof i=="string"?n.jsx(m,{src:i,alt:r,$size:t}):n.jsx(x,{$size:t,$color:s,children:i})),n.jsx(c,{$size:t,children:r})]})};g.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{name:{required:!0,tsType:{name:"string"},description:""},size:{required:!0,tsType:{name:"union",raw:"'large' | 'medium'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},color:{required:!0,tsType:{name:"string"},description:""},iconSrc:{required:!1,tsType:{name:"union",raw:"string | SVGProps<SVGSVGElement>",elements:[{name:"string"},{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},ariaLabel:{required:!0,tsType:{name:"string"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:""}}};export{g as I};
