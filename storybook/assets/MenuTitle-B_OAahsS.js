import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{d as i}from"./styled-components.browser.esm-CIS6JKSM.js";import{g as l}from"./getTransparentHexColor-DN69VCBw.js";const s=i.div`
  display: inline-flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;

  width: auto;
  max-width: 100%;
  height: 32px;

  user-select: none;
`,c=i.div`
  display: flex;
  width: 100%;
  column-gap: 6px;

  font-family: 'Do Hyeon', Pretendard;
`,a=i.img`
  flex-shrink: 0;

  width: auto;
  height: 30px;

  filter: ${({theme:e})=>e.filter.ORANGE_FILTER};
  object-fit: contain;
`,d=i.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({theme:e})=>e.color.ORANGE};
  }
`,p=i.h2`
  display: inline-block;
  overflow: hidden;

  font-size: 26px;
  color: ${({theme:e})=>e.color.ORANGE};
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
`,x=i.div`
  position: absolute;
  bottom: 0;

  width: calc(100% + 6px);
  margin-left: -3px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme:e})=>l(e.color.ORANGE,.25)};

  z-index: -1;
`,o=e=>{const{iconSrc:n,title:r}=e;return t.jsxs(s,{children:[t.jsxs(c,{children:[n&&(typeof n=="string"?t.jsx(a,{src:n,alt:""}):t.jsx(d,{children:n})),t.jsx(p,{children:r})]}),t.jsx(x,{})]})};try{o.displayName="MenuTitle",o.__docgenInfo={description:"",displayName:"MenuTitle",props:{iconSrc:{defaultValue:null,description:"",name:"iconSrc",required:!0,type:{name:"string | ReactElement<SVGProps<SVGSVGElement>, string | JSXElementConstructor<any>>"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}export{o as M};
