$(function(){
$.get( "/contactlist", function( data ) {
  $( "#jQres" ).html( JSON.stringify(data)  );
  	alert( "Load was performed." + data);
});	
});
