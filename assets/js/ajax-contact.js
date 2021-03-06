
 jQuery(document).ready(function($) {

	$('form#contactForm button.submit').click(function() {

		$('#image-loader').fadeIn();
  
		var contactName = $('#contactForm #contactName').val();
		var contactEmail = $('#contactForm #contactEmail').val();
		var contactSubject = "Contacto - Pagina Oficial";
		var contactMessage = $('#contactForm #contactMessage').val();
  
		var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
				 '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;
  
		$.ajax({
  
			type: "POST",
			url: "inc/sendEmail.php",
			data: data,
			success: function(msg) {
  
			  // Message was sent
			  if (msg == 'OK') {
				 $('#image-loader').fadeOut();
				 $('#message-warning').hide();
				 $('#contactForm').fadeOut();
				 $('#message-success').fadeIn();   
			  }
			  // There was an error
			  else {
				 $('#image-loader').fadeOut();
				 $('#message-warning').html(msg);
				  $('#message-warning').fadeIn();
			  }
  
			}
  
		});
		return false;
	 });

 });
