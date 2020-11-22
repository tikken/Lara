(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/controllers/BlogPostController.js":
/*!********************************************************!*\
  !*** ./resources/js/controllers/BlogPostController.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar BlogPostController = /*#__PURE__*/function () {\n  _createClass(BlogPostController, [{\n    key: \"_setListeners\",\n    value: function _setListeners(btn, id) {\n      console.warn(btn, 'test');\n      btn.addEventListener('click', function (e) {\n        var form = document.querySelector('#blogCom');\n        form.setAttribute('data-commentRespId', id);\n        window.location.href = '#blogCom';\n      });\n    }\n  }, {\n    key: \"_declare\",\n    value: function _declare() {\n      this.comments = document.querySelectorAll('[data-commentId]');\n      var that = this;\n      this.comments.forEach(function (el) {\n        var btn = el.querySelector('[data-commentRespond]');\n        var id = el.getAttribute('data-commentId');\n\n        that._setListeners(btn, id);\n      });\n    }\n  }]);\n\n  function BlogPostController() {\n    _classCallCheck(this, BlogPostController);\n\n    this._declare();\n  }\n\n  return BlogPostController;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPostController);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29udHJvbGxlcnMvQmxvZ1Bvc3RDb250cm9sbGVyLmpzPzk3ZWYiXSwibmFtZXMiOlsiQmxvZ1Bvc3RDb250cm9sbGVyIiwiYnRuIiwiaWQiLCJjb25zb2xlIiwid2FybiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNvbW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInRoYXQiLCJmb3JFYWNoIiwiZWwiLCJnZXRBdHRyaWJ1dGUiLCJfc2V0TGlzdGVuZXJzIiwiX2RlY2xhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUEsa0I7OztrQ0FDWUMsRyxFQUFLQyxFLEVBQUk7QUFDbkJDLGFBQU8sQ0FBQ0MsSUFBUixDQUFhSCxHQUFiLEVBQWtCLE1BQWxCO0FBRUFBLFNBQUcsQ0FBQ0ksZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3RDLFlBQUlDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQVg7QUFDSUYsWUFBSSxDQUFDRyxZQUFMLENBQWtCLG9CQUFsQixFQUF3Q1IsRUFBeEM7QUFFSlMsY0FBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixVQUF2QjtBQUNILE9BTEQ7QUFNSDs7OytCQUNVO0FBQ1AsV0FBS0MsUUFBTCxHQUFnQk4sUUFBUSxDQUFDTyxnQkFBVCxDQUEwQixrQkFBMUIsQ0FBaEI7QUFDQSxVQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUVBLFdBQUtGLFFBQUwsQ0FBY0csT0FBZCxDQUFzQixVQUFBQyxFQUFFLEVBQUk7QUFDeEIsWUFBSWpCLEdBQUcsR0FBR2lCLEVBQUUsQ0FBQ1QsYUFBSCxDQUFpQix1QkFBakIsQ0FBVjtBQUNBLFlBQUlQLEVBQUUsR0FBR2dCLEVBQUUsQ0FBQ0MsWUFBSCxDQUFnQixnQkFBaEIsQ0FBVDs7QUFFQUgsWUFBSSxDQUFDSSxhQUFMLENBQW1CbkIsR0FBbkIsRUFBd0JDLEVBQXhCO0FBQ0gsT0FMRDtBQU1IOzs7QUFDRCxnQ0FBYztBQUFBOztBQUNWLFNBQUttQixRQUFMO0FBQ0g7Ozs7O0FBR1VyQixpRkFBZiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9jb250cm9sbGVycy9CbG9nUG9zdENvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCbG9nUG9zdENvbnRyb2xsZXIge1xuICAgIF9zZXRMaXN0ZW5lcnMoYnRuLCBpZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oYnRuLCAndGVzdCcpO1xuXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2dDb20nKTtcbiAgICAgICAgICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnZGF0YS1jb21tZW50UmVzcElkJywgaWQpO1xuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjYmxvZ0NvbSc7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIF9kZWNsYXJlKCkge1xuICAgICAgICB0aGlzLmNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY29tbWVudElkXScpO1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5jb21tZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGxldCBidG4gPSBlbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jb21tZW50UmVzcG9uZF0nKTtcbiAgICAgICAgICAgIGxldCBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb21tZW50SWQnKTtcblxuICAgICAgICAgICAgdGhhdC5fc2V0TGlzdGVuZXJzKGJ0biwgaWQpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZGVjbGFyZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZ1Bvc3RDb250cm9sbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/controllers/BlogPostController.js\n");

/***/ })

}]);