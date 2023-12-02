const Result = ({index, computation}) => {
    return <p onClick={() => console.log("user clicked on the element")} onMouseEnter={() => console.log("user hovered over the element")}>{computation(index + 1)}</p>
};

export default Result;