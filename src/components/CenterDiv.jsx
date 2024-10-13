/* eslint-disable react/prop-types */
export default function CenterDiv({children}){
    return(
        <div className="container py-5">
            <div className="row d-flex justify-content-between align-items-center">
                {children}
            </div>
        </div>
    )
}