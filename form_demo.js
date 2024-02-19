//  List of countries
const countries = ["India", "America", "England", "Japan", "Canada"];

// list of states
const states = [
  {
    state: "Gujarat",
    country: "India",
  },
  {
    state: "Delhi",
    country: "India",
  },
  {
    state: "Madhya Pradesh",
    country: "India",
  },
  {
    state: "Rajasthan",
    country: "India",
  },
  {
    state: "Maharastra",
    country: "India",
  },
  {
    state: "California",
    country: "America",
  },
  {
    state: "Texas",
    country: "America",
  },
  {
    state: "London",
    country: "England",
  },
  {
    state: "North West",
    country: "England",
  },
  {
    state: "Kanto",
    country: "Japan",
  },
  {
    state: "Kansai",
    country: "Japan",
  },
  {
    state: "Ontario",
    country: "Canada",
  },
  {
    state: "Manitoba",
    country: "Canada",
  },
];

// List of Cities
const cities = [
  {
    cityname: "Surat",
    state: "Gujarat",
  },
  {
    cityname: "Vadodara",
    state: "Gujarat",
  },
  {
    cityname: "New Delhi",
    state: "Delhi",
  },
  {
    cityname: "Shergarh",
    state: "Delhi",
  },
  {
    cityname: "Mumbai",
    state: "Maharastra",
  },
  {
    cityname: "Pune",
    state: "Maharastra",
  },
  {
    cityname: "Jaipur",
    state: "Rajasthan",
  },
  {
    cityname: "Udaypur",
    state: "Rajasthan",
  },
  {
    cityname: "Bhopal",
    state: "Madhya Pradesh",
  },
  {
    cityname: "Ujjain",
    state: "Madhya Pradesh",
  },
  {
    cityname: "Los Angles",
    state: "California",
  },
  {
    cityname: "San Diego",
    state: "California",
  },
  {
    cityname: "Houston",
    state: "Texas",
  },
  {
    cityname: "Dallas",
    state: "Texas",
  },
  {
    cityname: "Wembley",
    state: "London",
  },
  {
    cityname: "Southwark",
    state: "London",
  },
  {
    cityname: "Liverpool",
    state: "North West",
  },
  {
    cityname: "Manchester",
    state: "North West",
  },
  {
    cityname: "Saitama",
    state: "Kanto",
  },
  {
    cityname: "Tokyo",
    state: "Kanto",
  },
  {
    cityname: "Kyoto",
    state: "Kansai",
  },
  {
    cityname: "Osaka",
    state: "Kansai",
  },
  {
    cityname: "Toronto",
    state: "Ontario",
  },
  {
    cityname: "Ottawa",
    state: "Ontario",
  },
  {
    cityname: "Thompson",
    state: "Manitoba",
  },
  {
    cityname: "Winnipeng",
    state: "Manitoba",
  },
];

const persons = [
  {
    id: 1,
    name: "tagline",
    email: "abc@gmail.com",
    gender: "Female",
    hobbies: ["Reading", "Music"],
    dob:"2005-03-01" ,
    Age: "18",
    country: "India",
    state: "Gujarat",
    city: "Surat",
    created_at: "12/02/2024, 10:15:25",
    updated_at: "Not updated",
  },
  {
    id: 2,
    name: "XYZ",
    email: "xyz@gmail.com",
    gender: "Male",
    hobbies: ["Music"],
    dob:"2002-08-10" ,
    Age: "21",
    country: "India",
    state: "Rajasthan",
    city: "Jaipur",
    created_at: "12/02/2024, 10:16:50",
    updated_at: "Not updated",
  },
  {
    id: 3,
    name: "nidhi",
    email: "nidhi@gmail.com",
    gender: "Female",
    hobbies: ["Reading", "Travelling"],
    dob:"2003-01-01" ,
    Age: "21",
    country: "America",
    state: "Texas",
    city: "Dallas",
    created_at: "12/02/2024, 10:18:35",
    updated_at: "Not updated",
  },
];

// Countries Dropdown
for (const country of countries) {
  let newOption = document.createElement("option");
  newOption.innerHTML = country;
  newOption.setAttribute("value", country);
  $('select[name="country"]').append(newOption);
}

// States Dropdown
function countryChange() {
  $('select[name="state"]').html('<option value="select">Select</option>');
  const countrySelect = $('select[name="country"]').val();
  for (const state of states) {
    let newOption = document.createElement("option");

    if (countrySelect == state.country) {
      newOption.innerHTML = state.state;
      newOption.setAttribute("value", state.state);
      $('select[name="state"]').append(newOption);
    }
  }
  stateChange();
}

