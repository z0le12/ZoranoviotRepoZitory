function binary(no) {
    array = [];
    while(no > 0) {
        const modulo = no % 2;
        array.push(modulo);
        const division = Math.floor(no / 2);
        no = division;
    };
    const result = array.reverse().join("");
    console.log(result);
};
binary(51);