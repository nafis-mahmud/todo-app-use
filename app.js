// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal(){
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);


const app = Vue.createApp({
    data() {
      return {
        enteredValue: '',
        goals: []
      };
    },
    methods: {
      addGoal() {
        this.goals.push({ id: Date.now(), text: this.enteredValue });
        this.enteredValue = '';
      }
    }
  });

  app.mount('#app');