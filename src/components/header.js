const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement("div");
  const dateEle = document.createElement("span");
  const titleEle = document.createElement("h1");
  const tempEle = document.createElement("span");

  header.appendChild(dateEle);
  header.appendChild(titleEle);
  header.appendChild(tempEle);
  
  header.classList.add("header");
  dateEle.classList.add("date");
  tempEle.classList.add("temp");

  dateEle.textContent = date;
  titleEle.textContent = title;
  tempEle.textContent = temp;

  return header;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  document
  .querySelector(selector)
  .appendChild(Header("Lambda Times","08/06/2021","76°"));
};

export { Header, headerAppender };
