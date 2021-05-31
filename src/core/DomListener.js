export class DomListener {
    constructor($root) {
        if (!$root) {
            throw new Error('No $root provider for DOM listener!!')
        }

        this.$root = $root;
    }
}
