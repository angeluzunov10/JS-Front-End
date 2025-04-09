function solve(input) {
    let n = Number(input[0]);

    let farmers = {};

    for (let i = 1; i <= n; i++) {
        let [name, area, tasks] = input[i].split(' ');
        farmers[name] = {
            area: area,
            tasks: new Set(tasks.split(','))
        }
    }

    let actions = [];

    for (let i = n + 1; i <= input.length; i++) {
        actions.push(input[i])
    }

    for (let action of actions) {
        if (action === 'End') {
            break;
        }

        let actionParts = action.split(' / ');
        
        let command = actionParts.shift();
         
        if (command === "Execute") {
            let [farmerName, workArea, task] = actionParts;
            if (farmers[farmerName].area === workArea && farmers[farmerName].tasks.has(task)) {
                console.log(`${farmerName} has executed the task: ${task}!`);
            } else {
                console.log(`${farmerName} cannot execute the task: ${task}.`);
            }
        } else if (command == "Change Area"){
            let [farmerName, newArea] = actionParts;
            farmers[farmerName].area = newArea;
            console.log(`${farmerName} has changed their work area to: ${newArea}`);
        } else if (command == 'Learn Task'){
            let [farmerName, newTask] = actionParts;
            if (farmers[farmerName].tasks.has(newTask)){
                console.log(`${name} already knows how to perform ${newTask}.`);
            } else {
                farmers[farmerName].tasks.add(newTask);
                console.log(`${farmerName} has learned a new task: ${newTask}.`);
            }
        }
    }

    for (let farmer in farmers){
        let farmerArea = farmers[farmer].area;
        let farmerTasks = Array.from(farmers[farmer].tasks).sort().join(', ');

        console.log(`Farmer: ${farmer}, Area: ${farmerArea}, Tasks: ${farmerTasks}`);
    }
}

solve([

    "2",

    "John garden watering,weeding",

    "Mary barn feeding,cleaning",

    "Execute / John / garden / watering",

    "Execute / Mary / garden / feeding",

    "Learn Task / John / planting",

    "Execute / John / garden / planting",

    "Change Area / Mary / garden",

    "Execute / Mary / garden / cleaning",

    "End"

])