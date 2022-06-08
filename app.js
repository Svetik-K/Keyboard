const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventhandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: '',
        capsLock: false
    },

    init() {
        //Create elements
        this.elements.main = document.createElement('div');
        this.elements.keysContainer = document.createElement('div');

        //Add classes
        this.elements.main.classList.add('keyboard', '1keyboard--hidden');
        this.elements.keysContainer.classList.add('keyboard__keys');

        //Add elements to DOM
        this.elements.main.append(this.elements.keysContainer);
        document.body.append(this.elements.main);
    },
    
    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "tab","q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "delete",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
            "leftShift", "\\","z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "up", "rightShift",
            "ctrl", "win", "alt", "space", "alt", "ctrl", "left", "down", "right"
        ];

        keyLayout.forEach(key => {
            const keyElement = document.createElement('button');
            const insertLineBreak = ["backspace", "delete", "enter", "rightShift"].indexOf(key) !== -1;

            //Add attributes to keys
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch(key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    
            }
        })
    },

    _triggerIvents(handlerName) {
        console.log("Event Triggered! Event Name: " + handlerName);
    },

    _toggleCapsLock() {
        console.log("CapsLock toggled!");
    },

    open(initialValue, oninput, onclose) {

    },

    close() {

    }
    
}

window.addEventListener('DOMContentLoaded', function() {
    Keyboard.init();
});