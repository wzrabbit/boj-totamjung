import{A as u}from"./algorithmInfos-BizjuJN7.js";const d=o=>o.toLowerCase().replace(/^(tag:|#)|[ ,_/-]|\u2013/g,""),p=o=>{const e=d(o),r=[];return u.forEach(({id:c,name:s,englishName:a,tag:l,alias:m})=>{const n=[s,a,l,...m].map(t=>d(t));(e===""||n.some(t=>t.indexOf(e)!==-1))&&r.push({id:c,name:s})}),r};export{p as g};
