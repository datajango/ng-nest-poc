import { Document } from 'mongoose';

export interface Course extends Document {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly length: string;
    readonly category: string;    
}