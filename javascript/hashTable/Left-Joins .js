function leftJoin(table1, table2) {
    let arr = [];
    for (let i = 0; i < table1.storage.length; i++) {
        if (table1.storage[i]) {
            // console.log('leftKey', Object.keys[0])
            let key = [Object.keys(table1.storage[i].head.value)[0]][0];
            let value = [Object.values(table1.storage[i].head.value)[0]][0];

            console.log('key-lj', key);
            console.log('value-jl', value);
            arr.push([key, value]);
            console.log('arr', arr);
            console.log('current', table1.storage)
            if (table1.storage[i].head.next) {
                let current = table1.storage[i].head.next;

                while (current) {
                    let key = Object.keys(current.value)[0];
                    let value = Object.values(current.value)[0];

                    console.log('key-lj/2', key);

                    console.log('value-lj/2', value);


                    arr.push([key, value]);
                    current = current.next;



                }
            }

        }

    }

    for (let j = 0; j < arr.length; j++) {
        let leftTable = table2.get(arr[j][0]);
        arr[j].push(leftTable);

    }

    if (arr.length === 0) {
        return null;
    } else {
        return arr;
    }
}

module.exports = leftJoin;