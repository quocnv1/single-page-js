import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Post");
    }

    async getHtml() {
        return `
        <p>1234</p>
        `
    }
}