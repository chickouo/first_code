// function(){} = 區塊, 用於某些需要常常使用function可不用命名的區塊
$(document).ready(function(){
    $("input").click(function(){
        let numberOfListItem = $("#choices li").length;  // 舊的: var(不適用新版一些東西), 新的: let
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);  // floor = 向下取整數
        //alert(numberOfListItem);
        //alert(randomChildNumber);
        $("#random-result").text("《" + $("#choices li").eq(randomChildNumber).text() + "》");
        $("#random-pic").attr("src", pictures[randomChildNumber]);
    });
});