// =====================================================================================================
// ======================================== cara ribet by me ===========================================
// =====================================================================================================

let root = document.getElementById('wrapper-content');

let allParagraf = document.querySelectorAll('p');
let allHeading = document.querySelectorAll('h1');
let allArrow = document.querySelectorAll('.arrow');
let link = root.querySelectorAll('a');
let icon = root.querySelectorAll('i');


// for(let i = 0; i < link.length; i++) {
//     link[i].addEventListener('mouseenter', function () {
//         icon[i].classList.toggle('change');
//     });

//     link[i].addEventListener('mouseleave', function () {
//         icon[i].classList.remove('change');
//     });
// };

// function mode(isDark){
//     if(isDark == true){
//         document.body.style.backgroundColor='rgba(0,0,0,0.7)';
//         document.body.style.color='white';
//         for(let i=0; i<allParagraf.length; i++){
//             allParagraf[i].style.color='white';
//         }
//         for(let i=0; i<allArrow.length; i++){
//             allArrow[i].style.color = 'white';
//         }
//     }else {
//         document.body.style.backgroundColor='rgba(0,0,0,0.01)';
//         document.body.style.color='black';
//         for(let i=0; i<allParagraf.length; i++){
//             allParagraf[i].style.color='black';
//         }
//     }
// }

// =====================================================================================================
// ======================================== cara simple by kang hilman =================================
// =====================================================================================================
    if(localStorage.getItem('theme') == 'dark'){
        mode('moon')
    }else if(localStorage.getItem('theme') == 'light' ){
        mode('sun');
    }else if(localStorage.getItem('theme') == 'angry'){
        mode('angry');
    }

function mode(isDark) {
    if(isDark == 'moon') {
        document.body.setAttribute('id', 'darkmode');
        localStorage.setItem('theme', 'dark');
    }else if(isDark == 'sun'){
        document.body.setAttribute('id', 'lightmode');
        localStorage.setItem('theme', 'light');
    }else if(isDark == 'angry'){
        document.body.setAttribute('id', 'angry');
        localStorage.setItem('theme','angry');
    }else {
        alert('Mode ini sedang dalam pengembangan.')
    }
}


