"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/about/page",{

/***/ "(app-pages-browser)/./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact */ \"(app-pages-browser)/./src/components/Contact.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_valueStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/valueStore */ \"(app-pages-browser)/./src/store/valueStore.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction NavBar() {\n    _s();\n    const { contactState, setContactState } = (0,_store_valueStore__WEBPACK_IMPORTED_MODULE_5__.useValueStore)((state)=>({\n            contactState: state.contactState,\n            setContactState: state.setContactState\n        }));\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const [selectedSection, setSelectedSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pathname);\n    const links = [\n        {\n            label: \"About\",\n            link: true,\n            path: \"/about\"\n        },\n        {\n            label: \"Content\",\n            link: false,\n            path: \"/content\"\n        },\n        {\n            label: \"Projects\",\n            link: false,\n            path: \"/projects\"\n        },\n        {\n            label: \"Contact\",\n            link: false,\n            path: {\n                pathname\n            },\n            action: true\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-[100%] m-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex fixed top-8 left-1/2 text-xl transform -translate-x-1/2 bg-opacity-70 gap-3 h-16 items-center p-2 rounded-[50px] transition-all duration-[500ms] bg-black\",\n                    children: links.map((param)=>{\n                        let { label, path, action } = param;\n                        if (action) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setContactState(true),\n                                className: \"list-none text-white font-bold p-3 px-10\",\n                                children: label\n                            }, label, false, {\n                                fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, this);\n                        } else {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: path,\n                                className: path === selectedSection ? \"list-none text-white font-bold bg-[#505050] p-3 px-10 rounded-[50px]\" : \"list-none text-white font-bold p-3 px-10\",\n                                children: label\n                            }, label, false, {\n                                fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, this);\n                        }\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden flex justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex fixed w-[300px] top-2 justify-center transform -translate-x-1/2 bg-opacity-70 h-16 items-center p-2 rounded-[50px] transition-all duration-[500ms]\",\n                    children: links.map((param)=>{\n                        let { label, path, action } = param;\n                        if (action) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setContactState(true),\n                                className: \"list-none text-white font-bold p-3 px-10\",\n                                children: label\n                            }, label, false, {\n                                fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 17\n                            }, this);\n                        } else {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: path,\n                                className: path === selectedSection ? \"list-none text-white font-bold bg-[#505050] py-2 px-3 rounded-[50px]\" : \"list-none text-white font-bold py-2 px-3\",\n                                children: label\n                            }, label, false, {\n                                fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, this);\n                        }\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    transition: \"all 0.5s\"\n                },\n                className: contactState ? \"fixed z-10 top-0 left-0 flex justify-center px-4 items-center h-screen w-screen bg-black bg-opacity-70\" : \"hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(NavBar, \"QAOO6KftLOSPmFRrFYPMUMBkC8k=\", false, function() {\n    return [\n        _store_valueStore__WEBPACK_IMPORTED_MODULE_5__.useValueStore,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ007QUFDSDtBQUNJO0FBQ2E7QUFDSztBQUVuRCxTQUFTTTs7SUFDUCxNQUFNLEVBQUVDLFlBQVksRUFBRUMsZUFBZSxFQUFFLEdBQUdILGdFQUFhQSxDQUFDLENBQUNJLFFBQVc7WUFDbEVGLGNBQWNFLE1BQU1GLFlBQVk7WUFDaENDLGlCQUFpQkMsTUFBTUQsZUFBZTtRQUN4QztJQUVBLE1BQU1FLFdBQVdOLDREQUFXQTtJQUM1QixNQUFNLENBQUNPLGlCQUFpQkMsbUJBQW1CLEdBQUdULCtDQUFRQSxDQUFTTztJQUUvRCxNQUFNRyxRQUFRO1FBQ1o7WUFDRUMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLE1BQU07UUFDUjtRQUNBO1lBQ0VGLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRixPQUFPO1lBQ1BDLE1BQU07WUFDTkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUYsT0FBTztZQUNQQyxNQUFNO1lBQ05DLE1BQU07Z0JBQUVOO1lBQVM7WUFDakJPLFFBQVE7UUFDVjtLQUNEO0lBRUQscUJBQ0UsOERBQUNDO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNaTixNQUFNUSxHQUFHLENBQUM7NEJBQUMsRUFBRVAsS0FBSyxFQUFFRSxJQUFJLEVBQUVDLE1BQU0sRUFBRTt3QkFDakMsSUFBSUEsUUFBUTs0QkFDVixxQkFDRSw4REFBQ0s7Z0NBRUNDLFNBQVMsSUFBTWYsZ0JBQWdCO2dDQUMvQlcsV0FBVTswQ0FFVEw7K0JBSklBOzs7Ozt3QkFPWCxPQUFPOzRCQUNMLHFCQUNFLDhEQUFDWixrREFBSUE7Z0NBRUhzQixNQUFNUjtnQ0FDTkcsV0FDRUgsU0FBU0wsa0JBQ0wseUVBQ0E7MENBR0xHOytCQVJJQTs7Ozs7d0JBV1g7b0JBQ0Y7Ozs7Ozs7Ozs7OzBCQUdKLDhEQUFDTTtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBQ1pOLE1BQU1RLEdBQUcsQ0FBQzs0QkFBQyxFQUFFUCxLQUFLLEVBQUVFLElBQUksRUFBRUMsTUFBTSxFQUFFO3dCQUNqQyxJQUFJQSxRQUFROzRCQUNWLHFCQUNFLDhEQUFDSztnQ0FFQ0MsU0FBUyxJQUFNZixnQkFBZ0I7Z0NBQy9CVyxXQUFVOzBDQUVUTDsrQkFKSUE7Ozs7O3dCQU9YLE9BQU87NEJBQ0wscUJBQ0UsOERBQUNaLGtEQUFJQTtnQ0FFSHNCLE1BQU1SO2dDQUNORyxXQUNFSCxTQUFTTCxrQkFDTCx5RUFDQTswQ0FHTEc7K0JBUklBOzs7Ozt3QkFXWDtvQkFDRjs7Ozs7Ozs7Ozs7MEJBR0osOERBQUNNO2dCQUNDSyxPQUFPO29CQUFFQyxZQUFZO2dCQUFXO2dCQUNoQ1AsV0FDRVosZUFDSSwyR0FDQTswQkFHTiw0RUFBQ04sZ0RBQU9BOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhCO0dBN0dTSzs7UUFDbUNELDREQUFhQTtRQUt0Q0Qsd0RBQVdBOzs7S0FOckJFO0FBK0dULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3g/ZDllYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuL0NvbnRhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZVZhbHVlU3RvcmUgfSBmcm9tIFwiQC9zdG9yZS92YWx1ZVN0b3JlXCI7XG5cbmZ1bmN0aW9uIE5hdkJhcigpIHtcbiAgY29uc3QgeyBjb250YWN0U3RhdGUsIHNldENvbnRhY3RTdGF0ZSB9ID0gdXNlVmFsdWVTdG9yZSgoc3RhdGUpID0+ICh7XG4gICAgY29udGFjdFN0YXRlOiBzdGF0ZS5jb250YWN0U3RhdGUsXG4gICAgc2V0Q29udGFjdFN0YXRlOiBzdGF0ZS5zZXRDb250YWN0U3RhdGUsXG4gIH0pKTtcblxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIGNvbnN0IFtzZWxlY3RlZFNlY3Rpb24sIHNldFNlbGVjdGVkU2VjdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KHBhdGhuYW1lKTtcblxuICBjb25zdCBsaW5rcyA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJBYm91dFwiLFxuICAgICAgbGluazogdHJ1ZSxcbiAgICAgIHBhdGg6IFwiL2Fib3V0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJDb250ZW50XCIsXG4gICAgICBsaW5rOiBmYWxzZSxcbiAgICAgIHBhdGg6IFwiL2NvbnRlbnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlByb2plY3RzXCIsXG4gICAgICBsaW5rOiBmYWxzZSxcbiAgICAgIHBhdGg6IFwiL3Byb2plY3RzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJDb250YWN0XCIsXG4gICAgICBsaW5rOiBmYWxzZSxcbiAgICAgIHBhdGg6IHsgcGF0aG5hbWUgfSxcbiAgICAgIGFjdGlvbjogdHJ1ZSxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LVsxMDAlXSBtLWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmaXhlZCB0b3AtOCBsZWZ0LTEvMiB0ZXh0LXhsIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIGJnLW9wYWNpdHktNzAgZ2FwLTMgaC0xNiBpdGVtcy1jZW50ZXIgcC0yIHJvdW5kZWQtWzUwcHhdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLVs1MDBtc10gYmctYmxhY2tcIj5cbiAgICAgICAgICB7bGlua3MubWFwKCh7IGxhYmVsLCBwYXRoLCBhY3Rpb24gfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17bGFiZWx9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb250YWN0U3RhdGUodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LW5vbmUgdGV4dC13aGl0ZSBmb250LWJvbGQgcC0zIHB4LTEwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBrZXk9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgaHJlZj17cGF0aH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIHBhdGggPT09IHNlbGVjdGVkU2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgID8gXCJsaXN0LW5vbmUgdGV4dC13aGl0ZSBmb250LWJvbGQgYmctWyM1MDUwNTBdIHAtMyBweC0xMCByb3VuZGVkLVs1MHB4XVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImxpc3Qtbm9uZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBwLTMgcHgtMTBcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZml4ZWQgdy1bMzAwcHhdIHRvcC0yIGp1c3RpZnktY2VudGVyIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIGJnLW9wYWNpdHktNzAgaC0xNiBpdGVtcy1jZW50ZXIgcC0yIHJvdW5kZWQtWzUwcHhdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLVs1MDBtc11cIj5cbiAgICAgICAgICB7bGlua3MubWFwKCh7IGxhYmVsLCBwYXRoLCBhY3Rpb24gfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17bGFiZWx9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb250YWN0U3RhdGUodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LW5vbmUgdGV4dC13aGl0ZSBmb250LWJvbGQgcC0zIHB4LTEwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBrZXk9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgaHJlZj17cGF0aH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIHBhdGggPT09IHNlbGVjdGVkU2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgID8gXCJsaXN0LW5vbmUgdGV4dC13aGl0ZSBmb250LWJvbGQgYmctWyM1MDUwNTBdIHB5LTIgcHgtMyByb3VuZGVkLVs1MHB4XVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImxpc3Qtbm9uZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTNcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb246IFwiYWxsIDAuNXNcIiB9fVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIGNvbnRhY3RTdGF0ZVxuICAgICAgICAgICAgPyBcImZpeGVkIHotMTAgdG9wLTAgbGVmdC0wIGZsZXgganVzdGlmeS1jZW50ZXIgcHgtNCBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdy1zY3JlZW4gYmctYmxhY2sgYmctb3BhY2l0eS03MFwiXG4gICAgICAgICAgICA6IFwiaGlkZGVuXCJcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8Q29udGFjdCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhY3QiLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VQYXRobmFtZSIsInVzZVZhbHVlU3RvcmUiLCJOYXZCYXIiLCJjb250YWN0U3RhdGUiLCJzZXRDb250YWN0U3RhdGUiLCJzdGF0ZSIsInBhdGhuYW1lIiwic2VsZWN0ZWRTZWN0aW9uIiwic2V0U2VsZWN0ZWRTZWN0aW9uIiwibGlua3MiLCJsYWJlbCIsImxpbmsiLCJwYXRoIiwiYWN0aW9uIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiLCJzdHlsZSIsInRyYW5zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/NavBar.tsx\n"));

/***/ })

});