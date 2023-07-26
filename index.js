function Card() {
    const container = document.getElementById("container");

    const cards = document.createElement("div");
    cards.classList.add("cards");
    container.append(cards);

    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);

    const img = document.createElement("img");
    img.src = "./high-tech-cat-burglar-882039123.png";
    card.appendChild(img);

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    card.appendChild(cardInfo);

    const h3 = document.createElement("h3");
    h3.innerText = "Blog Title : Demo Article";
    cardInfo.appendChild(h3);

    const cardPara = document.createElement("p");
    cardPara.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ab quis accusantium";
    cardInfo.appendChild(cardPara);

    const cardButton = document.createElement("button");
    cardButton.innerText = "Read";
    cardInfo.appendChild(cardButton);
    cardButton.onclick = () => {
        document.getElementById("blogReadPage").classList.add("none");
        blogReadPage.classList.remove("none")
        container.classList.add("none")
    }
}

function readBlog() {
    const blogReadPage = document.getElementById("blogReadPage");

    const blogInfo = document.createElement("div");
    blogInfo.classList.add("blog-info");
    blogReadPage.append(blogInfo);

    const blogPersonalDetail = document.createElement("div");
    blogPersonalDetail.classList.add("blog-personal-detail");
    blogInfo.append(blogPersonalDetail);

    const h2 = document.createElement("h2");
    h2.innerText = "How did I build my own carrer in IT industries";
    blogPersonalDetail.append(h2)

    const p = document.createElement("p");
    p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere reprehenderit autem maiores temporibus quis, nemo, nobis beatae rerum blanditiis eum totam eius quos ipsum vel deserunt at obcaecati? Eius!";
    blogPersonalDetail.append(p)

    const imageReadBlog = document.createElement("img");
    imageReadBlog.src = "./high-tech-cat-burglar-882039123.png";
    imageReadBlog.alt = "Blogger Image";
    blogInfo.append(imageReadBlog);


    const blogdetail = document.createElement("div");
    blogdetail.classList.add("blog-detail");
    blogReadPage.append(blogdetail);

    const paraReadBlog = document.createElement("p");
    paraReadBlog.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laboriosam ipsum animi, natus porro inventore dolores, sequi aperiam odit repellendus saepe error delectus quod molestiae. Iure, soluta enim, necessitatibus laborum nobis esse est possimus exercitationem incidunt, aspernatur repellat? Illo consectetur dignissimos, asperiores animi quos, eaque ipsa dolores atque expedita, officia quo maxime aliquam accusamus nihil doloremque? Atque consectetur id quaerat vitae pariatur non ducimus reprehenderit repellat, hic a iste modi illo tempore eveniet quisquam ad vel adipisci, earum maiores? Deserunt adipisci atque consequatur iste sapiente magnam. Minima debitis illum ipsum, earum laborum, aspernatur doloribus dolore ad, optio consequatur libero ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste natus ducimus, labore quae, doloremque excepturi praesentium officiis eum dignissimos fugit deleniti aliquam ipsam magni veniam in autem at consectetur iusto doloribus. Dolorum numquam unde velit blanditiis, optio provident laborum voluptates enim earum, commodi soluta mollitia, ipsum repellat! Itaque laudantium aliquam nisi minima tenetur? Mollitia, rem. Illum, odio? Dignissimos sed sit similique, quo consequuntur voluptatibus magni asperiores unde atque eligendi! Repellendus error, dignissimos nemo illum odio tempora delectus dolor natus vel maiores sapiente voluptatem sunt. Ratione iure molestias cum? Cum quidem architecto quod rerum voluptatem libero. Necessitatibus totam accusamus expedita perferendis.";
    blogdetail.append(paraReadBlog)


}

function popaddBlog() {
    const addBlogPagePOP = document.getElementById("addBlogPagePOP");

    const addBlog = document.createElement("div");
    addBlog.classList.add("addBlog")
    addBlogPagePOP.append(addBlog);

    const closePOP = document.createElement("a");
    closePOP.href = "#";
    closePOP.innerText = "X"
    closePOP.onclick = () => {
        addBlogPagePOP.classList.add("none")
        document.getElementById("container").classList.remove("none")

    }
    addBlog.append(closePOP);

    const arr = ["Enter Blog Post URL:", "Enter Blog Title:", "Enter Blog Description:"];

    for (let i = 0; i < arr.length; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = arr[i];
        addBlog.append(input);
    }

    const textareaAddBlog = document.createElement("textarea");
    textareaAddBlog.placeholder = "write";
    textareaAddBlog.cols = 20;
    textareaAddBlog.rows = 5;
    addBlog.append(textareaAddBlog);

    const btnAddBlog = document.createElement("button");
    btnAddBlog.innerText = "Add Blog";
    addBlog.append(btnAddBlog)
}

document.getElementById("addBlogBtn").addEventListener("click", () => {
    document.getElementById("addBlogPagePOP").classList.remove("none")
    document.getElementById("container").classList.add("none")
    document.getElementById("blogReadPage").classList.add("none")
})

popaddBlog()
Card()
readBlog()
