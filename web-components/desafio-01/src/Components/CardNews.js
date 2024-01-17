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
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");
        linkTitle.target = "_blank"

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("image-src") || "assets/default-image.jpg";
        newsImage.alt = this.getAttribute("alt") || "Foto da Notícia";
        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        
        cardRight.appendChild(newsImage);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");

        style.textContent = `
            .card {
                width: 80%;
                background-color: #fff;
                padding: 10px;
                margin: 20px auto;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                border-radius: 10px;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            }
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card__left > span {
                font-weight: 400;
            }
            
            .card__left > a {
                margin-top: 15px;
                font-size: 25px;
                font-weight: bold;
                color: #000;
                text-decoration: none;
            }
            
            .card__left > p {
                color: rgb(70, 70, 70);
            }
            
            .card__right {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .card__right img {
                max-width: 300px;
            }
        `;

        return style;
    }
}

customElements.define("card-news", Cardnews);