import Api from '@/services/Api'

export default {
    index () {
        return Api().get('reports')
    },
    post(reports){
        return Api().post('reports', reports)
    }
}
