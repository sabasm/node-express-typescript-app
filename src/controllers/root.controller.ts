class RootController {
    index(_req: any, res: any) {
        res.send("Hello World!");
    }
    two(_req: any, res: any) {
        res.send("two!");
    }
}

export default RootController;