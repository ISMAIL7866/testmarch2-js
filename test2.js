var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
 ];
 //Ans:
 for (var i = 0; i < library.length; i++){
     var book = "" + library[i].author + "" + library[i].title + ""
     if(library[i].readingStatus) {
         console.log("read book"+ book );
        }
         else
         {console.log("i have not read the book "+ book);
        }

     }


//output
//read bookBill GatesThe Road Ahead
//read bookSteve JobsWalter Isaacson
//i have not read the book Suzanne CollinsMockingjay: The Final Book of The Hunger Games





 
