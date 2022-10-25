/*function show() {
  document.getElementById('sidebar').classList.toggle('active');
}*/

$(document).ready(function(){

  $(".initial-bg").css("height", $(".question-section").height());

  $(".intro-page::before").css("height", $(".welcome").height());

  var windowSize = $(window).width();

        if (windowSize <= 900) {
            $(".icon-description").click(function(){
              $("#sidebar").css("top", "-100vh");
            });

            $("#navbar-close").click(function(){
              $("#sidebar").css("top", "-100vh");
            })

            $(".toggle-btn").click(function(){
              $("#sidebar").css("top", "0");
            });
        }
        else if (windowSize > 900) {
          $(".icon-description").click(function(){
            $("#sidebar").css("left", "-250px");
          })

          $("#navbar-close").click(function(){
            $("#sidebar").css("left", "-250px");
          })

          $(".toggle-btn").click(function(){
            $("#sidebar").css("left", "0");
          });
      }
        
      $(document).on("scroll", function() {
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var tags = $(".appear");
      
        for (var i = 0; i < tags.length; i++) {
          var tag = tags[i];
          if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
          } else {
            $(tag).removeClass("visible");
          }
        }
      });


  $("#q1-open").click(function(){
    $("#q1").animate({left: "0"});
  })
  $("#q1-close").click(function(){
    $("#q1").animate({left: "-100vw"});
  })

  $("#q2-open").click(function(){
    $("#q2").animate({left: "100vw"});
  })
  $("#q2-close").click(function(){
    $("#q2").animate({left: "0"});
  })

  $("#q3-open").click(function(){
    $("#q3").animate({left: "200vw"});
  })
  $("#q3-close").click(function(){
    $("#q3").animate({left: "0"});
  })

  $("#q4-open").click(function(){
    $("#q4").animate({left: "300vw"});
  })
  $("#q4-close").click(function(){
    $("#q4").animate({left: "0"});
  })

  $("#q5-open").click(function(){
    $("#q5").animate({left: "400vw"});
  })
  $("#q5-close").click(function(){
    $("#q5").animate({left: "0"});
  })

  $("#q6-open").click(function(){
    $("#q6").animate({left: "500vw"});
  })
  $("#q6-close").click(function(){
    $("#q6").animate({left: "0"});
  })

  $("#q7-open").click(function(){
    $("#q7").animate({left: "600vw"});
  })
  $("#q7-close").click(function(){
    $("#q7").animate({left: "0"});
  })

  $("#q8-open").click(function(){
    $("#q8").animate({left: "700vw"});
  })
  $("#q8-close").click(function(){
    $("#q8").animate({left: "0"});
  })

  $("#q9-open").click(function(){
    $("#q9").animate({left: "800vw"});
  })
  $("#q9-close").click(function(){
    $("#q9").animate({left: "0"});
  })

  $("#q10-open").click(function(){
    $("#q9").animate({left: "800vw"});
  })
  $("#q10-close").click(function(){
    $("#q9").animate({left: "0"});
  })

  $("#q11-open").click(function(){
    $("#q11").animate({left: "900vw"});
  })
  $("#q11-close").click(function(){
    $("#q11").animate({left: "0"});
  })

  $("#q12-open").click(function(){
    $("#q12").animate({left: "1000vw"});
  })
  $("#q12-close").click(function(){
    $("#q12").animate({left: "0"});
  })

  $("#q13-open").click(function(){
    $("#q13").animate({left: "1100vw"});
  })
  $("#q13-close").click(function(){
    $("#q13").animate({left: "0"});
  })

  $("#q14-open").click(function(){
    $("#q14").animate({left: "1200vw"});
  })
  $("#q14-close").click(function(){
    $("#q14").animate({left: "0"});
  })  

  $("#q15-open").click(function(){
    $("#q15").animate({left: "1300vw"});
  })
  $("#q15-close").click(function(){
    $("#q15").animate({left: "0"});
  })
  
  $("#q16-open").click(function(){
    $("#q16").animate({left: "1400vw"});
  })
  $("#q16-close").click(function(){
    $("#q16").animate({left: "0"});
  })

  /* faqs */ 

  $("#faq1").click(function(){
    $("#faq1-response").css("height", "auto");
  })
  $("#rb1").click(function(){
    $("#faq1-response").css("height", "0")
  })

  $("#faq2").click(function(){
    $("#faq2-response").css("height", "auto");
  })
  $("#rb2").click(function(){
    $("#faq2-response").css("height", "0")
  })

  $("#faq3").click(function(){
    $("#faq3-response").css("height", "auto");
  })
  $("#rb3").click(function(){
    $("#faq3-response").css("height", "0")
  })

  $("#faq4").click(function(){
    $("#faq4-response").css("height", "auto");
  })
  $("#rb4").click(function(){
    $("#faq4-response").css("height", "0")
  })


  $(".sn1-right").click(function(){
    $("#sn1").animate({left: "0vw"})
  })

  $(".sn1-left").click(function(){
    $("#sn1").animate({left: "-88vw"})
  })

  $(".sn2-right").click(function(){
    $("#sn2").animate({left: "0vw"})
  })

  $(".sn2-left").click(function(){
    $("#sn2").animate({left: "-88vw"})
  })

  $(".sn3-right").click(function(){
    $("#sn3").animate({left: "0vw"})
  })

  $(".sn3-left").click(function(){
    $("#sn3").animate({left: "-88vw"})
  })

  $(".sn4-right").click(function(){
    $("#sn4").animate({left: "0vw"})
  })

  $(".sn4-left").click(function(){
    $("#sn4").animate({left: "-88vw"})
  })

  $(".sn5-right").click(function(){
    $("#sn5").animate({left: "0vw"})
  })

  $(".sn5-left").click(function(){
    $("#sn5").animate({left: "-88vw"})
  })


  })




