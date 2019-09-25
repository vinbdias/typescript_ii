export interface ResponseHandler {

    (res: Response): Response
}

export class ResponseHandler implements ResponseHandler {

    static isOk(res: Response) {

        if (res.ok)
            return res;
        else
            throw new Error(res.statusText);        
    }
}