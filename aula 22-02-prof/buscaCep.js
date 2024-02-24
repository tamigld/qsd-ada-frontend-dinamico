const inputCEP = document.querySelector('input');
const buttonCEP = document.querySelector('button');
const divCEP = document.querySelector('div');

const searchCEP = () => {
    let cepNumber = inputCEP.value;
    fetch(`https://viacep.com.br/ws/${cepNumber}/json/`)
        .then((response) => {
            response.json()
                .then((data) => {
                    console.log(data);
                    if (data.erro) {
                       console.log('error')
                    } else {
                        let address = data.logradouro;
                        let newDiv = document.createElement('div');
                        newDiv.innerHTML = address;
                        divCEP.appendChild(newDiv);
                    }
                }).catch((erro) => {
                    console.log("algo deu errado");
                })
        });


}


buttonCEP.addEventListener('click', searchCEP);