var _ref =
/*#__PURE__*/
<FormattedMessage id="someMessage.foo" defaultMessage={"Some text, " + "and some more too. {someValue}"} description="A test message for babel." values={{
  someValue: "A value."
}} />;

var Foo = React.createClass({
  render: function () {
    return _ref;
  }
});
