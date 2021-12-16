import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>Welcome back</h1>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel rerum, culpa atque nam dolor similique fugiat reiciendis, facilis, voluptas in repellat sapiente sed consequuntur harum unde nesciunt eos aliquid necessitatibus.
        </p>
        
        <p>
            <a href="/posts" data-link>View all posts</a>
        </p>
        `
    }
}