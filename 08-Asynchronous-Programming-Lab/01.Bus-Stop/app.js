async function getInfo() {
    let stopId = document.getElementById('stopId').value;

    let info;

    let list = document.getElementById('buses');
    list.replaceChildren();

    try {
        info = await getBusInfo(stopId);
    } catch (err){
        onError();
        return
    }

    document.getElementById('stopName').textContent = info.name;

    

    for (let busId in info.buses) {
        let item = document.createElement('li');
        let time = info.buses[busId];

        item.textContent = `Bus ${busId} arrives in ${time} minutes`;

        list.appendChild(item);
    }
}

function onError(){
    document.getElementById('stopName').textContent = 'Error';

} 

async function getBusInfo(stopId) {
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    let res = await fetch(url);

    if (res.status == 204){
        throw new Error('No information for stop ' + stopId)
    }

    let data = await res.json();
    
    return data;
}