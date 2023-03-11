export interface Match {
    metadata: {
        dataVersion: string;
        matchId: string;
        participants: string[];
    }, 
    info: { // a lot of properties are in this here
        [key: string]: any; // Index signature to allow any properties
    };
}
