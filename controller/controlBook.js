const {books}=require("../.db/books");

//function to add new book in the database

const add=(newBook) => {
    newBook.id=books.length+1;
    console.log("\nAdded new book\n");
    console.log(newBook);

}

// function to display all books in the database

const displayAll=(books) => {
    console.log("\nDisplay all books");
    console.log(books);
}

//function for updating the whole database

const update=(id,key,value) => {
    var oldBook=books.find(elem=>elem.id===id);
    if(!oldBook){
        console.log("\nBook not found");
    } else{
        oldBook[key] = value;
        console.log("\nBook updated");
        console.log(oldBook);
    }
};

//function for updating the whole database

const updateAll=(id,key,value) => {
    var oldBook=books.find(elem=>elem.id===id);
    if(!oldBook){
        console.log("\nBook not found");

    }else{
        for(key in object);
        oldBook[key]=object[key];
        console.log("\nBooks info updated\n");
        console.log(books);
    }
};

const remove=(id)=>{
    var oldBook=books.find(elem=>elem.id===id);
    if(!oldBook){
        console.log("Books not found\n");
    } else{
        var remaining=[];
        remaining=books.filter(elem=>elem.id!==id);
        console.log(remaining);
    }
    
  }



// export functions

module.export={
    add,
    displayAll,
    update,
    updateAll,
    remove
}
