const tick = () => {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    console.log(`Your Time ${hour} : ${minute} : ${second}`);
}

setInterval(tick, 1000);