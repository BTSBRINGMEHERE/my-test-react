import React, { useEffect, useState } from "react";
import { fetchUser } from "../src/modules/api";

export default function complete() {
	const [choice, setChoice] = useState({ device: "", accessory: "" });
	const [name, setName] = useState("제로베이스");

	useEffect(() => {
		const device = localStorage.getItem("selected_device");
		const accessory = localStorage.getItem("selected_accessory");

		setChoice({ device, accessory });
	}, []);

	useEffect(() => {
		async function fetch() {
			const res = await fetchUser();
			setName(res.name);
		}

		fetch();
	}, []);

	return (
		<div className="container">
			<div className="wrapper">
				<h3 className="title">
					{name}님이 선택하신 장비는 {choice.device}이고, 선택하신 악세서리는{" "}
					{choice.accessory}입니다.
				</h3>
			</div>
		</div>
	);
}
