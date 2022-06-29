import axios from 'axios';
const carregarVagas = axios.create({
    baseURL: 'http://localhost:8078/api/vacancies/listing',
    headers: {Authorization: "Basic b848d6dd504b10c2a98b728597d7052c"}
});
export default carregarVagas;


export const carregarVaga = ($id) => {
    const promise = axios.create({
        baseURL: `http://localhost:8078/api/vacancies/${$id}`,
        headers: {Authorization: "Basic b848d6dd504b10c2a98b728597d7052c"}
    })
    return promise()
    .catch(function(err) {
        if (err.response) {
          console.error("Res Error: ", err.response.status);
          window.location.assign('../error/404')
        } else if (err.request) {
          console.error("Req Error");
          window.location.assign('../../')
        } else {
          console.error("Error: ", err.message);
          window.location.assign('../../')
        }
      });
}
