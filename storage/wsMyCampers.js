let wsMyCampers = {
    listCampers(p1){
        let plantilla=  p1.map((camper)=>{ //se pone cualquier valor dentro del map(justo aqui), es para crear el parametro
        //destructuring
        let {imagen, nombre, edad, promedio, nivelCampus, nivelIngles, especialidad, expertoTecnologia, detalle, id} = camper; //solo necesitamos llamar las variables abajo 
            return`
                <option value="${nombre}">${nombre}</option>
                `
        })    
        return plantilla.join("") 
    }
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyCampers[`${e.data.module}`](e.data.data))
})