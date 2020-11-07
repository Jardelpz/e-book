"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Password = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _InputText = require("../inputtext/InputText");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _Tooltip = require("../tooltip/Tooltip");

var _ObjectUtils = _interopRequireDefault(require("../utils/ObjectUtils"));

var _UniqueComponentId = _interopRequireDefault(require("../utils/UniqueComponentId"));

var _reactTransitionGroup = require("react-transition-group");

var _classnames = _interopRequireDefault(require("classnames"));

var _ConnectedOverlayScrollHandler = _interopRequireDefault(require("../utils/ConnectedOverlayScrollHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Password = /*#__PURE__*/function (_Component) {
  _inherits(Password, _Component);

  var _super = _createSuper(Password);

  function Password(props) {
    var _this;

    _classCallCheck(this, Password);

    _this = _super.call(this, props);
    _this.state = {
      overlayVisible: false,
      meterPosition: '',
      infoText: props.promptLabel
    };
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onKeyup = _this.onKeyup.bind(_assertThisInitialized(_this));
    _this.onOverlayEnter = _this.onOverlayEnter.bind(_assertThisInitialized(_this));
    _this.onOverlayEntered = _this.onOverlayEntered.bind(_assertThisInitialized(_this));
    _this.onOverlayExit = _this.onOverlayExit.bind(_assertThisInitialized(_this));
    _this.id = _this.props.id || (0, _UniqueComponentId.default)();
    return _this;
  }

  _createClass(Password, [{
    key: "showOverlay",
    value: function showOverlay() {
      this.setState({
        overlayVisible: true
      });
    }
  }, {
    key: "hideOverlay",
    value: function hideOverlay() {
      this.setState({
        overlayVisible: false
      });
    }
  }, {
    key: "onOverlayEnter",
    value: function onOverlayEnter() {
      this.panel.style.zIndex = String(_DomHandler.default.generateZIndex());
      this.panel.style.minWidth = _DomHandler.default.getOuterWidth(this.inputEl) + 'px';

      _DomHandler.default.absolutePosition(this.panel, this.inputEl);
    }
  }, {
    key: "onOverlayEntered",
    value: function onOverlayEntered() {
      this.bindScrollListener();
      this.bindResizeListener();
    }
  }, {
    key: "onOverlayExit",
    value: function onOverlayExit() {
      this.unbindScrollListener();
      this.unbindResizeListener();
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      if (this.props.feedback) {
        this.showOverlay();
      }

      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      if (this.props.feedback) {
        this.hideOverlay();
      }

      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: "onKeyup",
    value: function onKeyup(e) {
      var _this2 = this;

      if (this.props.feedback) {
        var value = e.target.value,
            label = null,
            meterPos = null;

        if (value.length === 0) {
          label = this.props.promptLabel;
          meterPos = '0px 0px';
        } else {
          var score = this.testStrength(value);

          if (score < 30) {
            label = this.props.weakLabel;
            meterPos = '0px -10px';
          } else if (score >= 30 && score < 80) {
            label = this.props.mediumLabel;
            meterPos = '0px -20px';
          } else if (score >= 80) {
            label = this.props.strongLabel;
            meterPos = '0px -30px';
          }
        }

        this.setState({
          meterPosition: meterPos,
          infoText: label
        }, function () {
          if (!_this2.state.overlayVisible) {
            _this2.showOverlay();
          }
        });
      }

      if (this.props.onKeyUp) {
        this.props.onKeyUp(e);
      }
    }
  }, {
    key: "testStrength",
    value: function testStrength(str) {
      var grade = 0;
      var val;
      val = str.match('[0-9]');
      grade += this.normalize(val ? val.length : 1 / 4, 1) * 25;
      val = str.match('[a-zA-Z]');
      grade += this.normalize(val ? val.length : 1 / 2, 3) * 10;
      val = str.match('[!@#$%^&*?_~.,;=]');
      grade += this.normalize(val ? val.length : 1 / 6, 1) * 35;
      val = str.match('[A-Z]');
      grade += this.normalize(val ? val.length : 1 / 6, 1) * 30;
      grade *= str.length / 8;
      return grade > 100 ? 100 : grade;
    }
  }, {
    key: "normalize",
    value: function normalize(x, y) {
      var diff = x - y;
      if (diff <= 0) return x / y;else return 1 + 0.5 * (x / (x + y / 4));
    }
  }, {
    key: "bindScrollListener",
    value: function bindScrollListener() {
      var _this3 = this;

      if (!this.scrollHandler) {
        this.scrollHandler = new _ConnectedOverlayScrollHandler.default(this.inputEl, function () {
          if (_this3.state.overlayVisible) {
            _this3.hideOverlay();
          }
        });
      }

      this.scrollHandler.bindScrollListener();
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }
  }, {
    key: "bindResizeListener",
    value: function bindResizeListener() {
      var _this4 = this;

      if (!this.resizeListener) {
        this.resizeListener = function () {
          if (_this4.state.overlayVisible) {
            _this4.hideOverlay();
          }
        };

        window.addEventListener('resize', this.resizeListener);
      }
    }
  }, {
    key: "unbindResizeListener",
    value: function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        this.resizeListener = null;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.tooltip) {
        this.renderTooltip();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindResizeListener();

      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }

      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = (0, _Tooltip.tip)({
        target: this.inputEl,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var panelClassName = (0, _classnames.default)('p-password-panel p-component', this.props.panelClassName);

      var inputProps = _ObjectUtils.default.findDiffKeys(this.props, Password.defaultProps);

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_InputText.InputText, _extends({
        id: this.id,
        ref: function ref(el) {
          return _this5.inputEl = _reactDom.default.findDOMNode(el);
        }
      }, inputProps, {
        type: "password",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyUp: this.onKeyup
      })), /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
        classNames: "p-connected-overlay",
        in: this.state.overlayVisible,
        timeout: {
          enter: 120,
          exit: 100
        },
        unmountOnExit: true,
        onEnter: this.onOverlayEnter,
        onEntered: this.onOverlayEntered,
        onExit: this.onOverlayExit
      }, /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(el) {
          return _this5.panel = el;
        },
        className: panelClassName,
        style: this.props.panelStyle
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "p-password-meter",
        style: {
          backgroundPosition: this.state.meterPosition
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "p-password-info"
      }, this.state.infoText))));
    }
  }]);

  return Password;
}(_react.Component);

exports.Password = Password;

_defineProperty(Password, "defaultProps", {
  id: null,
  promptLabel: 'Enter a password',
  weakLabel: 'Weak',
  mediumLabel: 'Medium',
  strongLabel: 'Strong',
  feedback: true,
  tooltip: null,
  tooltipOptions: null,
  panelClassName: null,
  panelStyle: null
});

_defineProperty(Password, "propTypes", {
  id: _propTypes.default.string,
  promptLabel: _propTypes.default.string,
  weakLabel: _propTypes.default.string,
  mediumLabel: _propTypes.default.string,
  strongLabel: _propTypes.default.string,
  feedback: _propTypes.default.bool,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  panelClassName: _propTypes.default.string,
  panelStyle: _propTypes.default.object
});