var player;
var currentPlay = 0;

// YouTube API準備好時
function onYouTubeIframeAPIReady(){

    player = new YT.Player("player", 
        {
            height: "390",
            width: "640",
            videoId: playList[currentPlay],
            playerVars:{
                "autoplay": 0,  // 不自動撥放
                "controls": 0,  // 不顯示控制項
                "start": playTime[currentPlay][0],  // 起訖秒數
                "end": playTime[currentPlay][1],  // 結束秒數
                // "showinfo": 0,  // 關掉上方標題(已失效)
                "rel": 0,  // 推薦影片連結(透過預載影片擋住)
                "iv_load_policy": 3  // 不顯示註解式行銷
            },
            events:{
                "onReady": onPlayerReady,
                "onStateChange": onPlayerStateChange
            }
        }
    );
}

// 播放器準備好時
function onPlayerReady(event){

    $("#playButton").click(function(){
        $("#yt-h2").text(player.getVideoData().title);
        player.playVideo();
    });
}


function onPlayerStateChange(event){
    // 檢查秒數是否相同 -> 下一首
    if(Math.floor(player.getCurrentTime()) == playTime[currentPlay][1]){
        // 正常播放下一首
        if(currentPlay < playList.length - 1){
            currentPlay++;
            player.cueVideoById({
                "videoId": playList[currentPlay],
                "startSeconds": playTime[currentPlay][0],
                "endSeconds": playTime[currentPlay][1],
                "suggestedQuality": "large"
            });

            player.playVideo();
        }
        // 最後一首回到第一首停止
        else{
            currentPlay = 0;
            player.cueVideoById({
                "videoId": playList[currentPlay],
                "startSeconds": playTime[currentPlay][0],
                "endSeconds": playTime[currentPlay][1],
                "suggestedQuality": "large"
            });
        }
    }

    // 影片開始刷抓標題
    if(player.getVideoLoadedFraction() > 0){
        $("#yt-h2").text(player.getVideoData().title);
    }
}