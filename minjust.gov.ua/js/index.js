function addTags() {
	var intxt = $('.add-tags').val();
	if(intxt) {
		$('.tags').append('<span>,</span> <a href="#">'+ intxt + '</a>');
		$('.add-tags').val('');
		$('.tags span:nth-child(1)').remove();
	} else {
		alert('Введите текст в поле');
	}
}

function colorTags() {
	$('.tags').addClass('active');
}

function deleteTags() {
	$('.tags a:last, .tags span:last').remove();
}

