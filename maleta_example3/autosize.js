
/**
 * Resize an element, maintaining its aspect ratio
 * v1
 *
 */
(function () {

    // resizes element to match required aspect-ratio
    let elements = document.getElementsByClassName('auto-aspect-ratio');
    if (elements.length) {
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i]


            const resizeElement = function () {

                let modifyHeight = false; // force setting of width of image (keep height)
                let maxHeight = null;

                let matches = this.className.match(/auto-aspect-ratio__(\d+)x(\d+)/);
                if (!matches[1] || !matches[2]) {
                    return;
                }
                let ratio = matches[1] / matches[2];

                // w/h
                let matches_2 = this.className.match(/auto-aspect-ratio__modify-(\w+)-(\d+)/);
                if (matches_2 && matches_2[1] == 'height') {
                    modifyHeight = true;
                    maxHeight = matches_2[2]
                }

                if (modifyHeight) {
                    // modify height on width change
                    const width = this.offsetWidth;
                    let newHeight = Math.round(width / ratio);
                    newHeight = maxHeight ? Math.min(newHeight, maxHeight) : newHeight;
                    this.style.height = newHeight + 'px';
                } else {
                    // modify width
                    const height = this.offsetHeight;
                    let newWidth = Math.round(height * ratio);
                    if (newWidth > 10) {
                        this.style.width = newWidth + 'px';
                    }
                }
            }

            const resizeFn = resizeElement.bind(element);
            resizeFn();
            window.addEventListener('resize', resizeFn)
        }
    }
})();
