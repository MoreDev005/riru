const hide = async (text) => {
    return text.split('').map(char => char.charCodeAt(0)).join(' ');
}

const view = async (hiddenText) => {
    return hiddenText.split(' ').map(code => String.fromCharCode(code)).join('');
}

module.exports = { hide, view }