import { useState, useEffect } from "react";
import ArticleContainer from "./ArticleContainer";
import FilterContainer from "./FilterContainer";


function MainContainer() {

    const [filter, setFilter] = useState("")
    const [orderBy, setOrderBy] = useState("")

    return (
        <>
            <FilterContainer filter={filter} orderBy={orderBy} onSetFilter={ setFilter } onSetOrderBy={ setOrderBy } />
            <ArticleContainer filter={filter} orderBy={orderBy}/>
        </>
    )
}

export default MainContainer;
