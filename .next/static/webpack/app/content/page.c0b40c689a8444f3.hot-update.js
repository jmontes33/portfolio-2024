"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/content/page",{

/***/ "(app-pages-browser)/./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact */ \"(app-pages-browser)/./src/components/Contact.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_valueStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/valueStore */ \"(app-pages-browser)/./src/store/valueStore.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction NavBar() {\n    _s();\n    const { contactState, setContactState } = (0,_store_valueStore__WEBPACK_IMPORTED_MODULE_5__.useValueStore)((state)=>({\n            contactState: state.contactState,\n            setContactState: state.setContactState\n        }));\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const [selectedSection, setSelectedSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pathname);\n    const [showContact, setShowContact] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const links = [\n        {\n            label: \"About\",\n            link: true,\n            path: \"/about\"\n        },\n        {\n            label: \"Content\",\n            link: false,\n            path: \"/content\"\n        },\n        {\n            label: \"Projects\",\n            link: false,\n            path: \"/projects\"\n        },\n        {\n            label: \"Contact\",\n            link: false,\n            path: {\n                pathname\n            },\n            action: true\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-[100%] m-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex fixed top-8 left-1/2 text-xl transform -translate-x-1/2 bg-opacity-70 gap-3 h-16 items-center p-2 rounded-[50px] transition-all duration-[500ms] bg-black\",\n                    children: links.map((param)=>{\n                        let { label, path, action } = param;\n                        if (action) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setContactState(true),\n                                className: \"list-none text-white font-bold p-3 px-10\",\n                                children: label\n                            }, label, false, {\n                                fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, this);\n                        } else {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: path,\n                                className: path === selectedSection ? \"list-none text-white font-bold bg-[#505050] p-3 px-10 rounded-[50px]\" : \"list-none text-white font-bold p-3 px-10\",\n                                children: label\n                            }, label, false, {\n                                fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, this);\n                        }\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden flex justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex fixed w-[300px] top-2 justify-center transform -translate-x-1/2 bg-opacity-70 h-16 items-center p-2 rounded-[50px] transition-all duration-[500ms]\",\n                    children: links.map((param)=>{\n                        let { label, path } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: path,\n                            className: path === selectedSection ? \"list-none text-white font-bold bg-[#505050] py-2 px-3 rounded-[50px]\" : \"list-none text-white font-bold py-2 px-3\",\n                            children: label\n                        }, label, false, {\n                            fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    transition: \"all 0.5s\"\n                },\n                className: contactState ? \"fixed z-10 top-0 left-0 flex justify-center px-16 items-center h-screen w-screen bg-black bg-opacity-70\" : \"hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jr/Documents/GitHub Projects/portfolio-2024/src/components/NavBar.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(NavBar, \"gsDhXSfwboAUQpJicueXKl6eCz8=\", false, function() {\n    return [\n        _store_valueStore__WEBPACK_IMPORTED_MODULE_5__.useValueStore,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ007QUFDSDtBQUNJO0FBQ2E7QUFDSztBQUVuRCxTQUFTTTs7SUFFUCxNQUFNLEVBQUNDLFlBQVksRUFBRUMsZUFBZSxFQUFDLEdBQUdILGdFQUFhQSxDQUFDLENBQUNJLFFBQVc7WUFDaEVGLGNBQWNFLE1BQU1GLFlBQVk7WUFDaENDLGlCQUFpQkMsTUFBTUQsZUFBZTtRQUN4QztJQUVBLE1BQU1FLFdBQVdOLDREQUFXQTtJQUM1QixNQUFNLENBQUNPLGlCQUFpQkMsbUJBQW1CLEdBQUdULCtDQUFRQSxDQUFTTztJQUMvRCxNQUFNLENBQUNHLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQVU7SUFFeEQsTUFBTVksUUFBUTtRQUNaO1lBQ0VDLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRixPQUFPO1lBQ1BDLE1BQU07WUFDTkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUYsT0FBTztZQUNQQyxNQUFNO1lBQ05DLE1BQU07UUFDUjtRQUNBO1lBQ0VGLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxNQUFNO2dCQUFFUjtZQUFTO1lBQ2pCUyxRQUFRO1FBQ1Y7S0FDRDtJQUVELHFCQUNFLDhEQUFDQztRQUFPQyxXQUFVOzswQkFDaEIsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDWk4sTUFBTVEsR0FBRyxDQUFDOzRCQUFDLEVBQUVQLEtBQUssRUFBRUUsSUFBSSxFQUFFQyxNQUFNLEVBQUU7d0JBQ2pDLElBQUlBLFFBQVE7NEJBQ1YscUJBQ0UsOERBQUNLO2dDQUVDQyxTQUFTLElBQU1qQixnQkFBZ0I7Z0NBQy9CYSxXQUFVOzBDQUVUTDsrQkFKSUE7Ozs7O3dCQU9YLE9BQU87NEJBQ0wscUJBQ0UsOERBQUNkLGtEQUFJQTtnQ0FFSHdCLE1BQU1SO2dDQUNORyxXQUNFSCxTQUFTUCxrQkFDTCx5RUFDQTswQ0FHTEs7K0JBUklBOzs7Ozt3QkFXWDtvQkFDRjs7Ozs7Ozs7Ozs7MEJBR0osOERBQUNNO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDWk4sTUFBTVEsR0FBRyxDQUFDOzRCQUFDLEVBQUVQLEtBQUssRUFBRUUsSUFBSSxFQUFFOzZDQUN6Qiw4REFBQ2hCLGtEQUFJQTs0QkFFSHdCLE1BQU1SOzRCQUNORyxXQUNFSCxTQUFTUCxrQkFDTCx5RUFDQTtzQ0FHTEs7MkJBUklBOzs7Ozs7Ozs7Ozs7Ozs7OzBCQWNiLDhEQUFDTTtnQkFDQ0ssT0FBTztvQkFBRUMsWUFBWTtnQkFBVztnQkFDaENQLFdBQ0VkLGVBQ0ksNEdBQ0E7MEJBR04sNEVBQUNOLGdEQUFPQTs7Ozs7Ozs7Ozs7Ozs7OztBQUloQjtHQWxHU0s7O1FBRWlDRCw0REFBYUE7UUFLcENELHdEQUFXQTs7O0tBUHJCRTtBQW9HVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIudHN4P2Q5ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyB1c2VWYWx1ZVN0b3JlIH0gZnJvbSAnQC9zdG9yZS92YWx1ZVN0b3JlJztcblxuZnVuY3Rpb24gTmF2QmFyKCkge1xuXG4gIGNvbnN0IHtjb250YWN0U3RhdGUsIHNldENvbnRhY3RTdGF0ZX0gPSB1c2VWYWx1ZVN0b3JlKChzdGF0ZSkgPT4gKHtcbiAgICBjb250YWN0U3RhdGU6IHN0YXRlLmNvbnRhY3RTdGF0ZSxcbiAgICBzZXRDb250YWN0U3RhdGU6IHN0YXRlLnNldENvbnRhY3RTdGF0ZSxcbiAgfSkpXG5cbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCBbc2VsZWN0ZWRTZWN0aW9uLCBzZXRTZWxlY3RlZFNlY3Rpb25dID0gdXNlU3RhdGU8c3RyaW5nPihwYXRobmFtZSk7XG4gIGNvbnN0IFtzaG93Q29udGFjdCwgc2V0U2hvd0NvbnRhY3RdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnQWJvdXQnLFxuICAgICAgbGluazogdHJ1ZSxcbiAgICAgIHBhdGg6ICcvYWJvdXQnLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdDb250ZW50JyxcbiAgICAgIGxpbms6IGZhbHNlLFxuICAgICAgcGF0aDogJy9jb250ZW50JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnUHJvamVjdHMnLFxuICAgICAgbGluazogZmFsc2UsXG4gICAgICBwYXRoOiAnL3Byb2plY3RzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnQ29udGFjdCcsXG4gICAgICBsaW5rOiBmYWxzZSxcbiAgICAgIHBhdGg6IHsgcGF0aG5hbWUgfSxcbiAgICAgIGFjdGlvbjogdHJ1ZSxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9J3ctWzEwMCVdIG0tYXV0byc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGlkZGVuIG1kOmZsZXgganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZml4ZWQgdG9wLTggbGVmdC0xLzIgdGV4dC14bCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiBiZy1vcGFjaXR5LTcwIGdhcC0zIGgtMTYgaXRlbXMtY2VudGVyIHAtMiByb3VuZGVkLVs1MHB4XSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi1bNTAwbXNdIGJnLWJsYWNrJz5cbiAgICAgICAgICB7bGlua3MubWFwKCh7IGxhYmVsLCBwYXRoLCBhY3Rpb24gfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17bGFiZWx9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb250YWN0U3RhdGUodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpc3Qtbm9uZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBwLTMgcHgtMTAnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAga2V5PXtsYWJlbH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e3BhdGh9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICBwYXRoID09PSBzZWxlY3RlZFNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICA/ICdsaXN0LW5vbmUgdGV4dC13aGl0ZSBmb250LWJvbGQgYmctWyM1MDUwNTBdIHAtMyBweC0xMCByb3VuZGVkLVs1MHB4XSdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdsaXN0LW5vbmUgdGV4dC13aGl0ZSBmb250LWJvbGQgcC0zIHB4LTEwJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6aGlkZGVuIGZsZXgganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZml4ZWQgdy1bMzAwcHhdIHRvcC0yIGp1c3RpZnktY2VudGVyIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIGJnLW9wYWNpdHktNzAgaC0xNiBpdGVtcy1jZW50ZXIgcC0yIHJvdW5kZWQtWzUwcHhdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLVs1MDBtc10nPlxuICAgICAgICAgIHtsaW5rcy5tYXAoKHsgbGFiZWwsIHBhdGggfSkgPT4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAga2V5PXtsYWJlbH1cbiAgICAgICAgICAgICAgaHJlZj17cGF0aH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICBwYXRoID09PSBzZWxlY3RlZFNlY3Rpb25cbiAgICAgICAgICAgICAgICAgID8gJ2xpc3Qtbm9uZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBiZy1bIzUwNTA1MF0gcHktMiBweC0zIHJvdW5kZWQtWzUwcHhdJ1xuICAgICAgICAgICAgICAgICAgOiAnbGlzdC1ub25lIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtMydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbjogJ2FsbCAwLjVzJyB9fVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIGNvbnRhY3RTdGF0ZVxuICAgICAgICAgICAgPyAnZml4ZWQgei0xMCB0b3AtMCBsZWZ0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciBweC0xNiBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdy1zY3JlZW4gYmctYmxhY2sgYmctb3BhY2l0eS03MCdcbiAgICAgICAgICAgIDogJ2hpZGRlbidcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8Q29udGFjdCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhY3QiLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VQYXRobmFtZSIsInVzZVZhbHVlU3RvcmUiLCJOYXZCYXIiLCJjb250YWN0U3RhdGUiLCJzZXRDb250YWN0U3RhdGUiLCJzdGF0ZSIsInBhdGhuYW1lIiwic2VsZWN0ZWRTZWN0aW9uIiwic2V0U2VsZWN0ZWRTZWN0aW9uIiwic2hvd0NvbnRhY3QiLCJzZXRTaG93Q29udGFjdCIsImxpbmtzIiwibGFiZWwiLCJsaW5rIiwicGF0aCIsImFjdGlvbiIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJocmVmIiwic3R5bGUiLCJ0cmFuc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/NavBar.tsx\n"));

/***/ })

});