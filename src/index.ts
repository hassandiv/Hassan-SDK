import { Base } from "./base";
import { Movie } from "./movie/index";
import { applyMixins } from "./utils";

class TheOneAPI extends Base {}
interface TheOneAPI extends Movie {}

applyMixins(TheOneAPI, [Movie]);

export default TheOneAPI;
