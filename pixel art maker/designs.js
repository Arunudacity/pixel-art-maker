// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
 
function makeGrid() {
  var tab=$('#pixelCanvas');
  tab.empty();
  var table=document.getElementById('pixelCanvas');
  var row=document.getElementById('inputHeight').value;
  var column=document.getElementById('inputWidth').value;
  
  for(r=0;r<row;r++)
  {
    var ro=table.insertRow(r);
    for(c=0;c<column;c++)
    {
      ro.insertCell(c);
    }
  }
   $('td').click(function(){
 	var color=document.getElementById('colorPicker').value;
   $(this).css('background',color);
});
 
  
}
$('input[type="submit"]').click(function(event){
      event.preventDefault();
makeGrid();
 
});