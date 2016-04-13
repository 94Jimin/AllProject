var status = true;

$(document).ready(function(){
	$("#registProduct").click(function(){
		window.location.href("MyProject/mg/bookRegisterForm.do");
	});
	
	$("updateProduct").click(function(){
		window.location.href("MyProject/mg/bookList.do?book_kind=all");
	});
	
	$("#orderedProduct").click(function(){
		window.location.href("MyProject/mg/bookList.do");
	});
	
	$("#qna").click(function(){
		window.location.href("MyProject/mg/qnaList.do");
	});
});