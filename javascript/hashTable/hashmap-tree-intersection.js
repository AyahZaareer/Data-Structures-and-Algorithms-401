// require('../Trees/tree');

function Intersection(tree1, tree2) {
    const tree1Value = tree1.perOrder();
    const tree2Value = tree2.perOrder();

    let commonValues = [];
    for (let i = 0; i < tree1Value.length; i++) {
        if (tree1Value[i] === tree2Value[i]) {
            commonValues.push(tree1Value[i]);

        }
    }
    // console.log('common', commonValues);
    if (commonValues.length) {
        return commonValues;

    } else {
        return 'no common node';
    }

}

module.exports = Intersection;