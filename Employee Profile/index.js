function formTable(data) {
    let writable_data = "<tr>";
    let properties = [];
    for (key in data[0]) {
        console.log(key);
        properties.push(key);
        writable_data += `<th> ${key}</th>`
    }
    writable_data += '</tr>'

    for (let i = 1; i < data.length; i++) {
        writable_data += "<tr>";
        for (let j = 0; j < properties.length; j++) {
                writable_data += `<td> ${data[i][properties[j]]}</td>`
        }
        writable_data += "</tr>";
    }
    console.log(data[0], typeof (data[0]));
    document.getElementById("target").innerHTML = writable_data;
}

fetch("./emp.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        formTable(data);
    });
