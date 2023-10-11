
function addExp() {
    const arr = []
    var table = document.getElementById("show")
    var desc = document.getElementById("desc").value
    var cost = document.getElementById("cost").value
    var date = document.getElementById("date").value
    var bill = document.getElementById("Bill")
    var source = document.getElementById('source')
    var output1 = source.options[source.selectedIndex].innerText

    if (!desc || !cost || !date) {
        alert("Plz fill all information")
        return
    }
    var obj = {
        desc: desc,
        cost: Number(cost),
        date: date,
        source: output1
    }
    arr.push(obj)

    for (let i = 0; i < arr.length; i++) {
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        var td4 = document.createElement("td")


        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        table.appendChild(tr)

        td1.innerHTML = arr[i].desc
        td2.innerHTML = arr[i].cost
        td3.innerHTML = arr[i].date
        td4.innerHTML = arr[i].source
        console.log('cost --> ', typeof(cost), typeof(bill.innerHTML))
        
        let total = parseInt(cost) + parseInt(bill.innerHTML); 
        bill.innerHTML = String(Number(cost) + Number(bill.innerHTML))
        

    }

   
}


function clearResult() {
    var desc = document.getElementById("desc")
    var cost = document.getElementById("cost")
    var date = document.getElementById("date")
    desc.value = " "
    cost.value = " "
    date.value = " "
}

