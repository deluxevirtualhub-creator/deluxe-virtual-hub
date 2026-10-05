const email='deluxevirtualhub@gmail.com';
document.getElementById('recommend').addEventListener('click',()=>{
 const v=document.getElementById('need').value;
 const r=document.getElementById('result');
 if(!v){r.textContent='Choose a pressure point first.';return;}
 r.innerHTML=`Recommended support: <strong>${v}</strong>. <a href="#contact" style="text-decoration:underline">Tell us what you need →</a>`;
 document.getElementById('topic').value=v;
});
document.getElementById('contactForm').addEventListener('submit',(e)=>{
 e.preventDefault();
 const name=document.getElementById('name').value.trim();
 const sender=document.getElementById('email').value.trim();
 const company=document.getElementById('company').value.trim();
 const topic=document.getElementById('topic').value;
 const message=document.getElementById('message').value.trim();
 const subject=encodeURIComponent(`Deluxe Virtual Hub enquiry — ${topic}`);
 const body=encodeURIComponent(`Name: ${name}\nEmail: ${sender}\nCompany: ${company||'Not provided'}\nSupport needed: ${topic}\n\nMessage:\n${message}`);
 window.location.href=`mailto:${email}?subject=${subject}&body=${body}`;
});