function vacantionBookList(inputArray) {
  let bookPages = Number(inputArray[0]);
  let pagesPerHour = Number(inputArray[1]);
  let daysToFinish = Number(inputArray[2]);
  
  console.log(bookPages / pagesPerHour / daysToFinish);
}


//vacantionBookList(["212", "20", "2"]);
//vacantionBookList(["432", "15", "4"]);

