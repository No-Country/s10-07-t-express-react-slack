interface WorkspaceUser {
    nameWorkSpace: string;
    _id: string;
    members: string[];
    profileImage: string;
}

interface ResponseWorkspaceUser {
    msg: string;
    workspaces: WorkspaceUser[]
}
