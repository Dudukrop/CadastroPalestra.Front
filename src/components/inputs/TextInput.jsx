import InputMask from 'react-input-mask';

export default function TextInput(props) {
	return (
		<div className="h-20 my-3 min-w-40 w-full lg:w-[49%]">
			<label className="relative bottom-1 text-gray-600 font-bold text-xs">
				{props.label}
				{
					props.obrigatorio ?
						<span className="text-red-600 text-lg ml-1 relative top-1">*</span>
						:
						<span className="text-red-600 text-lg ml-1 relative top-1"></span>
				}
			</label>
			<InputMask
				mask={props.mask}
				value={props.value}
				onChange={(e) => props.onchange(e.target.value)}
				className="border rounded-md border-gray-500 w-full h-12 pl-1"
				type="text"
				placeholder={props.placeholder}
			/>
		</div >
	)
}