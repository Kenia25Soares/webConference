
window.onload = function() {
  const btnRegister = document.getElementById("btnRegister"); 
  /*
  btnRegister.addEventListener("click", function() {
    swal({
      title: "Inscrição na WebConference",
      html: '<input id="txtName" class="swal2-input" placeholder="name">' +
             '<input id="txtEmail" class="swal2-input" placeholder="e-mail">',
      showCancelButton: true,
      confirmButtonText: "Inscrever",
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const name = document.getElementById('txtName').value;
        const email = document.getElementById('txtEmail').value;
        const url_base = "https://fcawebbok.herokuapp.com";

        return fetch(`${url_base}/conferences/1/participants/${email}`, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            method: "POST",
            body: `nomeparticipant=${name}`
          })
          .then(response => {
          if (!response.ok) {
          throw new Error(response.statusText);
          }
          return response.json();
        })
        .catch(error => {
          swal.showValidatinError(`Pedido falhou: ${error}`);
        });
    },
    allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
      if (result.value) {
        if (!result.value.err_code) {
          swal({title: "Inscrição feita com secesso!"})
        } else {
          swal({title: `${result.value.err_message}`})
        }
      }
    })
  })
  */

  ( async () => {
    const renderSpeakers = document.getElementById("renderSpeakers")
    let txtSpeakers = ""
    const speakers = [
      {
        "idSpeaker": 1,
        "nome": "Kay Garland",
        "cargo": "Lead Desinhner",
        "foto": "https://randomuser.me/api/portraits/women/1.jpg",
        "twitter": "https://twitter.com/kay_garland",
        "facebook": "https://facebook.com/kay_garland",
        "linkedin": "https://linkedin.com/in/kay_garland"
      },
      {
        "idSpeaker": 2,
        "nome": "Larry Parker",
        "cargo": "Lead Marketer",
        "foto": "https://randomuser.me/api/portraits/men/1.jpg",
        "twitter": "https://twitter.com/larry_parker",
        "facebook": "https://facebook.com/larry_parker",
        "linkedin": "https://linkedin.com/in/larry_parker"
      },
      {
        "idSpeaker": 3,
        "nome": "Diana Pertersen",
        "cargo": "Lead Developer",
        "foto": "https://randomuser.me/api/portraits/women/2.jpg",
        "twitter": "https://twitter.com/diana_pertersen",
        "facebook": "https://facebook.com/diana_pertersen",
        "linkedin": "https://linkedin.com/in/diana_pertersen"
      },
      {
        "idSpeaker": 4,
        "nome": "Daniel Ferreira",
        "cargo": "Engenheiro de Software",
        "foto": "https://randomuser.me/api/portraits/men/2.jpg",
        "twitter": "https://twitter.com/daniel_ferreira",
        "facebook": null,
        "linkedin": null
      }
    ]
    

    for (const speaker of speakers) {
      txtSpeakers += `
      <div class="col-sm-4">
        <div class="team-member">
          <img id="${speaker.idSpeaker}" class="mx-auto rounded-circle viewSpeaker" src="${speaker.foto}" alt="">
          <h4>${speaker.nome}</h4>
          <p class="text-muted">${speaker.cargo}</p>
          <ul class="list-inline social-buttons">`
          if (speaker.twitter!==null) {
            txtSpeakers += `
            <li class="list-inline-item">
              <a href="${speaker.twitter}" target="_blank">
                <i class= "fab fa-twitter"></i>
              </a>
            </li>`
          }
          if (speaker.facebook!==null) {
            txtSpeakers += `
            <li class="list-inline-item">
              <a href="${speaker.facebook}" target="_blank">
              <i class= "fab fa-facebook"></i>
              </a>
            </li>`
          }
          if (speaker.linkedin!==null) {
            txtSpeakers += `
            <li class="list-inline-item">
              <a href="${speaker.linkedin}" target="_blank">
              <i class="fab fa-linkedin-in"></i>
              </a>
            </li>`
          }   
          txtSpeakers +=`
          </ul>
        </div>
      </div>
    `
  }
  renderSpeakers.innerHTML = txtSpeakers

  

  const btnView = document.getElementsByClassName("viewSpeaker")
  for (let i = 0; i < btnView.length; i++) {
  btnView[i].addEventListener("click", () => {
    for (const speaker of speakers) {
      if (speaker.idSpeaker == btnView[i].getAttribute("id")) {
        // janela modal
        swal({
            title: speaker.nome,
            text: speaker.bio,
            imageUrl: speaker.foto,
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'img 5 conf.jpg',
            animation: false
          });
      }
    }
  }) 
  }

  const renderSponsor= document.getElementById("renderSponsors")
  let txtSponsors = ""
  /* const response = await fetch(`${urlBase}/conferences/1/sponsors`) */
  /* eu sou a maior */
  const sponsors = [
    {
      "nome": "Google",
      "link": "https://www.google.com",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
      "nome": "Facebook",
      "link": "https://www.facebook.com",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
      "nome": "Apple",
      "link": "https://www.apple.com",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
      "nome": "Microsoft",
      "link": "https://www.microsoft.com",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    }
  ]  
    
  for (const sponsor of sponsors) {
    txtSponsors +=`
    <div class="col-md-3 col-sm-6">
     <a href="${sponsor.link}" target="_blank">
       <img class="img-fluid d-block mx-auto"
        src="${sponsor.logo}"
        alt="${sponsor.nome}" width="100" height="40">
     </a>
    </div>` 
  }   
  renderSponsor.innerHTML = txtSponsors

  const btnLogin = document.getElementById("btnLogin")
  btnLogin.addEventListener("click", () => {
      //Janela modal
      fetch(`${urlBase}/signin`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        body: `email=${email}&password=${pass}`
      })

      sessionStorage.token = email

    if(!sessionStorage.token) {
      //utilizador sem acesso á pagina
    } else {
      // acesso á pagina
    }
    }
  })
  }) ()

  /* const contactForm =document.getElementById("contactForm")
  contactForm.addEventListener("submit", async () => {
    const name = document.getElementById("name").value 
    const email = document.getElementById("email").value 
    const message = document.getElementById("message").value 
    const response = await fetch(`${urlBase}/contacts/emails`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST",
    body: `email=${email}&name=${name}&subject=${message}`
    })
  const result = await response.json()
  if (result.value.success) {
      swal('Envio de mensagem', result.value.message.pt, 'success')
  } else {
    // Exibir modal com o erro
  }
  }) */
}


