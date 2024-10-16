/* eslint-disable react/prop-types */
import { Input, InputGroup, Button } from "reactstrap"

export default function SearchBar({inputValue, setInputValue, handleSubmit, handleKeyPress}){
    return(
        <InputGroup className="mb-5">
            <Input placeholder="City" className="rounded" value={inputValue} onChange={setInputValue}/>
            <Button color="primary" onClick={handleSubmit} disabled={inputValue.trim().length === 0} onKeyDown={handleKeyPress}>Search</Button>
        </InputGroup>
    )
}