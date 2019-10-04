"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  Builds reducer basing on provided handlers (that are connected to action types) and initial state
 * */
const reducer = (handlers, initialState) => (state = initialState, action) => {
    if (!action) {
        return state;
    }
    if (!action.type || !handlers[action.type]) {
        return state;
    }
    return handlers[action.type](state, action.payload);
};
exports.default = reducer;
//# sourceMappingURL=index.js.map