// check:

Vue.config.devtools = true;

/* Descrizione:
Rifare l'esercizio della to do list come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: ciccando su un pulsante, il testo digitato viene aggiunto alla lista.

-------------------------------------------------------
BONUS 1: Fare un controllo di validazione per non aggiungere degli item vuoti.
BONUS 2: Dedicarsi alla parte grafica aggiungendo un tocco personale e gestendo anche il mobile.

*/

const app = new Vue({
    el: "#app",
    data: {
        searchedItem: "",
        newTask: "",
        items: [
            "Fare la spesa",
            "Ripassare Vue",
            "Pagare le bollette",
            "Fare la valigia",
            "Prenotare l'hotel",
        ],
    },
    methods: {
        deleteTask(index) {
            this.items.splice(index, 1);
        },
        addTask() {

            // BONUS: VALIDAZIONE:
            if (this.newTask.trim() !== "") {
                this.items.push(this.newTask);
            }
            this.newTask = "";
        },
        checkInclusion(task) {
            if (!this.searchedItem.trim()) return true;
            const filter = this.searchedItem.trim().toLowerCase();
            task = task.toLowerCase();
            return task.includes(filter);
        }
    }
});