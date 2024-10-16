/* eslint-disable react/prop-types */
import { Card } from "reactstrap";

export default function Details({title, content}){
    return(
        <div className="col-md-4 col-sm-6 col-xs-12 mb-3">
            <Card className="card p-3 text-light rounded">
                <h6>{title}</h6>
                <hr />
                <h3>{content}</h3>
            </Card>
        </div>
    )
}