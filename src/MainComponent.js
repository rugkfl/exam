const MainComponent = () => {
    return (
        <>
        <table border="1">
            <tr>
                <th>ID</th>
                <td><input type="text" /></td>
            </tr>
            <tr>
                <th>PW</th>
                <td><input type="password"/></td>
            </tr>
            <tr>
                <th colSpan="2">
                    <button>로그인</button>
                </th>
            </tr>
        </table>
        <a href="addMember">회원가입</a>
        </>
    );
}

export default MainComponent;