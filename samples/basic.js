function getName(user) {
  let name = user.name;
  if (name === null) {
    name = perform 'ask_name';
  }

  console.log(name)
}

const arya = { name: null };
const gendry = { name: 'Gendry' };

try {
  getName(arya);
  getName(gendry);
} handle {
  console.log(effect)
}
