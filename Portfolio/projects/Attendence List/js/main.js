/*var present = []
var tardy = []*/

$('#presentBtn').on('click', function(){

  //console.log('works!');

  var name = $('#presentInput').val()

  //console.log(name);

  $('#list1').append('<li>'+name+'</li>')

})
$('#tardyBtn').on('click', function(){

  //console.log('I work!');

  var name = $('#tardyInput').val()

  $('#list2').append('<li>'+name+'</li>')
})
$('#showBtn').on('click', function(){
  
})
