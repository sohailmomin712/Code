const TableData = JSON.parse(localStorage.getItem('Data')) || [];

const AppendData = () => {
  const body = document.querySelector("body");
  const table = document.querySelector("table");
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  TableData.forEach((elem, index) => {
    //    console.log(elem)
    const tr1 = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = elem.id;
    const td2 = document.createElement("td");
    td2.textContent = elem.Name;
    const td3 = document.createElement("td");
    td3.textContent = elem.PhoneNo;
    const td4 = document.createElement("td");
    td4.textContent = elem.Email;
    const td5 = document.createElement("button");
    td5.textContent = "Delete";
    td5.style.border = "1px solid #add";
    td5.style.backgroundColor = "red";
    td5.style.color = "white";
    td5.style.padding = "12px 15px";
    td5.style.cursor = "pointer";
    td5.style.width = '100%'
    td5.style.fontFamily = 'Arial, sans-serif;'
  
    td5.onclick = () => DeleteData(elem, index);

    tr1.append(td1, td2, td3, td4, td5);
    tbody.append(tr1);
    table.append(tbody);
    body.append(table);
  });
  const JsonData = JSON.stringify(TableData)
  localStorage.setItem('Data', JsonData)
};
const DeleteData = (elem, index) => {
  //   console.log("the loop will provide", elem);
  //   console.log("the loop will provide", index);
  let isDeleted = elem.IsDelete;
  isDeleted = true;
  //   console.log(isDeleted);
  if (isDeleted) {
    TableData.splice(index, 1);
    AppendData();
  } else {
    return alert("data is not deleted");
  }
};

AppendData();
// localstorage.getitem("key")
// localStorage.setItem("key",JSON.parse(data));
// [
//   {
//       "id": 1,
//       "Name": "Sohail",
//       "PhoneNo": 9696969696,
//       "Email": "Sohail@gmail.com",
//       "IsDelete": false
//   },
//   {
//       "id": 2,
//       "Name": "Ali",
//       "PhoneNo": 9696969696,
//       "Email": "Ali@gmail.com",
//       "IsDelete": false
//   },
//   {
//       "id": 3,
//       "Name": "Sufi",
//       "PhoneNo": 9696969696,
//       "Email": "Sufi@gmail.com",
//       "IsDelete": false
//   },
//   {
//       "id": 4,
//       "Name": "Azim",
//       "PhoneNo": 9696969696,
//       "Email": "Azim@gmail.com",
//       "IsDelete": false
//   },
//   {
//       "id": 5,
//       "Name": "Kalim",
//       "PhoneNo": 9696969696,
//       "Email": "Kalim@gmail.com",
//       "IsDelete": false
//   }
// ]
