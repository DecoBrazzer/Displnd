
const buildFolder = './dist';
const srcFolder = './src';

const path = {
    build: {
        js: `${buildFolder}/js/`,
        html: `${buildFolder}/html/`,
        css: `${buildFolder}/css/`,
        image: `${buildFolder}/image/`
    },
    src: {
        js: `${srcFolder}/js/`,
        html: `${srcFolder}/html`,
        scss: `${srcFolder}/scss`,
        image: `${srcFolder}/image/`
    }
}

module.exports.path = path;