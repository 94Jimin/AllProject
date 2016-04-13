$(document).ready(function(){
	//[로그인]버튼을 클릭하면 자동 실행
	$("#login").click(function(){
		var query = {id : $("#id").val,passwd : $("#passwd").val};
		
		$.ajax({
			type: "POST",
			url: "/MyProject/mg/managerLoginPro.do",
			data: query,
			success: function(data){
				window.location.href("/MyProject/mg/managerMain.do");
			}
		});
	});
	
	//[로그아웃] 버튼을 클릭하면 자동 실행
	$("#logout").click(function(){
		$.ajax({
			type: "POST",
			url: "/MyProject/mg/managerLogout.do",
			success: function(data){
				window.location.href("/MyProject/mg/managerMain.do");
			}
		});
	});
	
});