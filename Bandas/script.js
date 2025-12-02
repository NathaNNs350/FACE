/* Guns */

function Sweet(){
    const modal = document.getElementById("janela_guns")
    modal.classList.add("abrir")

    modal.addEventListener("click", (e)=>{
        if(e.target.id == "fecha"){
            modal.classList.remove("abrir")
        }
    }
)
}

function Doubt(){
    const modal = document.getElementById("modal_twenty")
    modal.classList.add("abrir")
}

/* Twenty One Pilots */

function p1_twenty() {
  const p1a = document.getElementById('rsp_p1_a');
  const p1b = document.getElementById('rsp_p1_b');
  const radioA = document.getElementById('p1_twenty_a');

  if (radioA.checked) {
    p1a.classList.add('exibir');
    p1b.classList.remove('exibir');
  } else {
    p1a.classList.remove('exibir');
    p1b.classList.add('exibir');
  }
}

function Jude(){
    const modal = document.getElementById("modal_Beatles")
    modal.classList.add("abrir")
}