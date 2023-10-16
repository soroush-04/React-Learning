
function Food(){

    const food1 = "Lasagna";
    const food2 = "Pizza";

    return(
        <ul>
            <li>Soup</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>

    );
}

export default Food