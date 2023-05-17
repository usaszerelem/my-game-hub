import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    // If we get the setSearchText function this way, we prevent all
    // other components from rendering unnecessarily
    const setSearchText = useGameQueryStore((s) => s.setSearchText);
    const navigate = useNavigate();

    return (
        <form
            onSubmit={(event) => {
                // Prevents the form from being submitted to the server
                event.preventDefault();

                if (ref.current) {
                    setSearchText(ref.current.value);
                    navigate("/");
                }
            }}
        >
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="Search games..."
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
