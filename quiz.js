var q = document.getElementById('quiz')
var s = document.getElementById('sub')
var r = document.getElementById('result')

const question = [
    {
        question: 'What does CSS stand for?',
        answers: {
            a: 'Computer Style Sheets',
            b: 'Cascading Style Sheets',
            c: 'Colorful Style Sheets',
            d: 'Creative Style Sheets',
        },
        correctAnswers:'b'
    },

    {
        question: 'Which HTML attribute is used to define inline styles?',
        answers: {
            a: 'Font',
            b: 'Style',
            c: 'Class',
            d: 'Styles',
        },
        correctAnswers:'b'
    },

    {
        question: 'How do you insert a comment in a CSS file?',
        answers: {
            a: '/* This is a comment */',
            b: '// This is a comment',
            c: '// This is a comment //',
        },
        correctAnswers:'a'
    },

    {
        question: 'How do you add background color for all h1 elements',
        answers: {
            a: 'h1 {background-color: #FFFFFF;}',
            b: 'h1.all {background-color: #FFFFFF;}',
            c: 'all.h1 {background-color: #FFFFFF;}',
        },
        correctAnswers:'a'
    },

    {
        question: 'How do you display hyperlinks without an underline?',
        answers: {
            a: 'a {decoration: no-underline;}',
            b: 'a {underline: none;}',
            c: 'a {text-decoration: no-underline;}',
            d: 'a {text-decoration: none;}',
        },
        correctAnswers:'d'
    },

    {
        question: 'How do you make each word in a text start with a capital letter?',
        answers: {
            a: 'transform: capitalize',
            b: 'text-transform: capitalize',
            c: 'test-style: capitalize',
            d: 'You can not do that with CSS',
        },
        correctAnswers:'b'
    },

    {
        question: 'Which property is used to change the font of an element?',
        answers: {
            a: 'font-weight',
            b: 'font-style ',
            c: 'font-family',
        },
        correctAnswers:'c'
    },

    {
        question: 'Which property is used to change the left margin of an element?',
        answers: {
            a: 'margin-left',
            b: 'padding-left',
            c: 'indent',
        },
        correctAnswers:'a'
    },

    {
        question: 'When using the padding property; are you allowed to use negative values?',
        answers: {
            a: 'Yes',
            b: 'No',
        },
        correctAnswers:'b'
    },

    {
        question: 'How do you group selectors?',
        answers: {
            a: 'Separate each selector with a plus sign',
            b: 'Separate each selector with a comma',
            c: 'Separate each selector with a space',
        },
        correctAnswers:'b'
    }
]

build()

function build(){
    const output = []
    question.forEach( (current , num) => {
        const answers = []

        for (letter in current.answers){
            answers.push(
                `<label class = "answer">
                <input type= "radio" id="radio" name="question${num}">
                <input type="button"  value="${current.answers[letter]}">
                </label><br>`
            )
        }

        output.push(
            `<div class="slide">
                <div class="question"> ${current.question} </div>
                <div class="answers"> ${answers.join('')} </div>
            </div>`
        )
    })
    
    q.innerHTML = output.join('')
}

var p = document.getElementById('previous')
var ne = document.getElementById('next')
var sl = document.querySelectorAll('.slide')
let cslide = 0

function show(){
    const acons = q.querySelectorAll('.answers')
    let correct = 0

    question.forEach((current, num) =>{
        const acon = acons[num]
        const user = (acon.querySelector(`input[name=question${num}]:checked`)|| {}).value

        if(user == current.correctAnswers){
            correct++
        }
    })

    r.innerHTML = `${correct} out of ${question.length}`
}

function slide(n){
    sl[cslide].classList.remove('active-slide');
    sl[n].classList.add('active-slide');
    cslide = n

    if(cslide == 0){
        p.style.display = 'none'
    }
    else{
        p.style.display = 'inline-block'
    }

    if(cslide == sl.length-1){
        ne.style.display = 'none'
        s.style.display = 'inline-block'
    }
    else{
        ne.style.display = 'inline-block'
        s.style.display = 'none'
    }
}

slide(cslide)

function nslide(){
    slide(cslide + 1)
}

function pslide(){
    slide(cslide - 1)
}

s.addEventListener('click', show)
p.addEventListener('click', pslide)
ne.addEventListener('click', nslide)
