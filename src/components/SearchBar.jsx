/* eslint-disable react/prop-types */
import { Input, InputGroup, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar({inputValue, setInputValue, handleSubmit}){
    return(
        <InputGroup className="mb-5" size="md">
            <Input 
                placeholder="Search City" 
                className="rounded input"
                value={inputValue} 
                onChange={setInputValue}
            />
            <Button 
                color="primary" 
                onClick={handleSubmit} 
                disabled={inputValue.trim().length === 0}
            >
                <FontAwesomeIcon icon={faSearch} />
            </Button>
        </InputGroup>
    )
}