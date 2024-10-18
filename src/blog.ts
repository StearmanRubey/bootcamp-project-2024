type Blog = {
    title: string
    date: string
    description: string
    image: string
    imageAlt: string
    slug: string
}

const blogs: Blog[] = [
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
]

const blogContainer = document.getElementById('blog-container');

blogs.forEach(blog => {
     const divElement = document.createElement('div');

     const h1Element = document.createElement("h1");
     h1Element.innerText = blog.title;

     const imgElement = document.createElement("img");
     imgElement.src = blog.image;
     imgElement.width = 700;
     imgElement.height = 394;
     imgElement.alt = blog.imageAlt;

     const spacerElement = document.createElement("img");


     const pElement = document.createElement("p");
     pElement.innerText = blog.description;

     divElement.appendChild(h1Element);
     divElement.appendChild(imgElement);
     divElement.appendChild(pElement);
     blogContainer?.appendChild(divElement)



});
