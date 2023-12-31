import BaseRoutes from './BaseRoutes';
import UserController from '../controllers/UserController';

class UsersRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get("/", UserController.index)
        this.router.post("/", UserController.create)
        this.router.get("/:id", UserController.show)
        this.router.patch("/:id", UserController.update)
        this.router.delete("/:id", UserController.delete)
    }
}

export default new UsersRoutes().router
