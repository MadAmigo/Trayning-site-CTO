 export const getSelectorInitial=(state) =>{
 		return state.App.isInitial}
 export const getSelectorClients=(state) =>{
 		return state.clientsPage.clients}
 export const getSelectorPageSize=(state) =>{
 		return state.clientsPage.pageSize}
 export const getSelectorCurrentPage=(state) =>{
 		return state.clientsPage.currentPage}
 export const getSelectorTotalCount=(state) =>{
 		return state.clientsPage.totalCount}
 export const getSelectorToggleIsFetching=(state) =>{
 		return state.clientsPage.toggleIsFetching}
 export const getSelectorIsAuth=(state) =>{
 		return state.auth.isAuth}      
 export const getSelectorHasAuthError=(state) =>{
 		return state.auth.hasAuthError}  
 export const getSelectorMyId=(state) =>{
 		return state.auth.id}  

