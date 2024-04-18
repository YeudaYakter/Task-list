



let shoplist_ar = [];

window.onload = function () {

    
    
    time();
    createProducsts();
    
    onAdd.onclick = function () {
        time();
        let obg = {
            name: id_h1.value,
            opject: id_h2.value,
            time: time_now,
        }
        shoplist_ar.push(obg)
        localStorage.setItem(obg.name, obg.opject )
        x.push(localStorage.getItem(`${obg.name}`))
        // document.querySelector("#chek").innerHTML = x
        document.querySelector('#id_h1').value = ""
        document.querySelector('#id_h2').value = ""
        createProducsts()
        createProducsts2()
        
        
        
    }
}

let x =[]
// function createProducsts2() {  
//     document.querySelector("#chek").innerHTML = ""
//       for (let i = 0; i < shoplist_ar.length; i++) {
//     let item = shoplist_ar[i];
//   localStorage.setItem(`${item.name}`,`${[item.name ,item.opject, item.time]}`);
   
 
//  x.push(localStorage.getItem(`${item.name}`))
// document.querySelector("#chek").innerHTML = x

//   }
  
// }


function createProducsts() {
    document.querySelector("#id_row").innerHTML = "";
    for (let i in shoplist_ar) {
        let item = shoplist_ar[i];
        localStorage.setItem(`${item.name}`,`${[item.name ,item.opject, item.time]}`);
        document.querySelector("#id_row").innerHTML += "<h1 class=border>" + item.name + "</h1>";
        document.querySelector("#id_row").innerHTML += "<h2>" + item.opject + "</h2>";
        document.querySelector("#id_row").innerHTML += "<h2>" + item.time + "</h2>";
        
        
        let id_row2 = document.querySelector("#id_row");
        let mybtn = document.createElement("button");
        mybtn.innerHTML = 'delete';
        id_row2.appendChild(mybtn);
        mybtn.onclick = function () { del() }
        // let mybtn2 = document.createElement("button");
        // mybtn2.innerHTML = 'marcer';
        // id_row2.appendChild(mybtn2);
        // mybtn2.addEventListener("click", function () { alert("אנא אשר כניסה") })
    }
    
}

function Product(_id_h1, _id_h2, _time) {
    this.name = _id_h1;
    this.project = _id_h2;
    this.time = _time;
}

function del() {
    console.log("del pressed")
    shoplist_ar.pop()
    createProducsts()
}

function time() {
    let now = new Date();
    time_now = now.toLocaleTimeString();

}






