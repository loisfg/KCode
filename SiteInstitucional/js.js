// Squares

const ulIDES = document.querySelector("ul.IDES");


for (let i = 0; i < 20; i++) {
    const img = document.createElement("img");

    const random = (min,max) => Math.random() * (max - min) + min;
    
    const size = Math.floor(random(10, 120));

    const randomTrunc = Math.floor(random(1,2));

    const position = random(1,95);

    const delay = random(5,0.2);
    const duration = random(24,12);

    const imagem = `${src="./img/netbeans.png"}`

    img.src = `${imagem}`;
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    img.style.bottom = `-${size}px`
    img.style.borderRadius = `50%`

    img.style.left = `${position}%`

    img.style.animationDelay = `${delay}s`;
    
    img.style.animationDuration = `${duration}s`;
    img.style.animationTimingFunction = `cubic-bezier(${Math.random(),Math.random(),Math.random(),Math.random()})`

    ulIDES.appendChild(img);
}

/*MODAL*/

function openModal(mn) {
    let modal = document.getElementById(mn);
    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function closeModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
