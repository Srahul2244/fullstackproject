import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/action";
import axios from "axios";

export const Search = () => {
    const dispatch = useDispatch()
    const token = useSelector((store) => store.authReducer.token)
    const product = useSelector((store) => store.productReducer.product)
    console.log(product)
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [data, setData] = useState([])

    useEffect(() => {
        axios.post("https://relieved-earmuffs-colt.cyclic.app/product/search", { payload: query }, { headers: { authorization: token } })
            .then((r) => {
                console.log(r.data)
                setData(r.data.data)
            })
        if (query === "") {
            setSuggestions([]);
        } else {
            let newListOfSuggestions= data
                .filter((item) =>
                item.category.toLowerCase().indexOf(query) !== -1 ? true : false
            )
        .map((item) => item.category);
    setSuggestions(newListOfSuggestions);
}
setTimeout(() => setLoading(false), 1000);
    }, [query]);

return (
    <div className="App">
        {/* <h1>Search Bar</h1>
            <div>Query is: {query}</div> */}
        <SearchBar
            loading={loading}
            setLoading={setLoading}
            suggestions={suggestions}
            onChange={(val) => setQuery(val)}
        />
    </div>
);
}
