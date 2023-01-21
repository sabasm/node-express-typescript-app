import { Request, Response } from "express";

class Controller {
    get(req: Request, res: Response): void {
        console.log('put req params = ', req.params)
        console.log('get one req body = ', req.body)
        res.send("get route");
    }
    getOne(req: Request, res: Response): void {
        console.log('get one params = ', req.params)
        console.log('get one body = ', req.body)
        res.send("getOne route");
    }
    post(req: Request, res: Response): void {
        console.log('put req params = ', req.params)
        console.log('get one req body = ', req.body)
        res.send("post route");
    }
    put(req: Request, res: Response): void {
        console.log('put req params = ', req.params)
        console.log('get one req body = ', req.body)
        res.send('put params')
    }
    delete(req: Request, res: Response): void {
        console.log('put req params = ', req.params)
        console.log('get one req body = ', req.body)
        res.send('delete route')
    }
}

export default Controller;

const get = new Controller().get.bind(Controller)
get;
// controller.getOne({ params: { id: 1 } } as Request, { send: (data: any) => console.log(data) } as Response);