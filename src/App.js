import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
	const [listTitle, setListTitle] = useState("My List");
	const [sortOrder, setSortOrder] = useState(true);

	const changeTitleHandler = useCallback(() => {
		setListTitle("New Title");
	}, []);

	const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

	const listOrderHandler = () => {
		setSortOrder((prevSortOrder) => !prevSortOrder);
	};

	return (
		<div className="app">
			<DemoList title={listTitle} items={listItems} onSort={sortOrder} />
			<Button onClick={changeTitleHandler}>Change List Title</Button>
			<Button onClick={listOrderHandler}>
				{sortOrder ? "change to descending order" : "Change to Ascending Order"}
			</Button>
		</div>
	);
}

export default App;
