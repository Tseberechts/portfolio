document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("menu-toggle"),t=document.getElementById("nav-links");e&&t&&(e.addEventListener("click",(()=>{e.classList.toggle("active"),t.classList.toggle("active"),document.body.classList.toggle("menu-open")})),t.querySelectorAll("a").forEach((n=>{n.addEventListener("click",(()=>{e.classList.remove("active"),t.classList.remove("active"),document.body.classList.remove("menu-open")}))}))),document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href");if("#"===n)return;const o=document.querySelector(n);if(o){const e=document.querySelector(".main-nav").offsetHeight,t=o.getBoundingClientRect().top+window.scrollY-e;window.scrollTo({top:t,behavior:"smooth"})}}))}));const n=document.querySelector(".main-nav");window.addEventListener("scroll",(()=>{window.scrollY>100?n.classList.add("scrolled"):n.classList.remove("scrolled")}));const o=document.getElementById("test");o.innerText="test",o&&o.addEventListener("click",(()=>{alert("Test span clicked!")}))}));