const indiceDaLista = 0

function Adicionar() {
  const inputDoUsuario = document.getElementById('texto-usuario')
  const textoDigitado = inputDoUsuario.value

  inputDoUsuario.value = ''

  const lista = document.getElementById('lista')

  lista.innerHTML += `
          <div
          id="item">
                <input type="checkbox" name="item-${indiceDaLista}">
                <div class='separadora'> <p> ${textoDigitado}</p>
                 <button id='button-remove'onclick='Remover(this)'><i class="fa-solid fa-xmark"></i></button>
                 </div>
            </div>
            `

  indiceDaLista++
}

function Remover(objeto) {
  objeto.parentElement.parentElement.remove()
}
