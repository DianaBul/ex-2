const flatten = (arr) => [].concat.apply([], arr);
const product = (...sets) => sets.reduce((acc, set) => flatten(acc.map(x => set.map(y => [...x, y]))), [[]]);
product([1, 2, 3, 4, 5, 6, 7, 0]);
//# sourceMappingURL=app.js.map