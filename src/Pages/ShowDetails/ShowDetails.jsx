import { useParams } from "react-router-dom";


const ShowDetails = () => {
    const param = useParams()
    console.log(param);
    return (
        <div>
            <h2>Show Details</h2>
        </div>
    );
};

export default ShowDetails;