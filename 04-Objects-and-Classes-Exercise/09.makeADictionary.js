function solve(jsons) {
    let obj = new Object();

    for (let row of jsons) {
        row = JSON.parse(row);
        obj[Object.keys(row)] = Object.values(row);
    }

    Object.keys(obj)
      .sort()
      .forEach(function(v, i) {
        console.log(`Term: ${v} => Definition: ${obj[v]}`)
       });
}


solve([

    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
    
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ',

    '{"Art":"dasdsad"} '
    
    ]
);