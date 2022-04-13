

const methods = {
    headerScroll() {
        const header = document.querySelector("#header");
        const headerHeight = header.getBoundingClientRect().height;

            window.addEventListener("scroll", () => {
                if (window.scrollY > headerHeight) {
                header.setAttribute("style", "background: #121212; transition: 0.5s;");
            } else {
                
            header.setAttribute("style", "background: transparent; transition: 0.5s");
            }
        });
    }
}




export default {
    install(Vue) {
        Vue.prototype.$headerScroll = methods.headerScroll
    }
}