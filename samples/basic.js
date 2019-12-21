function getName(user) {
  let name = user.name;
  if (name === null) {
    name = perform 'ask_name';
  }

  return name;
}

function displayNameCapitalized(user) {
  const name = getName@@(user)
  console.log(name.toUpperCase())
}

const arya = { name: null };
const gendry = { name: 'Gendry' };

try {
  displayNameCapitalized(arya);
  displayNameCapitalized(gendry);
} handle {
  if (effect === 'ask_name') {
    resume 'Arya Stark';
  }
}
