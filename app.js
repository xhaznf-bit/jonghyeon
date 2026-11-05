'use strict';

const projects = {
  history: {client:'PERSONAL FILM / 개인 작업',title:'영상의 역사',role:'기획 · 편집 · 디자인 · 특수효과',tools:'After Effects · Photoshop · Cinema 4D · Premiere Pro',duration:'00:41',id:'abdl9MhXDS4',image:'history-4.webp',text:'그림과 사진이 프레임을 만나 움직이는 영상이 되는 과정. 영상 제작을 공부하며 만든 첫 개인 작업으로, 2D 애니메이션과 3D 공간을 하나의 이야기로 연결했습니다.',frames:['history-1.webp','history-2.webp','history-3.webp','history-4.webp'],captions:['종이와 화면을 연결하는 장면','드로잉에서 출발하는 움직임','영상이 재생되는 TV 화면','그림, 책, TV가 함께 놓인 3D 공간'],storyboard:true},
  doctor: {client:'닥터딩요 / INTERVIEW',title:'암 대가 김의신 박사님 인터뷰',role:'편집 · 특수효과',tools:'Premiere Pro · Photoshop · After Effects',duration:'29:48',id:'tsU9PEvYBzk',image:'kim-4.webp',text:'암의 대가 김의신 박사님과 함께한 인터뷰 영상으로 편집 전반을 맡아서 작업을 진행했습니다. 긴 대화에 자막과 자료 화면을 더해 완성한 인터뷰 콘텐츠입니다.',frames:['kim-1.webp','kim-2.webp','kim-3.webp','kim-4.webp'],captions:['발화자를 보여주는 클로즈업과 이름·대사 자막','이력 소개에 더해진 자료 사진과 인물 화면','설명의 이해를 돕는 자료 이미지와 대사 자막','질문과 답변을 함께 담는 두 사람의 투 숏']},
  watch: {client:'하이시간 / PRODUCT',title:'브레게, 3인의 비교 인터뷰',role:'촬영 보조 · 메인 편집',tools:'Premiere Pro · Photoshop',duration:'10:34',id:'PwnaVBZpWXY',image:'watch-1.webp',text:'브레게 마린 알람 뮤지컬의 세 가지 모델을 비교하는 콘텐츠입니다. 촬영 보조와 메인 편집을 맡아, 세 출연자의 대화에 제품 화면과 비교 자료를 더했습니다.',frames:['watch-1.webp','watch-2.webp','watch-3.webp','watch-4.webp'],captions:['세 가지 모델을 나란히 보여주는 비교 화면','제품 설명에 활용한 시각 자료','출연자의 반응을 살리는 편집','대화 위에 더해진 비교 정보']},
  hanssem: {client:'한샘 리하우스 / SPACE',title:'인테리어 공간 짐벌 촬영 및 편집',role:'촬영 · 편집 전담',tools:'Premiere Pro · After Effects',duration:'06:32',id:'4_EI4pfh86M',image:'hanssem.webp',text:'1,000만 원 예산으로 진행한 한샘 부분 리모델링 현장을 소개하는 영상입니다. 이 영상의 짐벌 촬영과 편집을 모두 맡았습니다. 실제 공간을 직접 촬영하고, 바뀐 공간과 예산을 전달할 수 있도록 편집했습니다.',frames:['hanssem-1.webp','hanssem-2.webp','hanssem-3.webp','hanssem-4.webp'],captions:['현장을 소개하는 아파트 외관 숏','거실의 구조와 출연자를 함께 담은 와이드 숏','창호 설명과 대사를 정리한 자막','벽과 천장의 마감 설명을 담은 근접 촬영']},
  ecig:{client:'닥터딩요 / INFORMATION',title:'액상형 전자담배 Q&A',role:'편집 · 특수효과',tools:'Premiere Pro · Photoshop · After Effects',id:'dQeCWkE6WuM',image:'ecig.webp',text:'액상형 전자담배에 관한 궁금증을 다루는 정보 콘텐츠의 편집 및 특수효과 작업입니다.'},
  rolex:{client:'하이시간 / PRODUCT',title:'롤렉스 금통 vs 오데마피게 스틸',role:'촬영 · 편집 · 특수효과',tools:'Premiere Pro · Photoshop',id:'PYyU08_xbx4',image:'rolex.webp',text:'서로 다른 두 시계를 비교하는 콘텐츠. 촬영, 편집 및 특수효과 작업에 참여했습니다.'},
  vacheron:{client:'하이시간 / PRODUCT',title:'바쉐론 콘스탄틴 메티에다트',role:'기획 · 촬영 · 편집 · 특수효과',tools:'Premiere Pro · Photoshop',id:'cTrGKeZMgDo',image:'vacheron.webp',text:'작품 같은 시계, 바쉐론 콘스탄틴 메티에다트를 소개하는 콘텐츠. 기획과 촬영, 편집에 참여했습니다.'},
  edu:{client:'에듀콥 / EDUCATION',title:'부산형 인터넷 강의',role:'교육 콘텐츠 작업',tools:'강의 화면 · 시각 자료',image:'edu-1.webp',text:'기존 포트폴리오에 수록한 부산형 인터넷 강의 작업 화면입니다.',frames:['edu-1.webp','edu-2.webp','edu-3.webp','edu-4.webp'],captions:['강의 도입 화면','판서 중심의 강의 장면','화면 자료와 함께하는 설명','핵심 정보를 정리한 강의 자료']},
  game:{client:'외주 작업 / MOTION',title:'게임 챌린지 소개 영상',role:'기획 · 편집 · 디자인 · 특수효과',tools:'After Effects',id:'x0Vd8WvWANY',image:'history-2.webp',text:'게임 챌린지의 진행 방식을 모션 그래픽으로 설명하는 의뢰 작업입니다. 기존 포트폴리오에 클라이언트의 사전 동의를 얻어 공개한 영상입니다.'},
  distance:{client:'개인 작업 / MOTION',title:'사회적 거리두기',role:'기획 · 편집 · 디자인 · 특수효과',tools:'After Effects · Illustrator',id:'MHeNsL77e7U',image:'history-2.webp',text:'밀집된 공간에서의 전파 과정을 과장해 보여주며 사회적 거리두기에 대한 경각심을 전달한 개인 작업입니다.'},
  howdeep:{client:'개인 작업 / TYPOGRAPHY',title:'Tai Verdes — How Deep?',role:'기획 · 편집 · 디자인 · 특수효과',tools:'After Effects',id:'ki8EHOuO_fc',image:'history-2.webp',text:'가사와 멜로디를 바탕으로 제작한 타이포그래피 개인 작업입니다.'},
  bad:{client:'개인 작업 / TYPOGRAPHY',title:'Christopher — Bad',role:'기획 · 편집 · 디자인 · 특수효과',tools:'After Effects',id:'nA1kWX7Xv5E',image:'history-2.webp',text:'음악과 영어 가사를 공부하며 제작한 타이포그래피 개인 작업입니다.'}
};
const streams = {doctor:'media/doctor.m3u8',watch:'media/watch.m3u8',hanssem:'media/hanssem.m3u8'};
let destroyStream = null;
const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const archive = document.querySelector('#archive-list');
const archiveKeys = ['ecig','rolex','vacheron','edu','game','distance','howdeep','bad'];
archive.innerHTML = archiveKeys.map(key => {const p=projects[key];return `<button class="archive-row" data-project="${key}">${['game','distance','howdeep','bad'].includes(key)?'<span class="archive-glyph" aria-hidden="true">↗</span>':`<img src="assets/${p.image}" alt="" loading="lazy" width="75" height="44">`}<strong>${esc(p.title)}</strong><small>${esc(p.role)}</small><span>↗</span></button>`;}).join('');

