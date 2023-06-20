import { DatabaseSourceManager } from './../domain/orm/database';
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { articleRoutes } from '../routes/article.route';
import { logger } from '../utils/logger';
import { categoryRoutes } from '../routes/category.route';


const boostraping = {
  init: (app: any, port: number = 3001) => {
    DatabaseSourceManager.getInstance();
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(cors());
    app.use(articleRoutes);
    app.use(categoryRoutes);
   /* app.use(authRoutes);
    app.use(roleRoutes);
    app.use(partnersRoute);
    app.use(assuranceRoutes);
    app.use(offerRoutes);
    fileUploader(app);
    swaggerDocs(app,port); */
    app.use(morgan("combined"));
    app.use((req: any, res: any, next: any) => {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept",
        'Access-Control-Allow-Origin: *',
        'Access-Control-Allow-Methods: GET, POST, DELETE, PUT',
        'Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Credentials: true'
      );
      next();
    });
    app.listen(port, () => logger.info(`listening on port ${port}`));
  },
};

export default boostraping;
// adding Helmet to enhance your Rest API's security