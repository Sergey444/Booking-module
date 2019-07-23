const saveFrameWidth = function () {
    return document.querySelector("body").offsetWidth;
}

/**
 * изменяем высоту окна
 */
export default () => {
    var frameWidth = saveFrameWidth();
    var currentSize = BX24.getScrollSize();
    var minHeight = currentSize.scrollHeight + 100;
    if (minHeight < 400) {
        minHeight = 200;
    }
    BX24.resizeWindow(frameWidth, minHeight);
}