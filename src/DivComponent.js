import SubDivComponent from "./SubDivComponent";
const DivComponent = () =>{

    const info = () => {
        return (
            <h1>하하하</h1>
        );
    }

    return (
        <div>
            <p>상단부분</p>
            <p>{info()}</p>
            <p>{<SubDivComponent/>}</p>
            <p>하단부분</p>
        </div>
    );
};

export default DivComponent;