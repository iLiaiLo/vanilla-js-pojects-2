export const delay=(ms)=>{
    const promise=new Promise(resolve=>setTimeout(resolve,ms))
    return promise;
}