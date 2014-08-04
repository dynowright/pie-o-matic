    $(function() {
      $( "#formfilling" ).buttonset();
      });
    
    $(function() {
      $( "#formshell" ).buttonset();
      });
    
    
    $(function() {
      $( "#formbake" ).buttonset();
      });
    
    $(function() {
      $( "#slider-range-min" ).slider({
      range: "min",
      value: 250,
      min: 170,
      max: 500,
      step: 5,
      slide: function( event, ui ) {
        $( "#slider" ).val( ui.value );
        $(this).find('.ui-slider-handle').text(ui.value);
      },
      create: function(event, ui) {
            var v=$(this).slider('value');
            $(this).find('.ui-slider-handle').text(v);
          }
    });
     $( "#slider" ).val( $( "#slider-range-min" ).slider( "value" ) );
  });
    $(function(){
      $("#slider-range-max").slider({
        range: "max",
        min: 0,
        max: 60,
        value: 15,
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
            $(this).find('.ui-slider-handle').text(ui.value);
        },
        create: function(event, ui) {
            var v=$(this).slider('value');
            $(this).find('.ui-slider-handle').text(v);
          }
      });    
  });

window.onload = init;

function init() {
	var powerOn = document.getElementById("powerswitch");
	powerOn.addEventListener("click", showPowerOn);
	var shell = document.getElementById("formshell");
	shell.addEventListener("click", selectShell);
	var fill = document.getElementById("formfilling");
	fill.addEventListener("click", selectFill);
	var bake = document.getElementById("radio7");
	bake.addEventListener("click", bakePie);
  var reset = document.getElementById("radio8");
  reset.addEventListener("click", resetPie);
  var off = document.getElementById("powerswitchoff");
  off.addEventListener("click", turnOff);
 
  $ ( "#slider-range-min" ).slider( "disable" );
  $ ( "#slider-range-max" ).slider( "disable" );
  $ ( "#radio1" ).button( "disable" );
  $ ( "#radio2" ).button( "disable" );
  $ ( "#radio3" ).button( "disable" );
  $ ( "#radio4" ).button( "disable" );
  $ ( "#radio5" ).button( "disable" );
  $ ( "#radio6" ).button( "disable" );
  $ ( "#radio7" ).button( "disable" );
  $ ( "#radio8" ).button( "disable" );

};

function showPowerOn() {
	var powerOn = document.getElementById("powerswitch");
	powerOn.style.color = '#FFFFFF';
  powerOn.style.backgroundColor = '#00FF00';
  powerOn.style.borderColor = '#d3d3d3';
	document.getElementById("status").innerHTML = "<p>The oven is on. Next, select a shell.</p>";
	console.log("Oven is now on.");
  
	$ ( "#slider-range-min" ).slider( "enable" );
  $ ( "#slider-range-max" ).slider( "enable" );
  $ ( "#radio1" ).button( "enable" );
  $ ( "#radio2" ).button( "enable" );
  $ ( "#radio3" ).button( "enable" );
  $ ( "#radio4" ).button( "enable" );
  $ ( "#radio5" ).button( "enable" );
  $ ( "#radio6" ).button( "enable" );


	oven.push("on");
	for (var i = 0; i < oven.length; i++) {
    console.log("Oven array: " + oven[i]);
	}
};

var oven = []

function checkOven() {
	if (oven === ["on"]) {
		console.log("Oven preheated.");
	} else {
		console.log("Oven not preheated.");
	}
}
checkOven();


function selectShell() {

  document.getElementById("status").innerHTML = "<p>You selected a " + $('input[name="radioS"]:checked').val() + " shell. Select a filling."
  console.log("Pie shell selected");
  document.getElementById("shell").style.backgroundColor = '#DEFFFA';
  }


function selectFill() {
	document.getElementById("status").innerHTML = "<p>You selected " + $('input[name="radioF"]:checked').val() + " filling &#62; &#62; &#62;</p>";
	console.log("Pie filling selected");
  $ ( "#radio7" ).button( "enable" );
  $ ( "#radio8" ).button( "enable" );
  document.getElementById("filling").style.backgroundColor = "#DEFFFA";
  setTimeout(change, 1500);
    function change() {
      document.getElementById("status").innerHTML = "<p>...select 425 degrees for a half-hour.</p>";
      
    }

}


function bakePie() {
	
    if ($('input[name="radioS"]:checked').length > 0 && $('input[name="radioF"]:checked').length > 0) {
      console.log("continue");
     
    } else {
      //document.getElementById("status").innerHTML = "<p>Select a shell before continuing.</p>";
      console.log("can't continue");
    }


    var temp = $( "#slider-range-min" ).slider( "value" );
    console.log(temp);
    if (temp == "425") {
    	console.log("good temp");
    } else {
    	console.log("bad temp");
    }
    
    var time = $( "#slider-range-max" ).slider( "value" );
    console.log(time);
    if (time == "30") {
    	console.log("good time");
    } else {
    	console.log("bad time");
    }
    
  	document.getElementById("status").innerHTML = "<p>Success! This " + $('input[name="radioF"]:checked').val() + " pie is perfect!</p>"; 
    
    if (temp * time < "12750") {
      document.getElementById("status").innerHTML = "<p>This " + $('input[name="radioF"]:checked').val() + " pie is underdone!</p>";
      console.log("Pie too cold!");
      $("#ovenopening").attr("src","ovenpie_cold.png");
    } else if (temp * time > "12750") {
      document.getElementById("status").innerHTML = "<p>This " + $('input[name="radioF"]:checked').val() + " pie is overdone.</p>";
      console.log("Pie too hot!");
      $("#ovenopening").attr("src","ovenpie_burn.png");
    } else if (temp * time == "12750") {
      console.log("Pie success!");
      $("#ovenopening").attr("src","ovenpie_good.png");
      console.log("image change good");
      $("#exhaustpanel").attr("src", "exhaust_good.png");
    }

}

function resetPie () {
  var resetOption = $(".opt");
    resetOption.prop('checked', false).button("refresh"); 
  document.getElementById("status").innerHTML = "<p>Start over. Select a shell.</p>";
  $("#ovenopening").attr("src", "ovenpie_none.png");
  $( "#radio7" ).button( "disable" );
  $( "#radio8" ).button( "disable" );

}

function turnOff () {
  history.go(0);
}





