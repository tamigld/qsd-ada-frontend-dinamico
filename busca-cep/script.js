const inputCEP = document.querySelector('input');
const buttonCEP = document.querySelector('button');
const divCEP = document.querySelector('#container');

const isNull = (data) => {
    if(!data){
        return "Informação não localizada." 
    } else {
        return data
    }
}


const searchCEP = () => {
    let cepNumber = inputCEP.value;

    if(!cepNumber){
        alert("Digite um CEP.")
    } else if(cepNumber.length !== 8){
        alert("Digite um CEP válido")
    } else{
        fetch(`https://viacep.com.br/ws/${cepNumber}/json/`)
            .then((response) => {
                response.json()
                    .then((data) => {
                        console.log(data);
                        if (data.erro) {
                           console.error("Ocorreu um erro.")
                        } else {    
                            let address = isNull(data.logradouro);
                            let cep = isNull(data.cep);
                            let ddd = isNull(data.ddd);
                            let complement = isNull(data.complemento);
                            let district = isNull(data.bairro);
                            let city = isNull(data.localidade);
                            let uf = isNull(data.uf);
    
                            divCEP.innerHTML = 
                                `   <h4><b>Resultado de Pesquisa <br>CEP ${cep}</b></h4>
                                    <p><b>DDD:</b> ${ddd}</p>
                                    <p><b>Logradouro:</b> ${address}</p>
                                    <p><b>Bairro:</b> ${district}</p>
                                    <p><b>Complemento:</b> ${complement}</p>
                                    <p><b>Cidade:</b> ${city}</p>
                                    <p><b>UF:</b> ${uf}</p>
                                `;

                            inputCEP.value = ''
                        }
                    }).catch((error) => {
                        console.log("Algo deu errado");
                    })
            });
    }
}


buttonCEP.addEventListener('click', searchCEP);