const teamMembers = [
    {
        name: '이성욱',
        status: '팀장 및 총괄',
        major: 'Computer Engineering'
    },
    {
        name: '옥승호',
        status: '프론트엔드',
        major: 'Computer Engineering'
    },
    {
        name: '박재홍',
        status: '프론트엔드',
        major: 'Computer Engineering'
    },

    {
        name: '쩐레민득',
        status: '프론트엔드',
        major: 'Computer Engineering'
    },
    {
        name: '최유정',
        status: '백엔드',
        major: 'Computer Engineering'
    },
    {
        name: '이서원',
        status: '백엔드',
        major: 'Computer Engineering'
    },
    {
        name: '권준희',
        status: '서류작업',
        major: 'Computer Engineering'
    },
];


let tableRowCount = document.getElementsByClassName('table-row-count');
tableRowCount[0].innerHTML = `(${teamMembers.length}) Members`;
console.log(tableRowCount)

let tableBody = document.getElementById('team-member-rows');

const itemsOnPage = 7;

const numberOfPages = Math.ceil(teamMembers.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

const mappedRecords = teamMembers
.filter((teamMember, i) => (((start - 1) * itemsOnPage) < i + 1) && (i+1 <= start * itemsOnPage))
.map(
  (teamMember) => {
    return `<tr>
        <td class="team-member-profile">
            <span class="profile-info">
                <span class="profile-info__name">
                    ${teamMember.name}
                </span>
            </span>
        </td>
        <td>
            <span class="status status--${teamMember.status}">
                ${teamMember.status}
            </span>
        </td>
        <td>${teamMember.major}</td>
    </tr>`;
});

tableBody.innerHTML = mappedRecords.join('');

const pagination = document.querySelector('.pagination');

const linkList = [];

pagination.innerHTML = linkList.join('');

class Accordion {
    constructor(el) {
      this.el = el;
      this.summary = el.querySelector("summary");
      this.content = el.querySelector(".faq-content");
      this.expandIcon = this.summary.querySelector(".expand-icon");
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;
      this.summary.addEventListener("click", (e) => this.onClick(e));
    }
  
    onClick(e) {
      e.preventDefault();
      this.el.style.overflow = "hidden";
  
      if (this.isClosing || !this.el.open) {
        this.open();
      } else if (this.isExpanding || this.el.open) {
        this.shrink();
      }
    }
  
    shrink() {
      this.isClosing = true;
  
      const startHeight = `${this.el.offsetHeight}px`;
      const endHeight = `${this.summary.offsetHeight}px`;
  
      if (this.animation) {
        this.animation.cancel();
      }
  
      this.animation = this.el.animate(
        {
          height: [startHeight, endHeight],
        },
        {
          duration: 200,
          easing: "ease-out",
        }
      );
  
      this.animation.onfinish = () => {
        this.expandIcon.setAttribute("src", "assets/plus.svg");
        return this.onAnimationFinish(false);
      };
      this.animation.oncancel = () => {
        this.expandIcon.setAttribute("src", "assets/plus.svg");
        return (this.isClosing = false);
      };
    }
  
    open() {
      this.el.style.height = `${this.el.offsetHeight}px`;
      this.el.open = true;
      window.requestAnimationFrame(() => this.expand());
    }
  
    expand() {
      this.isExpanding = true;
  
      const startHeight = `${this.el.offsetHeight}px`;
      const endHeight = `${
        this.summary.offsetHeight + this.content.offsetHeight
      }px`;
  
      if (this.animation) {
        this.animation.cancel();
      }
  
      this.animation = this.el.animate(
        {
          height: [startHeight, endHeight],
        },
        {
          duration: 200,
          easing: "ease-out",
        }
      );
  
      this.animation.onfinish = () => {
        this.expandIcon.setAttribute("src", "assets/minus.svg");
        return this.onAnimationFinish(true);
      };
      this.animation.oncancel = () => {
        this.expandIcon.setAttribute("src", "assets/minus.svg");
        return (this.isExpanding = false);
      };
    }
  
    onAnimationFinish(open) {
      this.el.open = open;
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;
      this.el.style.height = this.el.style.overflow = "";
    }
  }
  
  document.querySelectorAll("details").forEach((el) => {
    new Accordion(el);
  });


