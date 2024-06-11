const foodArray =[
    {
        url:"./image/popularFood/6.jpeg",
        h:"Green Salad"
        
    },
    {
        url:"./image/popularFood/5.jpeg",
        h:"Enchilade"
    },
    {
        url:"./image/popularFood/4.jpeg",
        h:"Pizza"
    },
    {
        url:"./image/popularFood/3.jpeg",
        h:"Green Beans"
    },
    {
        url:"./image/popularFood/2.jpeg",
        h:"Enchilade"
    },
    {
        url:"./image/popularFood/1.jpeg",
        h:"Gyro Sandwhic"
    },

]

function handleEmail(event){
    event.preventDefault();
    const email = event.target.email.value;
    // console.log(email)

    const successContainer = document.getElementById("success_email")
    // console.log(successContainer)
    const emailParagraph = document.createElement("p")
    emailParagraph.innerText =`Your email  ${email} successfully enroled`
    // console.log(emailParagraph)
    successContainer.appendChild(emailParagraph)


}

function handleProduct(){
    const popularContainer = document.getElementById("popular")
    
    // console.log(projectDiv, projectsContainer)
    for(const item of foodArray){
        const productDivimg = document.createElement("div");
        productDivimg.classList.add( "card-pop");
        productDivimg.innerHTML=`<img src="${item.url}" alt="" /> <h2>${item.h}</h2>`;
        // productDivimg.innerHTML=``;
        popularContainer.appendChild(productDivimg);
        // console.log(projectDivimg)
        
    }
}