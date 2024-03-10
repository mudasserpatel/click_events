const button1 = document.querySelector("#firstButton");
const button2 = document.querySelector("#secondButton");
const button3 = document.querySelector("#thirdButton");
const body = document.querySelector("body");

button1.addEventListener('click',responseToClick1)
function responseToClick1() {
    const hTag1 = document.createElement('h3');
    hTag1.textContent = "Foo";
    body.appendChild(hTag1);
};

button2.addEventListener('click',responseToClick2)
function responseToClick2() {
    const hTag2 = document.createElement('h3');
    hTag2.textContent = "Bar";
    body.appendChild(hTag2);
};

button3.addEventListener('click',responseToClick3)
function responseToClick3() {
    const hTag3 = document.createElement('h2');
    hTag3.textContent = "FooBar";
    body.appendChild(hTag3);
};


