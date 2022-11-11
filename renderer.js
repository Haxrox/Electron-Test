// import { allComponents, provideFluentDesignSystem } from '@fluentui/web-components';

// provideFluentDesignSystem().register(allComponents);

const titleInput = document.getElementById('titleField')

const titleButton = document.getElementById("titleButton");
titleButton.addEventListener("click", () => {
    console.log("Clicked!");
    const title = titleInput.value
    window.electronAPI.setTitle(title)
});

const pathField = document.getElementById('pathField');
const fileButton = document.getElementById("fileButton");

fileButton.addEventListener("click", async () => {
    const filePath = await window.electronAPI.openFile();
    pathField.innerText = filePath
});

const counter = document.getElementById('counter')

window.electronAPI.handleCounter((event, value) => {
    const oldValue = Number(counter.innerText)
    const newValue = oldValue + value
    counter.innerText = newValue
    event.sender.send('counter-value', newValue)
})