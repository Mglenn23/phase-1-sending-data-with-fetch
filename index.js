// Add your code here
// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

function submitData(name, email) {
  const formData = {
    name: `${name}`,
    email: `${email}`,
  };
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
      let body = document.querySelector("body");
      let p = document.createElement("p");
      p.textContent = "name=" + object.name;
      p.textContent = "email=" + object.email;
      p.textContent = "id=" + object.id;
      body.appendChild(p);
    })
    .catch(function (error) {
      alert("Bad things!");
      console.log(error.message);
      let body = document.querySelector("body");
      let p = document.createElement("p");
      p.textContent = error.message;
      body.appendChild(p);
    });
}

// function delt(num) {
//   const configurationObject = {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   };
//   return fetch(`http://localhost:3000/users/${num}`, configurationObject);
// }
// submitData("Steve", "steve@steve.com");
