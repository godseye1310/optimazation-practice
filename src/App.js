import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
	const [listTitle, setListTitle] = useState("My List");
	const [orderText, setOrderText] = useState("change to descending order");

	const changeTitleHandler = useCallback(() => {
		setListTitle("New Title");
	}, []);

	const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

	let sortItems;

	const listOrderHandler = (e) => {
		if (e.target.innerHTML === "change to descending order") {
			setOrderText("Change to Ascending Order");
			// sortItems = listItems.sort((a, b) => b - a);
		} else {
			setOrderText("change to descending order");
			// sortItems = listItems.sort((a, b) => a - b);
		}
	};

	return (
		<div className="app">
			<DemoList title={listTitle} items={listItems} />
			<Button onClick={changeTitleHandler}>Change List Title</Button>
			<Button onClick={listOrderHandler}>{orderText}</Button>
		</div>
	);
}

export default App;
