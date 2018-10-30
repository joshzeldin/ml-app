export class ToKdbMessage {
    subject: string;
    function: string;
    parameters: any[];
}

export class FromKdbMessage {
    success: boolean;
    subject: string;
    data: any;
}
