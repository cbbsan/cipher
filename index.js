window.onload = init;
function init() {
    const actions = document.querySelectorAll('[name=cipher_action]');
    const generateBtn = document.querySelector('#generate');
    const result = document.querySelector('#result');
    generateBtn.addEventListener('click', function EventHandler() {
        const input = document.getElementById('text_input').value;
        const element = Array.from(actions).filter(e => e.checked);
        const action = element[0].value;
        const lower = 'abcdefghijklmnopqrstuvwxyz';
        const upper = lower.toUpperCase();
        const no = '0123456789'
        const base = [lower, upper, no];
        let num;
        if (action === 'code') { num = -1; }
        else if (action === 'decode') { num = 1; }
        else { result.innerText = 'Specified action is not supported'; }
        result.innerText = input.split('').map(e => {
            const subBase = base.find(sub => sub.includes(e));
            if (subBase) {
                let i = subBase.indexOf(e) + num;
                i = i >= subBase.length ? 0 : i;
                return subBase.at(i);
            } else return e;
        }).join('');

    });

}