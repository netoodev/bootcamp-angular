class Cardnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const author = document.createElement("span");
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        
        cardRight.appendChild(newsImage);

        return componentRoot;
    }

    styles(){

    }
}

customElements.define("card-news", Cardnews);