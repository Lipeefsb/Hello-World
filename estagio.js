import fs from 'node:fs'

for (let ano =2025; ano <= 2031; ano++){
    let meses = []

    if (ano===2025){
        meses.push(7,12);

    } else{
        meses.push(1,12);

    }

    for(let mes = meses[0]; mes <= meses[1];mes++){
        const dataReferencia = new Date(`${mes}/01/${ano}`);

        const anoAtual = dataReferencia.getFullYear();
        const mesNumerico = new Intl.DateTimeFormat('pt-BR', {month:'2-digit'}).format(dataReferencia);
        const mesPorExtenso = new Intl.DateTimeFormat('pt-BR', {month: 'long'}).format(dataReferencia);
        const mesPorExtenso2 = mesPorExtenso.charAt(0).toUpperCase() + mesPorExtenso.slice(1);

        const pathMonths = `${mesNumerico}-${mesPorExtenso2}`
        const pathAbsolute = `C:/Teste_Estagio`;

        let caminhoCriado = `${pathAbsolute}/${anoAtual}/${pathMonths}`;

        try{

            await fs.promises.mkdir(caminhoCriado, {recursive: true})
            let mesAtual = dataReferencia.getMonth()+1;

            if (mesAtual === 1){
                mesAtual = "Primeiro"

            }
            let arquivoPath = 
            mesAtual === "Primeiro" ?
            `${caminhoCriado}/${mesAtual}.log` :
            `${caminhoCriado}/Log${anoAtual}${mesNumerico}01.log`

            console.log(arquivoPath);

            await fs.promises.writeFile(arquivoPath, '')






        } catch(err){
            console.error(`Erro no processamento de arquivos: ${err.message}`);



        }




    }





}
console.log("CAMINHOS CRIADOS. PARABÉNS!!!")