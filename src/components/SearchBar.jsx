import { LuSearch } from "react-icons/lu";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
function SearchBar() {


    const [searchParams, setSearchParams] = useSearchParams();
    const [keyword, setKeyword] = useState(searchParams.get("q") || "");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            setSearchParams({ q: keyword });
            navigate(`/search?q=${keyword}`)
        }
    };

    return <>

        <form onSubmit={handleSubmit} className="search">
            <input type="text" name="search" id="search" className="search__input"

                value={keyword}
                onChange={(e) => { setKeyword(e.target.value) }}
            />
            <button type="submit" className="search__button">
                <LuSearch />
            </button>
        </form>
    </>
}

export default SearchBar