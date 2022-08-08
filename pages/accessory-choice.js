import React, { useState } from "react";
import { useRouter } from "next/router";
import BottomButton from "../src/components/BottomButton";
import Radio from "../src/components/Radio";
import RadioGroup from "../src/components/RadioGroup";

export default function accessoryChoice() {
	const router = useRouter();
	// const [selectedAccessory, setSelectedAccessory] = useState("");

	// const onChangeHandler = (e) => {
	// 	setSelectedAccessory(e.target.value);
	// };

	return (
		<div className="container">
			<div className="wrapper">
				<h3 className="title">
					모니터와 키보드 중 원하는 악세서리를 선택하세요.
				</h3>

				{/* <label>
					<input
						type="radio"
						name="accessory"
						id="accessory"
						value="moniter"
						onChange={onChangeHandler}
					/>
					moniter
				</label>
				<label>
					<input
						type="radio"
						name="accessory"
						id="accessory"
						value="keyboard"
						onChange={onChangeHandler}
					/>
					keyboard
				</label> */}

				<RadioGroup name="accessory" onChange={(state) => console.log(state)}>
					<Radio
						id="moniter"
						name="accessory"
						value="moniter"
						label="moniter"
					/>
					<Radio
						id="keyboard"
						name="accessory"
						value="keyboard"
						label="keyboard"
					/>
				</RadioGroup>
				<BottomButton onClick={() => router.push("/complete")}>
					악세서리 선택 화면으로 넘어가기
				</BottomButton>
			</div>
		</div>
	);
}
