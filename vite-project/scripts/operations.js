const OPERATIONS = {
    sum: '+',
    sub: '-',
    del: '/',
    mult: '*',
}

const calculate = (a, b, operation) => {
    let res = 0;
    switch (operation) {
        case OPERATIONS.sum:
            res = sum(a, b);
            break;

        case OPERATIONS.sub:
            res = sub(a, b);
            break;

        case OPERATIONS.del:
            res = del(a, b);
            break;

        case OPERATIONS.mult:
            res = mult(a, b);
            break;
    }

    return res;
}