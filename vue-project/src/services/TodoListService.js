import Api from '@/services/Api'

export default {
    findAll () {
        return Api().get('todolist')
    },
    findOne (id) {
        return Api().get(`todolist/${id}`)
    },
    post(todos){
        return Api().post('todolist', todos)
    },
    delete(id){
        return Api().delete(`todolist/${id}`)
    }
}
