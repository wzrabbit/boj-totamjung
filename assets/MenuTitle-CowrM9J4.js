import{j as t}from"./jsx-runtime-DEdD30eg.js";import{d as i}from"./styled-components.browser.esm-CkAH7aAm.js";const r=i.div`
  display: inline-flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;

  width: auto;
  max-width: 100%;
  height: 32px;

  user-select: none;
`,s=i.div`
  display: flex;
  width: 100%;
  column-gap: 6px;

  font-family: 'Do Hyeon', Pretendard;
`,l=i.img`
  flex-shrink: 0;

  width: auto;
  height: 30px;

  filter: ${({theme:e})=>e.filter.ORANGE_FILTER};
  object-fit: contain;
`,c=i.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.ORANGE};
  }
`,d=i.h2`
  display: inline-block;
  overflow: hidden;

  font-size: 26px;
  color: ${({theme:e})=>e.color.ORANGE};
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
`,a=i.div`
  position: absolute;
  bottom: 0;

  width: calc(100% + 6px);
  margin-left: -3px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme:e})=>e.color.ORANGE_TRANSPARENT};

  z-index: -1;
`,p=e=>{const{iconSrc:n,title:o}=e;return t.jsxs(r,{children:[t.jsxs(s,{children:[n&&(typeof n=="string"?t.jsx(l,{src:n,alt:""}):t.jsx(c,{children:n})),t.jsx(d,{children:o})]}),t.jsx(a,{})]})};p.__docgenInfo={description:"",methods:[],displayName:"MenuTitle",props:{iconSrc:{required:!0,tsType:{name:"union",raw:"string | SVGProps<SVGSVGElement>",elements:[{name:"string"},{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},title:{required:!0,tsType:{name:"string"},description:""}}};export{p as M};
