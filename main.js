// // const NewText = document.createElement('h1');
// // let count = 0;
// // const timer = setInterval(function(){
// //     NewText.textContent = count++;
// //     if (count === 11) {
// //         let h1 = document.createElement('p');
// //         h1.textContent = 'Game Over';
// //         document.body.appendChild(h1);
// //         clearInterval(timer);
// //     }
// // }, 100);
// // document.body.appendChild(NewText);

// // // const Vaqt  = new Date();
// // // console.log = (Vaqt);
// // const Vaqt = new Date();
// // console.log(Vaqt);
// const time = setInterval(function() {
//     const vaqt = new Date();
//     const Soat = vaqt.getHours();
//     const Minut = vaqt.getMinutes();
//     console.log(`Current time: ${Soat}:${Minut}`);
// }, 1000); 
// function displayTime() {
//     let now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let dayOfWeek = now.getDay(); 

//     let weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    
//     weekdays.push(weekdays.shift());

    
//     hours = hours < 10 ? '0' + hours : hours;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     let time = hours + ':' + minutes + ':' + seconds;
//     let day = weekdays[dayOfWeek];

//     document.querySelector('.time').textContent = time;
//     document.querySelector('.dayOfWeek').textContent = day;
// }

// setInterval(displayTime, 1000);





function displayTime() {
    let now = new Date(); // Get the current date and time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let dayOfWeek = now.getDay(); 

    let weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    // Shift the array to start the week with Monday
    weekdays.push(weekdays.shift());

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let time = hours + ':' + minutes + ':' + seconds;
    let day = weekdays[dayOfWeek];

    document.querySelector('.time').textContent = time;
    document.querySelector('.dayOfWeek').textContent = day;
}


setInterval(displayTime, 1000);
