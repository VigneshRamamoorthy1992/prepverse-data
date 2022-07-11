// Data Set
// One top level comment
/* statement */
/*
Given a array of objects build tree based on <pre>parentId</pre>

<pre>
Example 1:

Input = [
  {
    id: "12",
    parentId: "0",
    text: "Man",
    level: "1",
    children: null,
  },
  {
    id: "6",
    parentId: "12",
    text: "Boy",
    level: "2",
    children: null,
  },
  {
    id: "7",
    parentId: "12",
    text: "Other",
    level: "2",
    children: null,
  },
  {
    id: "9",
    parentId: "0",
    text: "Woman",
    level: "1",
    children: null,
  },
  {
    id: "11",
    parentId: "9",
    text: "Girl",
    level: "2",
    children: null,
  },
];

Output = [
  {
    "id": "12",
    "parentId": "0",
    "text": "Man",
    "level": "1",
    "children": [
      {
        "id": "6",
        "parentId": "12",
        "text": "Boy",
        "level": "2",
        "children": []
      },
      {
        "id": "7",
        "parentId": "12",
        "text": "Other",
        "level": "2",
        "children": []
      }
    ]
  },
  {
    "id": "9",
    "parentId": "0",
    "text": "Woman",
    "level": "1",
    "children": [
      {
        "id": "11",
        "parentId": "9",
        "text": "Girl",
        "level": "2",
        "children": []
      }
    ]
  }
]
</pre>
*/
/* solution */

const comments = [
  {
    id: "12",
    parentId: "0",
    text: "Man",
    level: "1",
    children: null,
  },
  {
    id: "6",
    parentId: "12",
    text: "Boy",
    level: "2",
    children: null,
  },
  {
    id: "7",
    parentId: "12",
    text: "Other",
    level: "2",
    children: null,
  },
  {
    id: "9",
    parentId: "0",
    text: "Woman",
    level: "1",
    children: null,
  },
  {
    id: "11",
    parentId: "9",
    text: "Girl",
    level: "2",
    children: null,
  },
];

const nest = (items, id = null, link = "parentId") =>
  items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: nest(items, item.id) }));

console.log(nest(comments));
