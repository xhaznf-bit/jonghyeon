'use strict';

// Loaded only after a visitor starts one of the three self-hosted films.
let hlsLibraryPromise;
function loadHlsLibrary() {
  if (window.Hls) return Promise.resolve(window.Hls);
  if (!hlsLibraryPromise) {
    hlsLibraryPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'vendor/hls.light.min.js';
      script.onload = () => window.Hls ? resolve(window.Hls) : reject(new Error('Player unavailable'));
      script.onerror = () => { script.remove(); reject(new Error('Player download failed')); };
      document.head.append(script);
    }).catch(error => { hlsLibraryPromise = undefined; throw error; });
  }
  return hlsLibraryPromise;
}

window.mountPortfolioStream = function(container, {source, title, poster}) {
  let active = true;
  let playbackFailed = false;
  let engine = null;
  const media = document.createElement('video');
  media.controls = true;
  media.playsInline = true;
  media.preload = 'metadata';
  media.poster = poster;
  media.setAttribute('aria-label', `${title} 영상`);
  const status = document.createElement('p');
  status.className = 'player-status';
  status.setAttribute('role', 'status');
  status.textContent = '영상을 불러오는 중입니다…';
  container.replaceChildren(media, status);

  function failed() {
    if (!active) return;
    playbackFailed = true;
    media.pause();
    if (engine) { engine.destroy(); engine = null; }
    status.hidden = false;
    status.textContent = '영상을 불러오지 못했습니다. 아래 YouTube에서 보기로 감상해 주세요.';
  }
  function playing() { if (active && !playbackFailed) status.hidden = true; }
  function play() {
    if (!active || playbackFailed) return;
    media.play().catch(() => {
      if (active && !playbackFailed && !media.error) {
        status.hidden = false;
        status.textContent = '플레이어의 재생 버튼을 눌러 주세요.';
      }
    });
  }
  media.addEventListener('error', failed);
  media.addEventListener('playing', playing);

  if (media.canPlayType('application/vnd.apple.mpegurl')) {
    media.src = source;
    media.addEventListener('loadedmetadata', play, {once:true});
  } else {
    loadHlsLibrary().then(Hls => {
      // A visitor may close the dialog while the library is downloading.
      if (!active) return;
      if (!Hls.isSupported()) { failed(); return; }
      engine = new Hls({maxBufferLength:20, maxMaxBufferLength:30,
        maxBufferSize:12 * 1024 * 1024, backBufferLength:10});
      engine.on(Hls.Events.MANIFEST_PARSED, play);
      engine.on(Hls.Events.ERROR, (_event, data) => { if (data.fatal) failed(); });
      engine.loadSource(source);
      engine.attachMedia(media);
    }).catch(failed);
  }

  return function destroy() {
    active = false;
    media.removeEventListener('error', failed);
    media.removeEventListener('playing', playing);
    media.removeEventListener('loadedmetadata', play);
    if (engine) { engine.destroy(); engine = null; }
    media.pause();
    media.removeAttribute('src');
    media.load();
  };
};
