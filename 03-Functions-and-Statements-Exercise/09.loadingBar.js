function loadingBar(number){
    let bar = '[..........]'

    if (number == 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
        return;
    }

    let progress = number / 10;
    let remaining = 10 - progress;

    console.log(`${number}% [${'%'.repeat(progress)}${'.'.repeat(remaining)}]`);
    console.log('Still loading...');

}


loadingBar(100)