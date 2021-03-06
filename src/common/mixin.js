import BackTop from '../components/back_top/backTop.vue'

export const backtopMixin = {
    data() {
        return {
            isShowBackTop: false
        }
    },
    components: {
        BackTop
    },
    methods: {
        back_top() {
            this.$refs.scroll.backtop()
        }
    }
}