// Cities Dropdown
function stateChange() {
  $('select[name="city"]').html('<option value="select">Select</option>');
  const stateSelect = $('select[name="state"]').val();
  for (const city of cities) {
    let newOption = document.createElement("option");

    if (stateSelect == city.state) {
      newOption.innerHTML = city.cityname;
      newOption.setAttribute("value", city.cityname);
      $('select[name="city"]').append(newOption);
    }
  }
}

// DOB limit to today
function DobLimit() {
  let today = new Date().toISOString().split("T")[0];
  return today;
}
document.getElementById("DOB").setAttribute("max", DobLimit());

// display person array data in table
function displayData() {
  $("#table_body").html("");

  for (let person of persons) {
    let newRow = document.createElement("tr");
    for (let property in person) {
      if (property !== "id" && property !== "dob") {
        td = document.createElement("td");
        td.innerHTML = person[property];
        newRow.appendChild(td);
      }
    }

    // Edit option
    let newtd1 = document.createElement("td");
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.setAttribute("name", "edit-btn");
    editBtn.onclick = () => editData(person.id);
    newtd1.append(editBtn);
    newRow.appendChild(newtd1);

    // delete option
    let newtd2 = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("name", "delete-btn");
    deleteBtn.onclick = () => deleteData(person.id);
    newtd2.append(deleteBtn);
    newRow.appendChild(newtd2);

    $("#table_body").append(newRow);
  }
}
displayData();

// hobbies checkbox validation
function checkboxValidation() {
  let hobbyErr = document.getElementById("hobbyErr");
  hobbyErr.innerHTML = "";
  let hobbies = document.getElementsByName("hobby[]");
  let error = true;
  for (hobby of hobbies) {
    if (hobby.checked) {
      error = false;
    }
  }
  if (error) {
    hobbyErr.innerHTML = "Select at least one hobby.";
    hobbyErr.style.display = "block";
    return false;
  } else {
    return true;
  }
}

// form validation function
function validateForm() {
  let errName = document.getElementById("nameErr");
  errName.innerHTML = "";
  let name = $('input[name="name"]').val();
  let error = false;
  if (name == "") {
    errName.innerHTML = "Enter your name.";
    errName.style.display = "block";
    error = true;
  }

  let errEmail = document.getElementById("emailErr");
  errEmail.innerHTML = "";
  let email = $('input[name="email"]').val();
  if (email == "") {
    errEmail.innerHTML = "Enter your email.";
    errEmail.style.display = "block";
    error = true;
  }

  let errGen = document.getElementById("genderErr");
  errGen.innerHTML = "";
  let male = document.getElementById("male");
  let female = document.getElementById("female");
  if (!male.checked && !female.checked) {
    errGen.innerHTML = "Select your gender!";
    errGen.style.display = "block";
    error = true;
  }

  if (!checkboxValidation()) {
    error = true;
  }

  let errDob = document.getElementById("dobErr");
  errDob.innerHTML = "";
  let dob = $('input[name="dob"]').val();
  if (dob == "") {
    errDob.innerHTML = "Enter your DOB.";
    errDob.style.display = "block";
    error = true;
  }

  let errCountry = document.getElementById("countryErr");
  errCountry.innerHTML = "";
  let country = $('select[name="country"]').val();
  if (country == "select") {
    errCountry.innerHTML = "Select country.";
    errCountry.style.display = "block";
    error = true;
  }

  let errState = document.getElementById("stateErr");
  errState.innerHTML = "";
  let state = $('select[name="state"]').val();
  if (state == "select") {
    errState.innerHTML = "Select state.";
    errState.style.display = "block";
    error = true;
  }

  let errCity = document.getElementById("cityErr");
  errCity.innerHTML = "";
  let city = $('select[name="city"]').val();
  if (city == "select") {
    errCity.innerHTML = "Select city.";
    errCity.style.display = "block";
    error = true;
  }

  if (error) {
    return false;
  } else {
    return true;
  }
}

// function to generate unique ID
function generateNewID() {
  let newID = 1;
  while (persons.some((person) => person.id === newID)) {
    newID++;
  }
  return newID;
}

// calculate age from Dob
function dobToAge() {
  let today = new Date();
  let DOB = new Date($('input[name="dob"]').val());
  let age = today.getFullYear() - DOB.getFullYear();
  let m = today.getMonth() - DOB.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < DOB.getDate())) {
    age--;
  }
  return age;
}

