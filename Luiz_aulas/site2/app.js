// Função para buscar o CEP na API ViaCEP
async function buscarCep(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const data = await response.json();
        if (data.erro) {
            return null; // CEP não encontrado
        }
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Função para atualizar o resultado na página
function mostrarResultado(data) {
    const resultDiv = document.getElementById('result');
    if (!data) {
        resultDiv.textContent = 'CEP não encontrado ou inválido.';
        return;
    }
    // Monta uma string com os dados do endereço
    resultDiv.innerHTML = `
        <p><strong>CEP:</strong> ${data.cep}</p>
        <p><strong>Logradouro:</strong> ${data.logradouro}</p>
        <p><strong>Bairro:</strong> ${data.bairro}</p>
        <p><strong>Cidade:</strong> ${data.localidade}</p>
        <p><strong>Estado:</strong> ${data.uf}</p>
    `;
}

// Configura o evento do botão
document.getElementById('b1').addEventListener('click', async () => {
    const cepInput = document.getElementById('colCep').value.trim();
    if (cepInput === '') {
        alert('Por favor, digite um CEP.');
        return;
    }
    // Opcional: validar formato do CEP (apenas números e 8 dígitos)
    const cepValido = /^[0-9]{8}$/.test(cepInput);
    if (!cepValido) {
        alert('Digite um CEP válido com 8 números.');
        return;
    }

    mostrarResultado('Carregando...');
    const dados = await buscarCep(cepInput);
    mostrarResultado(dados);
});