$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

$('.carousel').carousel({
  interval: false
});


$('#submit-button').on('click', function (event) {
  event.preventDefault();
  var image = $('.item.active').find('.img-responsive').attr('src');
  var input = $('#inputKuout').val();
  console.log(image);
  console.log(input);
  $.ajax({
    type: 'POST',
    url: '/api/posts',
    data: { image: image, kuout: input },
    success: function(res){
      console.log('done');
      window.location.assign('/feed');
    }
  });
});
