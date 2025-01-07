import {vfs2WayAdvancedHS, vfs2WayIntermediateHS, vfs2WayOpenHS} from "../constants/VFSContstants";
import type { DrawType } from "../Types/drawTypes";

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

let createVfsDraw = (draw: DrawType) => {
    let pool, rounds;
    if (draw.level.includes("Intermediate")) {pool = vfs2WayIntermediateHS; rounds = 8;}
    if (draw.level.includes("Advanced")) {pool = vfs2WayAdvancedHS; rounds = 8;}
    if (draw.level.includes("Open")) {pool = vfs2WayOpenHS; rounds = 10;}


    return createRoundsVfs(pool ?? [], rounds ?? 0);
}

let createRoundsVfs = (pool: string[], rounds: number) => {
    let maxPoints = rounds == 8 ? 4 : 5;
    let draw: string[][] = [];

    for (let i = 0; i <rounds; i++) {
        draw.push([]);
        while (getRoundPoints(draw[i]) < maxPoints) {
            let formation = pool[Math.floor(Math.random()*pool.length)];
            pool.splice(pool.indexOf(formation), 1)
            draw[i].push("VFS_2Way_(USIS)_Indoor-" + formation);
        }
    }

    return draw
}

export {createVfsDraw}
