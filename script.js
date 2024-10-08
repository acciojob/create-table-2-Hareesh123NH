function createTable() {
    //Write your code here
	const table=document.getElementById("myTable");
	let rn=prompt("Input number of rows");
	let cn=prompt("Input number of columns");
	for(let i=0;i<rn;i++){
		const row=document.createElement("tr");
		for(let j=0;j<cn;j++){
			const col=document.createElement("td");
			col.innerText=`Row-${i} Column-${j}`;
			row.appendChild(col);
		}
		table.appendChild(row);
	}
}
