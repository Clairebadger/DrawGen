import {
    vfs2WayAdvancedHS,
    vfs2WayIntermediateHS,
    vfs2WayLS,
    vfs2WayOpenHS,
    vfs4WayAdvanced, vfs4WayOpen
} from "../constants/VFSContstants";
import type { DrawType } from "../Types/drawTypes";

let getDraw = (draw:DrawType) => {
    if (draw.type.includes("VFS")) {
        return createVfsDraw(draw, draw.numFlyers);
    } else {
        return []
    }
}

let getRoundPoints = (round: string[]) => {
    return round.reduce((acc, formation) => {
        let lastChar = formation[formation.length - 1];
        if (lastChar >= '0' && lastChar <= '9'){
            return acc + 2;
        } else {
            return acc + 1;
        }
    }, 0)
}

let createVfsDraw = (draw: DrawType, numFlyers: number) => {
    let pool;
    if (numFlyers === 2){
        if (draw.level.includes("Intermediate")) {pool = vfs2WayIntermediateHS;}
        if (draw.level.includes("Advanced")) {pool = vfs2WayAdvancedHS;}
        if (draw.level.includes("Open")) {pool = vfs2WayOpenHS;}
        console.log(vfs2WayAdvancedHS)
        return createRoundsVfs2Way(pool ?? [], vfs2WayLS, 9);
    } else {
        if (draw.level.includes("Advanced")) {pool = vfs4WayAdvanced;}
        if (draw.level.includes("Open")) {pool = vfs4WayOpen;}
        return createRoundsVfs4Way(pool ?? [], 11);
    }
}

let createRoundsVfs4Way = (pool: string[], rounds: number) => {
    let maxPoints = 5;
    let draw: string[][] = [];
    let poolCopy = JSON.parse(JSON.stringify(pool));

    for (let i = 0; i <rounds; i++) {
        draw.push([]);
        while (getRoundPoints(draw[i]) < maxPoints) {
            if (pool.length == 0) { poolCopy = JSON.parse(JSON.stringify(pool))}
            let formation = poolCopy[Math.floor(Math.random()*poolCopy.length)];
            poolCopy.splice(poolCopy.indexOf(formation), 1)
            draw[i].push("VFS_4Way_(FAI-ISC)_Indoor-" + formation);
        }
    }
    return draw
}

let createRoundsVfs2Way = (hspool: string[], lspool: string [], rounds: number) => {
    let maxPoints = hspool.length < 21 ? 4 : 5;
    let draw: string[][] = [];
    let hsPoolCopy = JSON.parse(JSON.stringify(hspool));
    let lsPoolCopy = JSON.parse(JSON.stringify(lspool));

    for (let i = 0; i <rounds; i++) {
        draw.push([]);
        let pool = i < 2 ? lsPoolCopy : hsPoolCopy
        while (getRoundPoints(draw[i]) < maxPoints) {
            if (pool.length == 0) { pool = i < 2 ? JSON.parse(JSON.stringify(lspool)) : JSON.parse(JSON.stringify(hspool))}
            let formation = pool[Math.floor(Math.random()*pool.length)];
            pool.splice(pool.indexOf(formation), 1)
            draw[i].push("VFS_2Way_(USIS)_Indoor-" + formation);
        }
    }

    return draw
}

export {getDraw}
