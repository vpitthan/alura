const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());
const nomesPadronizados2 = nomes.map((nome) => nome.toLocaleLowerCase());
const posiçãoIndice =  nomes.map((nome,indice) => indice);
console.log(nomesPadronizados);
console.log(nomesPadronizados2);
console.log(posiçãoIndice);