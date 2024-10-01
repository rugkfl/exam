
const MissionFour = () => {
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
        },
        {
            "num" : 3,
            "title" : "board-3",
            "createDt" : "2024-09-30",
            "hit" : 5
        },
        {
            "num" : 4,
            "title" : "board-4",
            "createDt" : "2024-09-30",
            "hit" : 12
        },
        {
            "num" : 5,
            "title" : "board-5",
            "createDt" : "2024-09-30",
            "hit" : 40
        },
        {
            "num" : 6,
            "title" : "board-6",
            "createDt" : "2024-09-30",
            "hit" : 2
        },
        {
            "num" : 7,
            "title" : "board-7",
            "createDt" : "2024-09-30",
            "hit" : 22
        },
        {
            "num" : 8,
            "title" : "board-8",
            "createDt" : "2024-09-30",
            "hit" : 19
        },
        {
            "num" : 9,
            "title" : "board-9",
            "createDt" : "2024-09-30",
            "hit" : 34
        },
        {
            "num" : 10,
            "title" : "board-10",
            "createDt" : "2024-09-30",
            "hit" : 10
        },
        {
            "num" : 11,
            "title" : "board-11",
            "createDt" : "2024-09-30",
            "hit" : 4
        },
        {
            "num" : 12,
            "title" : "board-12",
            "createDt" : "2024-09-30",
            "hit" : 18
        },
        {
            "num" : 13,
            "title" : "board-13",
            "createDt" : "2024-09-30",
            "hit" : 57
        },
        {
            "num" : 14,
            "title" : "board-14",
            "createDt" : "2024-09-30",
            "hit" : 3
        },
        {
            "num" : 15,
            "title" : "board-15",
            "createDt" : "2024-09-30",
            "hit" : 0
        },
        {
            "num" : 16,
            "title" : "board-16",
            "createDt" : "2024-09-30",
            "hit" : 6
        },
        {
            "num" : 17,
            "title" : "board-17",
            "createDt" : "2024-09-30",
            "hit" : 14
        },
        {
            "num" : 18,
            "title" : "board-18",
            "createDt" : "2024-09-30",
            "hit" : 18
        }    
    ];

	const list = () => {
		 /* 목록 table을 구성한다. */
         return (boardList.map( (board) => {
            //console.log(board);
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

    const searchInfo = (event) => {
        let search = event.target.value;
        let tbody = document.querySelector("#tbody");
        
        let msg = "";
        for(let i = 0; i < boardList.length; i++) {
            let num = boardList[i].num;
            let title = boardList[i].title;
            let createDt = boardList[i].createDt;
            let hit = boardList[i].hit;
            
            if(boardList[i].title.includes(search)) {

                msg += "<tr>";
                    msg += "<td>" + num + "</td>";
                    msg += "<td>" + title + "</td>";
                    msg += "<td>" + createDt + "</td>";
                    msg += "<td>" + hit + "</td>";
                msg += "</tr>";

                tbody.innerHTML = msg;
                
                
            }else{
                tbody.innerHTML = "";
            }
        }

    }

    return (
		 /* 화면을 구성한다. */
        <>  <h1>Board List</h1>
            <hr/>
            <input type="text" onChange={searchInfo} placeholder="search"></input>
            <p></p>
             <table border="1">
            <thead>
                <tr>
                    <th>Num</th>
                    <th>Title</th>
                    <th>CreateDt</th>
                    <th>Hit</th>
                </tr>
            </thead>
            <tbody id="tbody">
                {
                
                list()

                }

            </tbody>
        </table>

        </>
    );
};

export default MissionFour;