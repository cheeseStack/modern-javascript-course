// Digital clockk

// GLOBAL CONSTS

// GC1: clock selector 
const clock = document.querySelector('.clock');

// GC2: updating the time every second
const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    // console.log(h, m, s);

    const html = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
    `;

    clock.innerHTML = html;
};


// the tick function is called every 1 second (1000ms):
setInterval(tick, 1000);


/// Dates and times library at date-fns.org: https://date-fns.org/
// Formatting dates: https://date-fns.org/v2.28.0/docs/format


