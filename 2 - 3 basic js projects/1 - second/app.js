let data = [
  {
    name: "Katarina",
    age: 25,
  },

  {
    name: "Helina",
    age: 22,
  },

  {
    name: "Polina",
    age: 21,
  },

  {
    name: "Ulyssa",
    age: 26,
  },

  {
    name: "Sabrina",
    age: 29,
  },

  {
    name: "Valerie",
    age: 18,
  },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
  return "<div>" + item.name + " " + "is " + item.age + " years old" + "</div>";
});

info.innerHTML = details.join("\n");
