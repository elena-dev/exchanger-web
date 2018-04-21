import Tab from './Tab';
import Tabs from './Tabs';

export default {
    install(Vue) {
        Vue.component('v-tab', Tab);
        Vue.component('v-tabs', Tabs);
    },
};

export { Tab, Tabs };
