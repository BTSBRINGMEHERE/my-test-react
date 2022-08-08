import React, { useState } from "react";
import { useRouter } from "next/router";
import BottomButton from "../src/components/BottomButton";
import Radio from "../src/components/Radio";
import RadioGroup from "../src/components/RadioGroup";

export default function deviceChoice() {
	const router = useRouter();
	const [selectedDevice, setSelectedDevice] = useState("");

	const goNextPage = () => {
		localStorage.setItem("selected_device", selectedDevice);
		router.push("/accessory-choice");
	};

	// const onChangeHandler = (e) => {
	// 	setSelectedDevice(e.target.value);
	// };

	return (
		<div className="container">
			<div className="wrapper">
				<h3 className="title">아이맥과 맥북 중 원하는 장비를 선택하세요.</h3>

				{/* <label>
					<input
						type="radio"
						name="device"
						id="device"
						value="iMac"
						onChange={onChangeHandler}
					/>
					iMac
				</label>
				<label>
					<input
						type="radio"
						name="device"
						id="device"
						value="Macbook"
						onChange={onChangeHandler}
					/>
					Macbook
				</label> */}

				<RadioGroup
					name="device"
					onChange={(state) => setSelectedDevice(state)}
				>
					<Radio id="iMac" name="device" value="iMac" label="iMac" />
					<Radio id="Macbook" name="device" value="Macbook" label="Macbook" />
				</RadioGroup>

				<BottomButton onClick={goNextPage}>
					악세서리 선택 화면으로 넘어가기
				</BottomButton>
			</div>
		</div>
	);
}
