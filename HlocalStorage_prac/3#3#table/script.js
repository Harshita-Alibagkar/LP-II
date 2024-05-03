function createTable() {
    const table1Input = document.getElementById("table1Input").value;
    const table2Input = document.getElementById("table2Input").value;

    const tableRegex = /^(\d+)#(\d+)#(\d+)$/;

    if (!tableRegex.test(table1Input) || !tableRegex.test(table2Input)) {
        alert("Invalid input format. Please enter rows#columns#value (e.g., 3#3#3)");
        return;
    }

    const [rows1, cols1, val1] = table1Input.split("#").map(Number);
    const [rows2, cols2, val2] = table2Input.split("#").map(Number);

    const container = document.getElementById("container");
    container.innerHTML = "";

    function createTableElement(rows, cols, val) {
        const table = document.createElement("table");
        const header = document.createElement("tr");

        for (let i = 0; i < cols; i++) {
            const th = document.createElement("th");
            th.textContent = `Column ${i + 1}`;
            header.appendChild(th);
        }

        table.appendChild(header);

        const body = document.createElement("tbody");

        for (let i = 0; i < rows; i++) {
            const tr = document.createElement("tr");

            for (let j = 0; j < cols; j++) {
                const td = document.createElement("td");
                td.textContent = (val + j) * (i + 1);
                tr.appendChild(td);
            }

            body.appendChild(tr);
        }

        table.appendChild(body);
        return table;
    }

    const table1 = createTableElement(rows1, cols1, val1);
    const table2 = createTableElement(rows2, cols2, val2);

    container.appendChild(table1);
    container.appendChild(table2);

    if (table1Input === table2Input) {
        const table3 = table1.cloneNode(true);
        container.appendChild(table3);
    }
}
