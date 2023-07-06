const form = document.getElementById('form-nome');
let linhas = '';
const nome = [];
const telefone = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome-usuario');
    const inputTelefone = document.getElementById('telefone-usuario');

    if (telefone.includes(inputTelefone.value)) {
        alert(`O telefone: ${inputTelefone.value} já existe!`);
    } else {
        nome.push(inputNome.value);
        telefone.push(inputTelefone.value);

        let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    const corporTabela = document.querySelector('tbody');
    corporTabela.innerHTML = linhas;

    inputNome.value = '';
    inputTelefone.value = '';
}