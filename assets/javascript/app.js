   
  $(document).ready(function()
  {

  $("#popcorn").on('click', function()

    {$(".firstpage").hide()

  $(".timer").show() 
  $(".question1").show()
    });


     var timeleft = 20;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);

    })

 




    /*from Luke

    $('.start').on('click', function()
    { 
        progressBar.css('width', '0%')
        $('.initial').hide()
        $('.how-you-did').hide()
        $('.game-board').show()
        $('.start').hide()
        run(questionBank[0])
    })*/
    


    /*var popCorn


    $("#popCorn").on("click", function() 
    {executeTurn(popcorn);
    });*/


   /* $('#popCorn').on('click',function(){
    if($('#header', '#directions', '#button', '#aside').css('display')!='none'){
    $('#timer', '#question1').show().siblings('div').hide();
    }else if($('#timer', '#question1').css('display')!='none'){
        $('#header', '#directions', '#button', '#aside').show().siblings('div').hide();
    }
    });*/


                    //or


    /*$(function(){
         $('#showall').click(function(){
               $('.targetDiv').show();
        });
        $('.showSingle').click(function(){
              $('.targetDiv').hide();
              $('#div'+$(this).attr('target')).show();
        });
      });*/



   
    /*var audio = new Audio("horror.mp3");
     audio.play();*/