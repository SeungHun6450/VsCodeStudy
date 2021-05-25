  // Youtube IFram API를 비동기로 로드합니다
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
      videoId: 'An6LvWQuj_8', // 최초 재상할 유튜브 영상 ID (url의 v="")
      playerVars: {
        autoplay: true, // 자동 재생 유무
        loop: true, // 반복 재생 유무
        playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
      },
      events: {
        // 동영상이 준비가 되면 이 함수를 실행해 준다
        onReady: function (event) {
          event.target.mute() // 음소거
        }
      }
    });
  }

 