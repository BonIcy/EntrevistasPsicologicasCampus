import config from "../storage/config.js";
export default{
    show(){
    config.dataMyCampers();
    Object.assign(this, JSON.parse(localStorage.getItem("myCampers")))
    const ws = new Worker("storage/wsMyCampers.js", {type: "module"});
    let id= [];
    let count = 0;
    ws.postMessage({module: "listCampers", data: this.campers});
    id=["#camper"];
    ws.addEventListener("message", (e)=>{
        let doc = new DOMParser().parseFromString(e.data, `text/html`)
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==count) ? ws.terminate():count++;
    })
    },
}

