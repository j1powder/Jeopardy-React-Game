import './Topics.css';
const Topics = () => {
    
    const Topics = [
        "History", "Math", "Science", "English"
    ];


    return(

<div className="Topics">
    <ul className="row">
        <li className="row-item1">{Topics[0]}</li>
        <li className="row-item1">{Topics[1]}</li>
        <li className="row-item1">{Topics[2]}</li>
        <li className="row-item1">{Topics[3]}</li>
    </ul>
</div>

    )
}

export default Topics;