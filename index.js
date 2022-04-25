let span = document.querySelector('span');
let paragraph = document.querySelector('#para')

window.onload(getAdvice());


function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(Response => {
        return Response.json();
    }).then(adviceDate => {
        const adviceObj = adviceDate.slip;
        paragraph.innerHTML = `<p>"${adviceObj.advice}"</p>`;
        span.innerHTML = `<span>#${adviceObj.id}</span>`
    }).catch(error => {
        console.log(error)
    })
}

