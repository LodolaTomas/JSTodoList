export default class Model{
    constructor(){
        this.view= null;
        this.todoList = JSON.parse(localStorage.getItem('todoList'));
        if(!this.todoList || this.todoList.length < 1){
            this.todoList = [
                {
                    id:0,
                    title:'Learn JS',
                    description:'Watch JS Tutorials',
                    completed:false,
                }
            ];
            this.currentId=1
        }else{
            this.currentId = this.todoList[this.todoList.length-1].id+1;
        }
    }

    setView(view){
        this.view = view;
    }

    save(){
        localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }

    getToodoList(){
        /* 
        const todos=[];
        for(const todo of this.todoList){
            todo.push({..todo});
        } 
        return todos;
        */
        return this.todoList.map(todo => ({...todo}));
    }

    findTodo(id){
        return this.todoList.findIndex(todo => todo.id === id);
    }

    toggleCompleted(id){
        const index = this.findTodo(id);
        const todo = this.todoList[index];
        todo.completed = !todo.completed;
        this.save();
    }

    editTodo(id,values){
        const index = this.findTodo(id);
        Object.assign(this.todoList[index],values);
        this.save();
    }

    addTodo(title,description){
        const todo ={
            id:this.currentId++,
            title:title,
            description:description,
            completed:false,
        }

        this.todoList.push(todo);
        this.save();
        return {...todo};
    }

    removeTodo(id){
        const index = this.findTodo(id);
        this.todoList.splice(index,1);
        this.save();
    }
}