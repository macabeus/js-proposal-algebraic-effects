function render() {
  var text = getText();
  return function () {
    return <foo>{text}</foo>;
  };
}
