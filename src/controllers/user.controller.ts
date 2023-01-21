class UserController {
    index(_req: any, res: any) {
        res.send("Hello user");
    }
    two(_req: any, res: any) {
        res.send("user two!");
    }
    three(_req: any, res: any) {
        res.send("user three!");
    }
}

export default UserController;