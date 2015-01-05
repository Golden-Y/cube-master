var old="a none";
var list=['a bad','a normal','a good','a none'];
var i=0;
$(document).ready(function(){
  $("div").click(function(){
    s=$(this).attr("class");
    for(var j=0;j<list.length;j++)
    {
      if(list[j]==s)
      {
        i=j+1;
        if(i==list.length)
        {
          i=0;
        }
        old=list[j];
        break;
      }
    }
    $(this).removeClass(old).addClass(list[i]);
    //alert(s);
    //i+=1;
    var x = $(".a");
    var a=[];
    for (i=0;i<48;i++)
    {
      a[i]=$(x[i]).attr("class");
    }
    alert(time);

  });
});
