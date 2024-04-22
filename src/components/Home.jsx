import H2 from "./headers/H2";
import H3 from "./headers/H3";
import Information from "./informations/Information";
import Calendar from '@mui/icons-material/CalendarMonthOutlined';
import Location from '@mui/icons-material/LocationOnOutlined';

export default function Home() {
	return (
		<div className="w-full lg:mr-5">
			<Information>
				<H2>
					Workshop Inteligência Artificial
				</H2>
				<span className="flex mt-4">
					<Calendar />
					<span className="mx-1 text-indigo-600">04/06/2024 • 14:00</span>
				</span>
				<span className="flex mt-2">
					<Location />
					<span className="mx-1">Evento presencial no Auditório da Escola Modelo, Cabo de Santo Agostinho - PE</span>
				</span>
			</Information>
			<hr className="border-gray-400" />
			<Information>
				<H3>Local</H3>
				<span className="text-indigo-600">
					Auditório da Escola Modelo
				</span>
				<br />
				<span>
					Av. Ernestina Batista, 25
				</span>
				<br />
				<span>
					Cabo de Santo Agostinho - PE
				</span>
				<div className="mt-3 border border-indigo-600 w-fit">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.812745758676!2d-34.96663002609654!3d-8.221577991810959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae40f04b25577%3A0xecd867230dcd0664!2sAv.%20Ernestina%20Batista%2C%2025%20-%20Pontezinha%2C%20Cabo%20de%20Santo%20Agostinho%20-%20PE%2C%2054589-295!5e0!3m2!1spt-BR!2sbr!4v1713660406172!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
				</div>
			</Information>
			<hr className="border-gray-400" />
		</div>
	)
}