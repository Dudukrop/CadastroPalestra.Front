export default function H2(props) {
	return (
		<h2 className={`text-3xl font-bold ${props.textColor ?? "text-black"}`}>
			{props.children}
		</h2>
	)
}