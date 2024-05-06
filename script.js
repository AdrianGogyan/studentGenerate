let studentsObj;

document.addEventListener("DOMContentLoaded", function(){

    studentsObj  = JSON.parse(localStorage.getItem("studentsObj")) || { studentsData: [] } ;
    //---< addon for a proplematic "Uncaught TypeError" message 
    if (!Array.isArray(studentsObj.studentsData)) {
        studentsObj.studentsData = [];
    }
    console.log(studentsObj.studentsData);

    displayAllStudents();
})

// todo1 generate new student
function generateNew() {
//   console.log("generateNew ... ok");
  const firstNames = [
    "Lukas",
    "Sophie",
    "Leon",
    "Lena",
    "Jonas",
    "Emma",
    "Paul",
    "Hannah",
    "Finn",
    "Anna",
  ];

  const lastNames = [
    "Müller",
    "Schmidt",
    "Schneider",
    "Fischer",
    "Weber",
    "Meyer",
    "Wagner",
    "Becker",
    "Schulz",
    "Hoffmann",
  ];

  const ageArray = [20, 21, 22, 23, 24, 35, 32, 31, 37, 28, 29, 36];

  const rFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const rLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const rAge = ageArray[Math.floor(Math.random() * ageArray.length)];
 
  return [rFirstName, rLastName, rAge];
}

// todo2 add and save to localstorage new student
function addNew() {
    const studentArray = generateNew();
    console.log(studentArray);
    studentsObj.studentsData.push(studentArray);
    localStorage.setItem("studentsObj", JSON.stringify(studentsObj));

// get the container, create a div inside, give it a new class and add the student data as content
    const studentContainer = document.getElementById("studentContainer");

    const newDiv = document.createElement("div");
    newDiv.classList.add("studentDataCard");
    newDiv.innerText = `First Name: ${studentArray[0]} 
    Last Name: ${studentArray[1]} 
    Age: ${studentArray[2]}
    `;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteStudent(studentArray));

    newDiv.appendChild(deleteButton);

    studentContainer.appendChild(newDiv);

}

function deleteStudent(index){
  studentsObj.studentsData.splice(index, 1);
  localStorage.setItem("studentsObj", JSON.stringify(studentsObj));
  displayAllStudents();
}

function displayAllStudents(){
  const studentContainer = document.getElementById("studentContainer");
  studentContainer.innerHTML = ``;

  studentsObj.studentsData.forEach((studentArray, index) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("studentDataCard");
    newDiv.innerText = `First Name: ${studentArray[0]} 
    Last Name: ${studentArray[1]} 
    Age: ${studentArray[2]}
    `;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteStudent(index));

    newDiv.appendChild(deleteButton);

    studentContainer.appendChild(newDiv);
  })

    
}

