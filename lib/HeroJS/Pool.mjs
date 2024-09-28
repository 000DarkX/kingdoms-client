


export default class Pool {
    constructor() {
        this.name = "poolId";
        this.pool = [];
        this.objs = [];
    }

    static get(pool, id) {
        return pool.objs[id];
    }

    static add(pool, obj) {
        const id = pool.pool.length ? pool.pool.pop() : pool.objs.length;
        obj[pool.name] = id;
        pool.objs[id] = obj;
    }

    static remove(pool, obj) {
        const id = obj[pool.name];
        delete obj[pool.name];
        pool.pool.push(id);
    }

    get(id) {
        return this.objs[id];
    }

    add(obj) {
        const id = this.pool.length ? this.pool.pop() : this.objs.length;
        obj[this.name] = id;
        this.objs[id] = obj;
    }

    remove(obj) {
        const id = obj[this.name];
        delete obj[this.name];
        this.pool.push(id);
    }
}