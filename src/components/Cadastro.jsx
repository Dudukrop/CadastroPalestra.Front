import { useEffect, useState } from "react";
import TextInput from "./inputs/TextInput";
import H3 from "./headers/H3";
import BtnCadastro from "./buttons/BtnCadastro";
import Loop from '@mui/icons-material/Loop';
import Notificacao from "./notificacoes/Notificacao";

export default function Cadastro() {
	const [Nome, setNome] = useState();
	const [Sobrenome, setSobrenome] = useState();
	const [Email, setEmail] = useState();
	const [ConfirmacaoEmail, setConfirmacaoEmail] = useState();
	const [Telefone, setTelefone] = useState();
	const [Instituicao, setInstituicao] = useState();
	const [Error, setErro] = useState("");
	const [Sending, setSending] = useState(false);
	const [Notification, setNotification] = useState(false);

	function FormatarTelefone(telefone) {
		return telefone?.replace('(', '').replace(')', '').replace('-', '').replace(' ', '').replace('_', '');
	}

	function CadastrarParticipante() {
		setSending(true)
		fetch("cadastropalestraapi-production.up.railway.app/Home/Post", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: Nome + Sobrenome,
				email: Email,
				confirmacaoEmail: ConfirmacaoEmail,
				contato: FormatarTelefone(Telefone),
				Instituicao: Instituicao
			})
		})
			.then(response => {
				if (!response.ok) {
					response.json().then(json => {
						json.errors?.Instituicao !== undefined ? setErro(json.errors.Instituicao[0]) : ""
						json.errors?.Contato !== undefined ? setErro(json.errors.Contato[0]) : ""
						json.errors?.ConfirmacaoEmail !== undefined ? setErro(json.errors.ConfirmacaoEmail[0]) : ""
						json.errors?.Email !== undefined ? setErro(json.errors.Email[0]) : ""
						json.errors?.Name !== undefined ? setErro(json.errors.Name[0]) : ""
						json.exception !== undefined ? setErro(json.exception[0]) : ""
					})
				}
				else {
					setErro("")
					setNotification(true)
				}
				setSending(false)
			})
			.catch(error => {
				setErro("Não foi possível adicionar o participante. Tente novamente mais tarde.")
			});
	}

	return (
		<div className="mt-8 shadow-sm p-5 rounded-3xl shadow-gray-600 w-full lg:w-11/12">
			<H3>Informação do Participante</H3>
			<div className="flex flex-wrap relative top-4 justify-between">
				<TextInput obrigatorio={true} label="Nome" value={Nome} onchange={setNome} />
				<TextInput label="Sobrenome" value={Sobrenome} onchange={setSobrenome} />
				<TextInput obrigatorio={true} label="E-mail" value={Email} onchange={setEmail} />
				<TextInput obrigatorio={true} label="Confirmação do E-mail" value={ConfirmacaoEmail} onchange={setConfirmacaoEmail} />
				<TextInput obrigatorio={true} mask="(99) 99999-9999" placeholder="(00) 00000-0000" label="Telefone" value={Telefone} onchange={setTelefone} />
				<TextInput obrigatorio={true} label="Instituição" value={Instituicao} onchange={setInstituicao} />
				<div className="w-full h-20 flex justify-center items-end flex-col">
					{
						Sending
							?
							<BtnCadastro>{<Loop />}</BtnCadastro>
							:
							<BtnCadastro onclick={CadastrarParticipante}>PARTICIPAR</BtnCadastro>
					}
					<span className="text-xs text-red-600 relative top-2">{Error}</span>
					<Notificacao open={Notification} close={setNotification} message="Participação feita com sucesso!" />
				</div>
			</div>
		</div>
	)
}