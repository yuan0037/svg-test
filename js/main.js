$(document).ready(function(){

    console.log("ready");
    console.log($("#headphone"));
    $("#headphone").mouseover(function(){
        $("#connector").children().css("stroke", "#FC4A3D");
        $("#connector").children().css("stroke-width", 1);
        $("#connector").children().css("fill", "#FC4A3D");
        $("#right-ear").children().css("stroke", "#FF0000");
        $("#right-ear").children().css("fill", "#CCCCCC");
        $("#left-ear").children().css("stroke", "#FF0000");
        $("#left-ear").children().css("fill", "#CCCCCC");        
        $("#halfsphere").children().css("stroke", "#C92114");
        $("#halfsphere").children().css("fill", "#C92114"); 
        $("#halfsphere_1_").children().css("stroke", "#C92114");
        $("#halfsphere_1_").children().css("fill", "#C92114");     
                $("#music-note").children().css("fill", "#FFFFFF");
        $("#music-note").children().hide(); 
    });
    $("#headphone").mouseout(function(){
        $("#connector").children().css("stroke", "#231F20");
        $("#connector").children().css("stroke-width", 1);
        $("#connector").children().css("fill", "#FFFFFF");
        $("#right-ear").children().css("stroke", "#231F20");
        $("#right-ear").children().css("fill", "#FFFFFF");
        $("#left-ear").children().css("stroke", "#231F20");
        $("#left-ear").children().css("fill", "#FFFFFF");        
        $("#halfsphere").children().css("stroke", "#231F20");
        $("#halfsphere").children().css("fill", "#FFFFFF"); 
        $("#halfsphere_1_").children().css("stroke", "#231F20");
        $("#halfsphere_1_").children().css("fill", "#FFFFFF");    
        $("#music-note").children().css("fill", "#FFFFFF");
        $("#music-note").children().hide();     
    });    
    
    $("#headphone").click(function(){
        $("#connector").children().css("stroke", "#FC4A3D");
        $("#connector").children().css("stroke-width", 1);
        $("#connector").children().css("fill", "#FC4A3D");
        $("#right-ear").children().css("stroke", "#FF0000");
        $("#right-ear").children().css("fill", "#C92114");
        $("#left-ear").children().css("stroke", "#FF0000");
        $("#left-ear").children().css("fill", "#C92114");        
        $("#halfsphere").children().css("stroke", "#C92114");
        $("#halfsphere").children().css("fill", "#C92114"); 
        $("#halfsphere_1_").children().css("stroke", "#C92114");
        $("#halfsphere_1_").children().css("fill", "#C92114");  
        
        $("#SVGID_1_").css("width", 150);
        $("#SVGID_1_").css("height", 400);
        
        $("#music-note").children().css("fill", "#C92114");
        $("#music-note").children().show();

        
        $('#music-note').children().css({
        "min-height": 0
    })
        .animate({
        "min-height": -150
    }, {
        duration: 1000,
        step: function (top) {
            this.setAttribute("transform", "translate(0," + top + ")");
        }        
});
});

    //--------for mic
    
       console.log($("#microphone"));
    console.log($("#handle"));
    $("#microphone").mouseover(function(){
        $("#handle").children().css("stroke", "#FC4A3D");
        $("#handle").children().css("stroke-width", 1);
        $("#handle").children().css("fill", "#FC4A3D");
        $("#sphere").css("stroke", "#FF0000");
        $("#sphere").css("fill", "#CCCCCC");
//        $("#sphere").css("cy", 323);
        $("#band-on-sphere").children().css("stroke", "#FF0000");
        $("#band-on-sphere").children().css("fill", "#CCCCCC");        
        $("#band-on-handle").children().css("stroke", "#C92114");
        $("#band-on-handle").children().css("fill", "#C92114"); 
        $("#waves").hide();

    });
    $("#microphone").mouseout(function(){
        $("#handle").children().css("stroke", "#231F20");
        $("#handle").children().css("stroke-width", 1);
        $("#handle").children().css("fill", "#FFFFFF");
        $("#sphere").css("stroke", "#231F20");
        $("#sphere").css("fill", "#FFFFFF");
//        $("#sphere").css("cy", 323);
        $("#band-on-sphere").children().css("stroke", "#231F20");
        $("#band-on-sphere").children().css("fill", "#FFFFFF");        
        $("#halfsphere").children().css("stroke", "#231F20");
        $("#halfsphere").children().css("fill", "#FFFFFF"); 
        $("#band-on-handle").children().css("stroke", "#231F20");
        $("#band-on-handle").children().css("fill", "#FFFFFF");   
        $("#waves").hide();
    });    
    
    $("#microphone").click(function(){
        $("#handle").children().css("stroke", "#FC4A3D");
        $("#handle").children().css("stroke-width", 1);
        $("#handle").children().css("fill", "#FC4A3D");
        $("#sphere").css("stroke", "#FF0000");
        $("#sphere").css("fill", "#FF0000");
        $("#band-on-sphere").children().css("stroke", "#FF0000");
        $("#band-on-sphere").children().css("fill", "#CCCCCC");        
        $("#band-on-handle").children().css("stroke", "#C92114");
        $("#band-on-handle").children().css("fill", "#C92114"); 
        $("#left-wave").children().css("fill", "#C92114");
        $("#right-wave").children().css("fill", "#C92114");
        $("#waves").fadeIn(2000);
//        $("#sphere").css("transform","translateY(-50px)");
//        $("#sphere").css("transition-property", "transform");
//        $("#sphere").css("transition-duration", "1s");
        
      
        
});
    
});
