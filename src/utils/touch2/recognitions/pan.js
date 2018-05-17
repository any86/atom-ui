export default class PanRecognizer {

    constructor() {
        this.type = 'panend';
        this.$fingerInput = {};
    };

    // start(){}

    move(fingerInput) {
        this.$fingerInput = fingerInput;
        if (10 < fingerInput.absOffsetX || 10 < fingerInput.absOffsetY) {
            if ('panend' === this.type) {
                this.type = 'panstart';
            } else if ('panstart' === this.type) {
                this.type = 'panmove';
            }
            return true;
        } else {
            return false;
        }
    };

    end(fingerInput) {
        this.$fingerInput = fingerInput;
        if ('panmove' === this.type) {
            this.type = 'panend';
            return true;
        } else {
            return false;
        }
    }

    cancel() {
        if ('panmove' === this.type) {
            this.type = 'panend';
            return true;
        } else {
            return false;
        }
    };

    computedData() {
        return {
            type: this.type,
            belong: 'pan',
            deltaX: this.$fingerInput.deltaX,
            deltaY: this.$fingerInput.deltaY,
            nativeEvent: this.$fingerInput.nativeEvent,
        }
    }
};