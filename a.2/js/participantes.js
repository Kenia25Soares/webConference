const renderParticipants = async () => {
  /*const urlBase = "https://fcawebbook.herokuapp.com"
  const response = await fetch(`${urlBase}/conferences/1/participants`)
  const participants = await response.json()*/
  const tblParticipantes = document.getElementById("tblParticipants")
  const participants = [
    { idParticipant: 1, emailParticipante: 'ricardo.queiros@gmail.com', nomeParticipante: 'Ricardo Queirós' },
    { idParticipant: 2, emailParticipante: 'r@r.pt', nomeParticipante: 'Sss' },
    { idParticipant: 3, emailParticipante: 'portela.mis@gmail.com', nomeParticipante: 'Filipe Portela' }
  ]
  
  let strHtml = `
    <thead >
    <tr><th class='w-100 text-center bg-warning' colspan='4'>
      Lista de Participantes</th>
    </tr>
    <tr class='bg-info'>
       <th class='w-2'>#</th>
       <th class='w-50'>Nome</th>
       <th class='w-38'>E-mail</th>
       <th class='w-10'>Ações</th>
    </tr>
    </thead><tbody>`

    let i = 1
    for (const participant of participants) {
      strHtml += `
      <tr>
      <td>${i}</td>
      <td>${participant.nomeParticipante}</td>
      <td>${participant.emailParticipante}</td>
      <td><i id='${participant.idParticipant}' class='fas fa-trash-alt remove'></i>
      </td>
      </tr>`
      i++
    }
      strHtml += `</tbody>`

    tblParticipantes.innerHTML = strHtml

    const btnDelete = document.getElementsByClassName("remove")
    for (let i = 0; i < btnDelete.length; i++) {
      btnDelete[i].addEventListener("click", () => {
        // Invocação de janela modal para a confirmar remoção
        swal({
          title: 'Tem a certeza?',
          text: "Não será possível reverter a remoção!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Remover'
        }).then(async (result) => {
          if (result.value) {
            // Pedido HTTP para remoção de inscrição
            let participantId = btnDelete[i].getAttribute("id")
            try {
              const response = await
              fetch(`${urlBase}/conference/1/participants/${participantId}`, {
            method: "DELETE"
              })
              const isRemoved = await response.json()
              swal('Remoção de Inscrição',
                isRemoved.message.pt,
                (isRemoved.success) ? 'success': 'error')
                renderParticipants()
            } catch (err) {
              swal({type: 'error', title: 'Remoção de Inscrição', text: err })
            }
            
          }
        })
       })
    }
}
document.addEventListener("DOMContentLoaded", renderParticipants);
