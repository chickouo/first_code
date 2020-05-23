$(document).ready(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");  // 標題用th

    let topicCount = topic.length;

    let oneDayMilliseconds = 24*60*60*1000;
    //alert(oneDayMilliseconds);

    for(let i = 0; i < topicCount; i++){
        let thisDate = new Date(startDate.getTime() + 7*i*oneDayMilliseconds);  // 古老至今的秒數 + 在過i個禮拜的秒數 = i個禮拜秒數後的時間點
        //alert(thisDate);
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>" + (i + 1) + "</td>");
        $("#courseTable").append("<td>" + thisDate.toLocaleDateString().slice(5) + "</td>");
        $("#courseTable").append("<td>" + topic[i] + "</td>");
        $("#courseTable").append("</tr>");
    }
});