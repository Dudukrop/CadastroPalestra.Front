import H2 from "./headers/H2";
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';

export default function Footer(props) {
	return (
		<footer className="w-full h-20 bg-blue-500 mt-24">
			<div className="w-5/6 m-auto relative top-4 flex flex-col items-center">
				<div>
					<Instagram />
					<LinkedIn />
				</div>
				<div>
					© Copyright 2024
				</div>
			</div>
		</footer>
	)
}