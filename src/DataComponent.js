const DataComponent = () => {

    const data = [
        {
            "num" : 1,
            "name" : "hong",
            "dept" : "buyer",
            "loc" : "Seoul"
        },
        {
            "num" : 2,
            "name" : "kang",
            "dept" : "seller",
            "loc" : "Inchon"
        },
    ];

    const dataInfo = () => {
        let list = "";
        for(let i = 0; i < data.length; i++) {
            let num = data[i].num;
            let name = data[i].name;
            let dept = data[i].dept;
            let loc = data[i].loc;

            list += `<tr key=${i}>`;
            list += `<td>${num}</td>`;
            list += `<td>${name}</td>`;
            list += `<td>${dept}</td>`;
            list += `<td>${loc}</td>`;
            list += "</tr>";
        }

        data.map((index, item) => {
            console.log(item.name);
        });
        
        return(
            <>
            {list}
            </>
        );
    }
   

    return (
        <>
            <table border="1">
                <tr>
                    <th>사원번호</th>
                    <th>사원명</th>
                    <th>부서</th>
                    <th>근무지</th>
                </tr>
                {dataInfo()}
            </table>
        </>
    );
};

export default DataComponent;