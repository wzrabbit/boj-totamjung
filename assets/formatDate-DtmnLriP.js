const g=t=>{const n=String(t.getFullYear()).padStart(4,"0"),r=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),s=String(t.getHours()).padStart(2,"0"),a=String(t.getMinutes()).padStart(2,"0"),S=String(t.getSeconds()).padStart(2,"0");return`${n}-${r}-${o} ${s}:${a}:${S}`};export{g as f};
