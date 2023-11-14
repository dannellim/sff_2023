export interface Event {
    id: number;
    entityId: number;
    speakerId: number;
    speakerIds: number[];
    name: string;
    summary: string;
    description: string;
    date: string;
    time: string;
}