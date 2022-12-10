// const newContainer = document.createElement("div");
// newContainer.className = "container";
// const body = document.querySelector("body");
// body.appendChild(newContainer);

const createElementHelper = (tag, className, id, textContent) => {
  const newElement = document.createElement(tag);

  if (newElement.toString() != "[object HTMLUnknownElement]") {
    if (!!className) {
      newElement.className = className;
    }
    if (!!id) {
      newElement.id = id;
    }
    if (!!textContent) {
      newElement.textContent = textContent;
    }

    return newElement;
  }
};

const addElementHelper = (addTo, ele) => {
  const addElement = document.querySelector(addTo);
  if (!!addElement) {
    addElement.appendChild(ele);
  }
};

// add container in body
const newContainer = createElementHelper("div", "container", "", "");
// addElementHelper("body", newContainer);
document.body.appendChild(newContainer);

/*
Question 1
Given the following array and implement the table dynamically
*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

const question1 = createElementHelper("div", "question", "question1", "");
const newTitle = createElementHelper("h1", "title", "", "Question 1");
question1.appendChild(newTitle);

const createTable = (tableInfo) => {
  const newTable = createElementHelper("table");
  const tableHead = createElementHelper("thead");
  const tableBody = createElementHelper("tbody");
  const headRow = createElementHelper("tr");

  // add table head
  const headItems = tableInfo.tableHeader.map((item) => {
    return createElementHelper("th", "", "", item);
  });

  headRow.append(...headItems);
  tableHead.appendChild(headRow);

  // add table body
  const bodyItems = tableInfo.tableContent.map((item) => {
    const bodyRows = createElementHelper("tr");
    for (key in item) {
      bodyRows.appendChild(createElementHelper("td", "", "", item[key]));
    }
    return bodyRows;
  });

  tableBody.append(...bodyItems);

  newTable.appendChild(tableHead);
  newTable.appendChild(tableBody);
  addElementHelper("#question1", newTable);

  return newTable;
};

const table = createTable(tableInfo);
question1.appendChild(table);

addElementHelper(".container", question1);
/*
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const question2 = createElementHelper("div", "question", "question2", "");
const newTitle2 = createElementHelper("h1", "title", "", "Question 2");
question2.appendChild(newTitle2);

const createList = (tag, items) => {
  const newList = document.createElement("div");
  var listTitle = createElementHelper("h3", "", "", "Ordered");

  if (tag == "ul") {
    listTitle = createElementHelper("h3", "", "", "Unordered");
  }

  const listType = createElementHelper(tag, "", "", "");

  const listItems = items.map((item) => {
    return createElementHelper("li", "", "", item);
  });

  newList.appendChild(listTitle);
  listType.append(...listItems);
  newList.appendChild(listType);
  return newList;
};

const newList = createElementHelper("div", "", "list", "");
newList.appendChild(createList("ol", list));
newList.appendChild(createList("ul", list));
question2.appendChild(newList);

addElementHelper(".container", question2);

/*
  Question 3
  Given a array and implement a dropdown list with the following options dynamically 
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
  */

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const createOptionElementHelper = (value, content) => {
  const newOption = document.createElement("option");
  if (!!value) {
    newOption.value = value;
  }
  if (!!content) {
    newOption.textContent = content;
  }
  return newOption;
};

const question3 = createElementHelper("div", "question", "question3", "");
const newTitle3 = createElementHelper("h1", "title", "", "Question 3");
question3.appendChild(newTitle3);

const selectItems = dropDownList.map(({ value, content }) => {
  return createOptionElementHelper(value, content);
});

const newSelect = document.createElement("select");
newSelect.name = "cities";
newSelect.id = "cities";

newSelect.append(...selectItems);
question3.appendChild(newSelect);
addElementHelper(".container", question3);
