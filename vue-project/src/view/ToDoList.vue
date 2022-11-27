<template>
    <div class="container">
        <h1>Hi, add your spending plan!!</h1>
        <div class="add-todo">
            <input class="todo-input" v-model="todo.Content" type="text" placeholder="Type here..">
            <button class="todo-submit" @click="addtodo()"></button>
        </div>
        <ul v-for="todo in todos" :key="todo.id" class="todo-list">
            <li class="todo-list-item">
                <label class="todo-label">
                    <input type="checkbox">
                    <span>{{ todo.Content }}</span>
                </label>
                <button @click="deltodo(todo)" class="btn-del"></button>
            </li>
        </ul>
    </div>
</template>
<script>
import TodoListService from '@/services/TodoListService'
export default {
    name: 'ToDoList',
    data() {
        return {
            todos: null,
            todo: {
                UserId: this.$store.state.user.id,
                Content: null,
            },
        }
    },
    async mounted() {
        this.todos = (await TodoListService.findOne(this.$store.state.user.id)).data
    },
    methods: {
        async addtodo() {
            try {
                await TodoListService.post(this.todo)
                location.reload();
            } catch (err) {
                console.log(err)
            }
        },
        async deltodo(del_todo) {
            try{
                await TodoListService.delete(del_todo.id)
                this.todos = (await TodoListService.findOne(this.$store.state.user.id)).data
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>
<style scoped>
* {
    box-sizing: border-box;
}

:root {
    --checkbox-color: white;
    --checkbox-shadow: gray;
    --add-button: rgba(255, 255, 255, 0.7);
    --add-button-shadow: rgba(238, 156, 164, 0.4);
}

input {
    outline: none;
}

ul {
    list-style: none;
    padding: 0;
}

.container {
    max-width: 480px;
    width: 100%;
    max-height: 100%;
    background-color: rgba(196, 193, 193, 0.3);
    padding: 25px;
    border-radius: 25px;
    overflow: auto;
    color: #222;
    margin-top: 15%;
}

h1 {
    font-size: 20px;
    line-height: 32px;
    margin: 0 0 12px 0;
    color: #272727;
}

.todo-submit {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border: none;
    background-color: var(--add-button);
    color: #272727;
    background-image: url(../assets/img/add.png);
    background-size: 40px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 12px 0 var(--add-button-shadow);
}

.add-todo {
    height: 40px;
    font-size: 14px;
    display: flex;
}

.todo-input {
    width: 100%;
    padding: 0 5px;
    outline: none;
    border: none;
    border-bottom: 1px solid #272727;
    background-color: transparent;
    margin-right: 15px;
    color: #272727;
    box-shadow: none;
    border-radius: 0;

}

.todo-input::placeholder {
    color: #272727;
}

.todo-list-item {
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    border-radius: 35px;
    margin-top: 15px;
    padding: 10px;
    width: 95%;
}

.todo-list-item input {
    width: 16px;
    height: 16px;
    border: 1px solid #272727;
    border-radius: 50%;
    margin-right: 8px;
    flex-shrink: 0;
    margin-top: 4px;
    appearance: none;
}

.todo-list-item input:hover {
    border-color: var(--checkbox-color);
    box-shadow: 0 0 0 3px var(--checkbox-shadow);
}

.todo-list-item input:checked {
    background-size: 10px;
    border: 1px solid var(--checkbox-color);
    background-color: var(--checkbox-color);
}

.todo-list-item input:checked+span {
    color: #272727;
    text-decoration: line-through #272727;
}

.todo-label {
    display: flex;
    align-items: flex-start;
    color: #272727;
    margin-right: 8px;
    margin-top: 5px;
    font-size: 18px;
    line-height: 24px;
    position: relative;
    transition: 0.2s;
    cursor: pointer;
}

.btn-del {
    margin-left: auto;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    background-image: url(../assets/img/delete-icon.png);
    background-color: aliceblue;
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: center;
    cursor: pointer;
    border: none;
    border-radius: 50px;
}
</style>