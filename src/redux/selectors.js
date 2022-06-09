import { createSelector } from 'reselect'



export const Selectors={

        getIsInitial(state){
        return state.App.isInitial},
        getClients(state){
        return state.clientsPage.clients},
        getPageSize(state){
        return state.clientsPage.pageSize},
        getCurrentPage(state){
        return state.clientsPage.currentPage},
        getTotalCount(state){
        return state.clientsPage.totalCount},
        getToggleIsFetchingClients(state){
        return state.clientsPage.toggleIsFetchingClients},
        getIsAuth(state){
        return state.auth.isAuth},      
        getHasAuthError(state){
        return state.auth.hasAuthError},  
        getMyId(state){
        return state.auth.id},  
        getDataClientProfile(state){
        return state.profile.dataClientProfile},
        getStatus(state){
        return state.profile.status},
        getToUpdateProfile(state){
        return state.profile.toUpdateProfile}, 
        getToggleIsFetchingProfile(state){
        return state.profile.toggleIsFetchingProfile},
       
      //example with createSelector 
        getForExampleClients(state){
        return state.clientsPage.clients},
        
}

export const getFilteredForExampleClients=createSelector(Selectors.getForExampleClients,(clients) =>
            {return clients.filter((el)=> el=true)})
