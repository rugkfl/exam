import { useEffect } from "react";


const MissionTwo = () => {

	const validation = (e) => {
		const keyCode = e.keyCode;

		
		let id = document.querySelector("#id").value;
		let pwd = document.querySelector("#pwd").value;
		
		if(id == "") {
			alert("아이디는 필수 입력입니다.");
		} else if (id.length < 3 || id.length > 15) {
		alert("ID : 3 ~ 15자리 문자만 입력 가능합니다.");
		} 


		if(pwd == "") {
			alert("비밀번호는 필수 입력입니다.")
		} else if((pwd.length < 3 || pwd.length > 15)) {
			alert("PWD : 3 ~ 15자리 문자만 입력 가능합니다.");
		}



	}

	
    return (
		
		<>
		<table border="1">
			<tr>
				<th>ID</th>
				<td><input type="text" id="id"/></td>
			</tr>
			<tr>
				<th>PW</th>
				<td><input type="password" id="pwd"/></td>
			</tr>
			<tr>
				<th colSpan="2">
					<button onClick={validation}>로그인</button>
				</th>
			</tr>
		</table>
		</>
    );
};

export default MissionTwo;