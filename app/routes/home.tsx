import { useState, type PropsWithChildren } from "react";

type ColorPickerCardProps = {
	color: string;
	setColor: (color: string) => void;
};

const ColorPickerCard = ({ color, setColor }: ColorPickerCardProps) => {
	return (
		<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
			<h2 className="text-xl mb-4">Color Picker</h2>
			<input
				type="color"
				value={color}
				onChange={(e) => setColor(e.target.value)}
				className="w-full h-20 bg-transparent cursor-pointer"
			/>
			<p className="mt-2">Selected: {color}</p>
		</div>
	);
};

type CounterCardProps = {
	count: number;
	onIncrease: () => void;
	onDecrease: () => void;
};

const CounterCard = ({ count, onIncrease, onDecrease }: CounterCardProps) => {
	return (
		<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
			<h2 className="text-xl mb-4">Counter</h2>
			<div className="flex items-center justify-between gap-4">
				<button
					onClick={onDecrease}
					className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
				>
					-
				</button>
				<span className="text-2xl font-bold">{count}</span>
				<button
					onClick={onIncrease}
					className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
				>
					+
				</button>
			</div>
			<p className="mt-2">Current value: {count}</p>
		</div>
	);
};

type SuperExpensiveComponentProps = {
	config: {
		nrOfElements: number;
		shuffleColor: boolean;
	};
};

const SuperExpensiveComponent = ({
	config,
	children,
}: PropsWithChildren<SuperExpensiveComponentProps>) => {
	const elements = Array.from({ length: config.nrOfElements }, (_, i) => i);

	const getColor = (index: number) => {
		const hue = (index * 10) % 360;
		return `hsl(${hue}, 70%, 60%)`;
	};

	return (
		<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
			<h2 className="text-xl mb-4">10,000 Elements Grid</h2>
			{children}
			<div className="h-[400px] overflow-y-auto bg-gray-900 rounded p-2">
				<div className="grid grid-cols-12 gap-1">
					{elements.map((num) => (
						<div
							key={num}
							style={{
								backgroundColor: config.shuffleColor
									? getColor(num)
									: undefined,
							}}
							className="aspect-square rounded transition-all duration-200 hover:scale-105 hover:z-10 flex items-center justify-center text-[10px] font-medium text-white/90 shadow-sm"
						>
							{num}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const ChildComponent = () => {
	return <div>Child</div>;
};

export default function StateContainer() {
	const [color, setColor] = useState("#ffffff");
	const [count, setCount] = useState(0);

	const onIncrease = () => {
		setCount(count + 1);
	};

	const onDecrease = () => {
		setCount(count - 1);
	};

	return (
		<div className="p-8">
			<h1 className="text-3xl mb-8 text-center" style={{ color }}>
				React Compiler Demo {count}
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<ColorPickerCard color={color} setColor={setColor} />
				<CounterCard
					count={count}
					onIncrease={onIncrease}
					onDecrease={onDecrease}
				/>
				<SuperExpensiveComponent
					config={{ nrOfElements: 10000, shuffleColor: true }}
				>
					<ChildComponent />
				</SuperExpensiveComponent>
			</div>
		</div>
	);
}
