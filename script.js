const email='deluxevirtualhub@gmail.com';
const recommend=document.getElementById('recommend');
if(recommend){recommend.addEventListener('click',()=>{const v=document.getElementById('need').value;const r=document.getElementById('result');if(!v){r.textContent='Choose a pressure point first.';return;}r.innerHTML=`Recommended support: <strong>${v}</strong>. <a href="contact.html?topic=${encodeURIComponent(v)}" style="text-decoration:underline">Tell us what you need →</a>`;});}
const form=document.getElementById('contactForm');
if(form){const requested=new URLSearchParams(location.search).get('topic');if(requested){const sel=document.getElementById('topic');[...sel.options].forEach(o=>{if(o.text===requested||o.value===requested)sel.value=o.value;});}form.addEventListener('submit',(e)=>{e.preventDefault();const name=document.getElementById('name').value.trim(),sender=document.getElementById('email').value.trim(),company=document.getElementById('company').value.trim(),topic=document.getElementById('topic').value,message=document.getElementById('message').value.trim();const subject=encodeURIComponent(`Deluxe Virtual Hub enquiry — ${topic}`);const body=encodeURIComponent(`Name: ${name}\nEmail: ${sender}\nCompany: ${company||'Not provided'}\nSupport needed: ${topic}\n\nMessage:\n${message}`);location.href=`mailto:${email}?subject=${subject}&body=${body}`;});}

const menuToggle=document.querySelector('.menu-toggle');
const mainNav=document.querySelector('.main-nav');
if(menuToggle && mainNav){
  menuToggle.addEventListener('click',()=>{
    const open=mainNav.classList.toggle('open');
    menuToggle.classList.toggle('open',open);
    menuToggle.setAttribute('aria-expanded',open?'true':'false');
  });
  mainNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    mainNav.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded','false');
  }));
}
