function toObject(json){
    let obj = JSON.parse(json);

    let objInfo = Object.entries(obj);

    for (let [key, value] of objInfo){
        console.log(`${key}: ${value}`);
    }
}