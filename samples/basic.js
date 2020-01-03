function getName(user) {
  let name = user.name;
  if (name === null) {
    name = perform 'ask_name';
  }

  return name;
}

function displayNameCapitalized(user) {
  const name = getName@@(user)
  const nameUpperCase = name.toUpperCase()

  return nameUpperCase
}

const arya = { name: null };
const gendry = { name: 'Gendry' };

try {
  const aryaName = displayNameCapitalized(arya);
  const gendryName = displayNameCapitalized(gendry);
  console.log('Arya name:', aryaName)
  console.log('Gendry name:', gendryName)
} handle (effect) {
  if (effect === 'ask_name') {
    setTimeout(() => {
      resume 'Arya Stark';
   }, 1000);
  }
}
