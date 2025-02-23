const SHIFT_CONVERTER = {
    '1': '!', '2': '"', '3': '#', '4': '$', '5': '%', '6': '&', '7': "'", '8': '(', '9': ')', '0': '0',
    'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F', 'g': 'G', 'h': 'H', 'i': 'I', 'j': 'J', 'k': 'K', 'l': 'L', 'm': 'M', 'n': 'N', 'o': 'O', 'p': 'P', 'q': 'Q', 'r': 'R', 's': 'S', 't': 'T', 'u': 'U', 'v': 'V', 'w': 'W', 'x': 'X', 'y': 'Y', 'z': 'Z',
    '-': '=', '^': '~', '\\': '_', '@': '`', '[': '{', ']': '}', ';': '+', ':': '*', ',': '<', '.': '>', '/': '?', '¥': '|',
    '!': '1', '"': '2', '#': '3', '$': '4', '%': '5', '&': '6', "'": '7', '(': '8', ')': '9', '0': '0',
    'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'e', 'F': 'f', 'G': 'g', 'H': 'h', 'I': 'i', 'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'O': 'o', 'P': 'p', 'Q': 'q', 'R': 'r', 'S': 's', 'T': 't', 'U': 'u', 'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z',
    '=': '-', '~': '^', '_': '\\', '`': '@', '{': '[', '}': ']', '+': ';', '*': ':', '<': ',', '>': '.', '?': '/', '|': '¥'
};

class Keyboard {
    static first_line = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '^', '¥'];
    static second_line = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '@', '['];
    static third_line = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', ':', ']'];
    static fourth_line = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '\\', 'Shift'];
    static fifth_line = ['Space'];
    static keyLines = [Keyboard.first_line, Keyboard.second_line, Keyboard.third_line, Keyboard.fourth_line, Keyboard.fifth_line];

    constructor(keyboard) {
        this.keyboard = keyboard;
        this.isShiftActive = false;
        this.shiftFixed = false;
        
        this.generateKeyboard();
    }

    generateKeyboard() {
        // 仮想キーボードを生成
        Keyboard.keyLines.forEach(line => {
            const row = document.createElement('div');
            row.classList.add('key-row');

            line.forEach(key => {
                const keyElement = document.createElement('div');
                keyElement.classList.add('key');

                // 特殊キーのクラスを追加
                if (key === 'Space') {
                    keyElement.classList.add('space');
                } else if (key === 'Backspace') {
                    keyElement.classList.add('backspace');
                } else if (key === 'Shift') {
                    keyElement.classList.add('shift');
                }

                keyElement.textContent = key;

                keyElement.addEventListener('click', () => this.handleKeyPress(key));
                row.appendChild(keyElement);
            });

            this.keyboard.appendChild(row);
        });
    }

    // キーが押されたときの処理
    handleKeyPress(key) {
        let char = null;
        if (key === 'Space') {
            char = ' ';
        } else if (key === 'Shift') {
            this.shiftFixed = !this.shiftFixed;
            this.updateKeyboard(this.shiftFixed);
            return;
        } else {
            char = key;
        }
        // カスタムイベントを発生させる
        const customEvent = new CustomEvent('keyPressed', {detail: char});
        document.dispatchEvent(customEvent);
    }

    // キーボードの更新（シフトキーが押されたとき）
    updateKeyboard(shift) {
        if (shift === this.isShiftActive) {
            return null;
        };
        this.isShiftActive = shift;
        const keyElements = document.querySelectorAll('.key');
        keyElements.forEach(keyElement => {
            const key = keyElement.textContent;
            if (key.length === 1 && !['Space', 'Backspace', 'Shift'].includes(key)) {
                keyElement.textContent = SHIFT_CONVERTER[key];
            }
        });
    }
    // キーを光らせる処理
    highlightKey(key) {
        if (key === ' ') {
            key = 'Space';
        }
        const keyElements = document.querySelectorAll('.key');
        keyElements.forEach(keyElement => {
            if (keyElement.textContent === key) {
                keyElement.classList.add('highlight');
                setTimeout(() => {
                    keyElement.classList.remove('highlight');
                }, 300); // 300ミリ秒後にハイライトを解除
            }
        });
    }
    // キーを光らせる処理
    missHighlightKey(key) {
        if (key === ' ') {
            key = 'Space';
        }
        const keyElements = document.querySelectorAll('.key');
        keyElements.forEach(keyElement => {
            if (keyElement.textContent === key ) {
                keyElement.classList.add('missHighlight');
                setTimeout(() => {
                    keyElement.classList.remove('missHighlight');
                }, 300); // 300ミリ秒後にハイライトを解除
            }
        });
    }
}
