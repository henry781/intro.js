const toPromise = (obj)  => {
    if(obj && typeof obj.then === 'function') {
        return obj;
    }
    return Promise.resolve(obj);
};

export default toPromise;
