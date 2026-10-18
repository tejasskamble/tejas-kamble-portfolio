(function(){
var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))};
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Mobile menu */
var menu=$('.menu'),nav=$('#links');
menu.addEventListener('click',function(){var o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)});
$$('#links a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');menu.setAttribute('aria-expanded',false)})});

/* Scroll spy + reveal */
var spy=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){$$('#links a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
$$('main section').forEach(function(s){spy.observe(s)});
var rv=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');rv.unobserve(e.target)}})},{threshold:.15});
$$('.rv').forEach(function(el){rv.observe(el)});

/* Skill filter */
$$('.tabs button').forEach(function(b){b.addEventListener('click',function(){
  $$('.tabs button').forEach(function(x){x.classList.toggle('on',x===b)});
  $$('.skills .card').forEach(function(c){c.hidden=b.dataset.f!=='all'&&c.dataset.c!==b.dataset.f});
})});

/* Pipeline run */
var steps=$$('#steps li'),timers=[];
function run(){
  timers.forEach(clearTimeout);timers=[];
  steps.forEach(function(s){s.classList.remove('on')});
  steps.forEach(function(s,i){timers.push(setTimeout(function(){s.classList.add('on')},reduce?0:500+i*750))});
}
$('#rerun').addEventListener('click',run);run();

/* Copy email */
var copy=$('#copy');
copy.addEventListener('click',function(){
  var t='tejasuskamble@gmail.com';
  (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){copy.textContent='Copied'},function(){copy.textContent=t});
  setTimeout(function(){copy.textContent='Copy email address'},2500);
});

/* Contact form opens the visitor's email app */
$('#form').addEventListener('submit',function(e){
  e.preventDefault();
  var f=e.target,n=f.n.value.trim(),m=f.m.value.trim();
  location.href='mailto:tejasuskamble@gmail.com?subject='+encodeURIComponent('Portfolio message from '+n)+'&body='+encodeURIComponent(m+'\n\n'+n);
  $('#note').textContent='If nothing opened, email tejasuskamble@gmail.com directly.';
});

$('#yr').textContent=new Date().getFullYear();
})();
