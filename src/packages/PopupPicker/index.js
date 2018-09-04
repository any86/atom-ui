import Vue from 'vue';
import APopupPicker from './PopupPicker.vue';
export default APopupPicker;

// 语言库
import locale from '@/locale';

import DomPortal from 'vue-dom-portal';
Vue.use(DomPortal);

// 创建子类方法
import createApp from '@/utils/createApp'

// 全局配置
import {
    getConfig
} from '@/packages/config/index.js';

/**
 * Picker
 * @param {Object}} 内容 
 * @param {Object} 其他参数 
 */
const Picker = (dataSource, {
    title = '',
    value = [],
    okText = locale.t('popupPicker.ok'),
    cancelText = locale.t('popupPicker.cancel'),
    onOk = () => {},
    onChange = () => {}
} = {}) => {
    let vm = createApp(Vue, APopupPicker, {
        props: {
            dataSource
        },
        isSingle: true
    });
    vm.isShow = true;
    vm.value = value;
    vm.title = title;
    vm.okText = okText;
    vm.cancelText = cancelText;
    // vm.onOk = onOk;
    vm.$on('update:isShow', isShow => {
        vm.isShow = isShow;
    });


    vm.$on('change', data => {
        onChange(data);
    });

    vm.$on('ok', data => {
        onOk(data);
    });
    return vm;
};

// ==================== 添加全局命令 ====================
// 组件内调用: this.$alert
Vue.prototype.$picker = Picker;