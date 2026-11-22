import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';


(function(){
  var viewer=document.getElementById('viewer'), cap=document.getElementById('viewer-cap');
  document.querySelectorAll('.zoom').forEach(function(b){
    b.addEventListener('click',function(){
      var im=b.querySelector('img');
      viewer.querySelector('img').src=im.getAttribute('src');
      viewer.querySelector('img').alt=im.alt;
      cap.textContent=im.alt;
      viewer.showModal();
    });
  });
  document.getElementById('close-viewer').addEventListener('click',function(){viewer.close()});
  viewer.addEventListener('click',function(e){ if(e.target===viewer) viewer.close(); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&viewer.open) viewer.close(); });

  // open <details> when their anchor target is inside one
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(){
      var t=document.querySelector(a.getAttribute('href'));
      if(!t) return;
      var p=t.parentElement;
      while(p){ if(p.tagName==='DETAILS') p.open=true; p=p.parentElement; }
    });
  });

  // active nav
  var links=[...document.querySelectorAll('#topnav a[href^="#"]')];
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))}).filter(Boolean);
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        links.forEach(function(a){ a.classList.toggle('active', a.getAttribute('href')==='#'+en.target.id); });
      }
    });
  },{rootMargin:'-45% 0px -50% 0px'});
  secs.forEach(function(s){io.observe(s)});

  var toTop=document.getElementById('toTop');
  window.addEventListener('scroll',function(){ toTop.classList.toggle('show', window.scrollY>480); },{passive:true});
  toTop.classList.toggle('show', window.scrollY>480);
})();
