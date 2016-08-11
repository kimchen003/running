$(function(){

  var sentence = [
    "I AM FINDING MY LOVE , 冯敏 ...",
    "DID YOU SEEN HER ?",
    "IF YOU DID !",
    "PLEASE TELL HER I LOVE HER SO MUCH ! ❤ ❤ ❤"
  ];
  var queue = [];
  var saylove = null;
  var step = 0;
  var senIndex = 0;

  $.each(sentence,function(i,c){
    var _arr = c.split("");
    queue.push(_arr)
  });

  var showWordBox = function(){
    var _w = $(".w_letters");
    $("#word-box").show();

    saylove = setInterval(function(){
      $(".w_line").show();
      if(step==queue[senIndex].length && senIndex<sentence.length-1){
        senIndex++;
        _w.empty();
        step = 0;
      }else if(step==queue[senIndex].length && senIndex==sentence.length-1){
        clearInterval(saylove);
        $(".w_line").remove();
      }

      var nowWord = queue[senIndex][step];
      if(nowWord){
        $(".w_line").remove();
        _w.append("<span>"+nowWord+"</span><span class='w_line'> _</span>");
        _w.append('');
        step++;
      }

      if(step==queue[senIndex].length){
        clearInterval(saylove);
        $(".w_line").hide();
        setTimeout(showWordBox,1200);
      }
    },200);
  }

  setTimeout(showWordBox,2500);

  console.log("verson 0.0.1")
});