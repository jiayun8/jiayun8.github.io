$(function (){
		$('#box img').mouseover(function (){
			$('#box img').removeClass('on');
			$(this).addClass('on');
			
			$('#box div').removeClass('show');
			$('#box div').eq($(this).index()).addClass('show');
		});
	});