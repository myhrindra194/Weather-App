/* eslint-disable react/prop-types */
import { Card } from "reactstrap";

export default function Details({title, content}){
    return(
        <div className="col-4 mb-3">
            <Card className=" p-3 text-light rounded bg-primary">
                <h6>{title}</h6>
                <hr />
                <h3>{content}</h3>
            </Card>
        </div>
    )
}