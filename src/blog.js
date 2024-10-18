var blogs = [
    {
        title: "Second Hack4Impact Meeting",
        date: "10-17-24",
        description: "I went to my second Hack4Impact Meeting!",
        image: "./Meeting_Image.png",
        imageAlt: "Three people sitting at a meeting table",
        slug: ""
    },
    {
        title: "Hack4Impact Milestone 1",
        date: "10-18-24",
        description: "I completed the first Hack4Impact milestone!",
        image: "./Completed_Stamp.png",
        imageAlt: "A stamp that says 'completed",
        slug: ""
    }
];
var blogContainer = document.getElementById('blog-container');
blogs.forEach(function (blog) {
    var divElement = document.createElement('div');
    var h1Element = document.createElement("h1");
    h1Element.innerText = blog.title;
    var imgElement = document.createElement("img");
    imgElement.src = blog.image;
    imgElement.width = 700;
    imgElement.height = 394;
    imgElement.alt = blog.imageAlt;
    var pElement = document.createElement("p");
    pElement.innerText = blog.description;
    divElement.appendChild(h1Element);
    divElement.appendChild(imgElement);
    divElement.appendChild(pElement);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(divElement);
});
