
document.addEventListener('DOMContentLoaded',function(){
  var b=document.querySelector('.burger'), m=document.querySelector('.nav ul');
  if(b&&m){b.addEventListener('click',function(){m.classList.toggle('open')})}
  document.querySelectorAll('.nav ul a').forEach(function(a){
    a.addEventListener('click',function(){ if(m) m.classList.remove('open') })
  });
});
