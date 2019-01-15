Vue.component("edit-user", {
    template: `
        <tr>
            <td>{{index + 1}}.</td>
            <td>

            <template v-if="editMode">
                <div class="form-group">
                    <input type="text" class="form-input" v-model.lazy="user.fullName">
                </div>
            </template>

            <template v-else>
                {{user.fullName}}
            </template>

            </td>
            <td>{{user.age}}</td>

            <td>
                <button class="btn btn-primary" @click="editMode = !editMode">
                    <i class="icon" :class="{'icon-edit': !editMode, 'icon-check': editMode} "></i>
                </button>
            </td>

        </tr>
    `,
    data: function(){
      return {
          editMode: false
      }

    },
    props: ["user", "index"]

});

new Vue({
    el: "#app",
    data: {
        users: [
            {id: 1, fullName: "Jan Kowalski", age: 32},
            {id: 2, fullName: "Anna Nowak", age: 27},
            {id: 3, fullName: "Tomasz Zielony", age: 40},
            {id: 4, fullName: "Katarzyna Tomczyk", age: 34},
            {id: 5, fullName: "Mariusz Klasa", age: 21}
        ]
    }
});