// Add new data from form values
function addData() {
  let hobbiesChecked = [];
  let hobbies = document.getElementsByName("hobby[]");
  for (hobby of hobbies) {
    if (hobby.checked) {
      hobbiesChecked.push(hobby.value);
    }
  }

  if (validateForm()) {
    let cTime = new Date().toLocaleString();
    let newID = generateNewID();
    let newData = {
      id: newID,
      name: $('input[name="name"]').val(),
      email: $('input[name="email"]').val(),
      gender: $('input[name="Gender"]:checked').val(),
      hobbies: hobbiesChecked,
      dob: $('input[name="dob"]').val(),
      Age: dobToAge(),
      country: $('select[name="country"]').val(),
      state: $('select[name="state"]').val(),
      city: $('select[name="city"]').val(),
      created_at: cTime,
      updated_at: "Not updated",
    };
    persons.push(newData);
    displayData();
    clearForm();
  }
}

// Delete data from table
function deleteData(getId) {
  let fetchIndex = persons.findIndex((person) => getId === person.id);
  persons.splice(fetchIndex, 1);
  displayData();
  clearForm();
}

// Cancle button to clear form record
function cancelButton() {
  displayData();
  clearForm();
}

// edit data function
function editData(getId) {
  let fetchData = persons.find((person) => getId === person.id);

  $("#pid").val(fetchData.id);
  $("#name").val(fetchData.name);
  $("#email").val(fetchData.email);
  if (fetchData.gender == "Male") {
    let male = document.getElementById("male");
    male.checked = true;
  } else if (fetchData.gender == "Female") {
    let female = document.getElementById("female");
    female.checked = true;
  }
  uncheckHobby();
  fetchData.hobbies.forEach((hobby) => {
    let selectedHobby = document.getElementById(hobby);
    selectedHobby.checked = true;
  });
  $("#DOB").val(fetchData.dob);
  $("#country").val(fetchData.country);
  countryChange();
  $("#state").val(fetchData.state);
  stateChange();
  $("#city").val(fetchData.city);

  // Update and Cancel button
  $("#submitbtn").css("display", "none");
  $("#updatebtn").css("display", "inline");
  let update = document.getElementById("updatebtn");
  update.onclick = () => updateData(fetchData.id);
  $("#cancelbtn").css("display", "inline");
  // $("button[name='delete-btn']").attr("disabled", "true");
  // $("button[name='edit-btn']").attr("disabled", "true");
}

// remove selected gender
function uncheckGender() {
  let male = document.getElementById("male");
  male.checked = false;
  let female = document.getElementById("female");
  female.checked = false;
}

//  remove selection from hobbies checkboxes
function uncheckHobby() {
  let hobbies = document.getElementsByName("hobby[]");
  for (hobby of hobbies) {
    hobby.checked = false;
  }
}

function clearForm() {
  $("#pid").val("");
  $("#name").val("");
  $("#email").val("");
  uncheckGender();
  uncheckHobby();
  $("#DOB").val("");
  $("#country").val("select");
  $("#state").val("select");
  $("#city").val("select");

  $("#submitbtn").css("display", "inline");
  $("#updatebtn").css("display", "none");
  $("#cancelbtn").css("display", "none");
}

// update data in the table
function updateData(uid) {
  let foundIndex = persons.findIndex((person) => uid === person.id);
  let hobbiesChecked = [];
  let hobbies = document.getElementsByName("hobby[]");

  for (hobby of hobbies) {
    if (hobby.checked) {
      hobbiesChecked.push(hobby.value);
    }
  }

  if (validateForm()) {
    persons[foundIndex].name = $("#name").val();
    persons[foundIndex].email = $("#email").val();
    persons[foundIndex].gender = $('input[name="Gender"]:checked').val();
    persons[foundIndex].hobbies = hobbiesChecked;
    persons[foundIndex].dob = $("#DOB").val();
    persons[foundIndex].Age = dobToAge()
    persons[foundIndex].country = $("#country").val();
    persons[foundIndex].state = $("#state").val();
    persons[foundIndex].city = $("#city").val();
    persons[foundIndex].updated_at = new Date().toLocaleString();

    displayData();
    clearForm();
  }
}

// Search bar function where check if input value is in name or email column and show matched results
function filterData() {
  let searchData = $("#searchbar").val().toLowerCase();
  let rows = $(`#data_table>tbody tr`);
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].querySelectorAll("td");
    const dataName = cells[0].textContent.toLowerCase();
    const dataEmail = cells[1].textContent.toLowerCase();
    if (dataName.includes(searchData) || dataEmail.includes(searchData)) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

// Sorting ascending or descending
function sortData() {
  let order = $("#sorting_order").val();
  if (order == "ascend") {
    persons.sort((s1, s2) => s1.name.localeCompare(s2.name));
  } else if (order == "descend") {
    persons.sort((s1, s2) => s1.name.localeCompare(s2.name)).reverse();
  }
  displayData();
}
