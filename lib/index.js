'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sanitizeHtml = require('sanitize-html');

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleFormat = function (_Component) {
  _inherits(SimpleFormat, _Component);

  function SimpleFormat() {
    _classCallCheck(this, SimpleFormat);

    return _possibleConstructorReturn(this, (SimpleFormat.__proto__ || Object.getPrototypeOf(SimpleFormat)).apply(this, arguments));
  }

  _createClass(SimpleFormat, [{
    key: 'paragraphs',


    // Based on:
    // https://github.com/rails/rails/blob/312485f3e88af3966b586275ae5097198bfef6a0/actionview/lib/action_view/helpers/text_helper.rb#L454-L460
    value: function paragraphs() {
      var pattern = /([^\n]\n)(?=[^\n])/g;
      var text = (0, _sanitizeHtml2.default)(this.props.text);
      return text.replace(/\r\n?/g, '\n').split(/\n\n+/).map(function (t) {
        if (t.match(pattern)) {
          return t.replace(pattern, '$1<br />');
        } else {
          return t;
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          wrapperTag = _props.wrapperTag,
          wrapperTagProps = _props.wrapperTagProps,
          postfix = _props.postfix;

      return (0, _react.createElement)(wrapperTag, wrapperTagProps, this.paragraphs().map(function (paragraph, index) {
        return postfix && index === _this2.paragraphs().length - 1 ? _react2.default.createElement(
          'p',
          { key: index },
          _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: paragraph } }),
          postfix
        ) : _react2.default.createElement('p', { key: index, dangerouslySetInnerHTML: { __html: paragraph } });
      }));
    }
  }]);

  return SimpleFormat;
}(_react.Component);

SimpleFormat.propTypes = {
  text: _propTypes2.default.string.isRequired,
  wrapperTag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  wrapperTagProps: _propTypes2.default.object,
  postfix: _propTypes2.default.node
};
SimpleFormat.defaultProps = {
  wrapperTag: 'div',
  wrapperTagProps: {} };
exports.default = SimpleFormat;
