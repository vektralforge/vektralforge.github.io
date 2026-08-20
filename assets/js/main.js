/* VektralForge — main script */
(function(){
"use strict";

/* obscured contact emails: built at runtime from base64 parts, never printed in the HTML source.
   [data-email] links (if any) get a real mailto: href. .email-obf spans are plain text, not
   links — the address only exists in the DOM after this script runs, so a scraper reading the
   raw HTML source finds nothing. It's written in normal reading order (no reversal trick) so
   it stays correctly selectable and copy/pasteable for real visitors. */
function revealEmails(){
 document.querySelectorAll("[data-email]").forEach(function(el){
  var u=el.getAttribute("data-u"), d=el.getAttribute("data-d");
  if(!u||!d) return;
  var addr=atob(u)+"@"+atob(d);
  el.setAttribute("href","mailto:"+addr);
  if(!el.textContent.trim() || el.textContent.trim()==="Get in touch" || el.textContent.trim()==="Email us"){
   el.setAttribute("title",addr);
  }
 });
 document.querySelectorAll(".email-obf").forEach(function(el){
  var u=el.getAttribute("data-u"), d=el.getAttribute("data-d");
  if(!u||!d) return;
  var addr=atob(u)+"@"+atob(d);
  el.textContent=addr;
  el.setAttribute("aria-label",addr);
 });
}

/* footer year */
function setYear(){
 var y=document.getElementById("year");
 if(y) y.textContent=new Date().getFullYear();
}

/* highlight the active nav link as sections scroll by */
function initActiveNav(){
 var links=document.querySelectorAll(".navbar-nav .nav-link");
 var sections=Array.prototype.map.call(links,function(l){ return document.querySelector(l.getAttribute("href")); }).filter(Boolean);
 if(!("IntersectionObserver" in window) || !sections.length) return;
 var io=new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
   var link=document.querySelector('.navbar-nav .nav-link[href="#'+entry.target.id+'"]');
   if(!link) return;
   if(entry.isIntersecting) links.forEach(function(l){ l.classList.remove("active"); }), link.classList.add("active");
  });
 },{rootMargin:"-45% 0px -50% 0px"});
 sections.forEach(function(s){ io.observe(s); });
}

document.addEventListener("DOMContentLoaded",function(){
 if(window.VF_I18N) window.VF_I18N.init();
 revealEmails();
 setYear();
 initActiveNav();
});
})();
