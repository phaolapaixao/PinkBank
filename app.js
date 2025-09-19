const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();


const counters = document.querySelectorAll('.kpi-number');
const animateCounter = (el) => {
  const target = +el.dataset.target; let current = 0;
  const step = Math.max(1, Math.floor(target/100));
  const tick = () => { current += step; if (current >= target) current = target; el.textContent = current; if (current < target) requestAnimationFrame(tick); };
  tick();
};
const io = new IntersectionObserver((entries)=>{
  entries.forEach((e)=>{
    if(e.isIntersecting && !e.target.dataset.done){
      e.target.dataset.done = true;
      animateCounter(e.target);
    }
  });
}, {threshold:0.4});
[...counters].forEach(c=>io.observe(c));


const form = document.querySelector('#faq form');
if (form) form.addEventListener('submit', (ev)=>{
  if(!form.checkValidity()){
    ev.preventDefault();
    form.classList.add('was-validated');
  }
});