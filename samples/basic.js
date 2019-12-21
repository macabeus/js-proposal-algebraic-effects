function getName(user) {
  let name = user.name;
  if (name === null) {
    name = perform 'ask_name';
  }

  console.log(name)
}
