export default function BtnCadastro(props) {
	return (
		<button
			onClick={() => props.onclick()}
			className="w-32 h-12 rounded-md text-sm font-semibold text-white duration-200 bg-green-600 hover:bg-green-500 hover:underline">
			{props.children}
		</button>
	)
}