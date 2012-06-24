// JavaScript Document
/* 
***
by mrm.mahmoodi@gmail.com == MaryamMahmoodi ==
***
*/
	//=============================== this script add or remove inputs
$(function(){

    var isEmptyString = function(str) {
        return str == null || typeof str == "undefined" || str.length == 0;
    }

    function emptyStringCheck(str) {
        return isEmptyString(str) ? "" : str;
    }
	//=============================== function getRow
	
  function getRow(name) {
  	var removeButton = $(
    	"<button type='button' title='Remove this  parameter' >&nbsp;-&nbsp;</button>")
      .click(function() {
      	$(this).parent().parent().remove();
    });
		
        return $("<tr/>").append($("<td/>").append($("<input/>", {
						val  :name,
            type : "text",
						name :"fild_info",
						class:"input_user",
						required:"required"
						
        }))).append($("<td/>").append(removeButton))
    }
	//=============================== function reload Botten
	
	function reload(){
		$(".form_action").val("");
		$(".form_detail").html("");
		
		}
	
	//=============================== function send information
		
	$("#send_info").click(function() {
		
		/*if (isEmptyString($("<input/>",{
			val : name,
      type : "text"
			}).val())) {
        return false;
    }*/
		 
		 var newInputs = [],
				 newValueInputs=[],
				 newValueText = $(".form_textarea").val(""),
				 newInputs = $(".form_detail input");
		 var index=newInputs.length;
       for ( var i = 0; i< index; i++) {
       	//if (!isEmptyString(newValueInputs.value));
			 	newInputs = $(".form_detail input");
			 	newValueInputs = $(newInputs[i]).val();
				document.formEditor.outputText.value += newValueInputs +"\n"; 
        }
		$(".form_detail").hide();
		$(".form_textarea").show();
    });		

	//================================ function of get information Botten
	
		$("#get_info").click(function(){
			
		 var text=$(".form_textarea").hide().val();
		 var arrText=text.split("\n");
			for(var i=0; i< arrText.length; i++){
				$(".form_detail").append(getRow(arrText[i]));
			}
		});
	
	//=============================== CallBacks 
	
	 $("#reload_button").click(function() {
        reload();
    });
		
		$("#add_button").click(function() {
        $(".form_detail").append(getRow(""));
    });

	
	reload();

		
});//The End