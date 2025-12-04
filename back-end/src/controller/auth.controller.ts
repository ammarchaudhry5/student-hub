// import { Request, Response } from "express";
// import { AuthService } from "../service/auth.service.ts";
//
// export class AuthController {
//   private authService = new AuthService();
//
//   async register(req: Request, res: Response) {
//     try {
//       const result = await this.authService.register(req.body);
//       console.log(`Result Register: ${result}`);
//       return res.status(200).json(result);
//     } catch (error: any) {
//       return res.status(400).json({ message: error.message });
//     }
//   }
//
//   async login(req: Request, res: Response) {
//     try {
//       const result = await this.authService.login(req.body);
//       console.log(`Result Login: ${result}`);
//       return res.status(200).json(result);
//     } catch (error: any) {
//       return res.status(400).json({ message: error.message });
//     }
//   }
//
//   async me(req: Request, res: Response) {
//     try {
//       const token = req.headers.authorization?.split(" ")[1];
//       const result = await this.authService.me(token);
//       console.log(`Result Register: ${result}`);
//       return res.json(result);
//     } catch (error: any) {
//       return res.status(401).json({ message: error.message });
//     }
//   }
// }
