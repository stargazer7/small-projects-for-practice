/* const { RandomNicknameGenerator, DATA_SETS } = require("random-nickname-generator");
const generateNicknameButton = document.querySelector("#btnGenerate");
let nicknameOutput = document.querySelector("nicknameOutput");
generateNicknameButton.addEventListener("click", generateNickname());

const nickname = RandomNicknameGenerator.generate({
    structure: [
        DATA_SETS.ANIMALS,
        DATA_SETS.ADJECTIVES,
    ],

    seperator: "_",
});

/* nicknameOutput.innerHTML = nickname;

/* function generateNickname() {} */

const {
  RandomNicknameGenerator,
  DATA_SETS,
} = require("random-nickname-generator");

const nickname = RandomNicknameGenerator.generate({
  structure: [DATA_SETS.ANIMALS, DATA_SETS.ADJECTIVES],

  seperator: "-",
});

console.log(nickname)
