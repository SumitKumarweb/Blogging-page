
function Card(image, title, cartInfo, blogWriting) {
    const container = document.getElementById("container");

    const cards = document.createElement("div");
    cards.classList.add("cards");
    container.append(cards);

    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);

    const img = document.createElement("img");
    img.src = image;
    card.appendChild(img);

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    card.appendChild(cardInfo);

    const cardTitle = document.createElement("div");
    cardTitle.innerText = title;
    cardTitle.classList.add("CardTitle")
    cardInfo.appendChild(cardTitle);

    const cardPara = document.createElement("p");
    cardPara.innerText = cartInfo;
    cardInfo.appendChild(cardPara);

    const cardButton = document.createElement("button");
    cardButton.innerText = "Read";
    cardInfo.appendChild(cardButton);
    cardButton.onclick = () => {
        document.getElementById("blogReadPage").classList.add("none");
        blogReadPage.classList.remove("none")
        container.classList.add("none")
        readBlog(image, title, cartInfo, blogWriting)
    }
}

function readBlog(image, title, cartInfo, blogWriting) {
    const blogReadPage = document.getElementById("blogReadPage");
    blogReadPage.innerHTML = ""

    const blogInfo = document.createElement("div");
    blogInfo.classList.add("blog-info");
    blogReadPage.append(blogInfo);

    const blogPersonalDetail = document.createElement("div");
    blogPersonalDetail.classList.add("blog-personal-detail");
    blogInfo.append(blogPersonalDetail);

    const h2 = document.createElement("h2");
    h2.innerText = title;
    blogPersonalDetail.append(h2)

    const p = document.createElement("p");
    p.innerText = cartInfo;
    blogPersonalDetail.append(p)

    const imageReadBlog = document.createElement("img");
    imageReadBlog.src = image;
    imageReadBlog.alt = "Blogger Image";
    blogInfo.append(imageReadBlog);


    const blogdetail = document.createElement("div");
    blogdetail.classList.add("blog-detail");
    blogReadPage.append(blogdetail);

    const paraReadBlog = document.createElement("p");
    paraReadBlog.innerText = blogWriting;
    blogdetail.append(paraReadBlog)


}

function popaddBlog() {
    const addBlogPagePOP = document.getElementById("addBlogPagePOP");

    const addBlog = document.createElement("div");
    addBlog.classList.add("addBlog");
    addBlogPagePOP.append(addBlog);

    const closePOP = document.createElement("a");
    closePOP.href = "#";
    closePOP.innerText = "X";
    closePOP.onclick = () => {
        addBlogPagePOP.classList.add("none");
        document.getElementById("container").classList.remove("none");
    };
    addBlog.append(closePOP);

    const input1 = document.createElement("input");
    input1.type = "text";
    input1.placeholder = "Enter Blog Post URL:";
    addBlog.append(input1);

    const input2 = document.createElement("input");
    input2.type = "text";
    input2.placeholder = "Enter Blog Title:";
    addBlog.append(input2);

    const input3 = document.createElement("input");
    input3.type = "text";
    input3.placeholder = "Enter Blog Cart Info:"; // Corrected placeholder text
    addBlog.append(input3);

    const textareaAddBlog = document.createElement("textarea");
    textareaAddBlog.placeholder = "Write";
    textareaAddBlog.cols = 20;
    textareaAddBlog.rows = 5;
    addBlog.append(textareaAddBlog);

    const btnAddBlog = document.createElement("button");
    btnAddBlog.innerText = "Add Blog";
    addBlog.append(btnAddBlog);

    btnAddBlog.onclick = () => {
        addBlogDecrecption(input2.value, input1.value, input3.value, textareaAddBlog.value); // Fixed the order of arguments
        input1.value = "";
        input2.value = "";
        input3.value = "";
        textareaAddBlog.value = "";
    };
}

document.getElementById("addBlogBtn").addEventListener("click", () => {
    document.getElementById("addBlogPagePOP").classList.remove("none");
    document.getElementById("container").classList.add("none");
    document.getElementById("blogReadPage").classList.add("none");
});

popaddBlog();

let arr = JSON.parse(localStorage.getItem("blogData")) || [
    {
        image: "https://edunewsnetwork.files.wordpress.com/2021/07/images-89.jpeg",
        title: "Anime : The Global Fandom",
        cartInfo: "Anime is hand-drawn and computer animation originating from Japan. In Japan and in Japanese, anime (a term derived from the English word animation) describes all animated works,",
        blogWriting: "ntroduction Anime is hand-drawn and computer animation originating from Japan. In Japan and in Japanese, anime (a term derived from the English word animation) describes all animated works, regardless of style or origin. However, outside of Japan and in English, anime is colloquial for Japanese animation and refers specifically to animation produced in Japan.Animation produced outside of Japan with similar style to Japanese animation is referred to as anime-influenced animation.The earliest commercial Japanese animations date to 1917. A characteristic art style emerged in the 1960s with the works of cartoonist Osamu Tezuka and spread in following decades, developing a large domestic audience. Anime is distributed theatrically, through television broadcasts, directly to home media, and over the Internet. In addition to original works, anime are often adaptations of Japanese comics (manga), light novels, or video games. It is classified into numerous genres targeting various broad and niche audiences."
    }
];

function addBlogDecrecption(title, image, cartInfo, blogWriting) {
    arr.push({
        image: image,
        title: title,
        cartInfo: cartInfo,
        blogWriting: blogWriting,
    });
    localStorage.setItem("blogData", JSON.stringify(arr));
    document.getElementById("addBlogPagePOP").classList.add("none")
    document.getElementById("container").classList.remove("none");

}

arr.forEach((e) => {
    Card(e.image, e.title, e.cartInfo, e.blogWriting);
});

