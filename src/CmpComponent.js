import HeaderComponent from "./HeaderComponent";
const CmpComponent = () => {
    let name = "강감찬";
    let dataList = [
        {
            "id" : "abcd",
            "pw" : "1234",
            "name" : "hong",
            "addr" : "seoul"
        },
        {
            "id" : "test",
            "pw" : "exam",
            "name" : "smith",
            "addr" : "LA"
        }
    ];
    return (
        <>
        {   
            // dataList.map((data) => {
            //     return(<p>{data.id}</p>)
            // })

            dataList.map((data) => (<p>{data.id}</p>))

            // for(let i = 0; i < dataList.length; i++) {}
        }
        <HeaderComponent title="첫번째" age={20} name={name}/>
        <HeaderComponent/>
        <HeaderComponent/>
            {/* <div>
                <h1>제일 큰 타이틀 태그 입니다.</h1>
            </div>
            <div>
                <h1>제일 큰 타이틀 태그 입니다.</h1>
            </div>
            <div>
                <h1>제일 큰 타이틀 태그 입니다.</h1>
            </div> */}
        </>
    );
};

export default CmpComponent;