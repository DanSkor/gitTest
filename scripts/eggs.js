let eggs = 33;
const names= ['Петька', 'Васька', 'Игнат', 'Петрович', 'Песдюк'];

for (i = 0; i < names.length; i++) {
    console.log(`Пришел ${names[i]}`);
    if (eggs >= 10) {
        eggs -= 10;
        console.log('Купил 10 яиц');
    } else if (eggs) {
        console.log(`Купил ${eggs} яиц`);
        eggs -= eggs;
    } else {
        console.log('Яиц не осталось');
    }
} 