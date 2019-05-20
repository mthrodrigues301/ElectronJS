const { ipcRenderer } = require('electron')
const remote = require('electron').remote;

const readChunk = require('read-chunk');
const fileType = require('file-type');
const $ = require('jquery');

let index = 0;

function updateSlideshow() {
    ipcRenderer.once('list_files_reply', (event, arg) => {
        index = index % arg.length;
        console.log('INDEX: ' + index)
        console.log('ARGS: ' + arg[index].file)
        showAsset(arg[index], () => this.updateSlideshow())
        index++
        // setTimeout(() => this.updateSlideshow(), duration);
    });

    ipcRenderer.send('list_files')
}

function getFileType(file) {
    const buffer = readChunk.sync(file, 0, 262);
    return fileType(buffer);
}

function isImage(file) {
    try {
        return getFileType(file).mime.match(/^image\//)
    } catch (e) {
        return false
    }
}

function isVideo(file) {
    try {
        return getFileType(file).mime.match(/^video\//)
    } catch (e) {
        return false
    }
}

function isHtml(file) {
    try {
        var ext = file.split('.').pop().toLowerCase();
        console.log("HTML: " + ext)
        return ext === 'html' ? true : false
    } catch (e) {
        return false
    }
}

function showAsset(item, cb) {
    const dom = $("body");
    console.log("Item: " + item)

    dom.html("")
    if (isImage(item.file)) {
        console.log("Image", item.file);

        let elm = $("<img>")
        elm.attr('src', item.file);

        dom.append(elm)

        setTimeout(cb, (item.time * 1000))
    } else if (isVideo(item.file)) {
        console.log("video", item.file);

        let elm = $("<video>")
        elm.attr('autoplay', true)
        elm.attr('src', item.file)
        dom.append(elm)

        elm[0].onerror = cb
        elm[0].addEventListener('loadedmetadata', function () {
            console.log("duration", (elm[0].duration));
        });

        elm[0].addEventListener('ended', function () {
            cb();
        }, false);
    } else if (isHtml(item.file)) {
        console.log("HTML", item.file);

        let elm = $("<iframe>")
        elm.attr('src', item.file);
        elm.attr('frameborder', 0);
        console.log(elm)
        dom.append(elm)

        setTimeout(cb, (item.time * 1000))
    } else {
        console.log(item.file, getFileType(item.file));
        cb()
    }
}

updateSlideshow()
