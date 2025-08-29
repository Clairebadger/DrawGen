export const organizations = {
    fs: ["FAI-ISC", "USPA", "USPA Collegiate", "AXIS", "USIS Indoor", "FAI-ISC Indoor", "CISM", "NSL", "SVNH Indoor"],
    vfs: ["FAI-ISC", "USPA", "USPA Collegiate", "USIS Indoor", "FAI-ISC Indoor"],
    mfs: ["USPA", "AXIS"],
    hfs: ["AXIS"],
    dyn: ["FAI-ISC Indoor"],
    xf: ["AXIS"],
    cf: ["FAI-ISC, USPA"],
}

export const categories = [ // TODO: figure out how to refactor organizations into something that makes more sense
    {title: "Formation (FS)", organizations: ["FAI-ISC", "USPA", "USPA Collegiate", "AXIS", "USIS Indoor", "FAI-ISC Indoor", "CISM", "NSL", "SVNH Indoor"]},
    {title: "Vertical Formation (VFS)", organizations: ["FAI-ISC", "USPA", "USPA Collegiate", "USIS Indoor", "FAI-ISC Indoor"]},
    {title: "Mixed Formation (MFS)", organizations: ["USPA", "AXIS"]},
    {title: "Horizontal Formation (HFS)", organizations: ["AXIS"]},
    {title: "Dynamic (DYN)", organizations: ["FAI-ISC Indoor"]},
    {title: "Cross Formation (XF)", organizations: ["AXIS"]},
    {title: "Canopy Formation (CF)", organizations: ["FAI-ISC, USPA"]},
]
export const disciplines = {
    fs: "Formation (FS)",
    vfs: "Vertical Formation (VFS)",
    mfs: "Mixed Formation (MFS)",
    hfs: "Horizontal Formation (HFS)",
    dyn: "Dynamic (DYN)",
    xf: "Cross Formation (XF)",
    cf: "Canopy Formation (CF)"
}

export type FormationDetails = {
    formation_type: string,
    organization: string,
    num_flyers: number[],
    levels: string[],
}

export const formationDetails: FormationDetails[] = [
    {
        formation_type: "Formation (FS)",
        organization: "FAI-ISC",
        num_flyers: [4, 8],
        levels: ["FAI-ISC Open\\USPA Open"]
    },
    {
        formation_type: "Formation (FS)",
        organization: "USPA",
        num_flyers: [4, 8, 10, 16],
        levels: ["FAI-ISC Open\\USPA Open", "USPA Advanced", "USPA Intermediate", "USPA Beginner"]
    },
    {
        formation_type: "Formation (FS)",
        organization: "USPA Collegiate",
        num_flyers: [2, 4],
        levels: ["USPA Collegiate"]
    },
    {
        formation_type: "Formation (FS)",
        organization: "AXIS",
        num_flyers: [2],
        levels: ["AXIS Open", "AXIS Advanced", "AXIS Intermediate"]
    },
    {
        formation_type: "Formation (FS)",
        organization: "USIS Indoor",
        num_flyers: [4],
        levels: ["USIS Open & Advanced\\FAI-ISC Open", "USIS Intermediate\\FAI-ISC Junior"]
    },
    {
        formation_type: "Formation (FS)",
        organization: "FAI-ISC Indoor",
        num_flyers: [4, 8],
        levels: ["USIS Open & Advanced\\FAI-ISC Open", "USIS Intermediate\\FAI-ISC Junior"]
    },
    {
        formation_type: "Formation (FS)",
        organization: "CISM",
        num_flyers: [4],
        levels: ["CISM"]
    },
    {
        formation_type: "Formation (FS)",
        organization: "NSL",
        num_flyers: [4],
        levels: ["NSL/ESL AAA", "NSL/ESL AA", "NSL/ESL A", "NSL/ESL Rookie"]
    },
    {
        formation_type: "Formation (FS)",
        organization: "SVNH Indoor",
        num_flyers: [4],
        levels: ["SVNH Open", "SVNH Advanced", "SVNH Intermediate", "SVNH Rookie"]
    },
    {
        formation_type: "Vertical Formation (VFS)",
        organization: "N/A",
        num_flyers: [2, 4],
        levels: ["Open", "Advanced", "Intermediate"]
    },
    {
        formation_type: "Mixed Formation (MFS)",
        organization: "N/A",
        num_flyers: [2],
        levels: ["Open", "Advanced", "Intermediate"],
    },
    {
        formation_type: "Horizontal Formation (HFS)",
        organization: "AXIS",
        num_flyers: [2, 4],
        levels: ["AXIS Open", "AXIS Advanced", "AXIS Intermediate"]
    },
    {
        formation_type: "Dynamic (DYN)",
        organization: "FAI-ISC Indoor",
        num_flyers: [2, 4],
        levels: ["FAI-ISC\\USIS"]
    },
    {
        formation_type: "Cross Formation (XF)",
        organization: "AXIS",
        num_flyers: [2],
        levels: ["AXIS Open", "AXIS Advanced", "AXIS Intermediate"]
    },
    {
        formation_type: "Canopy Formation (CF)",
        organization: "FAI-ISC",
        num_flyers: [2],
        levels: ["FAI-ISC\\USPA"]
    }
    ]




