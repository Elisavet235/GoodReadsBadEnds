let disliked_items={};

dislikeStartItems();

function dislikeStartItems(){
    let bookNumber;
    console.log(document.getElementById("grid-items"))
    let amountOfBooks=document.getElementById("grid-items").children.length
    for(bookNumber=1;bookNumber<=amountOfBooks;bookNumber++)
    {
        let bookId="book"+bookNumber
        disliked_items[bookId]=false
        document.getElementById(bookId).addEventListener("click", dislikeClickedItems);
    }
}


function dislikeClickedItems(){
    let bookId=this.id;
    console.log(disliked_items[bookId])
    if (disliked_items[bookId]===false){
        this.firstElementChild.src="img/dislike-after.png"
        this.nextSibling.textContent++;
    }
    else{
        this.firstElementChild.src="img/dislike-before.png"
        this.nextSibling.textContent--;
    }
    disliked_items[bookId]=!disliked_items[bookId]
}
