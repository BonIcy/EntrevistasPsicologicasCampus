import config from "../storage/config.js";

setTimeout(function(){
    config.dataMyCampers();
    Object.assign(this, JSON.parse(localStorage.getItem("myCampers")))
    let form = document.querySelector("#nueva-entrevista")
    let contEn= document.querySelector("#entrevistas")
    let nombre = document.querySelector(`#camper`);
    let psicologa = document.querySelector(`#psicologa`)
    let fecha = document.querySelector(`#fecha`)
    let hora = document.querySelector(`#hora`)
    let resultados= document.querySelector(`#resultados`)
    let info={
        name: "",
        psicolo:"",
        date:"",
        time:"",
        result:"",
    }
    console.log(info);
    class Interviews{
        constructor(){
            this.interviews =[]
        }
        addInterview(interview){
            this.interviews = [...this.interviews, interview];
            console.log(this.interviews);
        }
    }
    class UserInterface{
        printAlert(message, type){
            //crear div
            let divMsg = document.createElement(`div`);
            divMsg.classList.add("text-center", `alert`, "d-block", "col-12")
            if(type === "error"){
                divMsg.classList.add(`alert-danger`)
            }
            else{
                divMsg.classList.add(`alert-sucess`)
            }
            divMsg.textContent = message
            //meter en el DOM 
            document.querySelector("#contenido").insertAdjacentHTML(`afterbegin`,divMsg)
            //
            setTimeout(()=>{
                divMsg.remove()
            }, 3000)
        }
        printInterviews({interviews}){
            interviews.forEach((interview)=>{
                let {name, psicolo, date, time, result} = interview
                let interviewHTML = document.createElement (`p`)
                interviewHTML.innerHTML = `
                
                <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="img/${camper.imagen}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${psicolo}</p>
        <p class="card-text"><small class="text-body-secondary">${date}</small></p>
        <p class="card-text"><small class="text-body-secondary">${time}</small></p>
        <p class="card-text">${result}</p>
      </div>
    </div>
  </div>
</div>
 `;
 contEn.appendChild(interviewHTML);
            })
        }
    }
    let interviewsManager = new Interviews();
    let userInterface = new UserInterface();
    form.addEventListener(`submit`, nuevaEntrevista)
    function nuevaEntrevista(e){
        e.preventDefault();
        let {name, image, psicolo, date, time, result} = info
        if(name === "" || image === "" || psicolo === "" || date === "" || time === "" || result ===""){
            userInterface.printAlert("Es obligatorio llenar todos los campos", "error");
        }
        info.id = Date.now()
        interviewsManager.addInterview({...info})

        form.reset()
         reiniciarObjeto();

         userInterface.printInterviews(interviewsManager);
    }
    function reiniciarObjeto(){
        info.name = "",
        info.psicolo
        info.date = "",
        info.time = "",
        info.result = ""
     }
    eventListeners();
    function eventListeners(){
        nombre.addEventListener(`change`, datosEntrevista,)
        nombre.addEventListener(`input`, (e) =>{
            info.name= e.target.value
        })
        psicologa.addEventListener('change', datosEntrevista)
        psicologa.addEventListener(`input`, (e) =>{
            info.psicolo= e.target.value
        })
        fecha.addEventListener('change', datosEntrevista)
        fecha.addEventListener(`input`, (e) =>{
            info.date= e.target.value
        })
        hora.addEventListener('change', datosEntrevista)
        hora.addEventListener(`input`, (e) =>{
            info.time= e.target.value
        })
        resultados.addEventListener('change', datosEntrevista)
        resultados.addEventListener(`input`, (e) =>{
            info.result= e.target.value
        })
    }
    function datosEntrevista(e){
        console.log(e.target.value);
        info[e.target.name] = e.target.value
    }

}, 1000);
