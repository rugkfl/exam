const LoginComponent = (props) =>{

    const name = props.name;
    
    return(
        <>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th><input type="text"/></th>
                </tr>
                <tr>
                    <th>PWD</th>
                    <th><input type="password"/></th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th><input type="text" value={name}/></th>
                </tr>
                <tr>
                    <th>Addr</th>
                    <th><input type="text"/></th>
                </tr>
                <tr>
                    <th colSpan="2">
                        {/* <button onClick={()=> {location.href='/';}}>가입</button> */}
                        <button>가입</button>
                    </th>
                </tr>
            </table>
        </>
    );
} 
export default LoginComponent;