$('#form').on('submit',function(e) {
    e.preventDefault();
    var item = $('#input').val()
    $('#ul').append('<li><span class="enteredText">'+item+'</span><span class="edit">'+'Edit'+'</span><span class="remove">'+'Remove'+'</span></li>')
    $('#input').val('') ;

})

$('#ul').on('click','.enteredText',function(){
    $(this).toggleClass('done')
})
$('#clearAll').on('click', function(){
  $('li').remove()
})
$('#clearDone').on('click', function(){
  $('.done').remove()
})
$('#ul').on('mouseenter','li',function(){
  $('.edit').show()
  $('.remove').show()
  $(this).css('cursor', 'pointer');
})
$('#ul').on('mouseleave','li',function(){
  $('.edit').hide()
  $('.remove').hide()
})
$('#ul').on('mouseleave','li',function(){
  $('.edit').on('click',function(){
  $(this).parent.remove()
  $('#ul').append('')  
  })
  $('.remove').on('click',function(){
    $(this).parent().remove()
  })
})
