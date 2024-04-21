import { useEffect, useState } from "react";
import TextInput from "./inputs/TextInput";
import H3 from "./headers/H3";
import BtnCadastro from "./buttons/BtnCadastro";

export default function Cadastro() {
	const [Nome, setNome] = useState();
	const [Sobrenome, setSobrenome] = useState();
	const [Email, setEmail] = useState();
	const [ConfirmacaoEmail, setConfirmacaoEmail] = useState();
	const [Telefone, setTelefone] = useState();
	const [Instituicao, setInstituicao] = useState();

	return (
		<div className="mt-8 shadow-sm p-5 rounded-3xl shadow-gray-600 w-full lg:w-11/12">
			<H3>Informação do Participante</H3>
			<div className="flex flex-wrap relative top-4 justify-between">
				<TextInput label="Nome" value={Nome} onchange={setNome} />
				<TextInput label="Sobrenome" value={Sobrenome} onchange={setSobrenome} />
				<TextInput label="E-mail" value={Email} onchange={setEmail} />
				<TextInput label="Confirmação do E-mail" value={ConfirmacaoEmail} onchange={setConfirmacaoEmail} />
				<TextInput mask="(99) 99999-9999" placeholder="(00) 00000-0000" label="Telefone" value={Telefone} onchange={setTelefone} />
				<TextInput label="Instituição" value={Instituicao} onchange={setInstituicao} />
				<div className="w-full h-20 flex justify-end items-center">
					<BtnCadastro>PARTICIPAR</BtnCadastro>
				</div>
			</div>
		</div>
	)
}