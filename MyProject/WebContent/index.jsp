<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	request.setCharacterEncoding("UTF-8");
	String cp = request.getContextPath();
%>

<div id="header">
	<div id="logo" class="box">
		<img class="noborder" id="logo" src="/MyProject/images/mollalogo3.png"/>
	</div>
	<div id="auth" class="box">
		<c:if test="${type==0 }"> <!-- 관리자 용 로그인폼 표시 -->
			<jsp:include page="mngr/logon/mLoginForm.jsp"/>
		</c:if>
		<c:if test="${type==1 }"> <!-- 사용자 용 로그인폼 표시 -->
			<jsp:include page="member/loginForm.jsp"/>
		</c:if>
	</div>
</div>
<div id="content" class="box2">
	<jsp:include page="${cont }"/>
</div>