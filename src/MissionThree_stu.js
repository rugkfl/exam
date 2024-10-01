import { useState } from "react";

const MissionThree = () => {
    const boardList = [
        {
            "num" : 1,
            "title" : "board-1",
            "createDt" : "2024-09-30",
            "hit" : 1
        },
        {
            "num" : 2,
            "title" : "board-2",
            "createDt" : "2024-09-30",
            "hit" : 10
        }
    ];
    const [arr, setMemberList] = useState(boardList);

	const list = () => {
		/* 목록 table을 구성한다. */
        return (arr.map((board) => {
            return (
                <tr key={board.num}>
                    <td>{board.num}</td>
                    <td>{board.title}</td>
                    <td>{board.createDt}</td>
                    <td>{board.hit}</td>  
                </tr>
                );
            })
        );
	};

	const insertForm = () => {
        let num = document.querySelector("#num").value;
        let title = document.querySelector("#title").value;
        let createDt = document.querySelector("#date").value;
            let arrList = [];
            let data ={
                "num": num,
                "title" : title,
                "createDt" :  createDt,
                "hit" : 0
            }
            // boardList.push(data)
            // /* 입력 table을 구성한다. */ 
            // for(let i = 0; i < boardList.length; i++) {
            //     arrList.push(boardList[i]);
            // }
            
           
            // setMemberList(arrList);

            setMemberList([...arr, data])

            document.querySelector("#num").value=""
            document.querySelector("#title").value=""
            document.querySelector("#date").value=""


        //     return (arr.map( (item) => {
        //         return(
        //             <tr key={item.num}>
        //                 <td>{item.num}</td>
        //                 <td>{item.title}</td>
        //                 <td>{item.createDt}</td>
        //                 <td>{item.hit}</td>

        //             </tr>
        //         );
        //     })
        // );
                    
    }

    return (
		/* 화면을 구성한다. */
        <>
             <h1>Board List</h1>
            <table border="1">
            <thead>
                <tr>
                    <th>Num</th>
                    <th>Title</th>
                    <th>CreateDt</th>
                    <th>Hit</th>
                </tr>
            </thead>
            <tbody>
                {
                
                list()
                
                }


            </tbody>
        </table>
                <hr></hr>

        <table border="1"> 
            <thead>

                <tr>
                    <th>Num</th>
                    <th><input type="text" id="num" /></th>
                </tr>
                <tr>
                    <th>Title</th>
                    <th><input type="text" id="title"/></th>
                </tr>
                <tr>
                    <th>CreateDt</th>
                    <th><input type="date" id="date"/></th>
                </tr>
                <tr>
                    <th>Hit</th>
                    <th><input type="text"value='0' readOnly/></th>
                </tr>
                <tr>
                    <th colSpan="2">
                        <button onClick={insertForm}>ADD</button>
                    </th>
                </tr>
            </thead>
            <tbody>
         
            </tbody>
        </table>
        </>
    );
};

export default MissionThree;