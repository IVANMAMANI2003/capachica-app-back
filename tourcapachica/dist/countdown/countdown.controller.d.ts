import { Response } from 'express';
import { CountdownService } from './countdown.service';
export declare class CountdownController {
    private readonly countdownService;
    constructor(countdownService: CountdownService);
    getGif(expires: string, res: Response): void;
}
