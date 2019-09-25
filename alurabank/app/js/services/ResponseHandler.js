System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ResponseHandler;
    return {
        setters: [],
        execute: function () {
            ResponseHandler = class ResponseHandler {
                static isOk(res) {
                    if (res.ok)
                        return res;
                    else
                        throw new Error(res.statusText);
                }
            };
            exports_1("ResponseHandler", ResponseHandler);
        }
    };
});
