import Chart from 'chart.js';

export default {
    install(Vue) {
        console.log('Chart plugin loaded');
        Vue.prototype.$_Chart = Chart;
    }
}