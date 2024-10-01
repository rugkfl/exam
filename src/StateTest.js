import { useState } from "react";

const StateTest = () => {
    const [result, setResult] = useState("성공");
    // let result = "성공....";
    const [memberList, setMemberList] = useState([]);
    // let memberList = [];
    let countNumber = 0;

    const messageChange = () => {
        console.log(memberList);
        memberList.push("===>" + countNumber);
        
        let arr = [1, 2, 3]

        
        setMemberList(memberList);
        countNumber++;

        // result = "수정 성공..."
        // setResult("수정 성공");

        // document.querySelector("h1").innerText = result;
        console.log(memberList);
    }

    return (
        <>
        <p>
            <h1>{result}</h1>
            <button onClick={ messageChange }>저장</button>
            <div>
                {
                    memberList.map((member) => {
                        return (<h2>{member}</h2>)
                    })
                }
            </div>
        </p>
        </>
    );
};

export default StateTest;