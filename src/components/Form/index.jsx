import React from 'react'

export default function Form() {
  return (
    <div>
      <h2>Formulário</h2>
      <form>
        <div>
          <div>
            <label htmlFor="height">Altura</label>
            <input type="number" id='height' />
          </div>

          <div>
            <label htmlFor="width">Largura</label>
            <input type="number" id='width' />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="door">Porta</label>
            <input type="number" id='door' />
          </div>

          <div>
            <label htmlFor="window">Janela</label>
            <input type="number" id='window' />
          </div>
        </div>
      </form>
    </div>
  )
}
