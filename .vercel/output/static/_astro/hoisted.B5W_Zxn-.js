localStorage.getItem("dark-mode")==="true"||!("dark-mode"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(localStorage.setItem("dark-mode","true"),document.querySelector("html")?.classList.add("dark")):(localStorage.setItem("dark-mode","false"),document.querySelector("html")?.classList.remove("dark"));const t=document.querySelectorAll(".light-switch");t.length>0&&t.forEach((e,a)=>{localStorage.getItem("dark-mode")==="true"&&(e.checked=!0),e.addEventListener("click",()=>{const{checked:o}=e;t.forEach((c,d)=>{d!==a&&(c.checked=o)}),e.checked?(document.documentElement.classList.add("dark"),localStorage.setItem("dark-mode","true")):(document.documentElement.classList.remove("dark"),localStorage.setItem("dark-mode","false"))})});
