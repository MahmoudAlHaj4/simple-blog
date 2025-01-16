import Input from "../../../../Components/Input";

const SearchBar = () => {
    return (
        <div className="w-full">
            <Input
                type="text"
                placeholder="Search"
                id="search"
                name="search"
                classes="w-4/6"
            />
        </div>
    );
};

export default SearchBar;