const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#dialog-content');
let trigger = null;
function openProject(key,button){
  const p=projects[key]; if(!p)return;
  destroyStream?.();destroyStream=null;
  trigger=button;
  content.innerHTML=`<div class="detail-head"><p class="eyebrow">${esc(p.client)}</p><h2 id="dialog-title">${esc(p.title)}</h2><div class="detail-meta"><span>${esc(p.role)}</span>${p.duration?`<span>${p.duration}</span>`:''}<span>${esc(p.tools)}</span></div></div>${p.id?`<div class="detail-player"><img src="assets/${p.image}" alt="${esc(p.title)} 미리보기"><button data-play="${p.id}" data-stream="${streams[key]||''}" aria-label="${esc(p.title)} 영상 재생"><span class="play-icon">▶</span><span>${streams[key]?'영상 재생':'YouTube 영상 재생'}</span></button></div>`:''}<div class="detail-text"><p>${esc(p.text)}</p><div class="detail-links">${p.id?`<a href="https://www.youtube.com/watch?v=${p.id}" target="_blank" rel="noopener noreferrer">YouTube에서 보기 ↗</a>`:''}${p.storyboard?'<a href="https://yeseuling.github.io/jonghyeon/images/Storyboard_01.jpg" target="_blank" rel="noopener noreferrer">기존 기획서 보기 ↗</a>':''}</div></div>${p.frames?`<p class="frames-label">FOUR FRAMES / 장면 구성</p><div class="detail-frames">${p.frames.map((f,i)=>`<figure><img src="assets/${f}" loading="lazy" width="1600" height="900" alt="${esc(p.captions[i])}"><figcaption><span>0${i+1}</span>${esc(p.captions[i])}</figcaption></figure>`).join('')}</div>`:''}`;
  document.body.classList.add('dialog-open');
  dialog.showModal();dialog.scrollTop=0;syncVideo();
}
document.addEventListener('click',event=>{
  const projectButton=event.target.closest('[data-project]');
  if(projectButton)openProject(projectButton.dataset.project,projectButton);
  const playButton=event.target.closest('[data-play]');
  if(playButton?.dataset.stream){
    destroyStream?.();
    destroyStream=window.mountPortfolioStream(playButton.parentElement,{source:playButton.dataset.stream,title:document.querySelector('#dialog-title').textContent,poster:playButton.parentElement.querySelector('img').src});
  }else if(playButton){const iframe=document.createElement('iframe');iframe.src=`https://www.youtube-nocookie.com/embed/${playButton.dataset.play}?autoplay=1&rel=0`;iframe.title=`${document.querySelector('#dialog-title').textContent} 영상`;iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';playButton.parentElement.replaceChildren(iframe);}
});
document.querySelector('#dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{destroyStream?.();destroyStream=null;content.replaceChildren();document.body.classList.remove('dialog-open');trigger?.focus({preventScroll:true});syncVideo();});

const video=document.querySelector('#hero-video');
const toggle=document.querySelector('#motion-toggle');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const stage=document.querySelector('#film-stage');
const heroScroll=document.querySelector('.hero-scroll');
let manualPause=false,inView=true,videoStarted=false;
function setToggle(){const paused=manualPause||reduced.matches;toggle.textContent=paused?'▶':'Ⅱ';toggle.setAttribute('aria-label',paused?'미리보기 재생':'미리보기 일시정지');toggle.setAttribute('aria-pressed',String(paused));}
function syncVideo(){
  if(!manualPause&&!reduced.matches&&inView&&!document.hidden&&!dialog.open){
    if(!videoStarted){video.src='assets/history.mp4';videoStarted=true;}
    video.play().catch(()=>{manualPause=true;setToggle();});
  }else video.pause();
  setToggle();
}
toggle.addEventListener('click',()=>{if(reduced.matches){if(video.paused){if(!videoStarted){video.src='assets/history.mp4';videoStarted=true;}video.play().then(()=>{toggle.textContent='Ⅱ';toggle.setAttribute('aria-label','미리보기 일시정지');toggle.setAttribute('aria-pressed','false');}).catch(()=>{});}else{video.pause();setToggle();}}else{manualPause=!manualPause;syncVideo();}});
new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;syncVideo();},{threshold:.1}).observe(stage);
document.addEventListener('visibilitychange',syncVideo);
reduced.addEventListener('change',()=>{syncVideo();updateScroll();});
video.addEventListener('timeupdate',()=>{document.querySelector('#video-progress').style.width=`${video.duration?video.currentTime/video.duration*100:0}%`;});
video.addEventListener('error',()=>{manualPause=true;toggle.hidden=true;});

