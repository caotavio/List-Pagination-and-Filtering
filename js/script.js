// As there is only one unordered list we can
// access it like we would in an array with the [0]
const studentsUL = document.getElementsByTagName('ul')[0];
const students = document.getElementsByClassName('student-item cf');
const parentDiv = document.getElementsByClassName('page')[0];
const itemsPerPage = 10;

/*
1.Calculates the indexes of the first and last elements
based on a max of 10 elements per page.
2. loops through the list and and shows only the elements
that fit the criteria given the page number
*/
const showPage = (students, page) => {
  const firstIndex = (page - 1) * itemsPerPage;
  const lastIndex = firstIndex + itemsPerPage - 1;
  for (let i = 0; i < students.length; i++) {
    if (i >= firstIndex && i <=lastIndex) {
      students[i].style.display = 'block';
    } else {
        students[i].style.display = 'none';
    }
  }
}

const appendPageLinks = (parentDiv) => {
  let pagesTotal = Math.ceil(students.length / itemsPerPage);
  let div = document.createElement('div');
  div.className = 'pagination';
  let ul = document.createElement('ul');
  for (let i = 1; i <= pagesTotal; i++) {
    let li = document.createElement('li');
    li.className = 'pagination';
    let a = document.createElement('a');
    a.className = 'pagination';
    li.appendChild(a);
    ul.appendChild(li);
    if (i === 1) {
      a.className = 'active';
      showPage(students, 1);
    }
    a.textContent = i;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      e.target.className = 'active';
      if (a !== e.target) {
        a.className = '';
      }
      showPage(students, i);
    });
  }
  parentDiv.appendChild(ul);
}

appendPageLinks(parentDiv);
