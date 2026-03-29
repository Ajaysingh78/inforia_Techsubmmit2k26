
    /* ============================================================
       SHORTLISTED TEAMS DATA
       ——————————————————————————————————
       TO ADD / EDIT TEAMS: update this array only.
         teamName   (required)
         members    (optional) — array of strings
         department (optional) — branch / dept label
    ============================================================ */
    const shortlistedTeams = [
      { teamName: "Team Alpha",         members: [], department: "" },
      { teamName: "Team Axion",         members: [], department: "" },
      { teamName: "Future4Society",     members: [], department: "" },
      { teamName: "Coyax",              members: [], department: "" },
      { teamName: "BIOS",               members: [], department: "" },
      { teamName: "Mesh Minds",         members: [], department: "" },
      { teamName: "The Debuggers",      members: [], department: "" },
      { teamName: "Agritech",           members: [], department: "" },
      { teamName: "Team IntelliCampus", members: [], department: "" },
      { teamName: "Prompt Pirates",     members: [], department: "" },
      { teamName: "MedAlgo",            members: [], department: "" },
      { teamName: "SUMMIFY",            members: [], department: "" },
      { teamName: "Tech Titans",        members: [], department: "" },
      { teamName: "Aivonix",            members: [], department: "" },
      { teamName: "AarambhX",           members: [], department: "" },
      { teamName: "TECH YODHA",         members: [], department: "" },
      { teamName: "Inevitable",         members: [], department: "" },
      { teamName: "GenZ Shadow Coder",  members: [], department: "" },
      { teamName: "Nova Nexus",         members: [], department: "" },
      { teamName: "CREATIVITY THING",   members: [], department: "" },
      { teamName: "Neural Blockchain",  members: [], department: "" },
      { teamName: "TRAXO",              members: [], department: "" },
      { teamName: "Rank_Hunters",       members: [], department: "" },
      { teamName: "BYTEBOSSES",         members: [], department: "" },
    ];

    /* ── Render team cards ── */
    function renderTeams() {
      const grid = document.getElementById('teamsGrid');
      grid.innerHTML = '';
      shortlistedTeams.forEach((team, index) => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.style.transitionDelay = `${(index % 8) * 0.06}s`;

        const membersHTML = team.members && team.members.length > 0
          ? `<div class="team-members-label">MEMBERS</div>
             <div class="team-members">
               ${team.members.map(m => `<span class="member-tag">${m}</span>`).join('')}
             </div>` : '';

        const deptHTML = team.department
          ? `<div class="team-dept">// ${team.department}</div>` : '';

        card.innerHTML = `
          
          <div class="team-badge">
            <div class="team-badge-dot"></div>
            FINAL ROUND QUALIFIED
          </div>
          <div class="team-name">${team.teamName}</div>
          ${membersHTML || deptHTML ? `<div class="team-divider"></div>${membersHTML}${deptHTML}` : ''}
        `;
        grid.appendChild(card);
      });

      /* Staggered card entrance via IntersectionObserver */
      const cardObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const card = entry.target;
            setTimeout(() => card.classList.add('card-visible'), 0);
            cardObs.unobserve(card);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
      document.querySelectorAll('.team-card').forEach(card => cardObs.observe(card));
    }

    /* ── Download PDF placeholder ── */
    function downloadResultPDF(e) {
      e.preventDefault();
      alert('📄 Result PDF will be available shortly!\n\nJoin the WhatsApp group for the latest updates.\n\nhttps://chat.whatsapp.com/HaEw42Ei6Go2S2DkKJxF2d');
    }

    /* ── CURSOR ── */
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    let mx=0,my=0,rx=0,ry=0;
    document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=(mx-6)+'px';cursor.style.top=(my-6)+'px';});
    function animRing(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=(rx-18)+'px';ring.style.top=(ry-18)+'px';requestAnimationFrame(animRing);}animRing();
    document.querySelectorAll('a,button,.theme-card,.faq-q,.team-card').forEach(el=>{
      el.addEventListener('mouseenter',()=>{cursor.style.transform='scale(2)';ring.style.transform='scale(1.5)';});
      el.addEventListener('mouseleave',()=>{cursor.style.transform='scale(1)';ring.style.transform='scale(1)';});
    });

    /* ── PARTICLE GALAXY ── */
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let W,H,particles=[],mouse={x:0,y:0};
    function resize(){W=canvas.width=innerWidth;H=canvas.height=innerHeight;}
    resize();window.addEventListener('resize',resize);
    document.addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY;});
    class Particle{
      constructor(){this.reset(true);}
      reset(init=false){this.x=Math.random()*W;this.y=init?Math.random()*H:Math.random()*H;this.size=Math.random()*2+0.3;this.speedX=(Math.random()-0.5)*0.6;this.speedY=(Math.random()-0.5)*0.6;this.opacity=Math.random()*0.7+0.1;this.hue=Math.random()<0.5?185:280;this.pulse=Math.random()*Math.PI*2;this.pulseSpeed=0.02+Math.random()*0.02;}
      update(){this.pulse+=this.pulseSpeed;this.x+=this.speedX;this.y+=this.speedY;const dx=this.x-mouse.x,dy=this.y-mouse.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<120){const force=(120-dist)/120*0.4;this.x+=dx/dist*force;this.y+=dy/dist*force;}if(this.x<0||this.x>W||this.y<0||this.y>H)this.reset();}
      draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fillStyle=`hsla(${this.hue},100%,70%,${this.opacity})`;ctx.fill();if(this.size>1.2){ctx.beginPath();ctx.arc(this.x,this.y,this.size*3,0,Math.PI*2);ctx.fillStyle=`hsla(${this.hue},100%,70%,${this.opacity*0.1})`;ctx.fill();}}
    }
    class GalaxyParticle{
      constructor(i,total){const angle=(i/total)*Math.PI*2+Math.random()*0.3;const r=50+Math.random()*300;this.x=W/2+Math.cos(angle)*r;this.y=H/2+Math.sin(angle)*r;this.vx=(Math.random()-0.5)*0.3;this.vy=(Math.random()-0.5)*0.3;this.size=Math.random()*2.5+0.5;this.opacity=Math.random()*0.8+0.1;this.hue=Math.random()<0.5?185:280;this.angle=angle;this.r=r;this.rotSpeed=0.0003*(Math.random()-0.5);}
      update(){this.angle+=this.rotSpeed;this.r+=0.05;if(this.r>Math.max(W,H)*0.7)this.r=50+Math.random()*100;this.x=W/2+Math.cos(this.angle)*this.r+this.vx*2;this.y=H/2+Math.sin(this.angle)*this.r+this.vy*2;const dx=this.x-mouse.x,dy=this.y-mouse.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<150){this.x+=dx/dist*1.5;this.y+=dy/dist*1.5;}}
      draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fillStyle=`hsla(${this.hue},100%,70%,${this.opacity})`;ctx.fill();}
    }
    for(let i=0;i<120;i++)particles.push(new Particle());
    const gParticles=[];for(let i=0;i<80;i++)gParticles.push(new GalaxyParticle(i,80));
    function drawLines(){for(let i=0;i<particles.length;i++){for(let j=i+1;j<particles.length;j++){const dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y;const dist=Math.sqrt(dx*dx+dy*dy);if(dist<120){ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.strokeStyle=`rgba(0,245,255,${0.12*(1-dist/120)})`;ctx.lineWidth=0.5;ctx.stroke();}}}}
    function animate(){ctx.clearRect(0,0,W,H);particles.forEach(p=>{p.update();p.draw();});gParticles.forEach(p=>{p.update();p.draw();});drawLines();requestAnimationFrame(animate);}animate();

    /* ── COUNTDOWN — Grand Finale: 1 April 2026, 09:00 AM ── */
    const eventDate = new Date('2026-04-01T09:00:00');
    function tick(){
      const now=new Date(),diff=eventDate-now;
      if(diff<=0){document.getElementById('countdown').innerHTML='<div style="color:var(--neon-gold);font-family:Orbitron,monospace;font-size:1.2rem;letter-spacing:4px;text-align:center;">🏆 GRAND FINALE IS LIVE</div>';return;}
      const d=Math.floor(diff/86400000),h=Math.floor((diff%86400000)/3600000);
      const m=Math.floor((diff%3600000)/60000),s=Math.floor((diff%60000)/1000);
      document.getElementById('cd-days').textContent=String(d).padStart(2,'0');
      document.getElementById('cd-hours').textContent=String(h).padStart(2,'0');
      document.getElementById('cd-mins').textContent=String(m).padStart(2,'0');
      document.getElementById('cd-secs').textContent=String(s).padStart(2,'0');
    }
    tick();setInterval(tick,1000);

    /* ── SCROLL REVEAL ── */
    const revealEls=document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
    const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:0.12});
    revealEls.forEach(el=>obs.observe(el));

    /* ── EVAL RINGS ── */
    const evalObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const pct=parseInt(e.target.dataset.pct||0);const circle=e.target.querySelector('.progress-ring');if(circle){const offset=283-(283*pct/100);setTimeout(()=>circle.style.strokeDashoffset=offset,200);}}});},{threshold:0.3});
    document.querySelectorAll('.eval-card').forEach(c=>evalObs.observe(c));

    /* ── FAQ ── */
    document.querySelectorAll('.faq-q').forEach(q=>{
      q.addEventListener('click',()=>{const item=q.parentElement;const isOpen=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));if(!isOpen)item.classList.add('open');});
    });

    /* ── NAV scroll effect ── */
    window.addEventListener('scroll',()=>{const nb=document.getElementById('navbar');nb.style.padding=scrollY>50?'10px 40px':'16px 40px';nb.style.borderBottomColor=scrollY>50?'rgba(0,245,255,0.25)':'rgba(0,245,255,0.1)';});

    /* ── Mobile nav ── */
    function openMobileNav(){document.getElementById('mobileNav').classList.add('active');}
    function closeMobileNav(){document.getElementById('mobileNav').classList.remove('active');}

    /* ── Smooth scroll ── */
    document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const tgt=document.querySelector(a.getAttribute('href'));if(tgt){e.preventDefault();tgt.scrollIntoView({behavior:'smooth'});}});});

    /* ── Typing badge ── */
    const badges=['🏆 ROUND 1 RESULTS — OFFICIALLY ANNOUNCED','🎉 24 TEAMS QUALIFY FOR THE GRAND FINALE','⚡ FINALE — 1ST APRIL · ICOT HALL, BHOPAL','🌐 INFORIA TECHSUMMIT HACKATHON 2K26'];
    let bi=0,ci=0,typing=true,delay=70;
    const badgeEl=document.querySelector('.hero-badge');
    function typeEffect(){
      const txt=badges[bi];
      if(typing){if(ci<=txt.length){badgeEl.textContent=txt.slice(0,ci);ci++;setTimeout(typeEffect,delay);}else{typing=false;setTimeout(typeEffect,2200);}}
      else{if(ci>0){badgeEl.textContent=txt.slice(0,ci);ci--;setTimeout(typeEffect,30);}else{typing=true;bi=(bi+1)%badges.length;setTimeout(typeEffect,300);}}
    }
    setTimeout(typeEffect,1500);

    /* ── Render teams on load ── */
    renderTeams();