const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}});},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
document.body.classList.add('motion-ready');
let scheduled=false;
function updateScroll(){
  scheduled=false;
  if(reduced.matches)return;
  const rect=heroScroll.getBoundingClientRect();
  const amount=Math.max(0,Math.min(1,-rect.top/Math.max(150,rect.height-innerHeight*.65)));
  stage.style.setProperty('--stage-scale',String(1-amount*.055));
  stage.style.setProperty('--stage-r',`${amount*5}deg`);
  stage.style.setProperty('--stage-y',`${amount*-10}px`);
}
addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateScroll);}},{passive:true});
addEventListener('resize',updateScroll);updateScroll();

// Opt-in local QA only. No analytics, beacon, or remote logging.
if(new URLSearchParams(location.search).has('qa')){
  const qa=document.createElement('details');qa.className='qa-panel';qa.innerHTML='<summary>Local performance check</summary><button id="qa-start">5초 프레임 측정</button><pre id="qa-result">Measuring load…</pre>';document.body.append(qa);
  const result=qa.querySelector('pre');let lcp=0,cls=0,longTasks=0;
  try{new PerformanceObserver(list=>{lcp=list.getEntries().at(-1).startTime;}).observe({type:'largest-contentful-paint',buffered:true});new PerformanceObserver(list=>{list.getEntries().forEach(e=>{if(!e.hadRecentInput)cls+=e.value;});}).observe({type:'layout-shift',buffered:true});new PerformanceObserver(list=>{longTasks+=list.getEntries().length;}).observe({type:'longtask',buffered:true});}catch{}
  function report(extra={}){const navigation=performance.getEntriesByType('navigation')[0];result.textContent=JSON.stringify({viewport:`${innerWidth}×${innerHeight}`,fcpMs:Math.round(performance.getEntriesByName('first-contentful-paint')[0]?.startTime||0),lcpMs:Math.round(lcp),cls:Number(cls.toFixed(4)),longTasks,domContentLoadedMs:Math.round(navigation?.domContentLoadedEventEnd||0),resourceBytes:performance.getEntriesByType('resource').reduce((n,r)=>n+r.transferSize,0),iframes:document.querySelectorAll('iframe').length,overflow:document.documentElement.scrollWidth>innerWidth,videoPaused:video.paused,...extra},null,2);}
  setTimeout(()=>report(),3000);
  qa.querySelector('button').addEventListener('click',()=>{const intervals=[];let previous=0,start=0;qa.querySelector('button').disabled=true;result.textContent='Sampling animation frames for 5 seconds…';function sample(now){if(!start)start=now;if(previous)intervals.push(now-previous);previous=now;if(now-start<5000)requestAnimationFrame(sample);else{intervals.sort((a,b)=>a-b);report({sampleFrames:intervals.length,frameMedianMs:Number(intervals[Math.floor(intervals.length*.5)].toFixed(2)),frameP95Ms:Number(intervals[Math.floor(intervals.length*.95)].toFixed(2)),framesOver50ms:intervals.filter(x=>x>50).length});qa.querySelector('button').disabled=false;}}requestAnimationFrame(sample);});
}
