import Api from '@/services/Api'

export default {
    index () {
        return Api().get('reports')
    },
    post(reports){
        return Api().post('reports', reports)
    },
    update(reports){
        return Api().put('reports', reports)
    },
    indexSingle(id){
        return Api().get(`reports/${id}`)
    },
    delete(id){
        return Api().delete(`reports/${id}`)
        
    },
    getData(id){
        return Api().get(`/report/${id}`)
        
    }
}
