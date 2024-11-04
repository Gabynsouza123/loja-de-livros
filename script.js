const livros = [
    { titulo: "O Alquimista", autor: "Paulo Coelho", preco: "R$ 29,90" },
    { titulo: "1984", autor: "George Orwell", preco: "R$ 39,90" },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", preco: "R$ 25,00" },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell", preco: "R$ 19,90" },
];

function exibirLivros() {
    const livrosDiv = document.getElementById('livros');
    livros.forEach(livro => {
        const livroDiv = document.createElement('div');
        livroDiv.classList.add('livro');
        livroDiv.innerHTML = `
            <h3>${livro.titulo}</h3>
            <p>Autor: ${livro.autor}</p>
            <p>Preço: ${livro.preco}</p>
        `;
        livrosDiv.appendChild(livroDiv);
    });
}

document.addEventListener('DOMContentLoaded', exibirLivros);
